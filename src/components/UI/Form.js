import {StyleSheet, Text, TextInput, View} from "react-native";
import {Picker} from "@react-native-picker/picker";

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

const InputSelect = ({label, prompt, options, value, onChange}) => {
    //   Initialisation -------------
    //   State ----------------------
    //   Handlers -------------------
    //   View -----------------------
    return (
        <View style={styles.item}>
            <Text style={styles.itemLabel}>{label}</Text>
            <Picker
                mode="dropdown"
                selectedValue={value}
                onValueChange={onChange}
                style={styles.itemPickerStyle}
            >
                <Picker.Item
                    value={null}
                    label={prompt}
                    style={styles.itemPickerPromptStyle}
                />
                {
                    options.map((option, index) => <Picker.Item
                        key={index}
                        value={option.value}
                        label={option.label}
                    />)
                }
            </Picker>
        </View>
    )
};

// Compose components
Form.InputText = InputText;
Form.InputSelect = InputSelect;

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
    itemPickerStyle: {
        height: 50,
        backgroundColor: 'whitesmoke',
    },
    itemPickerPromptStyle: {
        color: 'gray',
    },
});

export default Form;