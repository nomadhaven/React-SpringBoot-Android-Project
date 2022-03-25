import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { useState } from "react";
import { 
    Image, 
    StyleSheet, 
    View, 
    TextInput, 
    Text, 
    TouchableOpacity,    
    Button,
    Alert
} from "react-native";

export default function Login( { navigation }:any ) {

    const [id, setId] = useState("")
    const [password, setPassword] = useState("")
    
    function login(){
        if(id.trim() == ""){
            Alert.alert("id", "아이디를 입력해 주십시오")
        }
        else if(password.trim() == ""){
            Alert.alert("password", "password를 입력해 주십시오")
        }
        else{
            axios.post("http://192.168.35.3:3000/login", null, 
                {
                    params: {
                        id: id,
                        pwd: password
                    }
                }).then(function(resp){
                    if(resp.data != null && resp.data != ""){
                        console.log("로그인 되었습니다")
                        console.log(resp.data)

                        AsyncStorage.setItem('login',JSON.stringify(resp.data))

                        //loginData()
                        navigation.navigate('bbs')
                        
                    }
                    else{
                        Alert.alert("login", "아이디나 패스워드를 확인하세요")
                    }

                }).catch(function(err){
                    Alert.alert("err", err)
                })
        }
    }

    const loginData = async () =>{
        try{
        let user = await AsyncStorage.getItem('login')
                        console.log("login 정보:"+user)
        }catch(err){}
    }

    return (
        <View style={styles.container}>            
            <Image style={styles.image} source={ require("../../assets/logo2.png") } />

            <View style={styles.inputView}>
                <TextInput
                    style={styles.textInput}
                    placeholder="id를 입력해 주세요"
                    placeholderTextColor="#003f5c"
                    onChangeText={(id)=>setId(id)} />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.textInput}
                    placeholder="password를 입력해 주세요"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password)=>setPassword(password)} />
            </View>

            <TouchableOpacity onPress={()=> navigation.navigate("account")}>
                <Text style={styles.forgot_button}>회원가입</Text>      
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginBtn} onPress={()=>login()}>
                <Text>로그인</Text>
            </TouchableOpacity>     

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    image: {
        marginBottom: 40
    },
    inputView: {
        backgroundColor: "#ffc0cb",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center"
    },
    textInput:{
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20
    },
    forgot_button: {
        height: 30,
        marginBottom: 30
    },
    loginBtn: {
        width: "50%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#ff1493"
    }
})
