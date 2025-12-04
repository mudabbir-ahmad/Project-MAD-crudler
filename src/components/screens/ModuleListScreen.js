import {useState} from "react";
import {LogBox, StyleSheet} from "react-native";
import Screen from "../layout/Screen";
import ModuleList from "../entity/modules/ModuleList";
import initialModules from "../../data/modules.js";
// import RenderCount from "../UI/RenderCount";
import {Button, ButtonTray} from "../UI/Button";
import Icons from "../UI/Icons";

const ModuleListScreen = ({navigation}) => {
//   Initialisation -------------
//    let modules = initialModules;
    LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);

//   State ----------------------
    const [modules, setModules] = useState(initialModules);


//   Handlers -------------------

    const handleDelete = (module) =>
        setModules(modules.filter((item) => item.ModuleID !== module.ModuleID));


    const onDelete = (module) => {
        handleDelete(module);
        navigation.goBack();
    }

    const handleAdd = (module) => setModules([ ...modules, module]);

    const onAdd = (module) => {
        handleAdd(module);
        navigation.goBack();
    };

    const goToViewScreen = (module) =>
        navigation.navigate('ModuleViewScreen', {module, onDelete});

    const goToAddScreen = () => navigation.navigate('ModuleAddScreen', {onAdd});

//   View -----------------------

    return (
        <Screen>
            {/*<RenderCount/>*/}
            <ButtonTray>
                <Button label='Add' icon={<Icons.Add/>} onClick={goToAddScreen} />
            </ButtonTray>
            <ModuleList modules={modules} onSelect={goToViewScreen} />
        </Screen>
    );
};

const styles = StyleSheet.create({});

export default ModuleListScreen;


