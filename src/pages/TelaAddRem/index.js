import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Picker } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';

const AddMedication = ({ navigation }) => {
  const [medicationName, setMedicationName] = useState('');
  const [dosage, setDosage] = useState('');
  const [day, setDay] = useState('');
  const [time, setTime] = useState('');
  const [stock, setStock] = useState(0);
  const [image, setImage] = useState('');
  const [imageSource, setImageSource] = useState(null);
  const [selectedOption, setSelectedOption] = useState('image');

  const handleSubmit = () => {
    const medication = { name: medicationName, dosage, day, time, stock, image };
    navigation.navigate('Home', { newMedication: medication });
  };

  const handleImageOptionChange = (option) => {
    setSelectedOption(option);
    // Limpa a imagem e o source ao mudar a opção
    setImage('');
    setImageSource(null);
  };

  const handlePickImage = async () => {
    let result;
    if (selectedOption === 'image') {
      result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
    } else {
      result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
    }

    if (!result.cancelled) {
      setImage(result.uri);
      setImageSource(result);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome do Medicamento:</Text>
      <TextInput
        style={styles.input}
        value={medicationName}
        onChangeText={(text) => setMedicationName(text)}
        placeholder="Digite o nome do medicamento"
      />

      <Text style={styles.label}>Dosagem:</Text>
      <TextInput
        style={styles.input}
        value={dosage}
        onChangeText={(text) => setDosage(text)}
        placeholder="Digite a dosagem"
      />

      <Text style={styles.label}>Dia:</Text>
      <TextInput
        style={styles.input}
        value={day}
        onChangeText={(text) => setDay(text)}
        placeholder="Digite o dia"
      />

      <Text style={styles.label}>Hora:</Text>
      <TextInput
        style={styles.input}
        value={time}
        onChangeText={(text) => setTime(text)}
        placeholder="Digite a hora"
      />

      <Text style={styles.label}>Estoque:</Text>
      <TextInput
        style={styles.input}
        value={stock.toString()}
        onChangeText={(text) => setStock(text)}
        placeholder="Digite o estoque"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Enviar Imagem:</Text>
      <Picker
        selectedValue={selectedOption}
        style={styles.picker}
        onValueChange={(itemValue) => handleImageOptionChange(itemValue)}
      >
        <Picker.Item label="Enviar Imagem" value="image" />
        <Picker.Item label="Enviar URL da Imagem" value="url" />
      </Picker>

      {selectedOption === 'url' ? (
        <TextInput
          style={styles.input}
          value={image}
          onChangeText={(text) => setImage(text)}
          placeholder="Digite a URL da imagem"
          keyboardType="url"
        />
      ) : (
        <View>
          <TouchableOpacity style={styles.button} onPress={handlePickImage}>
            <Text style={styles.buttonText}>Escolher Imagem</Text>
          </TouchableOpacity>
          {imageSource && (
            <Text style={styles.imageText}>Imagem selecionada: {imageSource.uri}</Text>
          )}
        </View>
      )}

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  picker: {
    height: 40,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  imageText: {
    marginTop: 10,
    fontSize: 16,
    color: '#333',
  },
});

export default AddMedication;
