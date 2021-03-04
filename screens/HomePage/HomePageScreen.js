import React from 'react';

import ListOfItems from '../../components/Homepage/ListOfItems/ListOfItems';
import Header from '../../components/Homepage/Header/Header';
import { StyleSheet, View } from 'react-native';

const HomePageScreen = ({ navigation }) => {
    return (
        <View style={styles.home}>
            <Header navigation={navigation}/>
            <ListOfItems navigation={navigation}/>
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