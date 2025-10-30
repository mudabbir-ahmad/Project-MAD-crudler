import {StyleSheet} from "react-native";
import Screen from "../layout/Screen";
import ModuleView from "../entity/modules/ModuleView";


export const ModuleViewScreen = ({ route }) => {
//   Initialisation -------------

    const {module} = route.params;

//   State ----------------------
//   Handlers -------------------
//   View -----------------------
    return (<Screen>
        <ModuleView module={module}></ModuleView>
    </Screen>);
};

const styles = StyleSheet.create({});

export default ModuleViewScreen;