import {Picker} from '@react-native-picker/picker';
import React, { useState, useRef } from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';

export default function LaunchPage() {
   
    const [selectedLanguage, setSelectedLanguage] = useState();
    const pickerRef = useRef();

function open() {
  pickerRef.current.focus();
}

function close() {
  pickerRef.current.blur();
}

  return(
  <View>
     <Picker
     ref={pickerRef}
  selectedValue={selectedLanguage}
  onValueChange={(itemValue, itemIndex) =>
    setSelectedLanguage(itemValue)
  }>
  <Picker.Item label="Java" value="java" />
  <Picker.Item label="JavaScript" value="js" />
</Picker>

      
      </View>
  )

};