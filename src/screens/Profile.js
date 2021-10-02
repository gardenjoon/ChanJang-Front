import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <Text>프로필!</Text>
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

export default ProfileScreen;