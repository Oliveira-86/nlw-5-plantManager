import { useNavigation, useRoute } from '@react-navigation/core';
import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { Button } from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface Params {
    title: string;
    subtitle: string;
    buttonTitle: string;
    icon:'smile' | 'hug';
    nextScreen: string;
}

const emoji = {
    hug: '🤗',
    smile: '😄'
}

export function Confirmation() {
    const navigation = useNavigation();
    const routes = useRoute();

    const { 
        title,
        subtitle,
        buttonTitle,
        icon,
        nextScreen
     } = routes.params as Params;

    function handleMoveOn() {
        navigation.navigate(nextScreen);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.emoji}>
                    {emoji[icon]}
                </Text>

                <Text style={styles.title}>
                    {title}
                </Text>
                
                <Text style={styles.subtitle}>
                    {subtitle}
                </Text>

                <View style={styles.button}>
                    <Button 
                        title="Começar" 
                        onPress={handleMoveOn}
                    />
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