import React, { useState } from 'react';
import { Image, StyleSheet, Keyboard, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler';

const Login = ({navigation}) => {
    const [id,setId] = useState()
    return (
        <KeyboardAvoidingView style={styles.main} behavior={Platform.OS == "ios" ? "padding" : null} enabled>
            <TouchableWithoutFeedback style={styles.all} onPress={Keyboard.dismiss}>
                <Image source={require('../assets/Food1-toggle.png')} style={{width:150, height:150, marginBottom:80}}/>
                <TextInput
                    keyboardType="default"
                    style={styles.id}
                    onChangeText={(value) => setId(value)}
                    placeholder={"아이디 입력"}
                    onSubmitEditing={() => navigation.navigate("Home")}
                />
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}
const styles = StyleSheet.create({
    all: {
        alignItems: 'center',
        padding:300
    },
    main: {
        flex:1,
        alignItems:'center',
        justifyContent: 'center'
    },
    id: {
        width:200,
        height:40,
        paddingHorizontal: 10,
        borderRadius: 27,
        borderColor: 'black',
        borderWidth: 3
    }
});

export default Login;