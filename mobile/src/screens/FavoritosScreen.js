import React from "react";
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const favoritos = [
  {
    id: "1",
    nome: "Parque Nacional Serra da Capivara",
    image: require("../assets/05.jpg"), // Certifique-se de que o caminho está correto
  },
];

export default function FavoritosScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meus Favoritos</Text>

      <FlatList
        data={favoritos}
        keyExtractor={(item, index) => item.id || index.toString()}
        contentContainerStyle={{ padding: 20 }}
        ListEmptyComponent={
          <Text style={styles.emptyMessage}>
            Nenhum favorito encontrado.
          </Text>
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("DestinationDetails", { destination: item })}
          >
            <Image
              source={item.image || require("../assets/download (1).jpg")}
              style={styles.image}
            />
            <View style={styles.info}>
              <Text style={styles.name}>{item.nome}</Text>
              <Icon name="heart" size={24} color="#FF4C4C" />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 20,
    textAlign: "center",
  },
  emptyMessage: {
    textAlign: "center",
    marginTop: 20,
    color: "#888",
    fontSize: 16,
  },
  card: {
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    marginBottom: 20,
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
});