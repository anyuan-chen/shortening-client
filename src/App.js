import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import theme from "./theme";
import Home from "./pages/Home";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home></Home>}>
          {" "}
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
