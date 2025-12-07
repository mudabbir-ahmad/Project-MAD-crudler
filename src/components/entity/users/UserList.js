import {StyleSheet, ScrollView} from "react-native";
import UserItem from "./UserItem";
import React from "react";

const UserList = ({users, onSelect}) => {
    //   Initialisation -------------
    //   State ----------------------
    //   Handlers -------------------
    //   View -----------------------

    return (
        <ScrollView style={styles.usersContainer}>
            {users.map((user) => {
                return (
                    <UserItem
                        module={user}
                        key={user.UserCode}
                        onSelect={onSelect}
                    />
                )
            })
            }
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    usersContainer: {},
});

export default UserList;