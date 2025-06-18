// src/components/organisms/HighlightPickerPopover.tsx
import React, { useState } from "react";
import { Editor } from "@tiptap/react";
import IconButton from "../atoms/IconButton";
import ColorSwatchGrid from "../molecules/ColorSwatchGrid";
import ColorInputPanel from "../molecules/ColorInputPanel";
import { X, Pipette, Highlighter } from "lucide-react";

const solidColors = [
  "#000000",
  "#4B5563",
  "#9CA3AF",
  "#D1D5DB",
  "#F3F4F6",
  "#FFFFFF",
  "#FF0000",
  "#FFA500",
  "#FFFF00",
  "#008000",
  "#00FFFF",
  "#0000FF",
  "#4B0082",
  "#EE82EE",
  "#800000",
  "#808000",
  "#008080",
  "#800080"
];

interface Props {
  editor: Editor;
}

const HighlightPickerPopover: React.FC<Props> = ({ editor }) => {
  const [open, setOpen] = useState(false);
  const [activeColor, setActiveColor] = useState("#000000");

  const handleColorSelect = (color: string) => {
    editor.chain().focus().toggleHighlight({ color }).run();
    setActiveColor(color);
    setOpen(false);
  };

  const handleEyeDropper = async () => {
    try {
      if ("EyeDropper" in window) {
        const eyeDropper = new (window as any).EyeDropper();
        const result = await eyeDropper.open();
        const pickedColor = result.sRGBHex;
        setActiveColor(pickedColor);
        editor.chain().focus().toggleHighlight({ color: pickedColor }).run();
        setOpen(false);
      } else {
        alert("EyeDropper API not supported in this browser.");
      }
    } catch (error) {
      console.error("EyeDropper failed:", error);
    }
  };

  return (
    <div className="relative">
      <div className="flex flex-col justify-center items-center">
        <IconButton
          onClick={() => setOpen(!open)}
          icon={<Highlighter size={15} strokeWidth={3} />}
          label="Highlight"
          active={editor.isActive("highlight", { color: activeColor })}
        >
          {activeColor && (
            <div className="h-1 w-5" style={{ backgroundColor: activeColor }} />
          )}
        </IconButton>
      </div>

      {open && (
        <div className="absolute z-50 top-full mt-2 w-64 bg-white shadow-xl rounded-md p-4 space-y-4 text-sm border border-gray-200">
          <div className="flex justify-between items-center">
            <button
              onClick={() => setOpen(false)}
              className="text-gray-500 hover:text-black"
            >
              <X size={16} />
            </button>
          </div>

          <ColorSwatchGrid colors={solidColors} onSelect={handleColorSelect} />

          <ColorInputPanel onApply={handleColorSelect} />

          <div className="">
            <button
              onClick={handleEyeDropper}
              title="Pick a color from the screen"
            >
              <Pipette size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HighlightPickerPopover;
