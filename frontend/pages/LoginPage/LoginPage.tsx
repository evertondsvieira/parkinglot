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
import { signInWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../../firebaseConfig";
import { toastMessage } from "../../utils/toastMessage";

export const LoginPage = () => {
  const { brand } = styled;

  const navigation =
    useNavigation<NavigationProp<RootStackList, "Mapa" | "Registro">>();

  const auth = FIREBASE_AUTH;
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Login bem-sucedido:", user);
        navigation.navigate("Mapa");
      })
      .catch((error) => {
        console.error("Erro ao fazer login:", error);
        toastMessage({ title: "Erro ao fazer login", type: "error" })
      });
  };

  const goToRegister = () => {
    navigation.navigate("Registro");
  };

  return (
    <View style={[styles.container, { backgroundColor: brand.main }]}>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Image style={styles.logo} source={require("../../assets/logo1.png")} />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={handleSignIn} style={styles.button}>
          <Text style={styles.buttonText}>Logar</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={goToRegister}
        style={{
          justifyContent: "flex-end",
          alignItems: "flex-end",
          paddingRight: 60,
          paddingVertical: 10,
        }}
      >
        <Text style={{ color: "#fff", textDecorationLine: "underline" }}>
          Registre-se
        </Text>
      </TouchableOpacity>
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
    borderColor: "#fff",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
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
  },
});
