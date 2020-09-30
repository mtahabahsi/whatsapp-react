import React from 'react';
import { Text, TextInput, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import Title from './title.js';

const App = () => {
  return (
    <SafeAreaView style={styles.content}>
      <SafeAreaView style={[styles.head,]}>
      <Image
        style={styles.tinyLogo}
        source={require('./logo.jpeg')}
      />
      </SafeAreaView >
      <Title/>
      <SafeAreaView style={[styles.area]}>
        <Text style={styles.loginText}>
          Please login to your account.
        </Text>
      </SafeAreaView>
      <SafeAreaView style={[styles.area,]}>
        <TextInput

          style={styles.input}
          placeholder='Email Adresinizi giriniz'
          placeHolderTextColor='#D4D4D4'
        >
        </TextInput>
      </SafeAreaView>
      <SafeAreaView style={[styles.area,]}>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder='Şifrenizi giriniz'
          placeHolderTextColor='#D4D4D4'
        >
        </TextInput>
      </SafeAreaView>
      <SafeAreaView style={[styles.area,]}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Giriş Yap</Text>
        </TouchableOpacity>
      </SafeAreaView>
      <SafeAreaView style={[styles.area,]}>
        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.buttonText}>Kayıt Ol</Text>
        </TouchableOpacity>
      </SafeAreaView>

      
      <SafeAreaView style={[styles.head,styles.forgetPassButton]}>
      <TouchableOpacity  >
          <Text style={styles.forgetPass}>Şifremi Unuttum</Text>
        </TouchableOpacity>

      </SafeAreaView>

    </SafeAreaView>

  );
}
const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  area: {
    flex: 5,

  },
  head: {
    flex: 10,
  },


  loginText: {
    fontStyle: 'italic',
    fontFamily: 'Cochin',
    fontSize: 26,
    color: 'gray',
    marginLeft: 10,
    marginBottom: 'auto',
    marginTop: 'auto',

  },

  input: {

    height: 50,
    borderColor: 'gray',
    borderBottomWidth: 1,
    borderBottomColor: '#9CA5B2',
    marginHorizontal: 30,
    color: '#000000',
  },
  buttonText: { color: '#ffffff', fontSize: 22, fontWeight: 'bold' , fontFamily:'Cochin'},
  button: {
    flex: 1,
    backgroundColor: '#3bbbd0',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 60,
    marginVertical: 7,
    borderRadius: 10,
  },

  registerButton: {
    flex: 1,
    backgroundColor: '#3bbbd0',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 100,
    marginVertical: 15,
    borderRadius: 10,
  },

  forgetPassButton:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  forgetPass:{
    color:"black",
    
  }




});
export default App;
