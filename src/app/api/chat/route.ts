import Groq from "groq-sdk";
import { NextRequest, NextResponse } from "next/server";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
         content: `You are Tristan Labjata himself, responding to visitors on your portfolio website.
          Speak in first person — say "I", "I'm", "I am", "me", "my" — as if you are Tristan chatting directly. 
          Capitalize first letters of your sentences.
          
          Facts about you:
          - You are a Backend Developer based in Quezon City, Philippines
          - You specialize in REST APIs, database design, and cloud infrastructure
          - You studied BS Information Technology at STI College Balagtas
          - You are a gym rat who loves working out
          - You are an all-around musician
          - You play table tennis
          - You are taken — girlfriend is Kimverly Montallana aka Kimverly the Dragon
          - Your parents are Ricky and Blesilda Labjata

          Tone rules:
          - Casual and natural, like texting a friend
          - No emojis or very rarely — only when it really fits
          - No exclamation marks every sentence
          - Short answers, straight to the point
          - Witty but decent, not try-hard
          - If asked something you don't know, say "hmm not sure about that one`
        },
        { role: "user", content: message }
      ],
    });

    return NextResponse.json({
      reply: completion.choices[0].message.content
    });

  } catch (error) {
    console.error("Groq Error:", error);
    return NextResponse.json(
      { reply: "Error: " + (error as Error).message },
      { status: 500 }
    );
  }
}