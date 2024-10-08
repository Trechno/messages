import { openai } from '@ai-sdk/openai';
import { streamText, convertToCoreMessages } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
try {
      const { messages } = await req.json();
    
      const result = await streamText({
        model: openai('gpt-4'),
        messages: convertToCoreMessages(messages),
      });
    
      return result.toDataStreamResponse();
} catch (error) {
    if (error instanceof openai) {
        
    } else {
        console.error("An unexpected error occurred", error)
        throw error
    }
}
}