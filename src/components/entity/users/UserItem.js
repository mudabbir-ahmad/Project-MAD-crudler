import {StyleSheet, Text, View, Pressable} from "react-native";

const UserItem = ({user, onSelect}) => {
    //   Initialisation -------------
    //   State ----------------------
    //   Handlers -------------------
    //   View -----------------------

    return (
        <Pressable key={user.UserCode} onPress={() => onSelect(user)}>
            <View style={styles.usersItem}>
                <Text style={styles.text}>
                    {user.UserCode} {user.UserName}
                </Text>
            </View>
        </Pressable>
    );
};


const styles = StyleSheet.create({
    usersItem: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: "lightgray",
    },
    text: {
        fontSize: 18,
    },
});

export default UserItem;