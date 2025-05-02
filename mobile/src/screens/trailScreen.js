import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";

export default function trailScreen() {
  const artesanatos = [
    {
      id: 1,
      nome: "Renda de Bilro",
      imagem: require("../assets/01.jpg"),
      descricao: "Peça delicada feita à mão no litoral do Piauí.",
      estrelas: 5,
    },
    {
      id: 2,
      nome: "Cerâmica de Campo Maior",
      imagem: require("../assets/01.jpg"),
      descricao: "Tradicional arte em barro, símbolo da cultura local.",
      estrelas: 4,
    },
    {
      id: 3,
      nome: "Bordado de Pedro II",
      imagem: require("../assets/01.jpg"),
      descricao: "Bordados finos feitos por artesãs da serra.",
      estrelas: 5,
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require("../assets/01.jpg")}
        style={styles.topImage}
        resizeMode="cover"
      />

      {artesanatos.map((item) => (
        <View key={item.id} style={styles.card}>
          <Image source={item.imagem} style={styles.cardImage} />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{item.nome}</Text>
            <Text style={styles.cardText}>{item.descricao}</Text>
            <Text style={styles.stars}>{"★".repeat(item.estrelas)}{"☆".repeat(5 - item.estrelas)}</Text>
            <TouchableOpacity style={styles.smallButton}>
              <Text style={styles.buttonText}>Ver mais</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}

      <Image
        source={require("../assets/01.jpg")}
        style={styles.bottomImage}
        resizeMode="cover"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FEFAE0",
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
    backgroundColor: "#8B5E3C",
    borderRadius: 12,
    marginVertical: 10,
    flexDirection: "row",
    overflow: "hidden",
    elevation: 5,
  },
  cardImage: {
    width: 100,
    height: 100,
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
  smallButton: {
    backgroundColor: "#FDE68A",
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginTop: 4,
    alignSelf: "flex-start",
  },
  buttonText: {
    fontSize: 12,
    color: "#000",
  },
});
