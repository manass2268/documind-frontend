// functions/index.js
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Apni API key ko Firebase Environment variables me set karna hoga
// Command: firebase functions:secrets:set GEMINI_API_KEY
const apiKey = process.env.GEMINI_API_KEY || "YOUR_FALLBACK_API_KEY"; // Hackathon ke liye fallback use kar sakte hain

exports.generateAIResponse = onCall({ cors: true }, async (request) => {
  // 1. Security Check: Only logged-in users can call this API
  if (!request.auth) {
    throw new HttpsError(
      "unauthenticated",
      "User must be logged in to use DocuMind AI.",
    );
  }

  const { prompt, history } = request.data;

  try {
    const genAI = new GoogleGenerativeAI(apiKey);

    // Core Vision: Setup system instructions for the "AI Teacher" persona
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction:
        "You are DocuMind, an expert AI Teacher. Explain concepts step-by-step, use simple language, and provide examples. Format with clear bullet points.",
    });

    // Format history for Gemini
    const formattedHistory = (history || []).map((msg) => ({
      role: msg.role === "ai" ? "model" : "user",
      parts: [{ text: msg.content }],
    }));

    const chat = model.startChat({ history: formattedHistory });
    const result = await chat.sendMessage(prompt);

    return { text: result.response.text() };
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new HttpsError(
      "internal",
      "DocuMind encountered an error processing your document.",
    );
  }
});
