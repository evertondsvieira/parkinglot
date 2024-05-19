import Toast from "react-native-toast-message";

interface ToastMessageProps {
  title: string;
  message?: string;
  type: "success" | "error" | "info";
}

export const toastMessage = (props: ToastMessageProps) => {
  const { type, title, message } = props;
  Toast.show({
    type,
    text1: title,
    text2: message,
  });
};
