// src/components/molecules/FormattingControls.tsx
import React from "react";
import { Bold, Italic, Underline } from "lucide-react";
import IconButton from "../atoms/IconButton";
import { Editor } from "@tiptap/react";
import ColorPickerPopover from "./ColorPickerPopover";

interface Props {
  editor: Editor;
}

const FormattingControls: React.FC<Props> = ({ editor }) => {
    
  return (
    <div className="flex gap-2">
      <IconButton
        onClick={() => editor.chain().focus().toggleBold().run()}
        icon={<Bold size={15} strokeWidth={3} />}
        active={editor.isActive("bold")}
        label="Bold"
      />
      <IconButton
        onClick={() => editor.chain().focus().toggleItalic().run()}
        icon={<Italic size={15} strokeWidth={3} />}
        active={editor.isActive("italic")}
        label="Italic"
      />
      <IconButton
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        icon={<Underline size={15} strokeWidth={3} />}
        active={editor.isActive("underline")}
        label="Underline"
      />
      
      <ColorPickerPopover
        editor={editor}
      />
    </div>
  );
};

export default FormattingControls;
