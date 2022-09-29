
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cities from "../screens/Cities";
import City from "../screens/City";
import HomeScreen from "../screens/HomeScreen";


const stackNav = createNativeStackNavigator()


export default function StackNavigate() {
    return (
        <stackNav.Navigator initialRouteName="HomeScreen">
            <stackNav.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false,}}/>
            <stackNav.Screen name="Cities" component={Cities} options={{ headerShown: false}}/>
            <stackNav.Screen name="City" component={City} options={{headerShown: false}} initialParams={{ id: "" }}/>
        </stackNav.Navigator>
        )
    }
    
