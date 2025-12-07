import {StyleSheet, ScrollView} from "react-native";
import UserItem from "./UserItem";
import React from "react";

const UserList = ({modules, onSelect}) => {
    //   Initialisation -------------
    //   State ----------------------
    //   Handlers -------------------
    //   View -----------------------

    return (
        <ScrollView style={styles.modulesContainer}>
            {modules.map((module) => {
                return (
                    <UserItem
                        module={module}
                        key={module.ModuleCode}
                        onSelect={onSelect}
                    />
                )
            })
            }
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    modulesContainer: {},
});

export default UserList;