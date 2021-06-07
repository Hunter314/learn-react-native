import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import logo from './assets/bpe-logo-1.png'; 
import * as ImagePicker from 'expo-image-picker';
export default function App() {
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Please allow permission to access photos.");
      return;
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
  }
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo}/>
      
      <Text style={styles.instructions}>
        To share a photo from your phone with a friend, just press the button below!
      </Text>
      <TouchableOpacity
        onPress={openImagePickerAsync}
        style={styles.photo_button}>
        <Text style={styles.photo_button_text}> Pick a photo! </Text>
      </TouchableOpacity>
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
  logo: {
    width: 163,
    height: 194,
    marginBottom: 10,
    marginHorizontal: 15,
  },
  instructions: {
    color: '#888',
    fontsize: 18,
    marginHorizontal: 15,
  },
  photo_button: {
    backgroundColor: '#4a4',
    padding: 20,
    borderRadius: 30,
    margin: 15,
    width: 300,
  },
  photo_button_text: {
    fontSize: 20, 
    color: '#fff',
    textAlign: "center",
  },
});
