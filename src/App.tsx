import { AuthProvider } from "./contexts/AuthContext";
import { RoutesConfig } from "./routes";

function App() {
  return (
    <AuthProvider>
      <RoutesConfig />
    </AuthProvider>
  );
}

export default App;
