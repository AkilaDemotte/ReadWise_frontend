import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Register";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./components/ProtectedRoute";
import ReviewPage from "./pages/ReviewPage";

function App() {
  return (
    <div className="App">
      <ToastContainer></ToastContainer>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>}></Route> */}
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Registration />}></Route>
          <Route path="/reviews" element={<ReviewPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
