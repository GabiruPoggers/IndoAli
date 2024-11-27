import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Header({ title }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    backgroundColor: '#34495e',  // Cor escura e suave, mais minimalista
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 15,
    position: 'absolute',
    top: 0,
    zIndex: 1000,
  },
  backButton: {
    position: 'absolute',
    left: 15,
    top: 15,
  },
  backText: {
    fontSize: 24,
    color: '#ecf0f1',  // Cor clara para contraste com fundo escuro
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ecf0f1',  // Texto claro para um bom contraste
  },
});
