import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';

const WelcomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to the App!</Text>
      <Text style={styles.paragraph}>
        This is the welcome screen where you can find information about the app. 
        We hope you have a great experience using our app and exploring its features.
      </Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>See Features</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
    padding: 20,
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    color:"#144052",
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
    marginHorizontal: 20,
    color:"#171e20",
  },
  button: {
    marginTop: 20, // Add margin to the top of the button
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  
});

export default WelcomeScreen;
