import React, {useState} from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { FontAwesome5 } from "@expo/vector-icons";
import Constants from "expo-constants";
import RegisterForm from '../4-register-form/RegisterForm';

export default function PecLogin() {

  const [register, setRegister] = useState(false);

  if (register !== false){
    return (
      <RegisterForm/>
    );
    setRegister(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* https://docs.expo.io/versions/latest/sdk/status-bar */}
      <StatusBar style="light" />

      <View style={styles.content}>
        <View style={styles.textWrapper}>
          <Text style={styles.hiText} onPress={() => setRegister(true)}>Not Registered ? Register Now </Text>
          <Text style={styles.userText}>Welcome Back!</Text>
          <Text style={styles.userText}>PTUian</Text>
        </View>

        <View style={styles.form}>
          {/* https://docs.expo.io/guides/icons */}
          <FontAwesome5 name="lock" style={styles.iconLock} />

          {/* https://reactnative.dev/docs/textinput */}
          <TextInput
            style={styles.inputPassword}
            keyboardType="numeric"
            secureTextEntry={true}
            autoFocus={true}
            placeholder="Enter Password"
            placeholderTextColor="#929292"
          />

          {/* https://reactnative.dev/docs/touchableopacity */}
          <TouchableOpacity style={styles.buttonLogin}>
            <Text style={styles.buttonLoginText}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.action}>
          <TouchableOpacity>
            <Text style={styles.userText}>Forgot Password</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.userText}>Need Help!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const TEXT = {
  color: "#fff",
  textAlign: "center",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b0006d",
    paddingTop: Constants.statusBarHeight,
  },
  content: {
    paddingHorizontal: 30,
  },
  textWrapper: {
    marginTop: 60,
    marginBottom: 30,
  },
  hiText: {
    ...TEXT,
    fontSize: 20,
    lineHeight: 50,
    fontWeight: "bold",
    textDecorationStyle: "solid",
    textDecorationLine:"underline",
  },
  userText: {
    ...TEXT,
    fontSize: 16,
    lineHeight: 30,
  },
  form: {
    marginBottom: 30,
  },
  iconLock: {
    color: "#929292",
    position: "absolute",
    fontSize: 16,
    top: 22,
    left: 22,
    zIndex: 10,
  },
  inputPassword: {
    height: 60,
    borderRadius: 30,
    paddingHorizontal: 30,
    fontSize: 20,
    color: "#929292",
    backgroundColor: "#fff",
    textAlign: "center",
    textAlignVertical: "center",
  },
  buttonLogin: {
    height: 50,
    borderRadius: 25,
    backgroundColor: "#8d015a",
    justifyContent: "center",
    marginTop: 15,
  },
  buttonLoginText: {
    ...TEXT,
  },
  action: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
