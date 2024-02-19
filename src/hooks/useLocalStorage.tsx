import {useState} from 'react'

export interface StorageInterface {
    keyName: string;
    defaultValue: any;
}
interface ValueInterface {
    newValue: any;
}
export const useLocalStorage=(data: StorageInterface)=>{
    const [storageValue, setStorageValue] = useState(() =>{ 
        try {
            const value = window.localStorage.getItem(data.keyName)
            const parseValue = JSON.parse(value? value.toString(): "") as StorageInterface
            if(parseValue?.defaultValue){
                return JSON.parse(value? value : "");
            }else { 
                window.localStorage.setItem(data.keyName, JSON.stringify(data.defaultValue));
                return data.defaultValue
            }
        } catch (error) {
            return data.defaultValue;
        }
    })
    const setValue = (newValue:ValueInterface) =>{
        try {
            window.localStorage.setItem(data.keyName, JSON.stringify(newValue))
        } catch (error) {
            console.log(error)
        }
        setStorageValue(newValue)
    }
    return [storageValue, setValue]
}