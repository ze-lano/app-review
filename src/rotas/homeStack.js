import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../telas/home';
import ReviewDetails from '../telas/reviewDetails';

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
            <Stack.Navigator screenOptions={{ headerShown: false, }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="ReviewDetails" component={ReviewDetails} options={{headerShown: false}}/>
            </Stack.Navigator>
    )
}

const headerConf = {
    backgroundColor: '#ddd', height: 60
}
