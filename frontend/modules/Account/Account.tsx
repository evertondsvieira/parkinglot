import React, { useState, useEffect } from "react";
import { Dimensions, Text, View } from "react-native";
import { CustomTextInput } from "../../components/CustomTextInput";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Fontisto from "@expo/vector-icons/Fontisto";
import { styled } from "../../style";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackList } from "../../@types";
import { getStoreData, storeUserData } from "../../utils/StoreData";
import { formatPhone, formatCPF } from "../../utils/format";
import { toastMessage } from "../../utils/toastMessage";
import { FIREBASE_AUTH } from "../../firebaseConfig";
import { IAccountForm, ISelectedVehicle, ITextField } from "../../models/Account";

export const Account: React.FC = () => {
  const { button, brand } = styled

  const { width } = Dimensions.get("window")
  
  const displayName = FIREBASE_AUTH.currentUser?.displayName
  const [selectedVehicle, setSelectedVehicle] = useState<ISelectedVehicle>(null)
  const [formData, setFormData] = useState<IAccountForm>({
    fullName: "",
    phone: "",
    vehiclePlate: "",
    cpf: "",
    model: ""
  })

  const navigation = useNavigation<NavigationProp<RootStackList, "Mapa">>()

  const loadData = async () => {
    try {
      const userData = await getStoreData()
      if (userData) {
        setFormData(userData)
        setSelectedVehicle(userData.selectedVehicle)
      }
    } catch (error) {
      console.error("Error loading data:", error)
    }
  }

  const handleChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value })
  }

  const saveData = async () => {
    try {
      const dataToSave = { ...formData, selectedVehicle }
      await storeUserData(dataToSave)
      toastMessage({ title: "Informações atualizadas com sucesso", type: "success" })
      navigation.navigate("Mapa")
    } catch (error) {
      console.error("Error saving data:", error)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  const fields: ITextField[] = [
    { label: "Nome Completo", placeholder: "Digite seu nome completo", value: displayName ?? formData.fullName, name: "fullName" },
    { label: "Telefone", placeholder: "Digite seu telefone", value: formatPhone(formData.phone), name: "phone" },
    { label: "Modelo", placeholder: "Digite o modelo do carro", value: formData.model, name: "model" },
    { label: "Placa do Veículo", placeholder: "Digite a placa do veículo", value: formData.vehiclePlate, name: "vehiclePlate" },
    { label: "CPF", placeholder: "Digite seu CPF", value: formatCPF(formData.cpf), name: "cpf" }
  ]

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "space-between", margin: 12 }}>
      <View style={{ width: "100%", gap: 8 }}>
        {fields.map((field, index) => (
          <CustomTextInput
            key={index}
            label={field.label}
            onChangeText={(text) => handleChange(field.name, text)}
            placeholder={field.placeholder}
            value={field.value}
          />
        ))}
        <View style={{ margin: 12, flexDirection: "row", justifyContent: "center" }}>
          <TouchableOpacity
            onPress={() => setSelectedVehicle("car")}
            style={{
              alignItems: "center",
              justifyContent: "center",
              padding: 16,
              borderRadius: 4,
              width: (width * 0.93) / 2,
              backgroundColor: selectedVehicle === "car" ? brand.main : "transparent",
            }}
          >
            <FontAwesome name="car" size={24} color={selectedVehicle === "car" ? "#fff" : "#000"} />
            <Text style={{ color: selectedVehicle === "car" ? "#fff" : "#000" }}>Automóvel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelectedVehicle("motorcycle")}
            style={{
              alignItems: "center",
              justifyContent: "center",
              padding: 16,
              borderRadius: 4,
              width: (width * 0.93) / 2,
              backgroundColor: selectedVehicle === "motorcycle" ? brand.secondary : "transparent",
            }}
          >
            <Fontisto name="motorcycle" size={24} color={selectedVehicle === "motorcycle" ? "#fff" : "#000"} />
            <Text style={{ color: selectedVehicle === "motorcycle" ? "#fff" : "#000" }}>Motocicleta</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        onPress={saveData}
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
  )
}
