import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { UserContext } from '../stores';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const ProfileScreen = () => {
    const { setUser } = useContext(UserContext);

    const signOut = async() => {
        try{
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
            setUser({});
        }
        catch (e) {
            console.log(e)
        }
    }

    return (
        <ScrollView style={styles.container}>
            <Header />
            <ItemSeparator height={3}/>
            <ProfileContainer />
            <ItemSeparator height={3}/>
            <ItemsListContainer />
            <Button
                title = "로그아웃"
                onPress = {() => {
                    signOut();
                }}>
            </Button>
        </ScrollView>
    );
}

const Header = () => {
    return <View style={styles.header}>
                <Text style={styles.headerText}>
                    프로필
                </Text>
            </View>
}

const ProfileContainer = () => {
    return <View style={styles.profileContainer}>
                <Profile />
                <ItemSeparator />
                <View style={styles.history}>
                    <HistoryItem name={"나눔내역"}/>
                    <HistoryItem name={"받은내역"}/>
                    <HistoryItem name={"내 댓글"}/>
                </View>
            </View>
}

const ItemSeparator = (props) => {
    return <View style={{
        height: props.height || 1, 
        backgroundColor:"#CED0CE"
    }} />
}

const Profile = () => {
    const { user } = useContext(UserContext).user

    return <View style={styles.profile}>
                <Image 
                    source={require('../../assets/profile-toggle.png')}
                    style={styles.profileImage}/>
                <Text style={styles.profileNickName}>
                    {user.name}
                </Text>
                <Text style={styles.profileUserCode}>
                    {user.email}
                </Text>
            </View>
}

const HistoryItem = (props) => {
    return <View style={styles.historyItem}>
                <Text>
                    {props.name}
                </Text>
            </View>
}

const ItemsListContainer = () => {
    return <View>
                <ItemsList name={"내 위치 설정"}/>
                <ItemsList name={"알림설정"}/>
                <ItemsList name={"친구등록"}/>
                <ItemsList name={"앱설정"}/>
                <ItemsList name={"자주 묻는 질문"}/>
                <ItemsList name={"공지사항"}/>
            </View>
}
const ItemsList = (props) => {
    return <View>
                <View style={styles.itemsList}>
                    <Text>
                        {props.name}
                    </Text>
                </View>
                <ItemSeparator />
            </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    header: {
        height:50,
        // backgroundColor: "blue",
        justifyContent: "center",
        paddingLeft:20
    },
    headerText: {
        fontSize:20
    },
    profileContainer: {
        flex:5,
        maxHeight:200,
        // backgroundColor: "green",
    },
    profile: {
        height:80,
        // backgroundColor: "yellow",
        justifyContent:"flex-start",
        flexDirection:"row",
        alignItems:"center",
        paddingLeft: 20
    },
    profileImage: {
        width:50,
        height:50,
    },
    profileNickName: {
        marginLeft: 20,
        fontSize: 20
    },
    profileUserCode: {
        paddingLeft:5,
        fontSize:13,
        color: "grey"
    },
    history: {
        height: 100,
        flexDirection:"row",
        justifyContent:"space-around",
        // backgroundColor: "skyblue",
    },
    historyItem: {
        alignItems:"center",
        justifyContent: "center",
        flexGrow: 1,
    },
    itemsList: {
        flexDirection:'row',
        alignItems: "center",
        paddingLeft: 20,
        height: 70,
    },
    itemSeparator:{
        height:1,
        backgroundColor: "#CED0CE",
    }
});

export default ProfileScreen;