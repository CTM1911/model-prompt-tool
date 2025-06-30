'use client'
import { useState } from "react";

const defaultModel = {
  model_name: "Emma",
  age: 19,
  gender: "female",
  persona: "Confident Girl Next Door",
  body_type: "slim, athletic",
  face: {
    skin_tone: "light tan",
    eye_color: "blue",
    hair_color: "platinum blonde",
    hair_style: "long, straight",
    expression: "soft smile"
  },
  style: {
    aesthetic: "girl next door, flirty cute",
    common_outfits: [
      "pink crop top with long sleeves",
      "grey cotton shorts",
      "black strapless dress with pink trim"
    ]
  },
  prompt_settings: {
    camera: "85mm lens, shallow depth of field",
    lighting: "natural soft light",
    quality: "ultra realistic, high detail",
    negative_prompt: "blurry, deformed, bad eyes, lowres"
  }
};

export default function Page() {
  const [outfitIndex, setOutfitIndex] = useState(0);
  const [prompt, setPrompt] = useState("");

  const generatePrompt = () => {
    const m = defaultModel;
    const outfit = m.style.common_outfits[outfitIndex] || m.style.common_outfits[0];

    const result = `portrait of a ${m.age}-year-old ${m.gender} with ${m.face.hair_color} ${m.face.hair_style}, ${m.face.eye_color} eyes, ${m.face.skin_tone} skin, ${m.face.expression}, wearing a ${outfit}, ${m.style.aesthetic} aesthetic, shot with ${m.prompt_settings.camera}, ${m.prompt_settings.lighting}, ${m.prompt_settings.quality}`;

    setPrompt(result);
  };

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', padding: '1rem', fontFamily: 'Arial' }}>
      <h1>Prompt Generator</h1>
      <label>
        Select Outfit:
        <select value={outfitIndex} onChange={(e) => setOutfitIndex(parseInt(e.target.value))}>
          {defaultModel.style.common_outfits.map((outfit, index) => (
            <option key={index} value={index}>{outfit}</option>
          ))}
        </select>
      </label>
      <button onClick={generatePrompt} style={{ display: 'block', margin: '1rem 0' }}>
        Generate Prompt
      </button>
      <textarea rows={6} value={prompt} readOnly style={{ width: '100%' }} />
    </div>
  );
}