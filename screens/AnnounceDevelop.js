import { Alert, StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, Modal, Pressable} from 'react-native';
import React, {useState} from 'react'


export default function AnnounceDevelop({navigation}) {

    const [modalVisible, setModalVisible] = useState(false);

  return (
        <ScrollView>
            <Image source={require('../assets/handi-audio.jpeg')} style={styles.imgHandi}/>
            <Text style={styles.txtTitle}>Porte qui s’ouvre automatiquement au Bâtiment C</Text>
            <Image source={require('../assets/univ-p8.jpeg')} style={styles.imgPhoto}/>
            <Text numberOfLines={1} style={styles.txtLine}>               
                _________________________________________
            </Text>
            <Text style={styles.txtDescription}>Il s’uffit de s’approcher pour que celle-ci s’ouvre. Mais Attention !!! Elle déconne dés fois.</Text>
            <TouchableOpacity style={styles.btnSignal}>
                <Text style={styles.txtSignal} onPress={() => setModalVisible(true)}>Signaler ?</Text>
            </TouchableOpacity>
            <Modal  animationType="slide" transparent = {true} visible={modalVisible}  
                    onRequestClose={() => { Alert.alert('Modal has been closed.'); 
                    setModalVisible(!modalVisible);}}>
                <View style={styles.viewModal}>
                    <View style={styles.underViewModal}>
                        <Pressable style={[styles.button, styles.buttonClose]} onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  imgPhoto: {
    height: 350,
    width: 350,
    marginLeft: 20
  },
  imgHandi: {
    height: 50,
    width: 50,
    position:'absolute',
    top:5,
    right:5,
  },
  btnSignal: {
    borderRadius: 30,
    width: 150,
    height: 50,
    backgroundColor: '#FF1414',
    marginLeft: 230,
    marginTop: 30
  },
  txtSignal: {
    textAlign: 'center',
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 15,
    left: 45,
    color: 'white'
  },
  txtTitle:{
      marginBottom: 30,
      marginTop: 80,
      fontSize: 20,
      textAlign: 'center'
    },
    txtLine: {
        marginLeft: 40,
        marginTop: 10,
        marginBottom: 10
    },
    txtDescription: {
        marginLeft: 20,
        marginTop: 10
    },
    viewModal:{
        backgroundColor: '#000000aa',
        flex: 1,
    },
    underViewModal:{
        backgroundColor: '#ffffff',
        margin: 50,
        borderRadius: 10,
        flex: 1,

    }

});