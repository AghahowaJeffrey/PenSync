// src/components/molecules/FontSizeController.tsx
import React, { useState } from "react";
import { Editor } from "@tiptap/react";
import { ChevronDown, Plus, Minus } from "lucide-react";

const presetSizes = [
  "10px",
  "12px",
  "14px",
  "16px",
  "18px",
  "20px",
  "24px",
  "28px",
  "32px"
];

interface Props {
  editor: Editor;
}

const FontSize: React.FC<Props> = ({ editor }) => {
  const currentFontSize = editor.getAttributes("fontSize")?.fontSize || "16px";
  const [fontSize, setFontSize] = useState(currentFontSize);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const updateFontSize = (value: string) => {
    setFontSize(value);
    editor.commands.setFontSize(value);
  };

  const handleIncrease = () => {
    const size = parseInt(fontSize.replace("px", ""));
    updateFontSize(`${size + 1}px`);
  };

  const handleDecrease = () => {
    const size = parseInt(fontSize.replace("px", ""));
    if (size > 1) updateFontSize(`${size - 1}px`);
  };

  const handleManualInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFontSize(value);
  };

  const handleBlur = () => {
    if (/^\d+$/.test(fontSize)) {
      updateFontSize(`${fontSize}px`);
    } else if (/^\d+px$/.test(fontSize)) {
      updateFontSize(fontSize);
    } else {
      setFontSize(currentFontSize); // Reset if invalid
    }
  };

  return (
    <div className="flex items-center space-x-2 relative">
      <button
        className="p-1 border rounded hover:bg-gray-100"
        onClick={handleDecrease}
        title="Decrease font size"
      >
        <Minus size={14} />
      </button>

      <input
        value={fontSize}
        onChange={handleManualInput}
        onBlur={handleBlur}
        className="w-14 text-sm border rounded px-1 py-0.5 text-center"
        title="Font size"
      />

      <button
        className="p-1 border rounded hover:bg-gray-100"
        onClick={handleIncrease}
        title="Increase font size"
      >
        <Plus size={14} />
      </button>

      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="p-1 border rounded hover:bg-gray-100"
        title="Preset font sizes"
      >
        <ChevronDown size={14} />
      </button>

      {dropdownOpen && (
        <div className="absolute top-full mt-1 w-24 bg-white border rounded shadow z-10">
          {presetSizes.map((size) => (
            <div
              key={size}
              className="px-2 py-1 hover:bg-gray-100 cursor-pointer text-sm"
              onClick={() => {
                updateFontSize(size);
                setDropdownOpen(false);
              }}
            >
              {size}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FontSize;
