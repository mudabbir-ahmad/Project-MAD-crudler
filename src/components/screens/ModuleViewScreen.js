import {StyleSheet} from "react-native";
import Screen from "../layout/Screen";
import ModuleView from "../entity/modules/ModuleView";


export const ModuleViewScreen = ({navigation, route}) => {
//   Initialisation -------------

    const {module, onDelete, onModify} = route.params;

//   State ----------------------
//   Handlers -------------------

    const goToModifyScreen = () => navigation.navigate("ModuleModifyScreen");

//   View -----------------------
    return (<Screen>
        <ModuleView
            module={module}
            onDelete={onDelete}
            onModify={goToModifyScreen}
        />
    </Screen>);
};

const styles = StyleSheet.create({});

export default ModuleViewScreen;