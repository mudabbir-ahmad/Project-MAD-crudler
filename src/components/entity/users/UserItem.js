import { StyleSheet, Text, View, Pressable } from "react-native";

const UserItem = ({ user, onSelect }) => {
    // Initialisation -------------
    // State ----------------------
    // Handlers -------------------
    // View -----------------------

    return (
        <Pressable key={user.UserID} onPress={() => onSelect(user)}>
            <View style={styles.userItem}>
                <Text style={styles.text}>
                    {user.UserFirstname} {user.UserLastname}
                </Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    userItem: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: "lightgray",
    },
    text: {
        fontSize: 18,
    },
});

export default UserItem;
