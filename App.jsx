import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Details from './components/details';

export default function App() {
  let [showscreen,upshowscreen]=useState(false);

  if(showscreen){
   return <Details/>
  }

  return (
    <View style={styles.container}>
      
      {/* Top Image Section */}
      <View style={styles.imageContainer}>
        <Image 
          style={styles.image} 
          source={require('./fruits2.png')} 
          resizeMode="contain"
        />
      </View>

      {/* Bottom White Card */}
      <View style={styles.card}>
        <Text style={styles.title}>
          Get The Freshest Fruit Salad Combo
        </Text>
        <Text style={styles.subtitle}>
          We deliver the best and freshest fruit salad in town. 
          Order for a combo today!!!
        </Text>

        {/* Button */}
        <TouchableOpacity style={styles.button} onPress={()=>upshowscreen(true)}>
          <Text style={styles.buttonText}>Let’s Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA451', // Orange background
  },
  imageContainer: {
    flex: 1.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: "80%",
    height: "80%",
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 25,
    paddingTop: 100,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: "center",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '300',
    textAlign: 'center',
    marginBottom: 30,
    color: '#555',
  },
  button: {
    backgroundColor: '#FFA451',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 15,
  },
  buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
  },
});
