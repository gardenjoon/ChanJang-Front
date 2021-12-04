import React, { useState, useEffect, useContext } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';
import { UserContext } from './stores';

const Login = () => {
    const { setUser } = useContext(UserContext);

    const signIn = async() => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            setUser(userInfo);
        }
        catch (e) {
            console.log(e.message)
            if (e.code === statusCodes.SIGN_IN_CANCELLED) {
                console.log('User Cancelled the Login Flow')
            }
            else if (e.code === statusCodes.IN_PROGRESS) {
                console.log('Signing In')
            }
            else if (e.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                console.log('Play Services Not Available')
            }
            else {
                console.log ("Unknown Error")
            }
        }
    }
    
    const isSignedIn = async () => {
        const isSignedIn = await GoogleSignin.isSignedIn();
        if (!isSignedIn) {
            getCurrentuserInfo();
        }
        else {
            console.log('Please Login')
        }
    }
    
    const getCurrentuserInfo = async () => {
        try {
            const userInfo = await GoogleSignin.signInSilently();
            updasetUserteUser(userInfo);
        }
        catch (e) {
            if (e.code === statusCodes.SIGN_IN_REQUIRED) {
                console.log('User has not signed in yet')
            }
            else {
                console.log("Something went wrong")
            }
        }
    }
    
    // const signOut = async() => {
    //     try{
    //         await GoogleSignin.revokeAccess();
    //         await GoogleSignin.signOut();
    //         setUser({});
    //     }
    //     catch (e) {
    //         console.log(e)
    //     }
    // }

    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '137881895354-dekd8sfu28f0oupnabav137ijg4gi55f.apps.googleusercontent.com',
            offlineAccess: true,
            forceCodeForRefreshToken: true,
            iosClientId: "137881895354-flpb1lrec47qemibfqtbivipvtn3oo1a.apps.googleusercontent.com"

        });
        isSignedIn()
    }, [])

    return (
        <View style={styles.main}>
            <Image source={require('../assets/Food1-toggle.png')} style={styles.image}/>
            <GoogleSigninButton
            style={{width: 192, height: 48}}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={signIn}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex:1,
        alignItems:'center',
        justifyContent: 'center'
    },
    image: {
        width:150,
        height:150,
        marginBottom:80
    }
});

export default Login;