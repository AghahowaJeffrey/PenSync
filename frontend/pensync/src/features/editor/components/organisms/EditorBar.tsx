import FormattingControls from "../molecules/FormattingControls"
import { Editor } from "@tiptap/react";

interface Props {
  editor: Editor;
}

const EditorBar: React.FC<Props> = ({ editor }) => {
  return (
    <div className="bg-gray-100 rounded-3xl p-2">
      <FormattingControls editor={editor} />
    </div>
  )
}

export default EditorBar