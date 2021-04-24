import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import UserImage from '../assets/Egberto.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Header() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Olá,</Text>
                <Text style={styles.userName}>Egberto</Text>
            </View>
           
           <Image source={UserImage} style={styles.userImage} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    greeting: {
        fontSize: 32,
        fontFamily: fonts.text,
        color: colors.heading,
    },
    userName: {
        fontSize: 32,
        fontFamily: fonts.heading,
        color: colors.heading,
        lineHeight: 40
    },
    userImage: {
        width: 70,
        height:70,
        borderRadius: 40
    }
})