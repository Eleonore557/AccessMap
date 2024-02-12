import WelcomePage from '../WelcomePage';
import Login from '../Login';
import Register from '../Register';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LaunchPage from '../LaunchPage';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Bienvenue" component={WelcomePage} />
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Register' component={Register} />
      <Stack.Screen name='LaunchPage' component={LaunchPage} />
    </Stack.Navigator>
  );
}