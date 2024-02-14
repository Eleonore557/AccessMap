import WelcomePage from '../WelcomePage';
import Login from '../Login';
import Register from '../Register';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LaunchPage from '../LaunchPage';
import VerificationCode from '../VerificationCode';
import ForgotPassword from '../ForgotPassword';
import NewPassword from '../NewPassword';
import WarnConfirmed from '../WarnConfirmed';
import AnnounceDevelop from '../AnnounceDevelop';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='AnnounceDevelop' component={AnnounceDevelop} />
      <Stack.Screen name='WarnConfirmed' component={WarnConfirmed} />
      <Stack.Screen name='WelcomePage' component={WelcomePage} />
      <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
      <Stack.Screen name="Bienvenue" component={WelcomePage} />
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Register' component={Register} />
      <Stack.Screen name='LaunchPage' component={LaunchPage} />
      <Stack.Screen name='NewPassword' component={NewPassword} />
      <Stack.Screen name='VerificationCode' component={VerificationCode} />
    </Stack.Navigator>
  );
}