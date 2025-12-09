import { Text } from "react-native";
import {useState} from "react";
import Icons from "../../UI/Icons";
import Form from "../../UI/Form";
import useLoad from "../../API/useLoad";

const defaultModule = {
    ModuleID: null,
    ModuleCode: null,
    ModuleName: null,
    ModuleLevel: null,
    ModuleYearID: null,
    ModuleLeaderID: null,
    ModuleImageURL: null,
};

const ModuleForm = ({originalModule, onSubmit, onCancel}) => {

    //   Initialisation -------------

    defaultModule.ModuleID = Math.floor(100000 + Math.random() * 900000);
    defaultModule.ModuleImageURL = 'https://images.freeimages.com/images/small-preview/cf5/cellphone-1313194.jpg';

    const yearsEndpoint = 'https://softwarehub.uk/unibase/api/years';

    const staffEndpoint = 'https://softwarehub.uk/unibase/api/users/staff';

    const levels = [
        {value: 3, label: '3 (Foundation)'},
        {value: 4, label: '4 (First Year)'},
        {value: 5, label: '5 (Second Year)'},
        {value: 6, label: '6 (Third Year)'},
        {value: 7, label: '7 (Masters)'},
    ];

    // const cohorts = [
    //     {value: 1, label: 'local 2022-23'},
    //     {value: 2, label: 'local 2023-24'},
    //     {value: 3, label: 'local 2024-25'},
    //     {value: 3, label: 'local 2025-26'},
    //     {value: 5, label: 'local 2026-27'},
    // ];


    //   State ----------------------

    const [module, setModule] = useState(originalModule || defaultModule);

    const [years, , isYearsLoading] = useLoad(yearsEndpoint);

    const [Leaders, , isLeadersLoading] = useLoad(staffEndpoint);

    //   Handlers -------------------

    const handleChange = (field, value) => {
        setModule({...module, [field]: value})
    };

    const handleSubmit = () => onSubmit(module);


    //   View -----------------------

    const submitLabel = originalModule ? 'Modify' : 'Add';
    const submitIcon = originalModule ? <Icons.Edit/> : <Icons.Add/>;

    const cohorts = years.map((year) => ({value: year.YearID, label: year.YearName}));
    const staff = Leaders.map((leader) => ({
        value: leader.UserID,
        label: ` ${leader.UserFirstname} ${leader.UserLastname} `
    }));

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
            {isYearsLoading ? <Text>Loading Levels...</Text> :
                <Form.InputSelect
                    label='Module Level'
                    prompt={'Select module level...'}
                    options={levels}
                    value={module.ModuleLevel}
                    onChange={(value) => handleChange('ModuleLevel', value)}
                    isLoading={isYearsLoading}
                />
            }

            <Form.InputSelect
                label='Module cohort'
                value={module.ModuleYearID}
                onChange={(value) => handleChange('ModuleYearID', value)}
                prompt={'Select module cohort...'}
                options={cohorts}
                isLoading={isYearsLoading}
            />

            <Form.InputSelect
                label='Module Leader'
                value={module.ModuleLeaderID}
                onChange={(value) => handleChange('ModuleLeaderID', value)}
                prompt={'Select module leader...'}
                options={staff}
                isLoading={isLeadersLoading}
            />


            <Form.InputText
                label='Module Image URL'
                value={module.ModuleImageURL}
                onChange={(value) => handleChange('ModuleImageURL', value)}
            />

            {/* This is to test whether the correct Data was being stored in Local State */}
            {/*<Text> {module.ModuleCode}  {module.ModuleName} </Text>*/}

        </Form>
    );
};

// const styles = StyleSheet.create({});

export default ModuleForm;