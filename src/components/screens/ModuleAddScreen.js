import {StyleSheet, Text, TextInput, View} from "react-native";
import Screen from "../layout/Screen";
import {Button, ButtonTray} from "../UI/Button";
import Icons from "../UI/Icons";
import {useState} from "react";

const defaultModule = {
    ModuleID: null,
    ModuleCode: null,
    ModuleName: null,
    ModuleLevel: null,
    ModuleLeaderID: null,
    ModuleLeaderName: null,
    ModuleImage: null,
};

export const ModuleAddScreen = ({navigation, route}) => {
//   Initialisation -------------
    const {onAdd} = route.params;

    defaultModule.ModuleID = Math.floor(100000 + Math.random() * 900000);
    defaultModule.ModuleImage = 'https://images.freeimages.com/images/small-preview/cf5/cellphone-1313194.jpg';

//   State ----------------------
    const [module, setModule] = useState(defaultModule);

//   Handlers -------------------

    const handleAdd = () => onAdd(module);
    const handleCancel = navigation.goBack;

    const handleChange = (field, value) => {setModule( {...module, [field]: value} )};

//   View -----------------------
    return (
        <Screen style={styles.container}>

            <View style={styles.item}>
                <Text style={styles.itemLabel}>Module Code</Text>
                <TextInput
                    value={module.ModuleCode}
                    onChangeText={ (value) => handleChange('ModuleCode',value) }
                    style={styles.itemTextInput}
                />
            </View>

            <View style={styles.item}>
                <Text style={styles.itemLabel}>Module Name</Text>
                <TextInput
                    value={module.ModuleName}
                    onChangeText={ (value) => handleChange('ModuleName',value) }
                    style={styles.itemTextInput}
                />
            </View>

            <View style={styles.item}>
                <Text style={styles.itemLabel}>Module Level</Text>
                <TextInput
                    value={module.ModuleLevel}
                    onChangeText={ (value) => handleChange('ModuleLevel',value) }
                    style={styles.itemTextInput}
                />
            </View>

            <View style={styles.item}>
                <Text style={styles.itemLabel}>Module Leader Name</Text>
                <TextInput
                    value={module.ModuleLeaderName}
                    onChangeText={ (value) => handleChange('ModuleLeaderName',value) }
                    style={styles.itemTextInput}
                />
            </View>

            <View style={styles.item}>
                <Text style={styles.itemLabel}>Module Image URL</Text>
                <TextInput
                    value={module.ModuleImage}
                    onChangeText={ (value) => handleChange('ModuleImage',value) }
                    style={styles.itemTextInput}
                />
            </View>




            {/* This is to test whether the correct Data was being stored in Local State */}
            {/*<Text> {module.ModuleCode}  {module.ModuleName} </Text>*/}

            <ButtonTray>
                <Button label='Cancel' onClick={handleCancel}/>
                <Button label='Add' icon={<Icons.Add/>} onClick={handleAdd}/>
            </ButtonTray>
        </Screen>
    );
};

const styles = StyleSheet.create({
    item: {},
    itemLabel: {
        color: 'gray',
        fontSize: 16,
        margin: 5,
    },
    itemTextInput: {
        height: 50,
        paddingLeft: 10,
        fontSize: 16,
        backgroundColor: 'white',
        borderRadius: 7,
        borderWidth: 1,
        borderColor: 'lightgray',
    },
});

export default ModuleAddScreen;