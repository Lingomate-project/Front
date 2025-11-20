import { google } from "@ai-sdk/google"
import { streamText } from "ai"

export const runtime = "nodejs"

export async function POST(req: Request) {
  const { messages, mode } = await req.json()

  const systemPrompt =
    mode === "casual"
      ? `You are a friendly, casual English conversation partner helping Korean speakers learn English. 
Use everyday language, contractions, and informal expressions. 
Keep responses conversational and natural. 
Always respond in English only.
After each response, provide the Korean translation in parentheses.`
      : `You are a formal English conversation instructor for Korean speakers.
Use proper grammar, complete sentences, and professional language.
Maintain a polite and educational tone.
Always respond in English only.
After each response, provide the Korean translation in parentheses.`

  const result = streamText({
    model: google("gemini-2.0-flash-exp"),
    system: systemPrompt,
    messages,
  })

  return result.toUIMessageStreamResponse()
}
