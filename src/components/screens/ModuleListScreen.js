import { StyleSheet, Text, View } from "react-native";
import Screen from "../layout/Screen";

import initialModules from "../../data/modules.js";


export const ModuleListScreen = () => {
//   Initialisation -------------
    const modules = initialModules;

//   State ----------------------
//   Handlers -------------------
//   View -----------------------
  return (
    <Screen>
        <View>
        {modules.map((module) => {
                return(
                    <View key={module.ModuleCode}>
                        <Text>
                            {module.ModuleCode} {module.ModuleName}
                        </Text>
                    </View>
                )
            })
        }
    </View>
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleListScreen;