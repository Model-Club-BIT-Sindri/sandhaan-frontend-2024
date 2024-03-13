import "./App.css";
import Landing from "./pages";
import { Routes, Route } from "react-router-dom";
import Registration from "./components/Registration";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/event/:id" element={<Registration />} />
    </Routes>
  );
}

export default App;
