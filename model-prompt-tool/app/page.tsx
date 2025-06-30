'use client'
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

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

export default function PromptGenerator() {
  const [outfitIndex, setOutfitIndex] = useState(0);
  const [prompt, setPrompt] = useState("");

  const generatePrompt = () => {
    const m = defaultModel;
    const outfit = m.style.common_outfits[outfitIndex] || m.style.common_outfits[0];

    const result = `portrait of a ${m.age}-year-old ${m.gender} with ${m.face.hair_color} ${m.face.hair_style}, ${m.face.eye_color} eyes, ${m.face.skin_tone} skin, ${m.face.expression}, wearing a ${outfit}, ${m.style.aesthetic} aesthetic, shot with ${m.prompt_settings.camera}, ${m.prompt_settings.lighting}, ${m.prompt_settings.quality}`;

    setPrompt(result);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto space-y-4">
      <Card>
        <CardContent className="space-y-4 p-4">
          <Label htmlFor="outfit">Select Outfit</Label>
          <select
            id="outfit"
            className="w-full border rounded p-2"
            value={outfitIndex}
            onChange={(e) => setOutfitIndex(parseInt(e.target.value))}
          >
            {defaultModel.style.common_outfits.map((outfit, index) => (
              <option key={index} value={index}>{outfit}</option>
            ))}
          </select>

          <Button onClick={generatePrompt}>Generate Prompt</Button>

          <Label>Resulting Prompt</Label>
          <Textarea rows={6} value={prompt} readOnly />
        </CardContent>
      </Card>
    </div>
  );
}