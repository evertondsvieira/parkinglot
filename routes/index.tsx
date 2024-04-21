import * as NavigationBar from "expo-navigation-bar";
import { styled } from "../style";
import { StatusBar } from "expo-status-bar";
import { MapPage } from "../pages/MapPage/MapPage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SearchPage } from "../pages/SearchPage/SearchPage";
import { RegisterPage } from "../pages/RegisterPage/RegisterPage";

const Stack = createStackNavigator();

const Routes = () => {
  const { brand, text } = styled;

  NavigationBar.setBackgroundColorAsync(brand.main);

  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator
        initialRouteName="Mapa"
        screenOptions={{
          headerStyle: { backgroundColor: brand.main },
          headerTintColor: text.main,
        }}
      >
        <Stack.Screen
          name="Mapa"
          component={MapPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Pesquisa" component={SearchPage} />
        <Stack.Screen name="Cadastro" component={RegisterPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
