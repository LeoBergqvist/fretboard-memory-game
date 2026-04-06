import './App.css'
import { Routes, Route } from "react-router-dom";

//Components
import ProtectedRoute from './components/shared/ProtectedRoute';
import Home from "./Homepage/Home"
import Play from "./features/Practice/Play";
import Login from './pages/Login';
import Study from "./features/Study/Study";
import StudyFretboard from "./features/Study/StudyFretboard";
import NotFound from "./pages/NotFound";
import Level from './features/Study/Level';
import PlayFretboard from './features/Practice/PlayFretboard';
import QuizContainer from './features/Practice/QuizContainer';
import Login2 from './pages/Login2';
import Signup from './pages/SignUp';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login2 />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/play" element={<Play />} />
        <Route path="/study" element={<Study />} />
        <Route path="/study/fretboard" element={<StudyFretboard />} />
        <Route path="/study/level/:levelId" element={<Level />} />
        <Route path="/play/fretboard" element={<PlayFretboard />} />
        <Route path="/play/fretboard/practice/:sentenceId" element={<QuizContainer />} />

        {/* Locked down route! */}
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />

        {/* Catch-all route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}