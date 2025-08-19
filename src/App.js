import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = ({ platform }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Mi service-center Front - {platform}
      </Text>
      <Text style={styles.subtitle}>
        ¡Proyecto configurado correctamente! 🎉
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});

export default App;