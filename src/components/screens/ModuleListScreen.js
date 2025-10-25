import { useState } from "react";
import { StyleSheet } from "react-native";
import Screen from "../layout/Screen";
import ModuleList from "../entity/modules/ModuleList";
import initialModules from "../../data/modules.js";
import RenderCount from "../UI/RenderCount";
import ModuleViewScreen from "./ModuleViewScreen";

const ModuleListScreen = ({navigation}) => {
//   Initialisation -------------
//    let modules = initialModules;

//   State ----------------------
    const [ modules, setModules] = useState(initialModules);


//   Handlers -------------------

    const handleDelete = (module) =>
        setModules(modules.filter((item) => item.ModuleID !== module.ModuleID));

    const handleSelect = (module) => navigation.navigate('ModuleViewScreen', { module });
//   View -----------------------

  return (
    <Screen>
        <RenderCount />
        <ModuleList modules={modules} onSelect={handleSelect} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleListScreen;


