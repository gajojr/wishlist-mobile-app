import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const ListItem = ({info, navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.productInfo}>
                <Text>{info.name}</Text>
                <Text>------&gt;</Text>
                <Text>{info.cena}€</Text>
            </View>
                
            <View style={styles.actions}>
                <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('EditItem')}>
                    <Text>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon} onPress={() => console.log('Brisanje pokrenuto')}>
                    <Text>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        margin: 4
    },  
    productInfo: {
        display: 'flex',
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderColor: '#000',
        borderWidth: 2,
        alignItems: 'center'
    },
    actions: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    icon: {
        paddingLeft: 5,
        paddingRight: 5,
        borderRadius: 3,
        backgroundColor: 'grey',
        marginLeft: 5
    }
})

export default ListItem;