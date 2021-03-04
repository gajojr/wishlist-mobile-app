import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const Header = ({ navigation }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Wishlist</Text>
            <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('AddItem')}>
                <Icon name="plus" size={45} color="#000" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row'
    },
    headerText: {
        fontSize: 50,
        alignSelf:'center'
    },
    icon: {
        marginLeft: 30,
        alignSelf: 'center'
    }
});

export default Header;