import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

const FoodScreen = () => {
    return(
        <View style={styles.container}>
            <Text>반찬!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default FoodScreen;