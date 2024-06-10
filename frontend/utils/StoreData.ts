import AsyncStorage from "@react-native-async-storage/async-storage"

interface IUserData {
  fullName: string,
  phone: string,
  vehiclePlate: string,
  cpf: string,
  model: string
  selectedVehicle: "car" | "motorcycle" | null
}

export const storeUserData = async (data: IUserData) => {
  try { 
    const jsonData = JSON.stringify(data)
    await AsyncStorage.setItem("@parkinglot/user-data", jsonData)
    return true
  } catch (error) {
    console.error("Error setting data", error)
    return false
  }
}

export const getStoreData = async (): Promise<IUserData | null> => {
  try {
    const jsonData = await AsyncStorage.getItem("@parkinglot/user-data")
    if (jsonData !== null) {
      const data: IUserData = JSON.parse(jsonData)
      return data
    }
    return null
  } catch (error) {
    console.error("Error getting data", error)
    return null
  }
}
