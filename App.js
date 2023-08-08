/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const App = () => {
  return (
    <View style={styles.container}>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Icon style={styles.vert} name="coffee" size={35} color="brown"></Icon>
      <Text></Text>
      <Text style={styles.derry}>KAYIT OL</Text>

      <Text></Text>
      <Text></Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Adiniz:</Text>
        <TextInput style={styles.textInput} placeholder="Adınız" >

        </TextInput>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Soyadiniz:</Text>
        <TextInput style={styles.textInput} placeholder="Soyadınız" >
        </TextInput>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>E-mail:</Text>
        <TextInput style={styles.textInput} placeholder="E-mail adresi" >
        </TextInput>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Sifre:</Text>
        <TextInput style={styles.textInput} placeholder="Şifre" >
        </TextInput>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Sifre Tekrar:</Text>
        <TextInput style={styles.textInput} placeholder="Şifre Tekrar" >
        </TextInput>
      </View>
      <Pressable style={styles.button}>
        <Text style={styles.button}onPress={() => Alert.alert('Kayıt İşlemi Yapılıyor')}>Kayıt Ol</Text> 
      </Pressable>
      <View style={styles.frame}></View> 
      <View style={styles.zamp}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#dcb899'
  },
  frame: {
    borderBlockColor:"black",
    position: 'absolute',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 8,
  },
  zamp: {
    backgroundColor: 'brown',
    color: 'black',
    width: 450,
    height: 100,
    flex: 1,
  },
  button: {
    borderRadius: 'black',
    color: 'brown',
    borderRadius: 30,
    fontFamily: 'EduSABeginner-VariableFont_wght',
    fontSize: 28,
  },
  vert: {
    position: 'relative',
    fontFamily: 'EduSABeginner-VariableFont_wght',
  },
  derry: {
    fontFamily: "EduSABeginner-VariableFont_wght",
    color: 'brown',
    fontSize: 35,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: '50px',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    fontFamily: 'EduSABeginner-VariableFont_wght',
    borderTopColor:'#dcb899',
  },
  label: {
    textDecorationLine: 'underline',
    marginRight: 10,
    flex: 0.75,
    color: 'brown',
    fontSize: 20,
    fontFamily: "EduSABeginner-VariableFont_wght",
  },
  textInput: {
    borderTopColor:'#dcb899',
    borderWidth: 1,
    borderColor: 'brown',
    borderRadius: 5,
    padding: 10,
    width: 250,
    borderRadius: 10,
    color: 'brown',
  },
});
export default App;
