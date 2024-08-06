import { CssBaseline } from "@mui/material";
import Dashboard from "./components/dashboard/Dashboard";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from "./utils/Theme";
import { DeviceTypeProvider } from "./context/DeviceTypeContext";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DeviceTypeProvider>
        <Dashboard />
      </DeviceTypeProvider>
    </ThemeProvider>
  );
}

export default App;
