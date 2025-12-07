import { Alert, StyleSheet, Text, View } from "react-native";
import FullWidthImage from "react-native-fullwidth-image";
import { Button, ButtonTray } from "../../UI/Button";
import Icons from "../../UI/Icons.js";

const UserView = ({ user, onDelete, onModify }) => {
    // Initialisation -------------

    const fullName = `${user.UserFirstname} ${user.UserLastname}`;

    // State ----------------------
    // Handlers -------------------

    const handleDelete = () => onDelete(user);

    const requestDelete = () => {
        Alert.alert(
            'Delete Warning',
            `Are you sure you want to delete user ${fullName}?`,
            [
                { text: 'Cancel' },
                { text: 'Delete', onPress: handleDelete }
            ]
        );
    };

    // View -----------------------

    return (
        <View style={styles.container}>
            <FullWidthImage source={{ uri: user.UserImageURL }} style={styles.image} />

            <View style={styles.infoTray}>
                <Text style={styles.boldText}>View {fullName}</Text>
                <Text style={styles.text}>{user.UserEmail}</Text>
                <Text style={styles.text}>Level {user.UserLevel}</Text>
                <Text style={styles.text}>
                    {user.UserUsertypeName || 'Unknown Type'} <Text style={styles.dimText}>(User Type)</Text>
                </Text>
            </View>

            <ButtonTray>
                <Button
                    icon={<Icons.Edit />}
                    label={"Modify"}
                    onClick={onModify}
                />
                <Button
                    icon={<Icons.Delete />}
                    label={"Delete"}
                    onClick={requestDelete}
                />
            </ButtonTray>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        gap: 15,
    },
    infoTray: {
        gap: 5,
    },
    image: {
        borderRadius: 3,
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
    }
});

export default UserView;
