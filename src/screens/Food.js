import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, Image} from 'react-native';
import axios from 'axios';
 
const FoodScreen = () => {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchUsers = async() => {
            try {
                setError(null);
                setUsers(null);

                setLoading(true);
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setUsers(response.data);
            }
            catch (e) {
                setError(e);
            }
            setLoading(false);
        }
        fetchUsers();
    }, []);

    if (loading) return (
        <Text>loading...</Text>
    )
    if (error) return (
        <Text>error...</Text>
    )
    if(!users) return (
        <Text>no Users</Text>
    )
    else {
        const renderItem=({item})=>{
            return(
                <TouchableOpacity style={style.itemView} onPress={()=>{alert(item.name);}}>
                    {/* <Image source={item.img} style={style.itemImg}></Image> */}
                    <View style={style.itemMsg}>
                        <Text style={style.itemName}>{item.name}</Text>
                        <View style = {style.itemSummary}>
                            <Text style={style.itemPlace}>{item.username}</Text>
                            <Text style={style.itemPlace}> • </Text>
                            <Text  style={style.itemPlace}>{item.email}</Text>
                            <Text style={style.itemPlace}> • </Text>
                            <Text style={style.itemPlace}>{item.id}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            );
        }
    
        const itemSeparator = () => {
            return <View style={[style.itemSeparator]} />
        }
    
        return(
                <View style={style.root}>
                    <FlatList
                        ItemSeparatorComponent={itemSeparator}
                        data={users}
                        renderItem={renderItem}>
                    </FlatList>
                    <TouchableOpacity activeOpacity={0.8} 
                        onPress={()=>{alert('FAB Clicked')}}
                        style={style.touchableOpacityStyle}>
                            <Image
                                source={require('../../assets/plus.png')}
                                style={style.floatingButtonStyle}
                            />
                    </TouchableOpacity>
                </View>
            
        );

    }

}
 
const style= StyleSheet.create({
    root:{
        backgroundColor: 'white'
    },
    itemView:{
        flexDirection:'row',
        borderWidth:0,
        borderRadius:4,
        padding:8,
    },
    itemImg:{
        width:100,
        height:100,
        resizeMode:'cover',
        marginRight:8,
        borderRadius:4,
        flex:1,
    },
    itemMsg: {
        flexDirection: 'column',
        flex:3
    },
    itemName:{
        fontSize:20,
        color:'black',
        flex:5
    },
    itemSummary:{
        flexDirection:'row',
        flex:1,
        justifyContent: 'flex-end',
    },
    itemPlace: {
        fontSize:10,
        
    },
    itemSeparator:{
        height: 1,
        backgroundColor: "#CED0CE",
    },
    touchableOpacityStyle: {
        position: 'absolute',
        width: 50,
        height:50,
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
        borderRadius: 25,
        backgroundColor:"#005f69",
    },
    floatingButtonStyle: {
    resizeMode: 'contain',
    width: 25,
    height: 25,
    tintColor:'white',
    },
});

export default FoodScreen;