
import { Routes, Route } from "react-router-dom";
import EditorPage from "@/features/editor/pages/EditorPage";
import LandingPage from "@/features/Landing/pages/LandingPage";


function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/editor" element={<EditorPage />} />
    </Routes>
  );
}

export default AppRouter;
