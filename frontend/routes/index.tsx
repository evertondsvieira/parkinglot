import * as NavigationBar from "expo-navigation-bar";

import { styled } from "../style";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Map } from "../modules/Map/Map";
import { Search } from "../modules/Search/Search";
import { Register } from "../modules/Register/Register";
import { CreditCard } from "../modules/Credit/CreditCard";
import { Account } from "../modules/Account/Account";
import { Login } from "../modules/Login/Login";

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
          component={Map}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Pesquisa" component={Search} />
        <Stack.Screen name="Credito" component={CreditCard} />
        <Stack.Screen name="Conta" component={Account} />
        <Stack.Screen name="Registro" component={Register} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
