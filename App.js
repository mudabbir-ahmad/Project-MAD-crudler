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


const Stack = createNativeStackNavigator();

export const App = () => {
//   Initialisation -------------
//   State ----------------------
//   Handlers -------------------
//   View -----------------------
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='ModuleListScreen'
                screenOptions={{
                    headerStyle: {backgroundColor: "black"},
                    headerTintColor: "white"
                }}
            >
                <Stack.Screen
                    name="ModuleListScreen"
                    component={ModuleListScreen}
                    options={{title: 'List Modules'}}
                />

                <Stack.Screen
                    name="ModuleAddScreen"
                    component={ModuleAddScreen}
                    options={{title: 'Add Modules'}}
                />

                <Stack.Screen
                    name="ModuleViewScreen"
                    component={ModuleViewScreen}
                    options={{title: 'View Modules'}}
                />

                <Stack.Screen
                    name="ModuleModifyScreen"
                    component={ModuleModifyScreen}
                    options={{title: 'Modify Modules'}}
                />

                {/*USERS SECTION BELOW*/}

                <Stack.Screen
                    name="UserListScreen"
                    component={UserListScreen}
                    options={{title: 'List Users'}}
                />

                <Stack.Screen
                    name="UserAddScreen"
                    component={UserAddScreen}
                    options={{title: 'Add Users'}}
                />

                <Stack.Screen
                    name="UserViewScreen"
                    component={UserViewScreen}
                    options={{title: 'View Users'}}
                />

                <Stack.Screen
                    name="UserModifyScreen"
                    component={UserModifyScreen}
                    options={{title: 'Modify Users'}}
                />


            </Stack.Navigator>
        </NavigationContainer>
    )
        ;
};

export default App;