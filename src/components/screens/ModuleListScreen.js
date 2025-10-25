import {StyleSheet, Text, ScrollView, View, Pressable} from "react-native";
import Screen from "../layout/Screen";

import initialModules from "../../data/modules.js";


export const ModuleListScreen = () => {
//   Initialisation -------------
    const modules = initialModules;

//   State ----------------------
//   Handlers -------------------
    const handleSelect = () => alert("Item selected");

//   View -----------------------
  return (
    <Screen>
        <ScrollView style={styles.modulesContainer}>
        {modules.map((module) => {
                return(
                    <Pressable key={module.ModuleCode} onPress={handleSelect}>
                        <View style={styles.modulesItem}>
                            <Text style={styles.text}>
                                {module.ModuleCode} {module.ModuleName}
                            </Text>
                        </View>
                    </Pressable>
                )
            })
        }
    </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
    modulesContainer: {
        marginTop: 20,
    },
    modulesItem: {
        padding: 15,
        marginBottom: 10,
        borderTopWidth: 1,
        borderTopColor: "light grey",
        // borderRadius: 15,
    },
    text: {
    },
});

export default ModuleListScreen;