import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
    return(
        <TouchableOpacity 
            style={styles.container}
            {...rest}
        > 
            <Text style={styles.text}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.green,
        borderRadius: 16,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontFamily: fonts.heading,
        color: colors.white,
        fontSize: 16
    }
}) 