import React from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  StyleSheet,
} from "react-native";
import { styled } from "../../style";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackList } from "../../@types";

export const LoginPage = () => {
  const { brand } = styled;

  const navigation = useNavigation<NavigationProp<RootStackList, 'Mapa'>>();

  return (
    <View style={[styles.container, { backgroundColor: brand.main }]}>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Image style={styles.logo} source={require("../../assets/logo1.png")} />
        <TextInput style={styles.input} placeholder="Nome de usuário" />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
        />
        <TouchableOpacity 
          onPress={() => navigation.navigate('Mapa')} 
          style={styles.button}
        >
          <Text style={styles.buttonText}>Logar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  input: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "#fff"
  },
  button: {
    width: 300,
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
