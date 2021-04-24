import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { Button } from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Confirmation() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.emoji}>
                    😃
                </Text>

                <Text style={styles.title}>
                    Prontinho
                </Text>
                
                <Text style={styles.subtitle}>
                    Agora vamos começar a cuidar das suas{'\n'}
                    plantinhas com muito cuidado.
                </Text>

                <View style={styles.button}>
                    <Button title="Começar" />
                </View>
            </View>
 
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: 33
    },
    emoji:{
        fontSize: 78,
        textAlign: 'center',
    },
    title: {
        textAlign: 'center',
        fontFamily: fonts.heading,
        fontSize: 24,
        lineHeight: 30,
        color: colors.heading,
        marginTop: 60,
        fontWeight:'bold'
    },
    subtitle: {
        textAlign: 'center',
        fontFamily: fonts.text,
        fontSize: 17,
        lineHeight: 25,
        color: colors.heading,
        paddingVertical: 10,
        marginTop: 30
    },
    button: {
        width: '100%',
        paddingHorizontal: 40,
        marginTop: 30
    }
})