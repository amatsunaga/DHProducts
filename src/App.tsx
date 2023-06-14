import { AuthProvider } from "./contexts/AuthContext";
import { ModalProvider } from "./contexts/ModalContext";
import { RoutesConfig } from "./routes";

function App() {
  return (
    <AuthProvider>
      <ModalProvider>
        <RoutesConfig />
      </ModalProvider>
    </AuthProvider>
  );
}

export default App;
