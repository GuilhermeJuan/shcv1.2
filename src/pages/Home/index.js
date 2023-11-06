import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import LinearGradient from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';

const Home = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userName = "Thales Juan";

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleMenuItemPress = (item) => {
    if (item.key === 'remedio') {
      alert('Adicionar Lembrete de Remédio');

    } else if (item.key === 'paciente') {
      alert('Adicionar Paciente');

    } else if (item.key === 'agenda') {
      alert('Ver Agenda');
      navigation.navigate('Agenda');
      
    } else if (item.key === 'sair') {
      setIsLoggedIn(false);
      navigation.navigate('Login');
    }

    setModalVisible(false);
  };

  const data = [
    { key: 'remedio', label: 'Adicionar Lembrete de Remédio' },
    { key: 'paciente', label: 'Adicionar Paciente' },
    { key: 'agenda', label: 'Ver Agenda' },
    { key: 'sair', label: 'Sair' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.greetingContainer}>
        <Text style={styles.greetingText}>
          Olá, {isLoggedIn ? `${userName}` : 'bem vindo(a)'}
        </Text>
      </View>

      <Animatable.View animation="flipInY"> {/* Adicione a animação de flip aqui */}
        <Image
          source={require('../../../assets/IMG-R (10).jpg')} // Certifique-se de fornecer o caminho correto para a sua imagem
          style={styles.image}
        />
      </Animatable.View>

      <TouchableOpacity style={styles.addButton} onPress={toggleModal}>
        <FontAwesome name="plus" size={30} color="white" />
      </TouchableOpacity>

      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        backdropOpacity={0.5}
        animationIn="slideInUp"
        animationOut="slideOutDown"
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Escolha uma opção:</Text>
          {data.map((item) => (
            <TouchableOpacity
              key={item.key}
              style={styles.optionButton}
              onPress={() => handleMenuItemPress(item)}
            >
              <Text style={styles.optionButtonText}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Modal>
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
    backgroundColor: '#007bff',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  optionButton: {
    paddingVertical: 8,
  },
  optionButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 200, // Defina a largura da imagem conforme necessário
    height: 200, // Defina a altura da imagem conforme necessário
    resizeMode: 'cover', // Ou use 'contain' para outro tipo de redimensionamento
    marginBottom: 20, // Adapte a margem inferior conforme necessário
  },
});

export default Home;
