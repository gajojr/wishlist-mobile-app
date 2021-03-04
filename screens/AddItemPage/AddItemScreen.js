import React from 'react';

import { StyleSheet, View, Text } from 'react-native';

const AddItemScreen = () => {
    return (
        <View style={styles.home}>
            <Text>Add item screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    home: {
        paddingTop: 30,
        minWidth: 320
    }
})

export default AddItemScreen;