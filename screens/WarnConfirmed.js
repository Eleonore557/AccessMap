import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react'


export default function WarnConfirmed({navigation}) {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.connect}>Avertir Accessible</Text>
      <Text style={styles.thank}>Merci ! Vous contribuer à faciliter l’accessibilité des espaces.</Text>
      <TouchableOpacity style={styles.formButton} onPress={() => navigation.navigate('WelcomePage')}>
        <Text style={styles.textButton}>Revenir à l'Accueil</Text>
      </TouchableOpacity>
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
  connect: {
    color: '#575DFB',
    fontSize: 30,
    fontWeight: 'bold',
    position: 'absolute',
    top: 20,
    left: 29
  },
  thank: {
    fontSize: 30,
  },
  formButton: {
    backgroundColor: '#575DFB',
    width: 340,
    padding: 12,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30
  },
  textButton: {
    color:'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});