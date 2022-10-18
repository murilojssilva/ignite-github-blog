import { ThemeProvider } from "styled-components";
import { GithubProvider } from "./contexts/GithubContext";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <GithubProvider>
        <Home />
      </GithubProvider>
    </ThemeProvider>
  );
}

export default App;
