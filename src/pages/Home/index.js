import React, { useState } from 'react';
import { View, 
        TouchableOpacity, 
        Text, 
        StyleSheet } from 'react-native';

import * as Animatable from 'react-native-animatable';

const Home = ({ navigation }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Defina como `false` se o usuário não estiver logado
  const userName = "Thales Juan"; // Substitua pelo nome real do usuário se estiver logado

  const [optionsVisible, setOptionsVisible] = useState(false);

  const toggleOptions = () => {
    setOptionsVisible(!optionsVisible);
  };

  const handleAddRemedio = () => {
    // Lógica para adicionar lembrete de remédio
    alert('Adicionar Lembrete de Remédio');
  };

  const handleAddPaciente = () => {
    // Lógica para adicionar paciente
    alert('Adicionar Paciente');
  };

  const handleVerAgenda = () => {
    // Lógica para ver a agenda
    alert('Ver Agenda');

    navigation.navigate('Agenda')
  };

  const handleSair = () => {
    // Lógica para deslogar o usuário
    setIsLoggedIn(false);
    // Navegar de volta para a tela de login
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      {/* Saudação no canto superior esquerdo */}
      <View style={styles.greetingContainer}>
        <Text style={styles.greetingText}>
          Olá, {isLoggedIn ? `${userName}` : 'bem vindo(a)'}
        </Text>
      </View>

      {/* Conteúdo da tela Home */}
      {/* ... */}

      {/* Botão redondo animado no canto direito inferior */}
      <TouchableOpacity style={styles.addButton} onPress={toggleOptions}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>

      {/* Opções animadas */}
      <Animatable.View
        animation={optionsVisible ? 'fadeInDown' : 'fadeOutUp'}
        duration={500}
        style={optionsVisible ? styles.optionsContainer : styles.hiddenOptionsContainer}
      >
        <TouchableOpacity style={styles.optionButton} onPress={handleAddRemedio}>
          <Text style={styles.optionButtonText}>Adicionar Lembrete de Remédio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton} onPress={handleAddPaciente}>
          <Text style={styles.optionButtonText}>Add. Paciente</Text>
        </TouchableOpacity>
        {isLoggedIn && (
          <>
            <TouchableOpacity style={styles.optionButton} onPress={handleVerAgenda}>
              <Text style={styles.optionButtonText}>Ver Agenda</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton} onPress={handleSair}>
              <Text style={styles.optionButtonText}>Sair</Text>
            </TouchableOpacity>
          </>
        )}
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  greetingText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 90,
    right: 20,
    width: 200,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
    padding: 10,
  },
  hiddenOptionsContainer: {
    display: 'none',
  },
  optionButton: {
    paddingVertical: 8,
  },
  optionButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Home;
