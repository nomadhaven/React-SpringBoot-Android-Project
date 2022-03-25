import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Bbs from "./src/screens/bbs/Bbs";
import Account from "./src/screens/member/Account";
import Login from "./src/screens/member/Login";

const Stack = createNativeStackNavigator()

export default function App() {

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="login">

          <Stack.Screen name="login" component={Login} options={{ title: "로그인" }} />

          <Stack.Screen name="account" component={Account} options={{title:"회원가입"}}/>

          <Stack.Screen name="bbs" component={Bbs}  options={{title:"게시판"}}/>

        </Stack.Navigator>
    </NavigationContainer>
  )
}
