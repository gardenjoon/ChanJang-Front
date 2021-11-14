import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
 
const FoodScreen = () => {
    const renderItem=({item})=>{
        return(
            <TouchableOpacity style={style.itemView} onPress={()=>{alert(item.name);}}>
                <Text style={style.itemName}>{item.name}</Text>
                <Text style={style.lastChat}>{item.lastChat}</Text>
            </TouchableOpacity>
        );
    }

    const itemSeparator = () => {
        return <View style={[style.itemSeparator]} />
    }

    const [datas] = useState([
        {name:"홍길동", lastChat:"안녕하세요"},
        {name:"전우치", lastChat:"좋네요"},
        {name:"Michael", lastChat:"그렇게 합시다"},
        {name:"댕댕이", lastChat:"안녕?"},
        {name:"곰세마리", lastChat:"어디야"},
        {name:"미스터킴", lastChat:"나 집"},
        {name:"이름여섯글자", lastChat:"여기로 오세요"},
        {name:"내이름일곱글자", lastChat:"수고하셨습니다"},
    ])

    return(
        <View style={style.root}>
            <FlatList
                ItemSeparatorComponent={itemSeparator}
                data={datas}
                renderItem={renderItem}>
            </FlatList>
        </View>
    );
}
 
const style= StyleSheet.create({
    itemView:{
        flexDirection:'row',
        borderWidth:0,
        borderRadius:4,
        padding:8,
        height: 60,
        alignItems:'center',
        backgroundColor:'white'
    },
    itemMsg: {
        flexDirection: 'row',
    },
    itemName:{
        fontSize:16,
        color:'black',
        flex:5
    },
    lastChat:{

    },
    itemSeparator:{
        height: 1,
        backgroundColor: "#CED0CE",
    },
});

export default FoodScreen;