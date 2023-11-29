import styled, { createGlobalStyle } from "styled-components";
import NavHeader from "./components/navHeader";
import OrderPage from "./components/OrderPage";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
  }
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <NavHeader />
      <OrderPage />
    </div>
  );
}

export default App;
