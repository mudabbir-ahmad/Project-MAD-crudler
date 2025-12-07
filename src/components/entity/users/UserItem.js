import {StyleSheet, Text, View, Pressable} from "react-native";
import useLoad from "../../API/useLoad";

const UserItem = ({user, onSelect}) => {
    //   Initialisation -------------

    const usertypesEndpoint = 'https://softwarehub.uk/unibase/api/usertypes';
    const [usertypes] = useLoad(usertypesEndpoint);

    const getUserTypeName = (usertypeID) => {
        const usertype = usertypes.find(type => type.UsertypeID === usertypeID);
        return usertype ? usertype.UsertypeName : "Unknown";
    };

    const usertypeName = getUserTypeName(user.UserUsertypeID);

    //   State ----------------------
    //   Handlers -------------------
    //   View -----------------------

    return (
        <Pressable key={user.UserID} onPress={() => onSelect(user)}>
            <View style={styles.userItem}>
                <Text style={styles.text}>
                    {user.UserFirstname} {user.UserLastname} ({usertypeName})
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
