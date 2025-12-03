import {MaterialIcons} from '@expo/vector-icons'

const Icons = {};

const Edit = () => <MaterialIcons name='edit' size={16}/>;
const Delete = () => <MaterialIcons name='delete' size={16}/>;
const Add = () => <MaterialIcons name='add' size={16}/>;

//compose
Icons.Edit = Edit;
Icons.Delete = Delete;
Icons.Add = Add;


export default Icons;