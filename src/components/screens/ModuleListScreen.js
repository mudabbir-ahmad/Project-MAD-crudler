import {StyleSheet } from "react-native";

import Screen from "../layout/Screen";
import initialModules from "../../data/modules.js";
import ModuleList from "../entity/modules/ModuleList";


export const ModuleListScreen = () => {
//   Initialisation -------------
    const modules = initialModules;

//   State ----------------------
//   Handlers -------------------
    const handleSelect = (module) => alert(`Item ${module.ModuleName} selected`);

//   View -----------------------

  return (
    <Screen>
        <ModuleList modules={{modules}} onSelect={handleSelect} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleListScreen;


