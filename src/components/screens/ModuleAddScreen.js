import {StyleSheet, Text} from "react-native";
import Screen from "../layout/Screen";
import {Button, ButtonTray} from "../UI/Button";
import Icons from "../UI/Icons";

const defaultModule = {
    ModuleID: Math.floor(100000 + Math.random()*900000),
    ModuleCode: "CI6330",
    ModuleName: "Mobile Application Development",
    ModuleLevel: 6,
    ModuleLeaderID: 1,
    ModuleLeaderName: "Graeme Jones",
    ModuleImage: 'https://images.freeimages.com/images/small-preview/cf5/cellphone-1313194.jpg',
};

export const ModuleAddScreen = ({navigation, route}) => {
//   Initialisation -------------
    const { onAdd } = route.params;

//   State ----------------------
//   Handlers -------------------

    const handleAdd = () => onAdd(defaultModule);
    const handleCancel = navigation.goBack;

//   View -----------------------
    return (
        <Screen style={styles.container}>
            <Text>Add</Text>
            <ButtonTray>
                <Button label='Cancel' onClick={handleCancel} />
                <Button label='Add' icon={<Icons.Add/>} onClick={handleAdd} />
            </ButtonTray>
        </Screen>
    );
};

const styles = StyleSheet.create({});

export default ModuleAddScreen;