import React from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackList } from "../@types";
import { Feather } from "@expo/vector-icons";
import { styled } from "../style";

interface IMapValues {
  icon: string
  size: number
  color: string
  href: string
  name: string
}

export const BottomTabs = () => {
  const navigation = useNavigation<NavigationProp<RootStackList, 'Mapa' | 'Pesquisa'>>();

  const [open, setOpen] = React.useState<boolean>(false);

  const { text } = styled;

  const toggleNavigation = (name: keyof RootStackList) => {
    navigation.navigate(name);
    setOpen(false);
  };

  const mapValues: IMapValues[] = [
    { icon: "credit-card", size: 24, color: text.contrast, href: "Credito", name: 'Carteira' },
    { icon: "person", size: 24, color: text.contrast, href: "Conta", name: 'Conta' },
    { icon: "logout", size: 24, color: text.contrast, href: "Login", name: 'Sair' },
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setOpen(!open)} style={styles.button}>
        <Feather name="menu" size={32} color={text.main} />
      </TouchableOpacity>
      {open && (
        <View style={styles.menu}>
          {mapValues.map((item) => (
            <TouchableOpacity
              key={item.name}
              onPress={() => toggleNavigation(item.href as keyof RootStackList)}
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                width: "100%",
                gap: 8,
              }}
            >
              <MaterialIcons name={item.icon as any} sx={{ color: "red" }} size={32} />
              <Text>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 50,
    right: 16,
    bottom: 16,
  },
  button: {
    backgroundColor: "#EE6123",
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
  },
  menu: {
    position: "absolute",
    zIndex: 998,
    right: 0,
    bottom: 80,
    padding: 10,
    borderRadius: 10,
    width: 120,
    gap: 8,
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
