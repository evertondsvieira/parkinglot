export type ISelectedVehicle = "car" | "motorcycle" | null

export interface IAccountForm {
  fullName: string;
  phone: string;
  vehiclePlate: string;
  cpf: string;
  model: string;
}

export interface ITextField {
  label: string;
  placeholder: string;
  value: string;
  name: keyof IAccountForm;
}