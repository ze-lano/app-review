import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './homeStack';
import AboutStack from './aboutStack';
const Drawer = createDrawerNavigator();

export default function Rotas() {
  return (
    <NavigationContainer>
        <Drawer.Navigator>
        <Drawer.Screen name="HomeS" component={HomeStack} options={{headerShown: false}}/>
        <Drawer.Screen name="AboutS" component={AboutStack} options={{headerShown: false}}/>
        </Drawer.Navigator>
    </NavigationContainer>
  );
}
const headerConf = {
    backgroundColor: '#ddd', height: 60
}
