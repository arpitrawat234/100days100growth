import { useState } from "react";
import { motion } from "framer-motion";
import { analyzeAura } from "./geminiapi"; // Import API function
import "./index.css"; // Ensure Tailwind is applied

// GIFs for different aura levels
const auraGifs = {
  positive: "/chouno-hina-hina-chouno.gif", // 🌟 Replace with actual Positive GIF
  neutral: "/confused-anime-girl-blinking-anime.gif",   // ⚖️ Replace with actual Neutral GIF
  negative: "/angry-mad.gif"  // ❌ Replace with actual Negative GIF
};

export default function App() {
  const [auraText, setAuraText] = useState("");
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAnalyze = async () => {
    setLoading(true);
    setError("");
    try {
      const result = await analyzeAura(auraText);
      console.log("🔍 API Response:", result);
      setAnalysis(result);
    } catch (err) {
      setError("Failed to analyze aura.");
      console.error("❌ Error:", err);
    }
    setLoading(false);
  };

  // Determine which GIF to show based on rating
  const getAuraGif = () => {
    if (!analysis) return "/tea-the-khajiit-cute.gif"; // Default GIF before analysis
    if (analysis.rating >= 7) return auraGifs.positive;
    if (analysis.rating >= 4) return auraGifs.neutral;
    return auraGifs.negative;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-b from-indigo-900 to-black text-white">
      {/* Aura GIF that updates based on analysis */}
      <motion.img
        src={getAuraGif()} 
        alt="Aura Visualization"
        className="w-64 h-64 rounded-full shadow-2xl border-4 border-indigo-500"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      <h1 className="text-3xl font-bold tracking-widest text-indigo-300">Aura Calculator</h1>

      <textarea
        value={auraText}
        onChange={(e) => setAuraText(e.target.value)}
        placeholder="Write something..."
        className="w-80 p-3 border rounded-lg shadow-md focus:ring-2 focus:ring-indigo-500 focus:outline-none resize-none h-24 
        bg-black text-white border-indigo-500 placeholder-neon"
      />

      <button 
        onClick={handleAnalyze} 
        className="px-4 py-2 mt-2 text-lg font-semibold text-white bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300"
      >
        {loading ? "Analyzing..." : "Analyze Aura"}
      </button>

      {error && <p className="mt-4 text-red-400">{error}</p>}

      {analysis && (
        <motion.div 
          className="w-80 p-4 mt-4 text-center bg-white text-black rounded-lg shadow-xl border border-indigo-500"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-lg font-semibold">Analysis</h2>
          <p className="text-md text-gray-700">"{analysis.line}"</p>

          <div className="mt-3 p-2 bg-green-100 border-l-4 border-green-500 text-green-800 rounded">
            <strong>Positives:</strong> {analysis.positives.length > 0 ? analysis.positives.join(", ") : "None"}
          </div>

          <div className="mt-2 p-2 bg-red-100 border-l-4 border-red-500 text-red-800 rounded">
            <strong>Negatives:</strong> {analysis.negatives.length > 0 ? analysis.negatives.join(", ") : "None"}
          </div>

          <div className="mt-2 p-2 bg-blue-100 border-l-4 border-blue-500 text-blue-800 rounded">
            <strong>Rating:</strong> {analysis.rating}/10
          </div>
        </motion.div>
      )}
    </div>
  );
}

