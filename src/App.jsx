import "./App.css";
import Landing from "./pages";
import { Routes, Route } from "react-router-dom";
import Registration from "./components/Registration";
import LoginSignUp from "./pages/loginSignup";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateUserSlice } from "./redux/Slices/userSlices";
const apiUrl = import.meta.env.VITE_API_URL;
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("loggedInToken");
    if (token) {
      axios.get(`${apiUrl}/api/v1/getcurrentuser`).then((data) => {
        dispatch(
          updateUserSlice({
            user: data?.data,
          })
        );
      });
    }
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/event/:id" element={<Registration />} />
      <Route path="/login" element={<LoginSignUp />} />
    </Routes>
  );
}

export default App;
