// import {useState, useEffect} from "react";
import {LogBox, Text} from "react-native";
import Screen from "../layout/Screen";
import {Button, ButtonTray} from "../UI/Button";
import Icons from "../UI/Icons";
import useLoad from "../API/useLoad";
import {createDrawerNavigator} from "@react-navigation/drawer";
import ModuleViewScreen from "./ModuleViewScreen";
import UserViewScreen from "./UserViewScreen";


const UserListScreen = ({navigation}) => {
//   Initialisation -------------
//    let modules = initialModules;
    LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);

    const Drawer = createDrawerNavigator();

    const usersEndpoint = 'https://softwarehub.uk/unibase/api/users';

//   State ----------------------

    const [users, setUsers, isLoading, loadUsers] = useLoad(usersEndpoint);

//   Handlers -------------------

    const handleDelete = (user) =>
        setUsers(users.filter((item) => item.UserID !== module.UserID));


    const onDelete = (user) => {
        handleDelete(user);
        navigation.goBack();
    }

    const handleAdd = (user) => setUsers([...users, user]);

    const handleModify = (updatedUser) => setUsers(
        users.map((user) => (module.UserID === updatedUser.UserID) ? updatedUser : user),
    );

    const onAdd = (user) => {
        handleAdd(user);
        navigation.goBack();
    };

    const onModify = (user) => {
        handleModify(user);
        navigation.replace('UserViewScreen', {user, onDelete, onModify});
    };

    const goToViewScreen = (module) =>
        navigation.navigate('UserViewScreen', {user, onDelete, onModify});

    const goToAddScreen = () =>
        navigation.navigate('UserAddScreen', {onAdd});

    const handleSwitchToModules = () => {
        navigation.navigate("UserListScreen");


//   View -----------------------

        return (

            <Drawer.Navigator id={"my-drawer"}>
                <Drawer.Screen name='Module Crudler' component={ModuleViewScreen}/>
                <Drawer.Screen name='User Crudler' component={UserViewScreen}/>


                <Screen>
                    {/*<RenderCount/>*/}
                    <ButtonTray>
                        <Button label='Add' icon={<Icons.Add/>} onClick={goToAddScreen}/>
                    </ButtonTray>

                    {isLoading && <Text>Loading Records...</Text>}

                    <UserList users={users} onSelect={goToViewScreen}/>
                </Screen>
            </Drawer.Navigator>
        );
    };
};

// const styles = StyleSheet.create({});

export default UserListScreen;


