import {Alert, StyleSheet, Text, View} from "react-native";
import FullWidthImage from "react-native-fullwidth-image";
import {Button, ButtonTray} from "../../UI/Button";
import Icons from "../../UI/Icons.js"

const ModuleView = ({module, onDelete}) => {
    //   Initialisation -------------
    //   State ----------------------
    //   Handlers -------------------

    const handleDelete = () => onDelete(module);

    const requestDelete = () => {
        Alert.alert(
            'Delete Warning',
            `Are you sure you want to delete module ${module.ModuleCode} ${module.ModuleName}?`,
            [
                {text: 'cancel'},
                {text: 'Delete', onPress: handleDelete}
            ]
        );
    }

    //   View -----------------------

    return (<View style={styles.container}>
        <FullWidthImage source={{uri: module.ModuleImage}} style={styles.image}/>

        <View style={styles.infoTray}>
            <Text style={styles.boldText}>View {module.ModuleCode} {module.ModuleName}</Text>
            <Text style={styles.text}>Level {module.ModuleLevel}</Text>
            <Text style={styles.Text}>
                {module.ModuleLeaderName} <Text style={styles.dimText}>(Module Leader)</Text>
            </Text>
        </View>

        <ButtonTray>
            <Button icon={<Icons.Edit/>} label={"Modify"}/>
            <Button
                icon={<Icons.Delete/>}
                label={"Delete"}
                // styleButton={{backgroundColor: 'mistyrose'}}
                // styleLabel={{color: 'red'}}
                onClick={requestDelete}
            />
        </ButtonTray>

    </View>);
};


const styles = StyleSheet.create({
    container: {
        gap: 15,
    }, infoTray: {
        gap: 5,
    }, image: {
        borderRadius: 3,
    }, text: {
        fontSize: 16,
    }, boldText: {
        fontSize: 16, fontWeight: 'bold',
    }, dimText: {
        color: "grey",
    }

});

export default ModuleView;