import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

if (!process.env.GOOGLE_GENAI_API_KEY) {
  const errorMessage = 
    'GOOGLE_GENAI_API_KEY is not defined in the environment variables. ' +
    'This is required for the Genkit Google AI plugin to function. ' +
    'Please ensure the API key is set in your hosting environment.';
  console.error(`ERROR: ${errorMessage}`);
  // In a server environment, you might want to throw an error to prevent startup
  // if the application heavily relies on Genkit from the start.
  // For Next.js, this error during module load might not stop the server immediately
  // but will cause failures when Genkit flows are invoked.
  // throw new Error(errorMessage); 
  // Decided against throwing here to allow the app to potentially start and show other pages,
  // but the console error should be prominent in logs.
  // Flows using googleAI will fail later if the key is indeed missing.
}

export const ai = genkit({
  promptDir: './prompts',
  plugins: [
    googleAI({
      apiKey: process.env.GOOGLE_GENAI_API_KEY,
    }),
  ],
  model: 'googleai/gemini-2.0-flash',
});
