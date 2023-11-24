import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Switch, Animated, Modal, BackHandler } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import { BlurView } from 'expo-blur';

const HomeScreen = ({ navigation }) => {
    const [isLogoClicked, setIsLogoClicked] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const userName = "Thales Juan";
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const [medications, setMedications] = useState([
        { name: 'Remédio 1', dosage: '2 pílulas', day: 'Diária', time: '13:00, 21:00', id: '1' },
        { name: 'Remédio 2', dosage: '1 pílula', day: 'Seg., Quar. e Sex.', time: '10:00', id: '2' },
    ]);

    const Logo = Animatable.createAnimatableComponent(Image);

    const rotateClockwise = {
        0: {
            transform: [{ rotate: '0deg' }],
        },
        1: {
            transform: [{ rotate: '360deg' }],
        },
    };

    const rotateCounterClockwise = {
        0: {
            transform: [{ rotate: '0deg' }],
        },
        1: {
            transform: [{ rotate: '-360deg' }],
        },
    };

    const [imageHeight, setImageHeight] = useState(new Animated.Value(0));
    const imageRef = useRef(null);

    const handleImageToggle = () => {
        Animated.timing(imageHeight, {
            toValue: imageHeight._value === 0 ? 200 : 0,
            duration: 500,
            useNativeDriver: false,
        }).start();
    };

    const handleLogoClick = () => {
        setIsLogoClicked(!isLogoClicked);
        if (imageRef.current) {
            imageRef.current.fadeOut();
        }
    };

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleLogoClick}>
                    <Logo
                        ref={imageRef}
                        source={require('../../../assets/LogomarcaOFC.jpg')}
                        style={styles.logo}
                        animation={isLogoClicked ? rotateCounterClockwise : rotateClockwise}
                        duration={1000}
                        useNativeDriver
                    />
                </TouchableOpacity>
                {isLogoClicked && (
                    <Animatable.Text animation="fadeIn" duration={1000} style={styles.appName}>
                        Saúde na Hora Certa
                    </Animatable.Text>
                )}
                <TouchableOpacity onPress={toggleMenu}>
                    <Ionicons name="menu-outline" size={32} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.greetingContainer}>
                <Text style={styles.greetingText}>
                    Olá, {isLoggedIn ? `${userName}, bem vindo(a)` : 'bem vindo(a)'}
                </Text>
            </View>
            <Text style={styles.title}>Seus remédios:</Text>
            <FlatList
                data={medications}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.itemText}>{item.name}</Text>
                        <Text style={styles.itemText}>{item.dosage}</Text>
                        <Text style={styles.itemText}>Dia: {item.day}</Text>
                        <Text style={styles.itemText}>Hora: {item.time}</Text>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.button} onPress={handleImageToggle}>
                                <Text style={styles.buttonText}>Ver Imagem</Text>
                            </TouchableOpacity>
                            <View style={styles.switchContainer}>
                                <Text style={styles.switchText}>Lembrete</Text>
                                <Switch />
                            </View>
                        </View>
                        <Animated.Image
                            style={{ height: imageHeight, width: '100%' }}
                            source={{ uri: 'https://static.shop-pharmacie.fr/images/F10000681-p1.jpg' }}
                        />
                        <TouchableOpacity
                            style={styles.editButton}
                            onPress={() => navigation.navigate('GerenciamentoMedicamentos')}
                        >
                            <Text style={styles.editButtonText}>Editar informações</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
            <Modal
                animationType="slide"
                transparent={true}
                visible={isMenuVisible}
                onRequestClose={() => {
                    setIsMenuVisible(!isMenuVisible);
                }}
            >
                <BlurView
                    style={styles.absolute}
                    intensity={100}
                    tint="dark"
                >
                    <View style={styles.menuContainer}>
                        <TouchableOpacity style={styles.closeButton} onPress={toggleMenu}>
                            <Ionicons name="close-outline" size={32} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => console.log('Perfil')}>
                            <Text style={styles.menuItem}>Perfil</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => console.log('Configuração')}>
                            <Text style={styles.menuItem}>Configuração</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.menuItem}>Sair</Text>
                        </TouchableOpacity>
                    </View>
                </BlurView>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f7f7f7',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    logo: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    appName: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    greetingContainer: {
        marginBottom: 20,
    },
    greetingText: {
        fontSize: 18,
    },
    title: {
        fontSize: 20,
        marginTop: 10,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    item: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        backgroundColor: 'white',
    },
    itemText: {
        fontSize: 16,
        marginBottom: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#0b203d',
        borderRadius: 4,
        paddingVertical: 8,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: 'bold',
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    switchText: {
        fontSize: 16,
        marginRight: 5,
    },
    editButton: {
        backgroundColor: '#0b203d',
        borderRadius: 4,
        paddingVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    editButtonText: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: 'bold',
    },
    menuContainer: {
        width: '50%',
        height: '100%',
        backgroundColor: '#fff',
        padding: 20,
        position: 'absolute',
        top: 0,
        right: 0,
        justifyContent: 'center',
    },
    closeButton: {
        position: 'absolute',
        top: 20,
        right: 20,
    },
    menuItem: {
        fontSize: 24,
        marginVertical: 20,
    },
    absolute: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'transparent',
    },
});

export default HomeScreen;
