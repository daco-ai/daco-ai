import { Route, Routes, useLocation } from "react-router-dom";
import MainPage from "./pages/main";
import TestIntro from "./pages/testIntro";
import "./app.scss";
import Header from "./components/common/Header";
import useStore from "./stauts/store";
import Test from "./pages/test";
import TestResult from "./pages/testResult";
import Data from "./data/testQuestion.json";
import { useEffect, useReducer } from "react";
function App() {
  const { page, setPage } = useStore((state) => state);
  const location = useLocation();

  const currentUrl = window.location.pathname.split("/")[1];

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const level = params.get("level");
    if (level) {
      setPage(Number(level)); // URL에서 가져온 level 값으로 page 상태를 설정
    }
  }, [location, setPage]);

  return (
    <div className="container">
      {currentUrl !== "test" && <Header />}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/test"
          element={
            page === 0 ? (
              <TestIntro />
            ) : page <= Data.length ? (
              <Test />
            ) : (
              <TestResult />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
