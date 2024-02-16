import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image} from 'react-native';
import React from 'react'


export default function AdminLogin({navigation}) {

  return (
       <View>
           <Image source={require('../assets/user.png')} style={styles.imgInput}/>
           <Text style={styles.title}>Connexion Admin</Text>
           <View>
                <Text aria-label="Email" style={styles.emailLabel}>Email</Text>
                <TextInput
                style={styles.formInput}
                keyboardType="email-address" 
                autoCapitalize="none"
                autoComplete='email'
                placeholder="Ex: condiem@example.com"
                />
            </View>
            <View>
                <Text aria-label="Mot de passe" style={styles.passwordLabel}>Mot de Passe</Text>
                <TextInput 
                style={styles.formInput}
                secureTextEntry 
                autoCapitalize="none"
                placeholder="................"
                />
            </View>
            <TouchableOpacity style={styles.btnConnect}>
                <Text style={styles.txtConnect}>Se Connecter</Text>
            </TouchableOpacity>
       </View>
  );
}

const styles = StyleSheet.create({
    imgInput:{
        height: 100,
        width: 100,
        margin: 'auto',
        marginTop: 50,
        marginBottom: 10
    },
    title:{
        margin: 'auto',
        fontSize: 30
    },
    formInput:{
        margin: 'auto',
        backgroundColor: 'white',
        width: 500,
        height: 40,
        borderWidth: 1,
        paddingLeft: 10
    },
    emailLabel:{
        margin: 'auto',
        paddingRight: 462,
        marginBottom: 5,
        marginTop: 10,
        fontSize: 18
    },
    passwordLabel:{
        margin: 'auto',
        paddingRight: 389,
        marginBottom: 5,
        marginTop: 12,
        fontSize: 18,
    },
    btnConnect:{
        margin: 'auto',
        marginTop: 30,
        width: 500,
        height: 40,
        borderWidth: 1,
        backgroundColor: '#67A1B1'
    },
    txtConnect:{
        margin: 'auto',
        fontSize: 18,
        color : 'white'
    }
});