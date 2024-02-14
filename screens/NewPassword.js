import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function NewPassword({ navigation }) {
  const [newPassword, setNewPassword] = useState('');

  return (
    <View style={styles.container}>
        <Text style={styles.connect}>Mot de passe oublié?</Text>
        <Text style={styles.connectYou}>Définissez votre nouveau mot de passe pour vous connecter à votre compte !</Text>
        <View>
            <Text aria-label="Mot de Passe" style={styles.label}>Entrez un nouveau mot de passe</Text>
            <Image source={require('../cadenas.png')} style={styles.imgInput}/>
            <TextInput
            style={styles.formInput}
            onChangeText={setNewPassword}
            value={newPassword}
            secureTextEntry
            placeholder="................"
            />
        </View>
      <TouchableOpacity style={styles.formButton} onPress={() => navigation.popToTop()}>
        <Text style={styles.textButton}>Confirmer</Text>
      </TouchableOpacity>
    </View>
  );
}

// la déclaration des styles à l'extérieur de la fonction du composant
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    borderColor: '#575DFB',
    borderWidth: 1,
    padding: 10,
    marginTop:20,
    marginBottom: 20,
    borderRadius: 5,
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