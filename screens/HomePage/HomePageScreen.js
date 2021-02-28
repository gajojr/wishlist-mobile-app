import React from 'react';

import ListOfItems from '../../components/Homepage/ListOfItems/ListOfItems';
import Header from '../../components/Homepage/Header/Header';
import { StyleSheet, View } from 'react-native';

const HomePageScreen = () => {
    return (
        <View style={styles.home}>
            <Header/>
            <ListOfItems/>
        </View>
    )
}

const styles = StyleSheet.create({
    home: {
        paddingTop: 30,
        minWidth: 320
    }
})

export default HomePageScreen;