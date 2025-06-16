import AppRoutes from "./routes/app-routes";
import "./App.css";
import { ThemeProvider } from "./contexts/theme-provider";

function App() {
  return (
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
