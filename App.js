import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import axios from 'axios';

const GROQ_API_KEY = process.env.EXPO_PUBLIC_GROQ_API_KEY;

export default function App() {
  const [ingredientes, setIngredientes] = useState('')
  const [receita, setReceita] = useState('')

  
  /* 
  | [x] Saber quando o botão foi clicado
    | [x] Pegar os ingredientes do input
    | [x] Enviar as infos para a IA
    | [x] Quando a IA responder, colocar na tela 
    */
   
   const api = axios.create({
     baseURL: "https://api.groq.com/openai/v1",
     headers: {
       "Content-Type": "application/json",
       "Authorization": `Bearer ${GROQ_API_KEY}`
     }
   })

  async function gerarReceita() {

    const reposta = await api.post('/chat/completions', {
      model: "llama-3.1-8b-instant",
      temperature: 1,
      max_tokens: 1024,
      messages: [
        {
          role: 'system',
          content: `Você é um chef criativo e experiente, especializado em criar receitas deliciosas e inovadoras. Sua tarefa é criar uma receita saborosa usando os ingredientes fornecidos pelo usuário. Use sua criatividade para combinar os ingredientes de maneira única e surpreendente, garantindo que o resultado final seja apetitoso e fácil de preparar. Considere técnicas culinárias, combinações de sabores e apresentação para tornar a receita irresistível. Seja detalhado nas instruções de preparo, incluindo tempos de cozimento, temperaturas e dicas para obter o melhor resultado possível.
          
          Use este formato:
          🍛 Receita: [Nome da Receita]
          ⏱️ Tempo [Tempo de Preparo]
          🍟 Porções [Quantidade]

          📝 INGREDIENTES:
          - [Ingrediente 1]
          - [Ingrediente 2]
          - [Ingrediente 3]
          - [Etc...]

          👩‍🍳 MODO DE PREPARO:
          1. [Passo 1]
          2. [Passo 2]
          3. [Passo 3]
          4. [Etc...]

          💡 DICA: Uma dica especial sobre a receita!
          `
        },
        {
          role: 'user',
          content: `Crie uma receita usando os seguintes ingredientes: ${ingredientes}`
        }
      ], 
    })

    setReceita(reposta.data.choices[0].message.content)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* HEARDER */}
      <View style={styles.header}>
        <Image 
          source={require('./assets/logo-chef-ia.png')} 
          style={styles.logo} 
        />
        <Text style={styles.subTitle}>Digite os ingredientes que você tem</Text>
      </View>

      {/* INPUT */}
      <TextInput
        style={styles.input}   
        placeholder="Ex: Frango, Arroz, Tomate, Cebola..."
        multiline
        placeholderTextColor="#888"
        value={ingredientes}
        onChangeText={setIngredientes}
      /> 

      {/* BOTÃO */}
      <TouchableOpacity       style={styles.button}
        onPress={gerarReceita}
      >
        <Text style={styles.buttonText}>Gerar Receita</Text>
      </TouchableOpacity>

      {/* RECEITA */}
      {/* If (Se a receita chegar da IA, Se não mostra o padrão)*/}
      {receita ? (
        <View style={styles.receitaWrapper}>
          <View style={styles.receitaHeader}>
            <Text style={styles.receitaHeaderText}>Sua Receita</Text>
          </View>

          <ScrollView style={styles.receitaContainer}>
            <Text style={styles.receita}>{receita}</Text>
          </ScrollView>
        </View>
      ) : ( 
      <View style={styles.placeholderContainer}>
        <Text style={styles.placeholderEmoji}>🍳</Text>
        <Text style={styles.placeholderText}>Sua receita aparecerá aqui</Text>
      </View> 
    )}
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    paddingHorizontal: 20,
  },

  header: {
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 20,
  },

  // Novo estilo para a logo no lugar do ejimo
  logo: {
    width: 150, // Ajuste o tamanho conforme preferir
    height: 150,
    marginBottom: 10,
  },

  subTitle: {
    fontSize: 16,
    color: '#888',
    marginTop: 5,
  },

  input: {
    backgroundColor: '#2d2d44',
    borderRadius: 15,
    padding: 15,
    fontSize: 16,
    color: '#fff',
    minHeight: 80,
    textAlignVertical: 'top',
    marginBottom: 15,
  },

  button: {
    backgroundColor: '#00ffff',
    paddingVertical: 16,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 15,
  },

  buttonText: {
    color: '#1a1a2e',
    fontWeight: 'bold',
    fontSize: 16,
  },

  receitaWrapper: {
    flex: 1,
    marginBottom: 30,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#2d2d44',
  },

  receitaHeader: {
    backgroundColor: '#e17055',
    paddingVertical: 12,
    paddingHorizontal: 15,
  },

  receitaHeaderText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  receitaContainer: {
    flex: 1,
    padding: 20,
  },

  receita: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 26,
  },

  placeholderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  placeholderEmoji: {
    fontSize: 64,
    marginBottom: 15,
  },

  placeholderText: {
    color: '#555',
    fontSize: 18,
  },

});
