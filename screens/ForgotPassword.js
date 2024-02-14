import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function ForgotPassword({ navigation }) {
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.connect}>Mot de passe oublié?</Text>
      <Text style={styles.connectYou}>Tapez votre email afin d'obtenir un code de vérification !</Text>
      <View>
        <Text aria-label="Email" style={styles.label}>Email</Text>
        <Image source={require('../arobase.png')} style={styles.imgInput}/>
        <TextInput
          style={styles.formInput}
          keyboardType="email-address" 
          autoCapitalize="none"
          autoComplete='email'
          placeholder="Ex: condiem@example.com"
        />
      </View>
      <TouchableOpacity style={styles.formButton} onPress={() => navigation.navigate('VerificationCode')}>
        <Text style={styles.textButton}>Envoyer</Text>
      </TouchableOpacity>
    </View>
  );
}

// Styles déclarés à l'extérieur de la fonction du composant
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#575DFB',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  connect: {
    color: '#575DFB',
    fontSize: 30,
    fontWeight: 'bold',
    position: 'absolute',
    top: 50
  },
  connectYou: {
    position: 'absolute',
    top: 100,
  },
  label: {
    marginRight: 'auto',
    marginLeft: 18
  },
  imgInput:{
    position: 'absolute',
    left: 25,
    bottom: 23,
    height: 20,
    width: 20
  },
  formInput: {
    borderColor: '#575DFB',
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 22,
    width: 340,
    padding: 10,
    margin: 10,
    paddingLeft: 48,
    fontSize: 20,
  },
  formButton: {
    backgroundColor: '#575DFB',
    width: 340,
    padding: 12,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20
  },
  textButton: {
    color:'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});