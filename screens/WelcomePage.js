import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

export default function WelcomePage({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.bienvenue}>Bienvenue</Text>
      <Text style={styles.accessMap}>AccessMap</Text>
      <Text style={styles.amelioreAccessibilite}>Améliorer l’accessibilité dans {"\n"} l’espace public</Text>
      <Text style={styles.demarrer}>Démarrer...</Text>
      <TouchableOpacity style={styles.btnGoogleContinue}>
        <Image source={require('../google.png')} style={styles.imgGoogle}/>
        <Text style={styles.txtGoogleContinue} onPress={() => navigation.navigate("LaunchPage")}>Continuer avec Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnEmailContinue} onPress={() => navigation.push('Login')}>
        <Image source={require('../at.png')} style={styles.imgGoogle}/>
        <Text style={styles.txtEmailContinue}>Continuer avec Email</Text>
      </TouchableOpacity>
      <View style={styles.flexRow}>
        <Text>Vous n'avez pas de compte ? </Text><Text style={styles.login} onPress={() => navigation.navigate("Register")}>S’inscrire</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  login: {
    color: '#575DFB',
    textDecorationLine: 'underline',
  },
  accessMap: {
    color: '#575DFB',
    fontSize: 40,
    marginRight: 'auto',
    marginLeft: 30,
    fontWeight: 'bold',
   
  },
  bienvenue: {
    marginRight: 'auto',
    marginLeft: 30,
    fontSize: 25,
  }, 
  amelioreAccessibilite: {
    marginRight: 'auto',
    marginLeft: 30,
    fontSize: 17,
  }, 
  demarrer: {
    marginRight: 'auto',
    marginLeft: 30,
    marginTop: 50,
    marginBottom: 20,
    fontSize: 17,
  },
  btnGoogleContinue: {
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 2,
    width: 340,
    height: 40,
    marginBottom: 10,
  },
  btnEmailContinue: {
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 2,
    width: 340,
    height: 40,
    marginBottom: 30,
  },
  txtGoogleContinue: {
    textAlign: 'center',
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 10,
    left: 95
  },
  txtEmailContinue: {
    textAlign: 'center',
    paddingTop: 7,
    fontWeight: 'bold',
  },
  flexRow: {
    flexDirection: 'row',
  }, 
  imgGoogle: {
    height: 20,
    width: 20,
    position: 'absolute',
    left: 60,
    bottom: 10,
  }
});
