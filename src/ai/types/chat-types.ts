import { z } from 'zod';

export const CharacterEnumSchema = z.enum(['Il Sognatore', 'Nastenka']);
export type CharacterEnum = z.infer<typeof CharacterEnumSchema>;

export const ChatMessageSchema = z.object({
  role: z.enum(['user', 'model']),
  content: z.string(),
});
export type ChatMessage = z.infer<typeof ChatMessageSchema>;
