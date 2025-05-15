
'use client';

import { useState, useEffect, useRef } from 'react';
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
  FormMessage,
} from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { chatWithCharacter, type ChatWithCharacterInput } from '@/ai/flows/chat-with-character-flow';
import { CharacterEnumSchema, type CharacterEnum, type ChatMessage } from '@/ai/types/chat-types';
import { Loader2, Send, User, Bot, MessageSquare } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const formSchema = z.object({
  character: CharacterEnumSchema,
  message: z.string().min(1, {
    message: 'Il messaggio non può essere vuoto.',
  }).max(500, { message: 'Il messaggio non può superare i 500 caratteri.'}),
});

type FormValues = z.infer<typeof formSchema>;

const characterImageMap: Record<CharacterEnum, string> = {
  'Il Sognatore': 'https://videos.openai.com/vg-assets/assets%2Ftask_01jttsefr1fzfv9ejtz2jnpm2a%2F1746803393_img_0.webp?st=2025-05-09T14%3A56%3A28Z&se=2025-05-15T15%3A56%3A28Z&sks=b&skt=2025-05-09T14%3A56%3A28Z&ske=2025-05-15T15%3A56%3A28Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=Lg5y3YWY1n%2FnNjog1%2F3BHOGeNg9CmKb3SwURmgrNjeE%3D&az=oaivgprodscus',
  'Nastenka': 'https://videos.openai.com/vg-assets/assets%2Ftask_01jttsjf6qe8xs7s39yqmbkzdd%2F1746803518_img_1.webp?st=2025-05-09T14%3A58%3A43Z&se=2025-05-15T15%3A58%3A43Z&sks=b&skt=2025-05-09T14%3A58%3A43Z&ske=2025-05-15T15%3A58%3A43Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=iI5xLoagtivxf9%2FhkCDLBYOAb8N5qS6nvMTLO0JukKY%3D&az=oaivgprodscus',
};

const characterImageHintMap: Record<CharacterEnum, string> = {
    'Il Sognatore': 'dreamy saint petersburg night canal',
    'Nastenka': 'young woman thoughtful pensive',
};


export default function ChatPage() {
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedCharacter, setSelectedCharacter] = useState<CharacterEnum | null>(null);
  
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null); // Ref for auto-scrolling

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      character: undefined, 
      message: '',
    },
  });

  useEffect(() => {
    // Auto-scroll to the latest message
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [chatHistory]);


  const handleCharacterChange = (value: string) => {
    const character = value as CharacterEnum;
    setSelectedCharacter(character);
    form.setValue('character', character);
    setChatHistory([]); 
    setError(null);
    // Focus textarea when character is selected and form is ready
    setTimeout(() => {
        if (textareaRef.current) {
            textareaRef.current.focus();
        }
    }, 50);
  };

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    if (!selectedCharacter) {
        setError("Seleziona un personaggio per iniziare la chat.");
        return;
    }
    
    const userMessage: ChatMessage = { role: 'user', content: data.message };
    setChatHistory(prev => [...prev, userMessage]);
    form.resetField('message'); 

    setIsLoading(true);
    setError(null);

    try {
      const input: ChatWithCharacterInput = {
        character: selectedCharacter,
        message: data.message,
        history: chatHistory.slice(-10), 
      };
      const result = await chatWithCharacter(input);
      const modelMessage: ChatMessage = { role: 'model', content: result.reply };
      setChatHistory(prev => [...prev, modelMessage]);
    } catch (err) {
      console.error('Errore durante la chat con il personaggio:', err);
      const errorMessage = err instanceof Error ? err.message : 'Si è verificato un errore imprevisto. Riprova.';
      setError(errorMessage);
      const modelErrorMessage: ChatMessage = { role: 'model', content: `Mi dispiace, c'è stato un errore: ${errorMessage}` };
      setChatHistory(prev => [...prev, modelErrorMessage]);

    } finally {
      setIsLoading(false);
      setTimeout(() => {
        if (textareaRef.current) {
            textareaRef.current.focus();
        }
      }, 50); 
    }
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 flex flex-col h-[calc(100vh-4rem)]">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-playfair-display font-bold mb-2">
          Chatta con i Personaggi
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Interagisci con Il Sognatore o Nastenka. Fai loro domande sui loro pensieri, sentimenti o esperienze.
        </p>
      </div>

      <Card className="shadow-lg flex-grow flex flex-col overflow-hidden">
        <CardHeader>
          <CardTitle className="font-cormorant-garamond text-2xl">Seleziona un Personaggio</CardTitle>
          <Form {...form}> {/* Form provider should wrap the FormField */}
            <FormField
              control={form.control}
              name="character"
              render={({ field }) => (
                <FormItem>
                  <Select onValueChange={handleCharacterChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger disabled={isLoading}>
                        <SelectValue placeholder="Scegli un personaggio..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Il Sognatore">Il Sognatore</SelectItem>
                      <SelectItem value="Nastenka">Nasten'ka</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </Form>
        </CardHeader>

        <ScrollArea className="flex-grow p-4 bg-secondary/20">
          <CardContent className="space-y-4">
            {chatHistory.length === 0 && selectedCharacter && (
              <div className="text-center text-muted-foreground py-8">
                <Bot className="mx-auto h-12 w-12 mb-2" />
                Inizia a chattare con {selectedCharacter}!
              </div>
            )}
             {chatHistory.length === 0 && !selectedCharacter && (
              <div className="text-center text-muted-foreground py-8">
                <MessageSquare className="mx-auto h-12 w-12 mb-2" />
                Seleziona un personaggio per iniziare la chat.
              </div>
            )}
            {chatHistory.map((chat, index) => (
              <div
                key={index}
                className={`flex items-end gap-2 ${chat.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {chat.role === 'model' && selectedCharacter && (
                   <Avatar className="h-8 w-8">
                    <AvatarImage src={characterImageMap[selectedCharacter]} alt={selectedCharacter} data-ai-hint={characterImageHintMap[selectedCharacter]} />
                    <AvatarFallback>{selectedCharacter.substring(0,1)}</AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={`max-w-[70%] p-3 rounded-lg shadow ${
                    chat.role === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-card text-card-foreground border'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{chat.content}</p>
                </div>
                 {chat.role === 'user' && (
                   <Avatar className="h-8 w-8">
                     <AvatarFallback><User size={18}/></AvatarFallback>
                   </Avatar>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} /> {/* Element to scroll to */}
          </CardContent>
        </ScrollArea>

        {selectedCharacter && (
          <div className="p-4 border-t">
            <Form {...form}> {/* Form provider should wrap the FormField and submit button */}
              <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-start gap-2">
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="flex-grow">
                      <FormControl>
                        <Textarea
                          ref={textareaRef} // Assign ref to Textarea
                          placeholder={`Scrivi un messaggio a ${selectedCharacter}...`}
                          className="min-h-[40px] resize-none text-sm"
                          {...field}
                          disabled={isLoading} // Simplified disabled logic
                          rows={1}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                              e.preventDefault();
                              if (!isLoading && form.formState.isValid) {
                                form.handleSubmit(onSubmit)();
                              }
                            }
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading || !form.formState.isValid} size="icon" className="h-10 w-10 flex-shrink-0">
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" /> 
                  ) : (
                     <Send className="h-5 w-5" />
                  )}
                  <span className="sr-only">Invia</span>
                </Button>
              </form>
            </Form>
          </div>
        )}
      </Card>

      {error && !isLoading && ( 
         <Alert variant="destructive" className="mt-4">
           <AlertTitle>Errore</AlertTitle>
           <AlertDescription>{error}</AlertDescription>
         </Alert>
      )}
    </div>
  );
}
    
