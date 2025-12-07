import { StyleSheet, Text, View } from "react-native";
import FullWidthImage from "react-native-fullwidth-image";
import Icons from "../../UI/Icons";
import { ListItem } from "../../UI/List";

const UserItem = ({ user, onSelect }) => {
    // Initialisation -------------

    const fullName = `${user.UserFirstname} ${user.UserLastname}`;

    // State ----------------------
    // Handlers -------------------

    const handleSelect = () => onSelect(user);

    // View -----------------------

    return (
        <ListItem onPress={handleSelect}>
            <FullWidthImage
                source={{ uri: user.UserImageURL }}
                style={styles.image}
            />

            <View style={styles.infoTray}>
                <Text style={styles.boldText}>{fullName}</Text>
                <Text style={styles.text}>{user.UserEmail}</Text>
                <Text style={styles.text}>
                    {user.UserUsertypeName || 'Unknown Type'}
                    <Text style={styles.dimText}> (Level {user.UserLevel})</Text>
                </Text>
            </View>

            <Icons.Forward />
        </ListItem>
    );
};

const styles = StyleSheet.create({
    image: {
        borderRadius: 3,
    },
    infoTray: {
        gap: 5,
        flex: 1,
    },
    text: {
        fontSize: 16,
    },
    boldText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    dimText: {
        color: "grey",
    },
});

export default UserItem;
