import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./pages/Details";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageContainer from "./containers/PageContainer";
import { useSelector } from "react-redux";
import Card from "./components/Card";

function App() {
  const { drawer } = useSelector((state) => state.drawer);

  return (
    <div className="App">
      <PageContainer>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="detail/:id" element={<Details />} />
          </Routes>
          {drawer && <Card />}
          <Footer />
        </BrowserRouter>
      </PageContainer>
    </div>
  );
}

export default App;
