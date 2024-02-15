import { StyleSheet, View, Text, TouchableOpacity, ScrollView, TextInput} from 'react-native';
import React from 'react'
import { Table, Row, Rows } from 'react-native-table-component';


export default function AdminDashboard({navigation}) {

  const elementButton = (value) => (
    <View style = {styles.viewContainer}>
      <TouchableOpacity onPress={() => this._alertIndex(value)} style={styles.btnSee}>
        <View>
          <Text style={styles.btnText}>Voir</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this._alertIndex(value)} style={styles.btnSuspend}>
        <View>
          <Text style={styles.btnText}>Suspendre</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this._alertIndex(value)} style={styles.btnPreserve}>
        <View>
          <Text style={styles.btnText}>Conserver le compte</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  const headers = ['ID', 'Date', 'Raison', 'Statut', 'Actions'];
  const row = [['001', '13-02-2024', 'Harcelement', 'En attente', elementButton('1')],
               ['002','14-02-2024', 'Contenu inapproprié', 'Examiné', elementButton('1')], 
               ['003', '15-02-2024', 'Violence graphique', 'En attente', elementButton('1')], 
               ['004', '16-02-2024', 'Spam', 'Examiné', elementButton('1')], 
               ['005', '17-02-2024', 'Usurpation d\'identité', 'En attente', elementButton('1')]];

              

  
  return (
        <ScrollView>
          <Text style={styles.title}>Tableau de bord Administration</Text>
          <View style={styles.viewFlex}>
            <Text style={styles.signal}>Signalement en attente: 5</Text>
            <Text style={styles.account}>Comptes suspendus récemment: 2</Text>
          </View>
          <View style={styles.viewFlexSearch}>
            <TextInput
            style={styles.formInput}
            autoCapitalize="words"
            placeholder="Ex: Rechercher par ID, date..."
            />
            <TouchableOpacity style={styles.formButton}>
              <Text style={styles.textButton}>Rechercher un Compte</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
              <Row data={headers} style={styles.head} textStyle={styles.text}/>
              <Rows data={row} textStyle={styles.text}/>
            </Table>
          </View>
        </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 },
  btnSee: {
    backgroundColor: 'blue',
    width: 50,
    padding: 12,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
    height : 50
  },
  btnSuspend: {
    backgroundColor: 'red',
    width: 80,
    padding: 12,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
    height : 50
  },
  btnPreserve: {
    backgroundColor: 'green',
    width: 80,
    padding: 12,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
    height : 50
  },
  btnText: {
    color : 'white',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
  viewContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  title:{
    fontSize: 40,
    padding: 20
  },
  signal: {
    fontSize : 20,
    paddingLeft : 80
  },
  account: {
    fontSize : 20,
    paddingLeft: 350
  },
  formInput: {
    borderColor: '#575DFB',
    borderWidth: 1,
    fontSize: 22,
    width: 340,
    padding: 10,
    margin: 10,
    fontSize: 20,
  },
  formButton: {
    backgroundColor: '#575DFB',
    width: 250,
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
  viewFlex:{
    flexDirection: "row"
  },
  viewFlexSearch:{
    flexDirection: "row",
    marginTop: 30
  },

});