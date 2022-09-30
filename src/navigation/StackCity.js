
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import City from "../screens/City";
import Comments from "../components/Comments";
const Stack = createNativeStackNavigator()


export default function StackCity({ route }) {
    return (
        <Stack.Navigator initialRouteName="Details">
            <Stack.Screen name="Details" options={{ headerShown: false, }}>
                {props => <City {...props} idCity={route.params.id} />}
            </Stack.Screen>
            <Stack.Screen name="Comments" component={Comments} />
        </Stack.Navigator>
    )
}
    
