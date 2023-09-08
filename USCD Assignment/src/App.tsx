import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/organisms/NavBar";
import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import { Products } from "./pages/Products";
import { Order } from "./pages/Order";
import { Message } from "./pages/Message";
import { Documents } from "./pages/Documents";
import { Calendar } from "./pages/Calendar";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NavBar />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/order" element={<Order />} />
        <Route path="/messages" element={<Message />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </div>
  );
};
