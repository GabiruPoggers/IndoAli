import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, ScrollView } from 'react-native';
import { styles } from './styles';
import Header from './Header'; // Importando o Header
import Footer from './footer'; // Importando o Footer

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    if (username) {
      navigation.navigate('Home', { username });
    } else {
      alert('Por favor, insira seu nome');
    }
  };

  return (
    <View style={styles.container}>
      {/* Usando o Header na tela de Login */}
      <Header title="Bem-vindo ao Conversor Indo Ali" />

      <ScrollView contentContainerStyle={styles.mainContent}>
        {/* Container à esquerda */}
        <View style={styles.leftContainer}>
          <Text style={styles.leftText}>
            Olá! Bem-vindo ao nosso conversor de moedas. Digite seu nome para começar.
          </Text>
        </View>

        {/* Formulário de login à direita */}
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome"
            value={username}
            onChangeText={setUsername}
            placeholderTextColor="#aaa"
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Adicionando o Footer */}
      <Footer />
    </View>
  );
}
