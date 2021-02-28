import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const ListItem = ({info}) => {
    return (
        <View style={styles.container}>
            <View style={styles.productInfo}>
                <Text>{info.name}</Text>
                <Text>------&gt;</Text>
                <Text>{info.cena}€</Text>
            </View>
                
            <View style={styles.actions}>
                <TouchableOpacity style={styles.icon} onPress={() => console.log('Entered editing!')}>
                    <Text>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon} onPress={() => console.log('Entered deleting!')}>
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
        margin: 2
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
        flex: 1,
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