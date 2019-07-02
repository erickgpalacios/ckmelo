import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from '../views/Login';
import Home from '../views/Home';
import Check from '../views/Check';
import Report from '../views/Report';
const AppNavigator = createStackNavigator({
    Login: {
        screen: Login
    },
   Home: {
        screen: Home,
    },
    Check: {
        screen: Check,
    },
    Report: {
        screen: Report,
    }
    },
    {
        // initialRouteName: 'PantallaPrincipal',
    });
export default createAppContainer(AppNavigator);
