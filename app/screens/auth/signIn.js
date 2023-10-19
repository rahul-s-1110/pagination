import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  SafeAreaView,
  Pressable,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

const SigninScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const login = () =>{
    if(email != 'reactnative@tot.com'){
      Alert.alert("email is incorrect");
    }else if(password != 'Tot@123'){
      Alert.alert("Password is incorrect");
    }else {
      console.log("login")
    }    
  }


  return (
    <SafeAreaView style={styles.androidSafeArea}>
          <View style={styles.headView}>
            <Text style={styles.signinTxt1}>Sign In</Text>
            <Text style={styles.signintxt2}>Sign In to your account</Text>
          </View>
          <View style={{ marginTop: 50 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialCommunityIcons
                name="email-outline"
                size={24}
                color={emailFocus ? "#318CE7" : "black"}
              />
              <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                onFocus={() => {
                  setEmailFocus(true);
                  setPasswordFocus(false);
                }}
                keyboardType="email-address"
                placeholderTextColor="black"
                style={[styles.TxtInpt, { fontSize: email ? 18 : 18 }]}
              />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons
                name="key-outline"
                size={24}
                color={passwordFocus ? "#318CE7" : "black"}
              />
              <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                onFocus={() => {
                  setPasswordFocus(true);
                  setEmailFocus(false);
                }}
                secureTextEntry={true}
                placeholderTextColor="black"
                style={[
                  styles.TxtInpt,
                  { fontSize: password ? 18 : 18, marginVertical: 20 },
                ]}
              />
            </View>

            <Pressable onPress={login} style={styles.btn}>
              <Text style={styles.btnTxt}>Login</Text>
            </Pressable>
          </View>
    </SafeAreaView>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 28 : 0,
    backgroundColor: "white",
    padding: 10,
    alignItems: "center",
  },
  headView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  signinTxt1: {
    fontSize: 20,
    color: "#662D91",
    fontWeight: "bold",
  },
  signintxt2: {
    fontSize: 18,
    marginTop: 8,
    fontWeight: "600",
  },
  TxtInpt: {
    borderBottomWidth: 1,
    marginLeft: 14,
    borderBottomColor: "gray",
    width: 280,
    marginVertical: 10,
  },
  btn: {
    backgroundColor: "#318CE7",
    padding: 15,
    width: 200,
    marginTop: 50,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 10,
  },
  btnTxt: {
    fontSize: 18,
    textAlign: "center",
    color: "white",
  },
  signupScreenTxt: {
    alignSelf: "center",
    fontSize: 17,
    color: "gray",
    fontWeight: "600",
  },
});