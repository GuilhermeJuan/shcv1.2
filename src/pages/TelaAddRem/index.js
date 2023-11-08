import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Switch } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { FontAwesome5 } from '@expo/vector-icons';

const AddMedication = ({ navigation }) => {
  const [medicationName, setMedicationName] = useState('');
  const [currentQuantity, setCurrentQuantity] = useState('');
  const [isReminderEnabled, setIsReminderEnabled] = useState(false);
  const [reminderTime, setReminderTime] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    hideDatePicker();
    setReminderTime(date);
  };

  const saveMedication = () => {
    // Aqui você pode salvar os detalhes do medicamento no banco de dados
    // E configurar o lembrete se estiver ativado (usando a data em reminderTime)
    console.log('Medicamento salvo:', medicationName, currentQuantity, isReminderEnabled, reminderTime);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Nome do Medicamento</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome do medicamento"
          value={medicationName}
          onChangeText={(text) => setMedicationName(text)}
        />

        <Text style={styles.label}>Quantidade Atual</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite a quantidade atual"
          keyboardType="numeric"
          value={currentQuantity}
          onChangeText={(text) => setCurrentQuantity(text)}
        />

        <View style={styles.switchContainer}>
          <Text style={styles.label}>Ativar Lembrete</Text>
          <Switch value={isReminderEnabled} onValueChange={() => setIsReminderEnabled(!isReminderEnabled)} />
        </View>

        {isReminderEnabled && (
          <TouchableOpacity style={styles.dateButton} onPress={showDatePicker}>
            <Text style={styles.buttonText}>Selecionar Horário do Lembrete</Text>
          </TouchableOpacity>
        )}

        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="time"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={saveMedication}>
        <Text style={styles.buttonText}>Finalizar Tarefa</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  formContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 20,
    fontSize: 16,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  dateButton: {
    backgroundColor: '#FF6EC7',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
  },
  saveButton: {
    backgroundColor: '#FF6EC7',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default AddMedication;
