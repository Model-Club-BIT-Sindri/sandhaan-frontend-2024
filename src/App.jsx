import "./App.css";
import Landing from "./pages";
import { Routes, Route } from "react-router-dom";
import Registration from "./components/Registration";
import LoginSignUp from "./pages/loginSignup";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/event/:id" element={<Registration />} />
      <Route path="/login" element={<LoginSignUp />} />
    </Routes>
  );
}

export default App;
