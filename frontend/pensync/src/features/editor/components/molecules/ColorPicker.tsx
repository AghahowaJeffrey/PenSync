// src/components/organisms/ColorPickerPopover.tsx
import React, { useState } from "react";
import { Editor } from "@tiptap/react";
import IconButton from "../atoms/IconButton";
import ColorSwatchGrid from "./ColorSwatchGrid";
import ColorInputPanel from "./ColorInputPanel";
import { X } from "lucide-react";
import { Pipette } from "lucide-react";

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

const ColorPickerPopover: React.FC<Props> = ({ editor }) => {
  const [open, setOpen] = useState(false);
  const [activeColor, setActiveColor] = useState("#000000");

  const handleColorSelect = (color: string) => {
    editor.chain().focus().setColor(color).run();
    setActiveColor(color);
    setOpen(false);
  };

  return (
    <div className="relative">
      <div className="flex-col justify-center items-center">
        <IconButton
          onClick={() => setOpen(!open)}
          icon={<p className="font-semibold text-sm p-0 m-0 leading-none">A</p>}
          label="Text color"
          active={!!editor.getAttributes("textStyle").color}
        >
          <div className="h-1 w-5" style={{ background: activeColor }} />
        </IconButton>
      </div>

      {open && (
        <div className="absolute z-50 top-full mt-2 w-64 bg-white shadow-xl rounded-md p-4 space-y-4 text-sm">
          <div className="flex justify-between items-center">
            {/* <p className="font-medium">Choose a color</p> */}
            <button onClick={() => setOpen(false)}>
              <X size={16} />
            </button>
          </div>

          <ColorSwatchGrid
            // title="Solid Colors"
            colors={solidColors}
            onSelect={handleColorSelect}
          />

          <ColorInputPanel onApply={handleColorSelect} />

          <button
            onClick={async () => {
              try {
                // Use the native EyeDropper API
                const eyeDropper = new (window as any).EyeDropper();
                const result = await eyeDropper.open();
                const pickedColor = result.sRGBHex;
                setActiveColor(pickedColor);
                editor.chain().focus().setColor(pickedColor).run();
              } catch (error) {
                console.error("EyeDropper failed:", error);
              }
            }}
            title="Pick a color from screen"
          >
            <Pipette size={16} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ColorPickerPopover;
