import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';

import { EnvironmentButton } from '../components/EnvironmentButton';
import { Header } from '../components/Header';
import { Load } from '../components/Load';
import { PlantsCardPrimary } from '../components/PlantsCardPrimary';

import api from '../services/api';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface EnvironmentProps {
    key: string;
    title: string; 
}

interface PlantProps {
    id: string;
    name: string;
    about: string;
    water_tips: string;
    photo: string;
    environments: string[];
    frequency: {
      times: number;
      repeat_every: string; 
    }
}

export function PlantSelect() {
    const [environment, setEnvironment] = useState<EnvironmentProps[]>([]);
    const [plants, setPlants] = useState<PlantProps[]>([]);
    const [filltedPlant, setFilltedPlant] = useState<PlantProps[]>([]);
    const [environmentSelected, setEnvironmentSelected] = useState('all');
    const [loading, setLoading] = useState(true);

    const [page, setPage] = useState(1);
    const [loadingMore, setLoadingMore] = useState(false);
    const [loadedAll, setLoadedAll] = useState(false);

    async function fecthPlants() {
        const { data } = await api.get(`plants?_sort=name&order=asc_page=${page}&_limit=8`);

        if(!data) {
            return setLoading(true);
        }

        if(page > 1) {
            setPlants(oldValue => [...oldValue, ...data])
            setFilltedPlant(oldValue => [...oldValue, ...data])
        }
        else {
            setPlants(data);
            setFilltedPlant(data);
        } 

        setLoading(false);
        setLoadingMore(false);
    }

    function handleFetchMore(distance: number) {
        if(distance < 1)
            return;
        
        setLoadingMore(true);
        setPage(oldValue => oldValue +1);
        fecthPlants();
    }

    function handleEnvironmentSelected(environment: string) {
        setEnvironmentSelected(environment);

        if(environment === 'all') {
           return setFilltedPlant(plants);
        }

        const fillter = plants.filter(plant => plant.environments.includes(environment));
        
        setFilltedPlant(fillter);
    }

    useEffect(() => {
        async function fecthEnvironment() {
            const { data } = await api.get('plants_environments?_sort=title&order=asc');
            setEnvironment([
                {
                    key: 'all',
                    title: 'Todos'
                },
                ...data
            ]);
        }

        fecthEnvironment();
    }, []);

    useEffect(() => {
        fecthPlants();
    }, []);

    if(loading) 
        return <Load />
    

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
                        data={environment}
                        renderItem={({ item }) => (
                            <EnvironmentButton 
                                title={item.title}
                                active={item.key === environmentSelected}
                                onPress={() => handleEnvironmentSelected(item.key)}
                            />
                        )}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.environmentList}
                    />
                </View>            
            </View>

            <View style={styles.plants}>
                <FlatList 
                    data={filltedPlant}
                    renderItem={({ item }) => (
                        <PlantsCardPrimary data={item} />
                    )} 
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    onEndReachedThreshold={0.1}
                    onEndReached={({ distanceFromEnd }) => handleFetchMore(distanceFromEnd)}
                    ListFooterComponent={
                        loadingMore ? <ActivityIndicator color={colors.green} /> : <></>
                    }
                />
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
    environmentList: {
        height: 40,
        justifyContent: 'center',
        paddingBottom: 5,
        marginVertical: 32,
        paddingLeft: 10
    },
    plants: {
        flex: 1,
        paddingHorizontal: 32,
        justifyContent: 'center'
    }
})