import * as NavigationBar from "expo-navigation-bar";
import { styled } from "../style";
import { StatusBar } from "expo-status-bar";
import { MapPage } from "../pages/MapPage/MapPage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SearchPage } from "../pages/SearchPage/SearchPage";
import { RegisterPage } from "../pages/RegisterPage/RegisterPage";
import { CreditCardPage } from "../pages/CreditCardPage/CreditCardPage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { AccountPage } from "../pages/AccountPage/AccountPage";
import { RegisterUserPage } from "../pages/RegisterUserPage/RegisterUserPage";

const Stack = createStackNavigator();

const Routes = () => {
  const { brand, text } = styled;

  NavigationBar.setBackgroundColorAsync(brand.main);

  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor={brand.main} />
      <Stack.Navigator
        initialRouteName="Login"
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
        <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
        <Stack.Screen name="Pesquisa" component={SearchPage} />
        <Stack.Screen name="Cadastro" component={RegisterPage} />
        <Stack.Screen name="Credito" component={CreditCardPage} />
        <Stack.Screen name="Conta" component={AccountPage} />
        <Stack.Screen name="Registro" component={RegisterUserPage} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
