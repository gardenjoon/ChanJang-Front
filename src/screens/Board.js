import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BoardScreen = () => {
    return (
        <View style={styles.container}>
            <Text>자유소통방!</Text>
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

export default BoardScreen;