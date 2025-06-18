import FormattingControls from "../molecules/FormattingControls"
import { Editor } from "@tiptap/react";
import FontSize from "../molecules/FontSize";


interface Props {
  editor: Editor;
}

const EditorBar: React.FC<Props> = ({ editor }) => {
  return (
    <div className="bg-gray-100 rounded-3xl p-2">
      <div className="flex items-center">
        <FormattingControls editor={editor} />
        <FontSize editor={editor} />
      </div>
    </div>
  )
}

export default EditorBar