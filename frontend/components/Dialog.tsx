import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import { styled } from "../style";

interface DialogProps {
  visible: boolean;
  onClose: () => void;
  onStartRoute: () => void;
  onReserve: () => void;
}

export const Dialog = (props: DialogProps) => {
  const { visible, onClose, onStartRoute, onReserve } = props;

  const { button } = styled;

  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Deseja iniciar a rota?</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
                <Text style={{ color: "#000" }}>Cancelar</Text>
              </TouchableOpacity>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                  style={[styles.infoButton, { backgroundColor: button.info }]}
                  onPress={onReserve}
                >
                  <Text style={styles.buttonText}>Reservar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.successButton,
                    { backgroundColor: button.success },
                  ]}
                  onPress={onStartRoute}
                >
                  <Text style={styles.buttonText}>Iniciar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 300,
    padding: 12,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "flex-start",
  },
  modalText: {
    fontSize: 16,
    marginBottom: 12,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  cancelButton: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 1,
  },
  successButton: {
    padding: 10,
    width: 80,
    alignItems: "center",
    borderRadius: 5,
  },
  infoButton: {
    width: 80,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginHorizontal: 5,
  },
  buttonText: {
    color: "white",
  },
});
