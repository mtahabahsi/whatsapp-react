import React from 'react';
import { View, Text, Image, ScrollView, TextInput, SafeAreaView , StyleSheet} from 'react-native';

const App = () => {
  return (
<SafeAreaView style={[styles.area]}>
        <Text style={styles.title}>
          Welcome Back!
        </Text>
      </SafeAreaView>
  );
}
const styles = StyleSheet.create({

  area:{
    flex: 3.5,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  title:{
    fontFamily: 'Cochin',
    fontSize: 26,
    fontWeight: "bold"
  },

  





});
export default App;
