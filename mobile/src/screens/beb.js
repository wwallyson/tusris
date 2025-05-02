import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";

export default function BebScreen() {
  const locais = [
    {
      id: 1,
      nome: "Hotel Tropical",
      imagem: require("../assets/download (2).jpg"),
      estrelas: 4,
    },
    {
      id: 2,
      nome: "Resort Encantado",
      imagem: require("../assets/o-que-fazer-em-barra-grande-do-piaui-com-chuva-la-plage.jpg"),
      estrelas: 5,
    },
    {
      id: 3,
      nome: "Pousada do Sol",
      imagem: require("../assets/frente-hotel-ventura.jpg"),
      estrelas: 3,
    },
  ]
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require("../assets/Caneca panorâmica eu amo meu nordeste moderno laranja e verde .png")} // imagem tropical do topo
        style={styles.topImage}
        resizeMode="cover"
      />

      {locais.map((local) => (
        <View key={local.id} style={styles.card}>
          <Image source={local.imagem} style={styles.cardImage} />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Tela de Exploração</Text>
            <Text style={styles.cardText}>• Barra de busca: “O que você quer”</Text>
            <Text style={styles.stars}>{"★".repeat(local.estrelas)}{"☆".repeat(5 - local.estrelas)}</Text>
            <View style={styles.buttons}>
              <TouchableOpacity style={styles.smallButton}>
                <Text style={styles.buttonText}>Ver mais</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.smallButton}>
                <Text style={styles.buttonText}>Favoritar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ))}

      <Image
        source={require("../assets/01.jpg")} // imagem tropical do final
        style={styles.bottomImage}
        resizeMode="cover"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8FFF5",
    paddingVertical: 10,
    alignItems: "center",
  },
  topImage: {
    width: "100%",
    height: 100,
    marginBottom: 10,
  },
  bottomImage: {
    width: "100%",
    height: 80,
    marginTop: 10,
  },
  card: {
    width: "90%",
    backgroundColor: "#1A1A1A",
    borderRadius: 12,
    marginVertical: 10,
    flexDirection: "row",
    overflow: "hidden",
    elevation: 5,
  },
  cardImage: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  cardContent: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
  },
  cardTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  cardText: {
    color: "#fff",
    fontSize: 12,
    marginVertical: 2,
  },
  stars: {
    color: "#FFD700",
    fontSize: 14,
    marginVertical: 4,
  },
  buttons: {
    flexDirection: "row",
    gap: 10,
    marginTop: 5,
  },
  smallButton: {
    backgroundColor: "#E6F2E6",
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 12,
    color: "#000",
  },
});
