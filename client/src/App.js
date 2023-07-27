import NavBar from "./Componets/NavBar/NavBar";
import { Home, Landing, Detail, Form } from "./views/index";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" ? <NavBar></NavBar> : null}
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/create" element={<Form />}></Route>
      </Routes>
    </div>
  );
}

export default App;
