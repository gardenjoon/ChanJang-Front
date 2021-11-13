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

    itemSeparator = () => {
        return <View style={[style.itemSeparator]} />
    }

    const [datas] = useState([
        {name:"김치", message:"대연1동 · 2021.10.9",img: require('../../assets/kimchi.jpg')},
        {name:"피클", message:"대연동 · 2021.5.9",img: require('../../assets/pickle.jpg')},
        {name:"마파 두부", message:"연산 · 2021.6.9",img: require('../../assets/mafa.jpg')},
        {name:"계란 조림", message:"대연3동 · 2021.7.9",img: require('../../assets/egg.jpg')},
        {name:"1", message:"용호 1동 · 2021.10.11",img: require('../../assets/Food.png')},
        {name:"2", message:"용당동 · 2021.11.5",img: require('../../assets/Food.png')},
        {name:"3", message:"문현동 · 2021.11.4",img: require('../../assets/Food.png')},
        {name:"4", message:"우암동 · 2021.11.9",img: require('../../assets/Food.png')},
    ])

    return(
        <View style={style.root}>
            <Text style={style.titleText}>반찬 공유</Text>
            <FlatList
                // ItemSeparatorComponent={this.itemSeparator}
                data={datas}
                renderItem={this.renderItem}>
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
 
const style= StyleSheet.create({
    root:{flex:1, padding:16, },
    titleText:{
        fontSize:24,
        // fontWeight:'bold',
        color:'#2a2a2a',
        textAlign:'left',
        marginLeft:8,
        paddingBottom:16,
        // backgroundColor:'white',
        borderBottomWidth:1,
        // borderColor:'black',
        borderColor:'#CED0CE',
    },
    itemView:{
        flexDirection:'row',
        borderWidth:0,
        borderRadius:4,
        padding:8,
        marginTop:6,
        marginBottom:6,
        backgroundColor:'white',
    },
    itemImg:{
        width:120,
        height:100,
        resizeMode:'cover',
        marginRight:8,
        borderRadius:4,
    },
    itemName:{
        fontSize:22,
        fontWeight:'bold',
        color:'black',
    },
    itemMsg:{
        fontSize:16,
        // fontStyle:'italic',
    },
    itemSeparator:{
        height: 1,
        width: "100%",
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
        borderRadius: 40,
        backgroundColor:"#005f69",
      },
      floatingButtonStyle: {
        resizeMode: 'contain',
        width: 25,
        height: 25,
        tintColor:'white',
        //backgroundColor:'black'
      },
});

export default FoodScreen;