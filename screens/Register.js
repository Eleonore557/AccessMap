import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import React, {useState, useRef} from 'react'
import {Picker} from '@react-native-picker/picker';


export default function Register() {

  const [selectedLanguage, setSelectedLanguage] = useState();
  const pickerRef = useRef();

function open() {
pickerRef.current.focus();
}

function close() {
pickerRef.current.blur();
}
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.connect}>S'inscrire</Text>
      <Text style={styles.connectYou}>Créez un compte pour accéder à{"\n"}toutes les fonctionnalités AccessMap !</Text>
      <View style={styles.viewNom}>
        <Text aria-label="Nom" style={styles.label}>Nom</Text>
        <Image source={require('../arobase.png')} style={styles.imgInput}/>
        <TextInput
          style={styles.formInput}
          autoCapitalize="words"
          placeholder="Ex: Ramirez"
        />
      </View>
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
      <View style={styles.viewPassword}>
        <Text aria-label="Mot de Passe" style={styles.emailLabel}>Mot de Passe</Text>
        <Image source={require('../cadenas.png')} style={styles.imgInput}/>
        <TextInput 
          style={styles.formInput}
          secureTextEntry 
          autoCapitalize="none"
          placeholder="................"
        />
      </View>   
      <View style={styles.picker}>
        <Text aria-label="Mot de Passe" style={styles.labelHandicap}>Type de Handicap</Text>
        <Picker
          ref={pickerRef} selectedValue={selectedLanguage} onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
          style={{ height: 50, width: 350 }}>
          <Picker.Item label="Moteur" value="moteur" />
          <Picker.Item label="Maladie Invalivante" value="maladie-invalidante" />
          <Picker.Item label="Visuel" value="visuel" />
          <Picker.Item label="Auditif" value="auditif" />
          <Picker.Item label="Mental" value="mental" />
          <Picker.Item label="Psychique" value="psychique" />
        </Picker>
      </View>
      <TouchableOpacity style={styles.formButton}>
        <Text style={styles.textButton}>S'inscrire</Text>
      </TouchableOpacity>
      <View style={styles.flexRow}>
        <Text>Vous avez déjà un compte?         </Text><Text style={styles.login} onPress={() => navigation.navigate("WelcomePage")}>Se connecter</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'center'
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
  },
  textButton: {
    color:'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  connect: {
    color: '#575DFB',
    fontSize: 30,
    fontWeight: 'bold',
    position: 'absolute',
    top: 20,
    left: 29
  },
  connectYou: {
    position: 'absolute',
    top: 60,
    left: 29,
  },
  btnGoogleContinue: {
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 2,
    width: 340,
    height: 50,
    marginBottom: 35,
  },
  imgGoogle: {
    height: 20,
    width: 20,
    position: 'absolute',
    left: 60,
    bottom: 15,
  },
  txtGoogleContinue: {
    textAlign: 'center',
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 15,
    left: 95
  },
  flexRow: {
    flexDirection: 'row',
  }, 
  login: {
    color: '#575DFB',
    textDecorationLine: 'underline',
  },
  marginBottom: {
    marginBottom: 30,
  },
  label: {
    marginRight: 'auto',
    marginLeft: 18
  },
  emailLabel:{
    marginRight: 'auto',
    marginLeft: 18,
    marginTop: 13
  },
  labelHandicap:{
    marginRight: 'auto',
    marginLeft: 18,
    position: 'absolute',
    top : 56
  },
  forgot: {
    color: '#575DFB',
    textDecorationLine: 'underline',
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
  picker: {
    position: 'absolute',
    top: 330
  }, 
  viewPassword: {
    marginBottom : 170
  },
  viewNom: {
    marginTop: 70
  }
});