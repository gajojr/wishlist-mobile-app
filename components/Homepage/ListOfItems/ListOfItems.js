import React from 'react';
import {  FlatList, StyleSheet, Text, View } from 'react-native';

import ListItem from '../ListItem/ListItem';

const infos = [
    {
        name: 'air max 95',
        cena: 150
    },
    {
        name: 'air pods pro',
        cena: 250
    },
    {
        name: 'macbook air',
        cena: 1150
    },
];

const ListOfItems = () => {
    return (
        <View>
            <Text style={styles.header}>List of items:</Text>
            <FlatList
                data={infos}
                renderItem={({item}) => <ListItem info={item}/>}
                keyExtractor={(item) => item.name}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 18,
        marginBottom: 5
    }
});

export default ListOfItems;