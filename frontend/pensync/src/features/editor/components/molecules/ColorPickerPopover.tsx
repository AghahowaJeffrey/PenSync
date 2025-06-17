// src/components/molecules/ColorPickerPopover.tsx
import React, { useState } from "react";
import IconButton from "../atoms/IconButton";
import { Editor } from "@tiptap/react";


const colors = [
  "#000000",
  "#FF0000",
  "#FFA500",
  "#FFFF00",
  "#008000",
  "#0000FF",
  "#4B0082",
  "#EE82EE",
  "#808080",
  "#FFFFFF"
];

interface Props {
  editor: Editor
}

const ColorPickerPopover: React.FC<Props> = ({
  editor,
}) => {
  const [open, setOpen] = useState(false);

  const handleColorSelect = (color: string) => {
    editor
      .chain()
      .focus()
      .setColor(color) // reset if empty
      .run();
  };

  return (
    <div className="relative">
      <div className="flex-col justify-center items-center">
        <IconButton
          onClick={() => setOpen(!open)}
          icon={<p className="p-0 m-0 ">A</p>}
          label="Text color"
        >
        <div className="h-1 bg-amber-700"></div>
        </IconButton>
      </div>


      {open && (
        <div className="absolute top-full mt-2 w-30 z-10 bg-white rounded shadow-md p-2 grid grid-cols-5 gap-1">
          {colors.map((color) => (
            <button
              key={color}
              className="w-5 h-5 rounded-full"
              style={{ backgroundColor: color }}
              onClick={() => {
                handleColorSelect(color);
                setOpen(false);
              }}
            />
          ))}
          <button
            className="col-span-5 text-xs text-gray-500 underline pt-1 text-left"
            onClick={() => {
              handleColorSelect(""); // remove color
              setOpen(false);
            }}
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
};

export default ColorPickerPopover;
