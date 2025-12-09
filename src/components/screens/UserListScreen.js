import {Alert, LogBox, Text} from "react-native";
import Screen from "../layout/Screen";
import UserList from "../entity/users/UserList";
import {Button, ButtonTray} from "../UI/Button";
import Icons from "../UI/Icons";
import useLoad from "../API/useLoad";
import API from "../API/API";

const UserListScreen = ({navigation}) => {
    // Initialisation -------------
    LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);

    const usersEndpoint = 'https://softwarehub.uk/unibase/api/users';

    // State ----------------------
    const [users, , isLoading, loadUsers] = useLoad(usersEndpoint);

    // Handlers -------------------

    const handleAdd = async (user) => {
        const result = await API.post(usersEndpoint, user);
        if (result.isSuccess) {
            loadUsers(usersEndpoint)
            navigation.goBack();
        } else
            Alert.alert(result.message);
    };

    const onModify = async (user) => {
        const putEndpoint = `${usersEndpoint}/${user.UserID}`;
        const result = await API.put(putEndpoint, user);
        if ( result.isSuccess ) {
            loadUsers(usersEndpoint)
            navigation.navigate('UserListScreen');
        } else
            Alert.alert(result.message);
    };

    const onDelete = async (user) => {
        const deleteEndpoint = `${usersEndpoint}/${user.UserID}`;
        const result = await API.delete(deleteEndpoint, user);
        if (result.isSuccess) {
            loadUsers(usersEndpoint)
            navigation.goBack();
        } else
            Alert.alert(result.message);
    }

    const goToViewScreen = (user) =>
        navigation.navigate('UserViewScreen', {user, onDelete, onModify});

    const goToAddScreen = () =>
        navigation.navigate('UserAddScreen', {onAdd: handleAdd});


    // View -----------------------
    return (
        <Screen>
            <ButtonTray>
                <Button label='Add' icon={<Icons.Add/>} onClick={goToAddScreen}/>
            </ButtonTray>

            {isLoading && <Text>Loading Records...</Text>}

            <UserList users={users} onSelect={goToViewScreen}/>
        </Screen>
    );
};

export default UserListScreen;
