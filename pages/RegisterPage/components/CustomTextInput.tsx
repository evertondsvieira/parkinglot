import { Text, TextInput, View } from "react-native"

interface CustomTextInputProps {
  label: string
  value: any
  onChangeText: (text: string) => void
}

export const CustomTextInput = (props: CustomTextInputProps) => {
  const { label, value, onChangeText } = props

  return(
    <View>
      <Text style={{ fontWeight: "500" }}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={(text) => onChangeText(text)}
        style={{
          borderWidth: 0.5,
          borderColor: "#000",
          borderRadius: 4,
          padding: 4,
          paddingLeft: 8,
          color: "#000",
        }}
      />
    </View>
  )
}
