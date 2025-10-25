import { StyleSheet, Text } from "react-native";
import Screen from "../layout/Screen";

export const ModuleViewScreen = ({Navigate, route}) => {
//   Initialisation -------------

    const { module } = route.params;

//   State ----------------------
//   Handlers -------------------
//   View -----------------------
  return (
    <Screen style={styles.container}>
      <Text>
          View {module.ModuleCode} {module.ModuleName}
      </Text>
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleViewScreen;