import { LogBox, Text } from "react-native";
import Screen from "../layout/Screen";
import UserList from "../entity/users/UserList";
import { Button, ButtonTray } from "../UI/Button";
import Icons from "../UI/Icons";
import useLoad from "../API/useLoad";

const UserListScreen = ({ navigation }) => {
    // Initialisation -------------
    LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);

    const usersEndpoint = 'https://softwarehub.uk/unibase/api/users';

    // State ----------------------
    const [users, setUsers, isLoading, loadUsers] = useLoad(usersEndpoint);

    // Handlers -------------------
    const handleDelete = (user) =>
        setUsers(users.filter((item) => item.UserID !== user.UserID));

    const onDelete = (user) => {
        handleDelete(user);
        navigation.goBack();
    };

    const handleAdd = (user) => setUsers([...users, user]);

    const handleModify = (updatedUser) => setUsers(
        users.map((user) => (user.UserID === updatedUser.UserID) ? updatedUser : user),
    );

    const onAdd = (user) => {
        handleAdd(user);
        navigation.goBack();
    };

    const onModify = (user) => {
        handleModify(user);
        navigation.replace('UserViewScreen', { user, onDelete, onModify });
    };

    const goToViewScreen = (user) =>
        navigation.navigate('UserViewScreen', { user, onDelete, onModify });

    const goToAddScreen = () =>
        navigation.navigate('UserAddScreen', { onAdd });

    const handleSwitchToModules = () => {
        navigation.navigate("ModuleListScreen");
    };

    // View -----------------------
    return (
        <Screen drawer={<Drawer onSwitch={handleSwitchToModules} currentView="users" />}>
            <ButtonTray>
                <Button label='Add' icon={<Icons.Add />} onClick={goToAddScreen} />
            </ButtonTray>

            {isLoading && <Text>Loading Records...</Text>}

            <UserList users={users} onSelect={goToViewScreen} />
        </Screen>
    );
};

export default UserListScreen;
