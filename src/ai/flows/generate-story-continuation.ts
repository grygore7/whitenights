 'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating alternative scenarios or continuations of the "Le Notti Bianche" story.
 *
 * It includes:
 * - `generateStoryContinuation`: The main function to generate story continuations.
 * - `GenerateStoryContinuationInput`: The input type for the function.
 * - `GenerateStoryContinuationOutput`: The output type for the function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const GenerateStoryContinuationInputSchema = z.object({
  originalStorySegment: z
    .string()
    .describe('Il segmento originale della storia da cui continuare.'),
  userPrompt: z
    .string()
    .describe(
      'Un prompt dell\'utente che specifica come la storia dovrebbe continuare o essere modificata.'
    ),
});
export type GenerateStoryContinuationInput = z.infer<
  typeof GenerateStoryContinuationInputSchema
>;

const GenerateStoryContinuationOutputSchema = z.object({
  continuedStory: z
    .string()
    .describe('La continuazione generata della storia.'),
});
export type GenerateStoryContinuationOutput = z.infer<
  typeof GenerateStoryContinuationOutputSchema
>;

export async function generateStoryContinuation(
  input: GenerateStoryContinuationInput
): Promise<GenerateStoryContinuationOutput> {
  return generateStoryContinuationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateStoryContinuationPrompt',
  input: {
    schema: z.object({
      originalStorySegment: z
        .string()
        .describe('Il segmento originale della storia da cui continuare.'),
      userPrompt: z
        .string()
        .describe(
          'Un prompt dell\'utente che specifica come la storia dovrebbe continuare o essere modificata.'
        ),
    }),
  },
  output: {
    schema: z.object({
      continuedStory: z
        .string()
        .describe('La continuazione generata della storia.'),
    }),
  },
  prompt: `Sei uno scrittore creativo specializzato nello stile di Fëdor Dostoevskij. Continua il seguente segmento della storia, "Le Notti Bianche", basandoti sul prompt dell'utente.

Segmento Originale della Storia: {{{originalStorySegment}}}

Prompt dell'Utente: {{{userPrompt}}}

Continuazione:`,
});

const generateStoryContinuationFlow = ai.defineFlow<
  typeof GenerateStoryContinuationInputSchema,
  typeof GenerateStoryContinuationOutputSchema
>({
  name: 'generateStoryContinuationFlow',
  inputSchema: GenerateStoryContinuationInputSchema,
  outputSchema: GenerateStoryContinuationOutputSchema,
},
async input => {
  const {output} = await prompt(input);
  return output!;
}
);
