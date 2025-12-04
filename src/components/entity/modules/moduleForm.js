import {StyleSheet, Text, TextInput, View} from "react-native";
import {useState} from "react";
import Icons from "../../UI/Icons";
import Form from "../../UI/Form";

const defaultModule = {
    ModuleID: null,
    ModuleCode: null,
    ModuleName: null,
    ModuleLevel: null,
    ModuleLeaderID: null,
    ModuleLeaderName: null,
    ModuleImage: null,
};

const ModuleForm = ({onSubmit, onCancel}) => {

    //   Initialisation -------------

    defaultModule.ModuleID = Math.floor(100000 + Math.random() * 900000);
    defaultModule.ModuleImage = 'https://images.freeimages.com/images/small-preview/cf5/cellphone-1313194.jpg';


    //   State ----------------------

    const [module, setModule] = useState(defaultModule);

    //   Handlers -------------------

    const handleChange = (field, value) => {
        setModule({...module, [field]: value})
    };

    const handleSubmit = () => onSubmit(module);


    //   View -----------------------

    const submitLabel = 'Add';
    const submitIcon = <Icons.Add/>;


    return (
        <Form
            onSubmit={handleSubmit}
            onCancel={onCancel}
            submitLabel={submitLabel}
            submitIcon={submitIcon}
        >

            <Form.InputText
                label='Module Code'
                value={module.ModuleCode}
                onChange={(value) => handleChange('ModuleCode', value)}
            />

            <Form.InputText
                label='Module Name'
                value={module.ModuleName}
                onChange={(value) => handleChange('ModuleName', value)}
            />

            <Form.InputText
                label='Module Level'
                value={module.ModuleLevel}
                onChange={(value) => handleChange('ModuleLevel', value)}
            />

            <Form.InputText
                label='Module Leader Name'
                value={module.ModuleLeaderName}
                onChange={(value) => handleChange('ModuleLeaderName', value)}
            />

            <Form.InputText
                label='Module Image URL'
                value={module.ModuleImage}
                onChange={(value) => handleChange('ModuleImage', value)}
            />

            {/* This is to test whether the correct Data was being stored in Local State */}
            {/*<Text> {module.ModuleCode}  {module.ModuleName} </Text>*/}

        </Form>
    );
};

const styles = StyleSheet.create({
    formContainer: {},
    item: {},
});

export default ModuleForm;