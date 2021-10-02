import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const GoodsScreen = () => {
    return (
        <View style={styles.container}>
            <Text>생활용품!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default GoodsScreen;