import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";

const artesanatos = [
  {
    id: 1,
    nome: "Renda de Bilro",
    imagem: require("../assets/renda.jpg"),
    descricao: "Peça delicada feita à mão no litoral do Piauí.",
    estrelas: 5,
  },
  {
    id: 2,
    nome: "Cerâmica de Campo Maior",
    imagem: require("../assets/tigela.jpg"),
    descricao: "Tradicional arte em barro, símbolo da cultura local.",
    estrelas: 4,
  },
  {
    id: 3,
    nome: "Bordado de Pedro II",
    imagem: require("../assets/santero.jpg"),
    descricao: "Bordados finos feitos por artesãs da serra.",
    estrelas: 5,
  },
  {
    id: 4,
    nome: "Artesanato em Madeira",
    imagem: require("../assets/leao.jpg"),
    descricao: "Esculturas talhadas manualmente com riqueza de detalhes.",
    estrelas: 5,
  },
];

export default function TrailScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.imagem} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.nome}</Text>
      <Text style={styles.cardText}>{item.descricao}</Text>
      <Text style={styles.stars}>
        {"★".repeat(item.estrelas)}{"☆".repeat(5 - item.estrelas)}
      </Text>
      <TouchableOpacity style={styles.smallButton}>
        <Text style={styles.buttonText}>Ver mais</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Artesanato Piauiense</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carousel}>
        <Image source={require("../assets/carrosel.jpg")} style={styles.carouselImage} />
        <Image source={require("../assets/carrosell.jpg")} style={styles.carouselImage} />
        <Image source={require("../assets/santero.jpg")} style={styles.carouselImage} />
        <Image source={require("../assets/03.jpg")} style={styles.carouselImage} />
      </ScrollView>

      <FlatList
        data={artesanatos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between", paddingHorizontal: 10 }}
        contentContainerStyle={{ paddingBottom: 20 }}
        scrollEnabled={false}
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
  header: {
    backgroundColor: "#8B5E3C",
    paddingVertical: 16,
    paddingHorizontal: 20,
    width: "100%",
    alignItems: "center",
  },
  headerText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    letterSpacing: 1,
  },
  carousel: {
    width: "100%",
    marginVertical: 10,
  },
  carouselImage: {
    width: 250,
    height: 120,
    marginHorizontal: 8,
    borderRadius: 10,
  },
  card: {
    backgroundColor: "#8B5E3C",
    borderRadius: 12,
    padding: 10,
    marginVertical: 12,
    marginHorizontal: 8,
    width: Dimensions.get("window").width * 0.43,
    alignItems: "center",
  },
  cardImage: {
    width: "100%",
    height: 100,
    borderRadius: 10,
  },
  cardTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 6,
  },
  cardText: {
    color: "#fff",
    fontSize: 12,
    textAlign: "center",
    marginTop: 4,
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
    marginTop: 6,
  },
  buttonText: {
    fontSize: 12,
    color: "#000",
  },
});
