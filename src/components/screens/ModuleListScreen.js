// import {useState, useEffect} from "react";
import {Alert, LogBox, Text} from "react-native";
import Screen from "../layout/Screen";
import ModuleList from "../entity/modules/ModuleList";
import {Button, ButtonTray} from "../UI/Button";
import Icons from "../UI/Icons";
import useLoad from "../API/useLoad";
import API from "../API/API";


const ModuleListScreen = ({navigation}) => {
//   Initialisation -------------
//    let modules = initialModules;
    LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);

    const modulesEndpoint = 'https://softwarehub.uk/unibase/api/modules';

//   State ----------------------

    const [modules, isLoading, loadModules] = useLoad(modulesEndpoint);

//   Handlers -------------------

    const onDelete = async (module) => {
        const deleteEndpoint = `${modulesEndpoint}/${module.ModuleID}`;
        const result = await API.delete(deleteEndpoint, module);
        if (result.isSuccess) {
            loadModules(modulesEndpoint)
            navigation.goBack();
        } else
            Alert.alert(result.message);
    }

    // This code is the old handleAdd which added to local state.
    // const handleAdd = (module) => setModules([...modules, module]);

    //new handleAdd which posts to the API
    const handleAdd = async (module) => {
        const result = await API.post(modulesEndpoint, module);
        if (result.isSuccess) {
            loadModules(modulesEndpoint)
            navigation.goBack();
        } else
            Alert.alert(result.message);
    };

    const onModify = async (module) => {
        const putEndpoint = `${modulesEndpoint}/${module.ModuleID}`;
        const result = await API.put(putEndpoint, module);
        if ( result.isSuccess ) {
            loadModules(modulesEndpoint)
            navigation.navigate('ModuleListScreen');
        } else
            Alert.alert(result.message);
    };


    const goToViewScreen = (module) =>
        navigation.navigate('ModuleViewScreen', {module, onDelete, onModify });

    const goToAddScreen = () =>
        navigation.navigate('ModuleAddScreen', {onAdd: handleAdd});


//   View -----------------------

    return (
        <Screen>
            {/*<RenderCount/>*/}
            <ButtonTray>
                <Button label='Add' icon={<Icons.Add/>} onClick={goToAddScreen}/>
            </ButtonTray>

            {isLoading && <Text>Loading Records...</Text>}

            <ModuleList modules={modules} onSelect={goToViewScreen}/>
        </Screen>
    );
};

// const styles = StyleSheet.create({});

export default ModuleListScreen;


