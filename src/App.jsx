import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Play from "./pages/Play";
import Study from "./pages/Study";
import StudyFretboard from "./pages/StudyFretboard";
import NotFound from "./pages/NotFound";
import Level from './pages/Level';
import PlayFretboard from './pages/PlayFretboard';
import Practice from './pages/Practice';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<Play />} />
        <Route path="/study" element={<Study />} />
        <Route path="/study/fretboard" element={<StudyFretboard />} />
        <Route path="/study/level/:levelId" element={<Level />} />
        <Route path="/play/fretboard" element={<PlayFretboard />} />
        <Route path="/play/fretboard/practice/:sentenceId" element={<Practice />} />

        {/* Catch-all route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}