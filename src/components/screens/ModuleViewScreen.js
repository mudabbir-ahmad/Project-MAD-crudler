import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export const ModuleViewScreen = () => {
//   Initialisation -------------
//   State ----------------------
//   Handlers -------------------
//   View -----------------------
  return (
    <Screen style={styles.container}>
      <Text>View</Text>
      <StatusBar style="auto" />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleViewScreen;