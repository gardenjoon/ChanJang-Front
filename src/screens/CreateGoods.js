import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Image, TextInput } from 'react-native';

const CreateGoodsScreen = ({navigation}) => {
  return (
    <View style={styles.root}>
      {/* 사진추가 버튼 */}
      <TouchableOpacity activeOpacity={0.8} 
        onPress={()=> Alert.alert("사진 추가")}
        style={styles.uploadImgButton}>
          <Image
            source={require('../../assets/plus.png')}
            style={styles.uploadImgButtonImg}
          />
      </TouchableOpacity>
      {/* 제목 작성란*/}
      <TextInput
        style={styles.input}
        placeholder="제목"
      />
      {/* 카테고리? 선택 */}

      {/* 설명 작성란 */}
      <TextInput
        style={styles.mulInput}
        multiline={true}
        placeholder="설명.."
      />
      {/* 완료버튼 */}
      <TouchableOpacity activeOpacity={0.8} 
        onPress={()=> Alert.alert("완료 버튼")}
        style={styles.postButton}>
          <Text style={styles.postButtonTitle}>
            완료
          </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  root:{
    flex: 1,
    marginTop: 10,
    backgroundColor: 'white',
  },
  uploadImgButton: {
    margin: 5,
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
    borderRadius: 5,
  },
  uploadImgButtonImg: {
    resizeMode: 'contain',
    width: 25,
    height: 25,
    tintColor:'white',
  },
  postButton: {
    margin: 5,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#005f69',
    borderRadius: 5,
  },
  postButtonTitle: {
    fontSize: 15,
    color: 'white',
  },
  input: {
    height: 40,
    margin: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
  },
  mulInput: {
    height: 90,
    margin: 5,
    textAlignVertical: 'top',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
  },
});

export default CreateGoodsScreen;