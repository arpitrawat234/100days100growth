import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Google Gemini API
const ai = new GoogleGenerativeAI("AIzaSyDF3KAQn3gSShNo-TJp47BTw4hELH-tA64");

export async function analyzeAura(auraText) {
  try {
    const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
      Analyze the following aura description and return a JSON object with:
      - "line": The original input string
      - "positives": An array of positive aspects (keywords, colors, etc.)
      - "negatives": An array of negative aspects
      - "rating": A number between 1-10 reflecting positivity

      Respond with **only valid JSON format**, without extra text.
      
      Input: "${auraText}"
    `;

    const response = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
    });

    const result = await response.response;
    const responseText = await result.text();

    // 🔹 Log full API response for debugging
    console.log("🔹 Full API Response:", result);
    console.log("🔹 Raw AI Response (text):", responseText);

    // Attempt to extract JSON
    const jsonMatch = responseText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      console.error("❌ AI Response does not contain valid JSON:", responseText);
      throw new Error("Invalid JSON structure received");
    }

    const parsedData = JSON.parse(jsonMatch[0]);

    // 🔹 Log parsed JSON data
    console.log("✅ Parsed AI JSON Data:", parsedData);

    return parsedData;
  } catch (error) {
    console.error("❌ Error analyzing aura:", error);
    return { error: "Failed to analyze aura. Please try again!" };
  }
}
