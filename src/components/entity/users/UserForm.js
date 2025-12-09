import {Text} from "react-native";
import {useState} from "react";
import Icons from "../../UI/Icons";
import Form from "../../UI/Form";
import useLoad from "../../API/useLoad";

const defaultUser = {
    UserID: null,
    UserFirstname: null,
    UserLastname: null,
    UserEmail: null,
    UserUsertypeID: null,
    UserYearID: null,
    UserLevel: null,
    UserImageURL: null,
    UserRegistered: null,
};

const UserForm = ({originalUser, onSubmit, onCancel}) => {
    // Initialisation -------------

    defaultUser.UserID = Math.floor(100000 + Math.random() * 900000);
    defaultUser.UserImageURL = 'https://images.generated.photos/tZmcC6WnzFmgAwRMsBnGYcmaj_NSktxhYzBfTqej_Lo/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDE3MjYzLmpwZw.jpg';
    defaultUser.UserRegistered = 0;

    const userTypesEndpoint = 'https://softwarehub.uk/unibase/api/usertypes';
    const yearsEndpoint = 'https://softwarehub.uk/unibase/api/years';

    const levels = [
        {value: 3, label: '3 (Foundation)'},
        {value: 4, label: '4 (First Year)'},
        {value: 5, label: '5 (Second Year)'},
        {value: 6, label: '6 (Third Year)'},
        {value: 7, label: '7 (Masters)'},
    ];

    // State ----------------------

    const [user, setUser] = useState(originalUser || defaultUser);

    const [userTypes, , isUsertypesLoading] = useLoad(userTypesEndpoint);
    const [years, , isYearsLoading] = useLoad(yearsEndpoint);

    // Handlers -------------------

    const handleChange = (field, value) => {
        setUser({...user, [field]: value});
    };

    const handleSubmit = () => onSubmit(user);

    // View -----------------------

    const submitLabel = originalUser ? 'Modify' : 'Add';
    const submitIcon = originalUser ? <Icons.Edit/> : <Icons.Add/>;

    const usertypeOptions = userTypes.map((usertype) => ({
        value: usertype.UsertypeID,
        label: usertype.UsertypeName
    }));

    const yearOptions = years.map((year) => ({
        value: year.YearID,
        label: year.YearName
    }));

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

            <Form.InputSelect
                label='User Type'
                value={user.UserUsertypeID}
                onChange={(value) => handleChange('UserUsertypeID', value)}
                prompt={'Select user type...'}
                options={usertypeOptions}
                isLoading={isUsertypesLoading}
            />

            <Form.InputSelect
                label='Level'
                value={user.UserLevel}
                onChange={(value) => handleChange('UserLevel', value)}
                prompt={'Select level...'}
                options={levels}
            />

            <Form.InputSelect
                label='Cohort Year'
                value={user.UserYearID}
                onChange={(value) => handleChange('UserYearID', value)}
                prompt={'Select cohort year...'}
                options={yearOptions}
                isLoading={isYearsLoading}
            />

            <Form.InputText
                label='User Image URL'
                value={user.UserImageURL}
                onChange={(value) => handleChange('UserImageURL', value)}
            />

            <Form.InputSelect
                label='Registered'
                value={user.UserRegistered}
                onChange={(value) => handleChange('UserRegistered', value)}
                prompt={'Select registered status...'}
                options={registeredOptions}
            />
        </Form>
    );
};

export default UserForm;
