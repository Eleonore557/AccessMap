import { View, TouchableOpacity, Image } from 'react-native';
import Arrow from './components/arrow';

export default function Login({navigation}) {
  return (
    <View>
       <TouchableOpacity onPress={() => navigation.push('Register')}>
            <Arrow source={require('../left-arrow.png')}/>
      </TouchableOpacity>
    </View>
  );
}


