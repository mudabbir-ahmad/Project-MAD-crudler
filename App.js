import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ModuleListScreen from "./src/components/screens/ModuleListScreen";
import ModuleModifyScreen from "./src/components/screens/ModuleModifyScreen";
import ModuleViewScreen from "./src/components/screens/ModuleViewScreen";
import ModuleAddScreen from "./src/components/screens/ModuleAddScreen";
import UserModifyScreen from "./src/components/screens/UserModifyScreen";
import UserViewScreen from "./src/components/screens/UserViewScreen";
import UserAddScreen from "./src/components/screens/UserAddScreen";
import UserListScreen from "./src/components/screens/UserListScreen";
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const ModuleStack = () => (
    <Stack.Navigator
        initialRouteName='ModuleListScreen'
        screenOptions={{
            headerShown: false  // Hide stack headers
        }}
    >
        <Stack.Screen
            name="ModuleListScreen"
            component={ModuleListScreen}
        />
        <Stack.Screen
            name="ModuleAddScreen"
            component={ModuleAddScreen}
        />
        <Stack.Screen
            name="ModuleViewScreen"
            component={ModuleViewScreen}
        />
        <Stack.Screen
            name="ModuleModifyScreen"
            component={ModuleModifyScreen}
        />
    </Stack.Navigator>
);

const UserStack = () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: false  // Hide stack headers
        }}
    >
        <Stack.Screen
            name="UserListScreen"
            component={UserListScreen}
        />
        <Stack.Screen
            name="UserAddScreen"
            component={UserAddScreen}
        />
        <Stack.Screen
            name="UserViewScreen"
            component={UserViewScreen}
        />
        <Stack.Screen
            name="UserModifyScreen"
            component={UserModifyScreen}
        />
    </Stack.Navigator>
);

export const App = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                screenOptions={{
                    headerStyle: {backgroundColor: "black"},
                    headerTintColor: "white"
                }}
            >
                <Drawer.Screen
                    name="Module Crudler"
                    component={ModuleStack}
                />
                <Drawer.Screen
                    name="User Crudler"
                    component={UserStack}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default App;
