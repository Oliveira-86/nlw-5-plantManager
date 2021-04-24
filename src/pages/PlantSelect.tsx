import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { EnviromentButton } from '../components/EnvorimentButton';

import { Header } from '../components/Header';

import colors from '../styles/colors';
import fonts from '../styles/fonts';


export function PlantSelect() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Header />

                <Text style={styles.title}>
                    Em qual ambiente
                </Text>
                    
                <Text style={styles.subtitle}>
                    você quer colocar a planta?
                </Text>

                <View>
                    <FlatList 
                        data={[1, 2, 3, 4, 5]}
                        renderItem={() => (
                            <EnviromentButton 
                                title='cozinha' 
                                active 
                            />
                        )}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.enviromentList}
                    />
                </View>

                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40
    },
    content: {
        paddingHorizontal: 30
    },
    title: {
        fontFamily: fonts.heading,
        fontSize: 17,
        lineHeight: 20,
        color: colors.heading,
        marginTop: 20,
    },
    subtitle: {
        fontFamily: fonts.text,
        fontSize: 17,
        lineHeight: 20,
        color: colors.heading,
         
    },
    enviromentList: {
        height: 40,
        justifyContent: 'center',
        paddingBottom: 5,
        marginVertical: 32
    }
})