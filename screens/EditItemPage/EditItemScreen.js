import React from 'react';

import { StyleSheet, View, Text } from 'react-native';

const EditItemScreen = () => {
    return (
        <View style={styles.home}>
            <Text>Edit item screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    home: {
        paddingTop: 30,
        minWidth: 320
    }
})

export default EditItemScreen;