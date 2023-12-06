import {  View,  Button} from 'react-native';

export default function Register({navigation}) {
  return (
    <View>
      <Button title="Go to Welcome Page" onPress={() => navigation.navigate("Bienvenue")}/>
    </View>
  );
}


