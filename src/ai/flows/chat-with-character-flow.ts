'use server';
/**
 * @fileOverview A Genkit flow for chatting with characters from "Le Notti Bianche".
 *
 * - chatWithCharacter - A function that handles the chat interaction.
 * - ChatWithCharacterInput - The input type for the chatWithCharacter function.
 * - ChatWithCharacterOutput - The return type for the chatWithCharacter function.
 */

import {ai} from '@/ai/ai-instance';
import { z as z_ } from 'genkit'; // Alias z come z_ per evitare eventuali conflitti.
import { CharacterEnumSchema, ChatMessageSchema, type CharacterEnum, type ChatMessage } from '@/ai/types/chat-types'; // Import from new types file

// Original input schema for the flow
const ChatWithCharacterInputSchema = z_.object({
  character: CharacterEnumSchema.describe('Il personaggio con cui chattare.'),
  message: z_.string().describe('Il messaggio dell\'utente al personaggio.'),
  history: z_.array(ChatMessageSchema).optional().describe('La cronologia della chat precedente.'),
});
export type ChatWithCharacterInput = z_.infer<typeof ChatWithCharacterInputSchema>;

const ChatWithCharacterOutputSchema = z_.object({
  reply: z_.string().describe('La risposta del personaggio.'),
});
export type ChatWithCharacterOutput = z_.infer<typeof ChatWithCharacterOutputSchema>;

// Schema for messages within the prompt's internal history (with boolean flags)
const PromptInternalHistoryMessageSchema = ChatMessageSchema.extend({
  isUser: z_.boolean(),
  isModel: z_.boolean(),
});

// Personalities object (used as a constant)
const characterPersonalities = {
  'Il Sognatore': `Sei il Sognatore de "Le Notti Bianche" di Fëdor Dostoevskij. Sei un uomo solitario, introspettivo e romantico che vive a San Pietroburgo. Spesso ti perdi nei tuoi pensieri e nelle tue fantasie. Sei gentile, un po' malinconico e desideri profondamente una connessione umana. Parli in modo poetico e riflessivo. Ricorda gli eventi principali della storia: l'incontro con Nastenka, le vostre conversazioni notturne, la sua storia sull'inquilino, la tua dichiarazione d'amore e la sua partenza finale con l'inquilino. Il tuo cuore è ancora toccato da quel "momento di beatitudine". Rispondi come se fossi lui, mantenendo il suo tono e la sua personalità.`,
  'Nastenka': `Sei Nastenka de "Le Notti Bianche" di Fëdor Dostoevskij. Sei una giovane donna che vive a San Pietroburgo con la nonna cieca. Sei vivace, emotiva e un po' ingenua, ma anche pragmatica. Stavi aspettando con ansia il ritorno del tuo amore, un inquilino. Hai incontrato il Sognatore e gli hai raccontato la tua storia. Per un momento, hai pensato di poter avere un futuro con lui, ma poi il tuo inquilino è tornato e sei andata con lui. Provi gratitudine per il Sognatore. Rispondi come se fossi lei, mantenendo il suo tono e la sua personalità. Ricorda gli eventi principali: l'attesa dell'inquilino, l'incontro con il Sognatore, le vostre conversazioni e la tua scelta finale.`
};
const CharacterPersonalitiesSchema = z_.object({
  'Il Sognatore': z_.string(),
  'Nastenka': z_.string(),
});


// Schema for the prompt's internal input data structure
const PromptInternalInputSchema = ChatWithCharacterInputSchema
  .omit({ history: true }) // Omit original history schema field
  .extend({
    history: z_.array(PromptInternalHistoryMessageSchema).optional(), // Use new history message schema
    characterPersonalities: CharacterPersonalitiesSchema, // Add schema for personalities
  });
export type PromptInternalInput = z_.infer<typeof PromptInternalInputSchema>;


export async function chatWithCharacter(input: ChatWithCharacterInput): Promise<ChatWithCharacterOutput> {
  return chatWithCharacterFlow(input);
}

const prompt = ai.definePrompt({
  name: 'chatWithCharacterPrompt',
  input: { schema: PromptInternalInputSchema }, // Use the new internal schema for the prompt
  output: { schema: ChatWithCharacterOutputSchema },
  prompt: `{{#if history}}
Storico della conversazione:
{{#each history}}
{{#if isUser}}Utente: {{content}}{{/if}}
{{#if isModel}}Personaggio: {{content}}{{/if}}
{{/each}}

{{/if}}
Assumi il ruolo di {{character}}.
{{{lookup characterPersonalities character}}}

L'utente dice: {{{message}}}

Rispondi come {{character}} in italiano, in modo conciso e fedele al personaggio, basandoti sulla sua personalità, sulle sue esperienze nella storia e sul contesto della conversazione attuale. Non rompere il personaggio. Non fare riferimento al fatto che sei un'AI.`,
});

const chatWithCharacterFlow = ai.defineFlow(
  {
    name: 'chatWithCharacterFlow',
    inputSchema: ChatWithCharacterInputSchema, // Flow still takes the original input schema
    outputSchema: ChatWithCharacterOutputSchema,
  },
  async (input: ChatWithCharacterInput) => {
    // Process history to add isUser and isModel flags
    const processedHistory = input.history?.map(message => ({
      ...message,
      isUser: message.role === 'user',
      isModel: message.role === 'model',
    }));

    // Construct the input object conforming to PromptInternalInputSchema
    const promptInputPayload: PromptInternalInput = {
      character: input.character,
      message: input.message,
      history: processedHistory,
      characterPersonalities, // Pass the globally defined personalities
    };

    const result = await prompt(promptInputPayload);
    return result.output!;
  }
);
