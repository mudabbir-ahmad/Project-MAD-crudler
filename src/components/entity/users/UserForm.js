import { Text } from "react-native";
import { useState } from "react";
import Icons from "../../UI/Icons";
import Form from "../../UI/Form";
import useLoad from "../../API/useLoad";

const defaultUser = {
    UserID: null,
    UserFirstname: null,
    UserLastname: null,
    UserEmail: null,
    UserRegistered: null,
    UserLevel: null,
    UserYearID: null,
    UserUsertypeID: null,
    UserImageURL: null,
    UserUsertypeName: null,
    UserYearName: null,
};

const UserForm = ({ originalUser, onSubmit, onCancel }) => {
    // Initialisation -------------

    const yearsEndpoint = 'https://softwarehub.uk/unibase/api/years';
    const usertypesEndpoint = 'https://softwarehub.uk/unibase/api/usertypes';

    const [years, , isYearsLoading] = useLoad(yearsEndpoint);
    const [usertypes, , isUsertypesLoading] = useLoad(usertypesEndpoint);

    // State ----------------------

    const [user, setUser] = useState(originalUser || {
        ...defaultUser,
        UserID: Math.floor(100000 + Math.random() * 900000),
        UserImageURL: 'https://images.freeimages.com/images/small-preview/cf5/cellphone-1313194.jpg',
        UserRegistered: new Date().toISOString()
    });

    // Handlers -------------------

    const handleChange = (field, value) => {
        setUser({ ...user, [field]: value });
    };

    const handleSubmit = () => onSubmit(user);

    // View -----------------------

    const submitLabel = originalUser ? 'Modify' : 'Add';
    const submitIcon = originalUser ? <Icons.Edit /> : <Icons.Add />;

    const levels = [
        { value: '4', label: 'Level 4' },
        { value: '5', label: 'Level 5' },
        { value: '6', label: 'Level 6' },
        { value: '7', label: 'Level 7' }
    ];

    return (
        <Form
            onSubmit={handleSubmit}
            onCancel={onCancel}
            submitLabel={submitLabel}
            submitIcon={submitIcon}
        >
            <Form.InputText
                label='First Name'
                value={user.UserFirstname}
                onChange={(value) => handleChange('UserFirstname', value)}
            />

            <Form.InputText
                label='Last Name'
                value={user.UserLastname}
                onChange={(value) => handleChange('UserLastname', value)}
            />

            <Form.InputText
                label='Email'
                value={user.UserEmail}
                onChange={(value) => handleChange('UserEmail', value)}
            />

            {isYearsLoading ? (
                <Text>Loading Levels...</Text>
            ) : (
                <Form.InputSelect
                    label='User Level'
                    prompt='Select user level...'
                    options={levels}
                    value={user.UserLevel}
                    onChange={(value) => handleChange('UserLevel', value)}
                    isLoading={isYearsLoading}
                />
            )}

            <Form.InputSelect
                label='Year/Cohort'
                value={user.UserYearID}
                onChange={(value) => handleChange('UserYearID', value)}
                prompt='Select year/cohort...'
                options={years}
                isLoading={isYearsLoading}
            />

            {isUsertypesLoading ? (
                <Text>Loading User Types...</Text>
            ) : (
                <Form.InputSelect
                    label='User Type'
                    value={user.UserUsertypeID}
                    onChange={(value) => handleChange('UserUsertypeID', value)}
                    prompt='Select user type...'
                    options={usertypes}
                    isLoading={isUsertypesLoading}
                />
            )}

            <Form.InputText
                label='Profile Image URL'
                value={user.UserImageURL}
                onChange={(value) => handleChange('UserImageURL', value)}
            />
        </Form>
    );
};

export default UserForm;
