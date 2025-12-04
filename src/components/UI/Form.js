import {StyleSheet, Text, TextInput, View} from "react-native";
import {Button, ButtonTray} from "./Button";
import Icons from "./Icons";

const Form = ({children, onSubmit, onCancel, submitLabel, submitIcon}) => {

    //   Initialisation -------------
    //   State ----------------------
    //   Handlers -------------------
    //   View -----------------------

    return (
        <View style={styles.formContainer}>

            <View style={styles.formItems}>
                {children}
            </View>

            <ButtonTray>
                <Button label='Cancel' icon={<Icons.Close/>} onClick={onCancel}/>
                <Button label={submitLabel} icon={submitIcon} onClick={onSubmit}/>
            </ButtonTray>
        </View>
    );
};

const InputText = ({label, value, onChange}) => {
    //   Initialisation -------------
    //   State ----------------------
    //   Handlers -------------------
    //   View -----------------------
    return (
        <View style={styles.item}>
            <Text style={styles.itemLabel}>{label}</Text>
            <TextInput
                value={value}
                onChangeText={onChange}
                style={styles.itemTextInput}
            />
        </View>
    )
};

// Compose components
Form.InputText = InputText;

// Styles

const styles = StyleSheet.create({
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
    formItems: {
        gap: 5,
    },
    formContainer: {
        gap: 10
    },

});

export default Form;