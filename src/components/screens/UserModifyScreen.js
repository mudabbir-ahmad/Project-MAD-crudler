import {StyleSheet, Text} from "react-native";
import Screen from "../layout/Screen";
import ModuleForm from "../entity/modules/moduleForm";

export const UserModifyScreen = ({navigation, route}) => {
//   Initialisation -------------
    const {user, onModify} = route.params;

//   State ----------------------
//   Handlers -------------------

    const handleCancel = () => navigation.navigate.goBack();

//   View -----------------------
    return (
        <Screen style={styles.container}>
            <ModuleForm
                originalModule={user}
                onSubmit={onModify}
                onCancel={handleCancel}
            />
        </Screen>
    );
};

const styles = StyleSheet.create({});

export default UserModifyScreen;