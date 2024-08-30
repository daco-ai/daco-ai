import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/main";
import TestIntro from "./pages/testIntro";
import "./app.scss";
import Header from "./components/common/Header";
import useStore from "./stauts/store";
import Test from "./pages/test";
import TestResult from "./pages/testResult";
function App() {
  const currentUrl = window.location.pathname.split("/")[1];
  const { page } = useStore((state) => state);
  console.log(currentUrl);
  return (
    <div className="container">
      {currentUrl !== "test" && <Header />}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/test"
          element={
            page === 0 ? <TestIntro /> : page <= 16 ? <Test /> : <TestResult />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
