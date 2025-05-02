import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const destaques = [
  { id: "1", nome: "Fortaleza", image: require("../../assets/04.jpg") },
  { id: "2", nome: "Natal", image: require("../../assets/02.jpg") },
  { id: "3", nome: "Jericoacoara", image: require("../../assets/03.jpg") },
  { id: "4", nome: "Fortaleza", image: require("../../assets/05.jpg") },
];

const recomendados = [
  {
    id: "1",
    nome: "São Raimundo Nonato",
    image: require("../../assets/SAO-RAIMUNDO-NONATO.jpg"),
    estrelas: 5,
    descricao: "Portal do Parque Nacional da Serra da Capivara.",
  },
  {
    id: "2",
    nome: "Rio Parnaíba",
    image: require("../../assets/04.jpg"),
    estrelas: 4,
    descricao: "Belezas naturais e passeio de barco inesquecível.",
  },
];

export default function HomeScreen() {
  const navigation = useNavigation();

  const irParaDetalhes = (destino) => {
    navigation.navigate("DestinationDetails", { destino });
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 20 }}>
      {/* Logo */}
      <View style={styles.header}>
        <Image
          source={require("../../assets/logo.jpg")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Barra de busca */}
      <View style={styles.searchBox}>
        <TextInput
          placeholder="Buscar destinos..."
          placeholderTextColor="#888"
          style={styles.input}
        />
        <Icon name="search" size={24} color="#555" />
      </View>

      {/* Ícones de categorias */}
      <View style={styles.categories}>
        <Icon name="location-sharp" size={24} onPress={() => navigation.navigate('Location')}/>
        <Icon name="restaurant" size={24} onPress={() => navigation.navigate('restaurante')} />
        <Icon name="bed" size={24} onPress={() => navigation.navigate('bebida')} />
        <Icon name="trail-sign" size={24} onPress={() => navigation.navigate('trilha')} />
      </View>

      {/* Carrossel */}
      <Text style={styles.sectionTitle}>Destinos em Destaque</Text>
      <FlatList
        horizontal
        data={destaques}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => irParaDetalhes(item)}>
            <Image source={item.image} style={styles.carouselImage} />
          </TouchableOpacity>
        )}
        style={styles.carousel}
      />

      {/* Recomendações */}
      <Text style={styles.sectionTitle}>Recomendações</Text>
      {recomendados.map((item) => (
        <TouchableOpacity key={item.id} onPress={() => irParaDetalhes(item)} style={styles.card}>
          <Image source={item.image} style={styles.cardImage} />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{item.nome}</Text>
            <Text style={styles.stars}>{"★".repeat(item.estrelas)}</Text>
            <Text numberOfLines={2} style={{ color: "#777" }}>{item.descricao}</Text>
          </View>
        </TouchableOpacity>
      ))}

      {/* Rodapé */}
      <View style={styles.footer}>
        <Icon name="home" size={24} />
        <Icon name="map" size={24} />
        <Icon name="heart" size={24} />
        <Icon name="person" size={24} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    alignItems: "center",
    marginVertical: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  categories: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  carousel: {
    marginVertical: 10,
  },
  carouselImage: {
    width: 150,
    height: 200,
    borderRadius: 10,
    marginHorizontal: 6,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    marginHorizontal: 20,
    marginVertical: 10,
    overflow: "hidden",
  },
  cardImage: {
    width: 100,
    height: 100,
  },
  cardContent: {
    flex: 1,
    padding: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  stars: {
    color: "#FFD700",
    marginTop: 5,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
});