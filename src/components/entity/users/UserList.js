import {StyleSheet, ScrollView} from "react-native";
import UserItem from "./UserItem";
import React from "react";

const UserList = ({users, onSelect}) => {
    // Initialisation -------------
    // State ----------------------
    // Handlers -------------------
    // View -----------------------

    return (
        <ScrollView style={styles.container}>
            {
                users.map((user) => (
                    <UserItem
                        key={user.UserID}
                        user={user}
                        onSelect={onSelect}
                    />
                ))
            }
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {},
});

export default UserList;
