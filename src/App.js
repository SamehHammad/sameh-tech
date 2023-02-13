import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Brands from "./components/Brands/Brands";
import Acer from "./components/Acer";
import Asus from "./components/Asus";
import Dell from "./components/Dell";
import Xiaomi from "./components/Xiaomi";
import Apple from "./components/Apple";
import Sony from "./components/Sony";
import DetalesDell from "./pages/DetalesDell";
import Datalesprodects from "./pages/Datalesprodects";
import NotFouand from "./pages/NotFouand/NotFouand";
import DetalesApple from "./pages/DetalesApple";
import DetalesAcer from "./pages/DetalesAcer";
import DetalesAsus from "./pages/DetalesAsus";
import DetalesSony from "./pages/DetalesSony";
import DetalesXiaomi from "./pages/DetalesXiaomi";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [Show, setShow] = useState(false);
  return (
    <div className="App">

  <Router>
    <Header Show={Show} setShow={setShow} />
    <Brands Show={Show} setShow={setShow} />

      <Routes>
        <Route path="*" element={<NotFouand />} />
        <Route path="/" element={<Apple />} />
        <Route path="/Acer" element={<Acer />} />
        <Route path="/Asus" element={<Asus />} />
        <Route path="/Dell" element={<Dell />} />
        <Route path="/Sony" element={<Sony />} />
        <Route path="/Xiaomi" element={<Xiaomi />} />
        <Route path="/prodect/:id" element={<DetalesDell />} />
        <Route path="/DetalesApple/:id" element={<DetalesApple />} />
        <Route path="/DetalesAcer/:id" element={<DetalesAcer />} />
        <Route path="/DetalesAsus/:id" element={<DetalesAsus />} />
        <Route path="/DetalesSony/:id" element={<DetalesSony />} />
        <Route path="/DetalesXiaomi/:id" element={<DetalesXiaomi />} />
        <Route path="Cart" element={<Datalesprodects />} />
      </Routes>
    <Footer />
  </Router>
  

</div>)
};

export default App;
