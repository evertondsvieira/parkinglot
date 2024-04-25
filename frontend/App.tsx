import "react-native-gesture-handler";
import Routes from "./routes";
import { LocationContextProvider } from "./context/Location";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <LocationContextProvider>
        <Routes />
      </LocationContextProvider>
    </GestureHandlerRootView>
  );
}
