import AsyncStorage from '@react-native-community/async-storage';
import { Actions } from "react-native-router-flux";

export const _storeData = async (name,data) =>{
    try {
        await AsyncStorage.setItem(name,JSON.stringify(data))
        console.log('Data Stored');
    } catch (error) {
        console.log('ErrorStoreData', error)
    }
}

export const _getData = async (name) => {
    try {
        const value = await AsyncStorage.getItem(name)
        const item = JSON.parse(value)
        return item
        
    } catch(error) {
        console.log('ErrorGetData', error)
    }
}

export const _navigate = (to,param) =>{
    Actions[to](param);
}