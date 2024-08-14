import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/main";
import "./app.scss";
import TestHeader from "./components/common/TestHeader";
import Header from "./components/common/Header";

function App() {
  const currentUrl = window.location.pathname.split("/")[1];
  console.log(currentUrl);
  return (
    <div className="container">
      {currentUrl === "test" ? <TestHeader /> : <Header />}
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
