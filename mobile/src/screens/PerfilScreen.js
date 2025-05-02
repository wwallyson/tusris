import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function PerfilScreen() {
  return (
    <View style={styles.container}>
      {/* Foto de perfil */}
      <Image
        source={require("../assets/02.jpg")} // Você pode trocar pela sua imagem
        style={styles.profileImage}
      />

      {/* Nome do usuário */}
      <Text style={styles.name}>Francisco Wallyson</Text>

      {/* Email ou descrição */}
      <Text style={styles.email}>francisco52633146@edum.pi.senac.br</Text>

      {/* Botões de ações */}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.button}>
          <Icon name="heart-outline" size={20} color="#fff" />
          <Text style={styles.buttonText}>Meus Favoritos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Icon name="log-out-outline" size={20} color="#fff" />
          <Text style={styles.buttonText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#87CEEB",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "#fff",
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  email: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 30,
  },
  actions: {
    width: "100%",
    alignItems: "center",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4682B4",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
    width: "80%",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 8,
  },
});
