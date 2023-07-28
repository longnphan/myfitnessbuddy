import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Form from "./components/Form";
import MealDisplay from "./components/MealDisplay";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/tracker" element={<MealDisplay />} />
        <Route path="/profile" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
