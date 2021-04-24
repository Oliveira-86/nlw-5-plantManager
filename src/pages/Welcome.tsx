import React from 'react';
import { SafeAreaView, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core';

import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Welcome() {
    const navigation = useNavigation();

    const handleStart = () => {
        navigation.navigate('UserIdentification');
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
               Gerencie {'\n'} 
               suas plantas de {'\n'}
                forma fácil
            </Text>
            <Image 
                source={wateringImg} 
                style={styles.image} 
                resizeMode='contain'
            />
            <Text style={styles.subtitle}>
                Não esqueça mais de regar suas {'\n'}
                plantas. Nós cuidamos de lembrar você {'\n'} 
                sempre que precisar.
            </Text>

            <TouchableOpacity 
                style={styles.button}
                activeOpacity={0.7}
                onPress={handleStart}    
            >
                <Feather 
                    name="chevron-right" 
                    style={styles.buttonIcon} 
                />
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    title: {
        fontSize: 32,
        fontWeight:'bold',
        textAlign:'center',
        color: colors.heading,
        marginTop: 38,
        fontFamily: fonts.heading
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 17, 
        paddingHorizontal: 20,
        color: colors.heading,
        fontFamily: fonts.text
    },
    image: {   
        height: Dimensions.get('window').width * 0.7
    },
    button: {
        backgroundColor: colors.green,
        height: 55,
        width: 55,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 10  
    },
    buttonIcon: {
        fontSize: 32,
        color: colors.white
    }
})