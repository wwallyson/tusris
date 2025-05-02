import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";

export default function LocationScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Cabeçalho com imagem ilustrativa */}
      <Image
        source={require("../assets/Caneca panorâmica eu amo meu nordeste moderno laranja e verde .png")} // salve a imagem do topo como nordeste-header.png
        style={styles.headerImage}
        resizeMode="cover"
      />

      {/* Mapa das regiões do Piauí */}
      <Image
        source={require("../assets/Captura de tela 2025-05-02 162319.png")} // salve o mapa azul como mapa-piaui.png
        style={styles.mapImage}
        resizeMode="contain"
      />

      {/* Botão "Como chegar" */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Como chegar</Text>
      </TouchableOpacity>

      {/* Cards das regiões */}
      <View style={styles.cardsContainer}>
        <View style={[styles.card, { backgroundColor: "#9B59B6" }]}>
          <Text style={styles.cardTitle}>REGIÃO SUL</Text>
        </View>
        <View style={[styles.card, { backgroundColor: "#AED6F1" }]}>
          <Text style={styles.cardTitle}>REGIÃO SUDESTE</Text>
        </View>
        <View style={[styles.card, { backgroundColor: "#196F3D" }]}>
          <Text style={styles.cardTitle}>REGIÃO NORTE</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
  },
  headerImage: {
    width: "100%",
    height: 120,
    marginBottom: 10,
  },
  mapImage: {
    width: "90%",
    height: 180,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#F45A27",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  cardsContainer: {
    width: "100%",
    alignItems: "center",
    gap: 10,
  },
  card: {
    width: "90%",
    height: 80,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },
  cardTitle: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
  },
});
