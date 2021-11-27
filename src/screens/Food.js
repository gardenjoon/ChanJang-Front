import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
 
const FoodScreen = ({navigation}) => {
    const renderItem=({item})=>{
        return(
            <TouchableOpacity style={style.itemView} onPress={()=>{alert(item.name);}}>
                <Image source={item.img} style={style.itemImg}></Image>
                <View style={style.itemMsg}>
                    <Text style={style.itemName}>{item.name}</Text>
                    <View style = {style.itemSummary}>
                        <Text style={style.itemPlace}>{item.place}</Text>
                        <Text style={style.itemPlace}> • </Text>
                        <Text  style={style.itemPlace}>{item.distance}</Text>
                        <Text style={style.itemPlace}> • </Text>
                        <Text style={style.itemPlace}>{item.date}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    const itemSeparator = () => {
        return <View style={[style.itemSeparator]} />
    }

    const [datas] = useState([
        {name:"김치", place: "대연1동", distance: "100m", date: "2021.10.9", img: require('../../assets/kimchi.jpg')},
        {name:"피클", place: "대연동", distance: "100m", date: "2021.5.9", img: require('../../assets/pickle.jpg')},
        {name:"마파 두부", place: "연산", distance: "100m", date: "2021.6.9", img: require('../../assets/mafa.jpg')},
        {name:"계란 조림", place: "대연3동", distance: "100m", date: "2021.7.9", img: require('../../assets/egg.jpg')},
        {name:"김치", place: "대연1동", distance: "100m", date: "2021.10.9", img: require('../../assets/kimchi.jpg')},
        {name:"피클", place: "대연동", distance: "100m", date: "2021.5.9", img: require('../../assets/pickle.jpg')},
        {name:"마파 두부", place: "연산", distance: "100m", date: "2021.6.9", img: require('../../assets/mafa.jpg')},
        {name:"계란 조림", place: "대연3동", distance: "100m", date: "2021.7.9", img: require('../../assets/egg.jpg')},
    ])

    return(
        <View style={style.root}>
            <FlatList
                ItemSeparatorComponent={itemSeparator}
                data={datas}
                renderItem={renderItem}>
            </FlatList>
            <TouchableOpacity activeOpacity={0.8} 
                onPress={()=>{navigation.navigate('CreateFood')}}
                style={style.touchableOpacityStyle}>
                    <Image
                        source={require('../../assets/plus.png')}
                        style={style.floatingButtonStyle}
                    />
            </TouchableOpacity>
        </View>
    );
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