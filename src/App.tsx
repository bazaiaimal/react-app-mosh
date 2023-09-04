import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import Devlinks from "./pages/Devlinks";
import ApiCall from "./pages/ApiCall";
import ProfileImg from "./pages/ProfileImg";
import RegistrationForm from "./pages/RegistrationForm";
import FormMosh from "./pages/FormMosh";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import AxiosApi from "./pages/AxiosApi";
import { GameApi } from "./game/GameApi";

function App() {

  const [selectedCategory, setSelectedCategory] = useState('');

  const [expenses , setExpenses] = useState([
    {id: 1, description: 'Salt', amount: 10, category: 'Groceries'},
    {id: 2, description: 'Power', amount: 3, category: 'Utilities'},
    {id: 3, description: 'Sugar', amount: 8, category: 'Groceries'},
    {id: 4, description: 'Movies', amount: 5, category: 'Entertainment'},
  ]);

  const visibleExpenses = selectedCategory ? expenses.filter((e) => e.category === selectedCategory) : expenses;

  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/devlinks" element={<Devlinks />} />
          <Route path="/api" element={<ApiCall />} />
          <Route path="/profileImg" element={<ProfileImg/>} />
          <Route path="/registrationForm" element={<RegistrationForm/>} />
          <Route path="/formMosh" element={<FormMosh/>} />
          <Route path="/expenseList" element={<ExpenseList expenses={visibleExpenses} onDelete={ (id) => setExpenses(expenses.filter( e => e.id !== id ))} onSelectCategory={ category => setSelectedCategory(category) } onSubmit={ expense => setExpenses([...expenses, { ...expense, id: length + 1 }]) } />} />
          <Route path="/axiosApi" element={<AxiosApi />} />
          <Route path="/game" element={ <GameApi />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;