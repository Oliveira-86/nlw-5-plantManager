import React from 'react';
import { SafeAreaView, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';

export function Welcome() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
               Gerencie {'\n'} 
               suas plantas {'\n'} 
               de forma fácil
            </Text>
            <Image source={wateringImg} style={styles.image} />
            <Text style={styles.subtitle}>
                Não esqueça mais de regar suas {'\n'}
                plantas. Nós cuidamos de lembrar você {'\n'} 
                sempre que precisar.
            </Text>

            <TouchableOpacity 
                style={styles.button}
                activeOpacity={0.7}    
            >
                <Text style={styles.buttonText}>
                    >
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 32,
        fontWeight:'bold',
        textAlign:'center',
        color: colors.heading,
        paddingHorizontal: 75,
        marginTop: 20,
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 17, 
        lineHeight: 25,
        paddingHorizontal: 45,
        color: colors.heading,
    },
    image: {
        width: 292,
        height: 285,
    },
    button: {
        backgroundColor: colors.green,
        height: 55,
        width: 55,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 10,
        marginBottom: 25
    },
    buttonText: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 35
    }
})