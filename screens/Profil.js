import { View, TouchableOpacity} from 'react-native';

export default function Login({navigation}) {
  return (
    <View>
       <TouchableOpacity onPress={() => navigation.push('Register')}>
            
      </TouchableOpacity>
    </View>
  );
}
