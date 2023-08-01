import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import MealDisplay from "./components/MealDisplay";
import Dashboard from "./pages/Dashboard";
import SearchFood from "./pages/SearchFood";
import MacrosDashboard from "./pages/MacrosDashboard";
import CaloriesDashboard from "./pages/CaloriesDashboard";
import FoodDetails from "./pages/FoodDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tracker" element={<MealDisplay />} />
        <Route path="/profile" element={<Form />} />
        <Route path="/searchfood/:meal" element={<SearchFood />} />
        <Route path="/macros" element={<MacrosDashboard />} />
        <Route path="/calories" element={<CaloriesDashboard />} />
        <Route path="/details/:food" element={<FoodDetails />} />
      </Routes>
    </>
  );
}

export default App;
