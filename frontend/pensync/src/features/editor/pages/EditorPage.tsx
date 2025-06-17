import type React from "react"
import Editor from "../components/organisms/Editor"


const EditorPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4">
      <Editor />
    </main>
  )
}

export default EditorPage