import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert, ImageBackground } from "react-native";

export default function LoginScreen({ setIsLoggedIn, navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    if (email === "teste@teste.com" && senha === "123456") {
      setIsLoggedIn(true); // Simula login com sucesso
    } else {
      Alert.alert("Erro", "E-mail ou senha incorretos");
    }
  };

  return (
    <ImageBackground
      source={require("../assets/tela).jpg")} 
      style={styles.background} >
      <View style={styles.container}>
        <Image
          source={require("../assets/download (1).jpg")}
          style={styles.topImage}
          resizeMode="cover"
        />
        {/* <Image
          source={require("../assets/logo.jpg")}
          style={styles.logo}
          resizeMode="contain"
        /> */}
        <TextInput
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          style={styles.input}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Register')}>
          <Text style={styles.registerLink}>Não tem uma conta? Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground >
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover'
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  topImage: {
    width: "100%",
    height: 200,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 20,
  },
  // logo: {
  //   width: 80,
  //   height: 80,
  //   alignSelf: "center",
  //   marginBottom: 20,
  // },
  input: {
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 12,
    marginVertical: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#90EE90",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  registerLink: {
    textAlign: "center",
    marginTop: 15,
    color: "#fff",
  },
});