import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SplashScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  
  useEffect(() => {
   
    const timer = setTimeout(() => {
      navigation.replace('Main');  
    }, 500);

    return () => clearTimeout(timer); 
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/splash_screen.jpg')}  
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 200,
    height: 600,
  },
});

export default SplashScreen;
