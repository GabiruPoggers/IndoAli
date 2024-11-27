// Exemplo de como incluir o Footer na HomeScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';  
import Header from './Header'; // Importando o Header
import Footer from './footer'; // Importando o Footer

export default function HomeScreen({ route }) {
  const { username } = route.params;  // Recebe o nome do usuário da tela de login
  const [amount, setAmount] = useState('');
  const [dolar, setDolar] = useState(null);
  const [convertedValueDolar, setConvertedValueDolar] = useState(null);

  const fetchExchangeRates = async () => {
    try {
      const response = await fetch('https://api.exchangerate-api.com/v4/latest/BRL');
      const data = await response.json();
      setDolar(data.rates.USD); 
    } catch (error) {
      console.error("Erro ao buscar a cotação", error);
    }
  };

  useEffect(() => {
    fetchExchangeRates(); 
  }, []);

  const convertAmount = () => {
    if (!amount) {
      alert('Por favor, insira um valor em Reais');
      return;
    }

    const rawAmount = parseFloat(amount.replace(',', '.'));

    if (isNaN(rawAmount)) {
      alert('Por favor, insira um valor numérico válido');
      return;
    }

    const valueInDolar = rawAmount * dolar;
    setConvertedValueDolar(valueInDolar.toFixed(2));
  };

  const handleAmountChange = (text) => {
    const formattedText = text.replace(/[^0-9,]/g, '');
    setAmount(formattedText);
  };

  return (
    <View style={styles.container}>
      {/* Usando o Header na tela Home */}
      <Header title={`Bem-vindo, ${username}!`} />

      <View style={styles.mainContent}>
        {/* Container à esquerda */}
        <View style={styles.leftContainer}>
          <Text style={styles.leftText}>Olá, {username}! Aqui você pode converter o valor de Reais para Dólares.</Text>
        </View>

        {/* Formulário de conversão à direita */}
        <View style={styles.formContainer}>
          {/* Exibindo o nome do usuário */}
          <View style={styles.usernameContainer}>
            <Text style={styles.usernameText}>Nome registrado: {username}</Text>
          </View>

          <TextInput
            style={styles.input}
            placeholder="Digite o valor em R$"
            keyboardType="numeric"
            value={amount}
            onChangeText={handleAmountChange}
          />

          <TouchableOpacity style={styles.button} onPress={convertAmount}>
            <Text style={styles.buttonText}>Converter</Text>
          </TouchableOpacity>

          {convertedValueDolar && (
            <View style={styles.convertedContainer}>
              <Text style={styles.convertedText}>Valor em Dólar:</Text>
              <Text style={styles.convertedValue}>${convertedValueDolar}</Text>
            </View>
          )}
        </View>
      </View>

      {/* Adicionando o Footer ao final da tela */}
      <Footer />
    </View>
  );
}
