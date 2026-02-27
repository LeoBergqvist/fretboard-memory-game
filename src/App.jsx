import './App.css'
import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
import Home from "./Homepage/Home"
import Play from "./features/Practice/Play";
import Study from "./features/Study/Study";
import StudyFretboard from "./features/Study/StudyFretboard";
import NotFound from "./pages/NotFound";
import Level from './features/Study/Level';
import PlayFretboard from './features/Practice/PlayFretboard';
import Practice from './features/Practice/Practice';

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