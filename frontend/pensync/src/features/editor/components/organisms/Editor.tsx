// src/components/organisms/Editor.tsx
import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import EditorBar from "./EditorBar";
import Underline from "@tiptap/extension-underline";
import Color  from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import Hightlight from '@tiptap/extension-highlight';



const Editor: React.FC = () => {
  const editor = useEditor({
    extensions: [
      StarterKit, Underline, Color, TextStyle, 
      Hightlight.configure({multicolor: true}),
      // FontSize

    ],
    content: "<p>Start writing...</p>",
    editorProps: {
      attributes: {
        class: "m-0 p-4 min-w-max min-h-screen focus:outline-none"
      }
    }
  });

  if (!editor) return null;

  return (
    <div className="bg-gray-50 max-w-4xl mx-auto">
      <EditorBar editor={editor} />
      <div className="min-h-[300px] border border-gray-400 mt-3">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default Editor;
