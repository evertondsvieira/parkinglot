import "react-native-gesture-handler";
import { Fragment } from "react";
import Routes from "./routes";
import { LocationContextProvider } from "./context/Location";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Toast from "react-native-toast-message";

export default function App() {
  return (
    <Fragment>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <LocationContextProvider>
          <Routes />
        </LocationContextProvider>
      </GestureHandlerRootView>
      <Toast position="bottom" bottomOffset={20} />
    </Fragment>
  );
}
