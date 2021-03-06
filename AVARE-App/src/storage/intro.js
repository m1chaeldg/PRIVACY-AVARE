import { store } from '../../App'
import AsyncStorage from '@react-native-community/async-storage';
import { dontShowAgain } from '../redux/modules/disclaimer/action';

export let intro = async () => {
    console.log("Intro-Funktion");
    try {
        console.log("Wert lesen:");
        let value = await AsyncStorage.getItem("disclaimer");
        console.log(value + "<-gelesener Wert");
        if (value == "nicht mehr zeigen!") {
            console.log("Disclaimer wird nicht mehr gezeigt");
            store.dispatch(dontShowAgain());
        }
    } catch (e) {
        console.log("Fehler aufgetreten:" + e);
    }

    console.log("async Storage geladen");


}