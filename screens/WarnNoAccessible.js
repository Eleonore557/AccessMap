import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, {useState, useRef} from 'react'
import {Picker} from '@react-native-picker/picker';


export default function WarnNoAccessible() {

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
      <ScrollView>
        <Text style={styles.connect}>Avertir Non Accessible</Text>
        <Text style={styles.connectYou}>Avertir un élément qui vous semble pas accessible ! :(</Text>
        <Text style={styles.titleMap}>Université Paris 8 Vincennes - Saint-Denis</Text>
        <View style={styles.viewNom}>
            <Text aria-label="Nom" style={styles.label}>Titre</Text>
            <Text aria-label="Nom" style={styles.labelRight}>Obligatoire</Text>
            <TextInput
            style={styles.formInput}
            autoCapitalize="words"
            placeholder="Ex: Ramirez"
            />
        </View>
        <View>
            <Text aria-label="Email" style={styles.label}>Description</Text>
            <Text aria-label="Nom" style={styles.labelRight}>Obligatoire</Text>
            <TextInput
            style={styles.largeFormInput}
            multiline
            placeholder="Ex: Il s’uffit de s’approcher pour que celle-ci s’ouvre. 
            Mais Attention !!! Elle déconne dés fois."
            />
        </View> 
        <View style={styles.picker}>
            <Text aria-label="Mot de Passe" style={styles.labelHandicap}>Type de Handicap</Text>
            <Text aria-label="Nom" style={styles.labelRightHandicap}>Obligatoire</Text>
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
        <View style={styles.viewNom}>
        <Image source={require('../assets/image.png')} style={styles.imgInput}/>
        <TextInput
          style={styles.formInputRight}
          autoCapitalize="words"
          placeholder="Insérer une image ici"
        />
        <Image source={require('../assets/telecharger.png')} style={styles.imgInputLeft}/>
        </View>
        <TouchableOpacity style={styles.formButton}>
            <Text style={styles.textButton}>Publier votre avertissement</Text>
        </TouchableOpacity>
      </ScrollView>
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
    fontSize: 20,
  },
  largeFormInput: {
    borderColor: '#575DFB',
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 22,
    width: 340,
    padding: 10,
    margin: 10,
    fontSize: 20,
    height: 120
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
  },
  connectYou: {
    position: 'absolute',
    top: 60,
  },
  titleMap: {
    position: 'absolute',
    top: 90,
    fontSize: 18,
    left : 10,
    marginTop: 10
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
    marginLeft: 18,
    position: 'absolute',
  },
  labelRight: {
    marginLeft: 'auto',
    color: 'red'
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
    top : 57
  },
  labelRightHandicap: {
    color: 'red',
    position: 'absolute',
    left: 290,
    top: 55
  },
  imgInput:{
    position: 'absolute',
    left: 25,
    bottom: 23,
    height: 20,
    width: 20
  },
  imgInputLeft:{
    position: 'absolute',
    right: 25,
    bottom: 23,
    height: 20,
    width: 20
  },  
  picker: {
    position: 'absolute',
    top: 330,
  }, 
  viewPassword: {
    marginBottom : 170
  },
  viewNom: {
    marginTop: 140
  },
  formInputRight: {
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
});