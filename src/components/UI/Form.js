import {KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, View} from "react-native";
import {SelectList} from "react-native-dropdown-select-list";
import {Button, ButtonTray} from "./Button";
import Icons from "./Icons";


const Form = ({children, onSubmit, onCancel, submitLabel, submitIcon}) => {

    //   Initialisation -------------
    //   State ----------------------
    //   Handlers -------------------
    //   View -----------------------

    return (
        <KeyboardAvoidingView style={styles.formContainer}>

            <ScrollView contentContainerStyle={styles.formItems}>
                {children}
            </ScrollView>

            <ButtonTray>
                <Button label='Cancel' icon={<Icons.Close/>} onClick={onCancel}/>
                <Button label={submitLabel} icon={submitIcon} onClick={onSubmit}/>
            </ButtonTray>
        </KeyboardAvoidingView>
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
    const selectListData = options.map((option) => ({
        key: option.value,
        value: option.label,
    }));
    //   State ----------------------
    //   Handlers -------------------
    //   View -----------------------
    return (
        <View style={styles.item}>
            <Text style={styles.itemLabel}>{label}</Text>
            <SelectList
                setSelected={onChange}
                data={selectListData}
                placeholder={prompt}
                defaultOption={selectListData.find((item) => item.key === value)}
                boxStyles={styles.selectListBoxStyle}
                dropdownStyles={styles.selectListDropdownStyle}
            />
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
    selectListBoxStyle: {
        height: 50,
        backgroundColor: "whitesmoke",
        borderRadius: 7,
        borderWidth: 1,
        borderColor: "lightgrey",
        paddingLeft: 10,
        paddingTop: 15,
    },
    selectListDropdownStyle: {
        borderColor: "lightgrey",
    },
});

export default Form;