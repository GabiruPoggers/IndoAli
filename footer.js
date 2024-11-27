// Footer.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>© 2024 Conversor Indo Ali</Text>
      
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,  // Fixa o footer na parte inferior da tela
    left: 0,
    right: 0,
    backgroundColor: '#2c3e50',  // Cor escura, mais sóbria
    alignItems: 'center',
    paddingVertical: 20,
    width: '100%',
  },
  text: {
    fontSize: 14,
    color: '#bdc3c7',  // Texto cinza claro
    marginBottom: 10,  // Espaçamento entre o texto e os links
  },
  linksContainer: {
    flexDirection: 'row',  // Exibe os links lado a lado
    justifyContent: 'space-evenly',  // Espaçamento uniforme entre os links
    width: '80%',  // Limita a largura dos links
  },
  linkButton: {
    padding: 5,
  },
  linkText: {
    fontSize: 14,
    color: '#ecf0f1',  // Texto branco suave para os links
    textDecorationLine: 'underline',  // Adiciona sublinhado aos links
  },
});
