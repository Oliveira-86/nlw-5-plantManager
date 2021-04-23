import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, View, Text, TextInput } from 'react-native';
import { Button } from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function UserIdentification() {
    const [ isFocused, setIsFocused ] = useState(false);
    const [ isFilled, setIsFilled ] = useState(false);
    const [ name, setName ] = useState('');

    const handleInputBlur = () => {
        setIsFocused(false);
        setIsFilled(!!name);
    }

    const handleInputFocus = () => {
        setIsFocused(true);
    }

    const handleInputChange = (value: string) => {
        setIsFilled(!!value);
        setName(value);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.form}>
                    <Text style={styles.emoji}>
                        {isFilled ? '😊' : '😃'}
                    </Text>
                    <Text style={styles.text}>
                        Como podemos{'\n'}
                        chamar você?
                    </Text>
                    <TextInput 
                        style={[ 
                            styles.input, 
                            (isFocused || isFilled) && {borderColor: colors.green}
                        ]} 
                        placeholder="Digite um nome"  
                        onBlur={handleInputBlur} 
                        onFocus={handleInputFocus}
                        onChangeText={handleInputChange} 
                    />
                    <View style={styles.button}>
                        <Button />
                    </View>
                </View>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent:'space-around'
    },
    content: {
        flex: 1,
        width: '100%'
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center'
    },
    emoji: {
        fontSize: 44
    },
    text: {
        marginTop: 25,
        fontFamily: fonts.heading,
        color: colors.heading,
        fontSize: 24,
        lineHeight: 32,
        textAlign: 'center'
    },
    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center'
    },
    button: {
        marginTop: 40,
        width: 231,
    }
});