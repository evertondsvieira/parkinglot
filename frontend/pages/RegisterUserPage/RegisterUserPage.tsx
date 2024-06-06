import { Image, Text, View, StyleSheet } from "react-native";
import { CustomTextInput } from "../../components/CustomTextInput";
import React from "react";
import { styled } from "../../style";
import { TouchableOpacity } from "react-native-gesture-handler";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackList } from "../../@types";
import { FIREBASE_AUTH } from "../../firebaseConfig";
import { toastMessage } from "../../utils/toastMessage";

export const RegisterUserPage: React.FC = () => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [name, setName] = React.useState<string>("");

  const navigation = useNavigation<NavigationProp<RootStackList, "Login">>();

  const formatUserData = [
    {
      placeholder: "Digite o seu nome completo",
      onChange: setName,
      value: name,
    },
    {
      placeholder: "Digite o seu E-mail",
      onChange: setEmail,
      value: email,
    },
    {
      placeholder: "Digite a sua senha",
      onChange: setPassword,
      value: password,
      isPassword: true,
    },
  ];

  const { brand } = styled;

  const auth = FIREBASE_AUTH;

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleRegister = () => {
    if (!name || !email || !password) {
      toastMessage({ title: "Preencha todos os campos", type: "error" });
      return;
    }

    if (!validateEmail(email)) {
      toastMessage({ title: "Deve ser um e-mail válido", type: "error" });
      return;
    }

    if (password.length < 6) {
      toastMessage({
        title: "A senha deve ter pelo menos 6 caracteres",
        type: "error",
      });
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        updateProfile(user, {
          displayName: name,
        })
          .then(() => {
            console.log("Criado com sucesso:", user);
            navigation.navigate("Login");
          })
          .catch((error) => {
            console.error("Erro ao atualizar perfil:", error);
          });
      })
      .catch((error) => {
        console.error("Erro ao fazer conta:", error);
        toastMessage({ title: "Erro ao criar conta", type: "error" });
      });
  };

  const goToLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={[styles.container, { backgroundColor: brand.main }]}>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Image
          style={styles.logo}
          alt="logo"
          source={require("../../assets/logo1.png")}
        />
        <View>
          {formatUserData.map((item, index) => (
            <CustomTextInput
              label=""
              key={item.placeholder}
              placeholder={item.placeholder}
              onChangeText={item.onChange}
              value={item.value}
              style={[
                styles.input,
                index !== formatUserData.length - 1 && styles.inputMargin,
              ]}
              isPassword={item.isPassword}
            />
          ))}
        </View>
        <TouchableOpacity onPress={handleRegister} style={styles.button}>
          <Text style={{ color: "#fff" }}>Criar conta</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={goToLogin}
        style={{
          justifyContent: "flex-end",
          alignItems: "flex-end",
          paddingRight: 60,
          paddingVertical: 10,
        }}
      >
        <Text style={{ color: "#fff", textDecorationLine: "underline" }}>
          Já tem cadastro? Faça o login
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
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  inputMargin: {
    marginBottom: -10,
  },
  button: {
    width: 300,
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
});
