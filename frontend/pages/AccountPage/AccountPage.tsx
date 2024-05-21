import React, { useState } from "react";
import { Dimensions, Text, View } from "react-native";
import { CustomTextInput } from "../../components/CustomTextInput";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Fontisto from "@expo/vector-icons/Fontisto";
import { styled } from "../../style";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackList } from "../../@types";

export const AccountPage: React.FC = () => {
  const { button, brand } = styled;
  const { width } = Dimensions.get("window");

  const [selectedVehicle, setSelectedVehicle] = useState<
    "car" | "motorcycle" | null
  >(null);

  const navigation = useNavigation<NavigationProp<RootStackList, "Mapa">>();

  const toggleLocation = () => {
    navigation.navigate("Mapa");
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        margin: 12,
      }}
    >
      <View style={{ width: "100%", gap: 8 }}>
        <CustomTextInput
          label="Nome Completo"
          onChangeText={console.log}
          placeholder="Digite seu nome completo"
          value=""
        />
        <CustomTextInput
          label="Telefone"
          onChangeText={console.log}
          placeholder="Digite seu telefone"
          value=""
        />
        <CustomTextInput
          label="Placa do Veículo"
          onChangeText={console.log}
          placeholder="Digite a placa do veículo"
          value=""
        />
        <CustomTextInput
          label="CPF"
          onChangeText={console.log}
          placeholder="Digite seu CPF"
          value=""
        />

        <View
          style={{
            margin: 12,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => setSelectedVehicle("car")}
            style={{
              alignItems: "center",
              justifyContent: "center",
              padding: 16,
              borderRadius: 4,
              width: (width * 0.93) / 2,
              backgroundColor:
                selectedVehicle === "car" ? brand.main : "transparent",
            }}
          >
            <FontAwesome
              name="car"
              size={24}
              color={selectedVehicle === "car" ? "#fff" : "#000"}
            />
            <Text
              style={{ color: selectedVehicle === "car" ? "#fff" : "#000" }}
            >
              Automóvel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelectedVehicle("motorcycle")}
            style={{
              alignItems: "center",
              justifyContent: "center",
              padding: 16,
              borderRadius: 4,
              width: (width * 0.93) / 2,
              backgroundColor:
                selectedVehicle === "motorcycle"
                  ? brand.secondary
                  : "transparent",
            }}
          >
            <Fontisto
              name="motorcycle"
              size={24}
              color={selectedVehicle === "motorcycle" ? "#fff" : "#000"}
            />
            <Text
              style={{
                color: selectedVehicle === "motorcycle" ? "#fff" : "#000",
              }}
            >
              Motocicleta
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        onPress={toggleLocation}
        style={{
          backgroundColor: button.success,
          padding: 12,
          borderRadius: 8,
          alignItems: "center",
          width: width * 0.94,
        }}
      >
        <Text style={{ color: "white" }}>Salvar Alterações</Text>
      </TouchableOpacity>
    </View>
  );
};
