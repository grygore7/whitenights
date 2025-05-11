'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { generateStoryContinuation, type GenerateStoryContinuationInput } from '@/ai/flows/generate-story-continuation';
import { Loader2, Wand2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";


const formSchema = z.object({
  originalStorySegment: z.string().min(50, {
    message: 'Fornisci un segmento di almeno 50 caratteri.',
  }).max(2000, { message: 'Il segmento non può superare i 2000 caratteri.'}),
  userPrompt: z.string().min(10, {
    message: 'Il tuo prompt deve contenere almeno 10 caratteri.',
  }).max(500, { message: 'Il prompt non può superare i 500 caratteri.'}),
});

type FormValues = z.infer<typeof formSchema>;

export default function ExplorePage() {
  const [generatedContinuation, setGeneratedContinuation] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      originalStorySegment: '',
      userPrompt: '',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setError(null);
    setGeneratedContinuation(null);

    try {
      const result = await generateStoryContinuation(data);
      setGeneratedContinuation(result.continuedStory);
    } catch (err) {
      console.error('Errore nella generazione della continuazione della storia:', err);
      setError(err instanceof Error ? err.message : 'Si è verificato un errore imprevisto. Riprova.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
      <h1 className="text-4xl md:text-5xl font-playfair-display font-bold mb-4 text-center">
        Reimmagina la Narrazione
      </h1>
      <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
        E se la storia prendesse una piega diversa? Usa la potenza dell'IA per esplorare scenari alternativi e continuazioni basate su segmenti de "Le Notti Bianche".
      </p>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-cormorant-garamond text-2xl">Genera un Nuovo Percorso</CardTitle>
          <CardDescription>
            Incolla un segmento della storia e fornisci un prompt su come vorresti che continuasse.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="originalStorySegment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-lato">Segmento Originale della Storia</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Incolla qui un segmento da 'Le Notti Bianche' (es. il momento prima che appaia l'inquilino)..."
                        className="min-h-[150px] text-base"
                        {...field}
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="userPrompt"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-lato">Il Tuo Prompt</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Come dovrebbe continuare la storia? (es. 'E se l'inquilino non fosse mai tornato?', 'Descrivi il Sognatore che trova la felicità altrove.', 'Nastenka sceglie il Sognatore.')"
                        className="min-h-[100px] text-base"
                        {...field}
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full md:w-auto bg-accent text-accent-foreground hover:bg-accent/90">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generazione...
                  </>
                ) : (
                   <>
                     <Wand2 className="mr-2 h-4 w-4" />
                     Genera Continuazione
                   </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {error && (
         <Alert variant="destructive" className="mt-8">
           <AlertTitle>Generazione Fallita</AlertTitle>
           <AlertDescription>{error}</AlertDescription>
         </Alert>
      )}

      {generatedContinuation && (
        <Card className="mt-12 shadow-lg bg-secondary/30">
          <CardHeader>
            <CardTitle className="font-cormorant-garamond text-2xl">Continuazione Generata</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-lg max-w-none text-foreground leading-relaxed whitespace-pre-wrap font-lato">
              {generatedContinuation}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
