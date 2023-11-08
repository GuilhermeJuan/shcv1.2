import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function GerenciamentoMedicamentos({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.backButton}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Gerenciamento de Medicamentos</Text>
      </View>

      <View style={styles.medicationList}>
        {/* Medication Item */}
        <View style={styles.medicationItem}>
          <View style={styles.medicationInfo}>
            <Text style={styles.medicationName}>Nome do Medicamento</Text>
            <Text style={styles.medicationDosage}>Dosagem: 10mg</Text>
            <Text style={styles.medicationStock}>Estoque: 50 unidades</Text>
          </View>

          <View style={styles.medicationButtons}>
            <TouchableOpacity style={styles.updateButton}>
              <Text style={styles.buttonText}>Atualizar Estoque</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.alertButton}>
              <FontAwesome5 name="bell" size={24} color="#FF6EC7" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buyButton}>
              <AntDesign name="shoppingcart" size={24} color="#FF6EC7" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.removeButton}>
              <AntDesign name="delete" size={24} color="#FF6EC7" />
            </TouchableOpacity>
          </View>
        </View>
        {/* Fim do Medication Item */}
      </View>

      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddMedication')}>
        <FontAwesome5 name="plus" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  backButton: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  medicationList: {
    flex: 1,
  },
  medicationItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  medicationInfo: {
    flex: 1,
  },
  medicationName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  medicationDosage: {
    color: '#888',
  },
  medicationStock: {
    color: '#888',
  },
  medicationButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  updateButton: {
    backgroundColor: '#FF6EC7',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 10,
  },
  alertButton: {
    marginRight: 10,
  },
  buyButton: {
    marginRight: 10,
  },
  removeButton: {},
  addButton: {
    backgroundColor: '#FF6EC7',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});
