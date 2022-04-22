import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import theme from "./theme";
import Home from "./pages/Home";
import Login from "./pages/Login";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
