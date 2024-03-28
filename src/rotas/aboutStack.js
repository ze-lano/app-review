import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import About from '../telas/about';

const Stack = createStackNavigator();

export default function AboutStack() {
    return (
            <Stack.Navigator screenOptions={{ headerShown: false, }}>
                <Stack.Screen name="About" component={About} />
            </Stack.Navigator>
    )
}

const headerConf = {
    backgroundColor: '#ddd', height: 60
}
