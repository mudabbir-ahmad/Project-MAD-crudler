import {StyleSheet, Text, View, Pressable} from "react-native";

const ModuleItem = ({module, onSelect }) => {
    //   Initialisation -------------
    //   State ----------------------
    //   Handlers -------------------
    //   View -----------------------

    return(
        <Pressable key={module.ModuleCode} onPress={() => onSelect(module)}>
            <View style={styles.modulesItem}>
                <Text style={styles.text}>
                    {module.ModuleCode} {module.ModuleName}
                </Text>
            </View>
        </Pressable>
    );
};


const styles = StyleSheet.create({
    modulesItem: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: "light grey",
    },
    text: {
        // fontSize: 16,
    },
});

export default ModuleItem;