import { KeyboardType } from "react-native";

export interface IInputField {
  label: string;
  type: KeyboardType;
  value: string;
  onChange: (text: string) => void;
}

export interface IFormatUserData {
  placeholder: string
  onChange: (e: any) => void
  value: string
  isPassword?: boolean
}