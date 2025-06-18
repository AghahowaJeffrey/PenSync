// src/components/molecules/ColorInputPanel.tsx
import React, { useState } from "react";

interface Props {
  onApply: (color: string) => void;
}

const ColorInputPanel: React.FC<Props> = ({ onApply }) => {
  const [customColor, setCustomColor] = useState("#000000");

  return (
    <div>
      <p className="mb-1 text-xs text-gray-500">Custom Color</p>
      <div className="flex items-center gap-2">
        <input
          type="color"
          value={customColor}
          onChange={(e) => setCustomColor(e.target.value)}
          className="w-8 h-8 p-0 border-none bg-transparent"
        />
        <input
          type="text"
          value={customColor}
          onChange={(e) => setCustomColor(e.target.value)}
          className="border px-2 py-1 text-xs rounded w-full"
        />
        <button
          onClick={() => onApply(customColor)}
          className="bg-gray-800 text-white text-xs px-3 py-1 rounded"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default ColorInputPanel;
