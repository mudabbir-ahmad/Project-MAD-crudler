import {StyleSheet, ScrollView } from "react-native";
import modules from "../../../data/modules";
import ModuleItem from "./ModuleItem";
import React from "react";

const ModuleList = ({module, onSelect }) => {
    //   Initialisation -------------
    //   State ----------------------
    //   Handlers -------------------
    //   View -----------------------

    return(
        <ScrollView style={styles.modulesContainer}>
            {modules.map((module) => {
                return(
                    <ModuleItem module={module} key={module.ModuleCode} onSelect={onSelect} />
                )
            })
            }
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    modulesContainer: {

    },
});

export default ModuleList;