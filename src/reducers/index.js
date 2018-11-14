import { combineReducers } from 'redux'
import authReducer from './authReducer'
import LibraryReducer from './LibraryReducer'
import SelectionReducer from './SelectionReducer'
//import ManagerReducer from  './ManagerReducer'
export default combineReducers({
    libraries: LibraryReducer,
    selectedLibraryId:SelectionReducer,
    auth:authReducer
    //manager:ManagerReducer
});