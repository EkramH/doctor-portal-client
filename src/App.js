import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import Appointment from "./pages/Appointment/Appointment";
import Home from "./pages/Home/Home";
import Navbar from "./shared/Navbar/Navbar";
import "react-day-picker/dist/style.css";
import Login from "./pages/Login/Login";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import SignUp from "./pages/SignUp/SignUp";
import RequireAuth from "./pages/Login/RequireAuth";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyAppointment from "./pages/Dashboard/MyAppointment";
import MyReview from "./pages/Dashboard/MyReview";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment></Appointment>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
