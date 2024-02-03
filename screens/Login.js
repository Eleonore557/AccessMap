import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Pressable, TouchableOpacity, Image } from 'react-native';


export default function Login() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.connect}>Se connecter</Text>
      <Text style={styles.connectYou}>Connectez-vous maintenant pour{"\n"}accéder votre profil !</Text>
      <View>
        <Text aria-label="Votre Email" style={styles.label}>Votre Email</Text>
        <Image source={require('../arobase.png')} style={styles.imgInput}/>
        <TextInput
          style={styles.formInput}
          keyboardType="email-address" 
          autoCapitalize="none"
          autoComplete='email'
          placeholder="Ex: condiem@example.com"
        />
      </View>
      <View>
        <Text aria-label="Votre Email" style={styles.emailLabel}>Votre Mot de Passe</Text>
        <Image source={require('../cadenas.png')} style={styles.imgInput}/>
        <TextInput 
          style={styles.formInput}
          secureTextEntry 
          autoCapitalize="none"
          placeholder="................"
        />
      </View>
      <Text style={styles.forgot}>Mot de passe oublié?</Text>
      <TouchableOpacity style={styles.formButton}>
        <Text style={styles.textButton}>Se connecter</Text>
      </TouchableOpacity>
      <Text numberOfLines={1} style={styles.marginBottom}>               
      _____________________________________________
     </Text>
     <TouchableOpacity style={styles.btnGoogleContinue}>
        <Image source={require('../google.png')} style={styles.imgGoogle}/>
        <Text style={styles.txtGoogleContinue}>Continuer avec Google</Text>
      </TouchableOpacity>
      <View style={styles.flexRow}>
        <Text>Vous n'avez pas de compte ? </Text><Text style={styles.login} onPress={() => navigation.navigate("Register")}>S’inscrire</Text>
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
    marginTop: 30
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
    left: 29
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
  }
});