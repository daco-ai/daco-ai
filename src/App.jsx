import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/main";
import TestPage from "./pages/testIntro";
import "./app.scss";
import TestHeader from "./components/common/TestHeader";
import Header from "./components/common/Header";

function App() {
  const currentUrl = window.location.pathname.split("/")[1];
  console.log(currentUrl);
  return (
    <div className="container">
      {currentUrl !== "test" && <Header />}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </div>
  );
}

export default App;
