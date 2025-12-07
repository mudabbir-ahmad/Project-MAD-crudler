import {StyleSheet, Text, TextInput, View} from "react-native";
import Screen from "../layout/Screen";
import ModuleForm from "../entity/modules/moduleForm";


export const UserAddScreen = ({navigation, route}) => {
//   Initialisation -------------
    const {onAdd} = route.params;
//   State ----------------------
//   Handlers -------------------

    const handleCancel = navigation.goBack;

//   View -----------------------
    return (
        <Screen style={styles.container}>
            <ModuleForm onSubmit={onAdd} onCancel={handleCancel}/>
        </Screen>
    );
};

const styles = StyleSheet.create({});

export default UserAddScreen;