import {StyleSheet} from "react-native";
import Screen from "../layout/Screen";
import ModuleView from "../entity/modules/ModuleView";


export const UserViewScreen = ({navigation, route}) => {
//   Initialisation -------------

    const {user, onDelete, onModify} = route.params;

//   State ----------------------
//   Handlers -------------------

    const goToModifyScreen = () => navigation.replace("UserModifyScreen", { user, onModify });

//   View -----------------------
    return (<Screen>
        <ModuleView
            module={user}
            onDelete={onDelete}
            onModify={goToModifyScreen}
        />
    </Screen>);
};

const styles = StyleSheet.create({});

export default UserViewScreen;