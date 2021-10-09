import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, Image} from 'react-native';
 
const FoodScreen = () => {
    renderItem=({item})=>{
        return(
            <TouchableOpacity style={style.itemView} onPress={()=>{alert(item.name);}}>
                <Image source={item.img} style={style.itemImg}></Image>
                <View style={{flexDirection:'column'}}>
                    <Text style={style.itemName}>{item.name}</Text>
                    <Text style={style.itemMsg}>{item.message}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    const [datas] = useState([
        {name:"sam", message:"Hello world",img: require('../../assets/Food.png')},
        {name:"robin", message:"Hello rn",img: require('../../assets/Food.png')},
        {name:"kim", message:"Hello react",img: require('../../assets/Food.png')},
        {name:"hong", message:"Hello hybrid",img: require('../../assets/Food.png')},
        {name:"rosa", message:"Hello ios",img: require('../../assets/Food.png')},
        {name:"lee", message:"Hello rom",img: require('../../assets/Food.png')},
        {name:"jack", message:"Hello tom",img: require('../../assets/Food.png')},
        {name:"moana", message:"Hello native",img: require('../../assets/Food.png')},
    ])

    return(
        <View style={style.root}>
            <Text style={style.titleText}>FlatList Test</Text>
            <FlatList
                data={datas}
                renderItem={this.renderItem}>
            </FlatList>
        </View>
    );
}
 
const style= StyleSheet.create({
    root:{flex:1, padding:16,},
    titleText:{
        fontSize:24,
        fontWeight:'bold',
        textAlign:'center',
        paddingBottom:16,
    },
    itemView:{
        flexDirection:'row',
        borderWidth:1,
        borderRadius:4,
        padding:8,
        marginBottom:12,
    },
    itemImg:{
        width:120,
        height:100,
        resizeMode:'cover',
        marginRight:8,
    },
    itemName:{
        fontSize:24,
        fontWeight:'bold',
    },
    itemMsg:{
        fontSize:16,
        fontStyle:'italic',
    },
});

export default FoodScreen;