import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import theme from "./theme";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Add from "./pages/Add";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/add" element={<Add></Add>}></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
