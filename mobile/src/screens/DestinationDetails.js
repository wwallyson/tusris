import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native"; // Importação do hook

export default function DestinationDetails({ route }) {
  const navigation = useNavigation(); // Obtém o objeto navigation
  const { nome, imagem, estrelas, descricao } = route.params;
  const [isFavorite, setIsFavorite] = useState(false);

  // Verifica se o destino já está nos favoritos
  useEffect(() => {
    checkFavorite();
  }, []);

  const checkFavorite = async () => {
    const stored = await AsyncStorage.getItem("favoritos");
    const favoritos = stored ? JSON.parse(stored) : [];
    const alreadyFavorited = favoritos.some((item) => item.nome === nome);
    setIsFavorite(alreadyFavorited);
  };

  const toggleFavorite = async () => {
    const stored = await AsyncStorage.getItem("favoritos");
    let favoritos = stored ? JSON.parse(stored) : [];

    if (isFavorite) {
      favoritos = favoritos.filter((item) => item.nome !== nome);
      Alert.alert("Removido", `${nome} foi removido dos favoritos.`);
    } else {
      favoritos.push({ nome, imagem, estrelas, descricao });
      Alert.alert("Adicionado", `${nome} foi adicionado aos favoritos!`);
    }

    await AsyncStorage.setItem("favoritos", JSON.stringify(favoritos));
    setIsFavorite(!isFavorite);
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={imagem} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.title}>{nome}</Text>
        <Text style={styles.stars}>{"★".repeat(estrelas)}</Text>
        <Text style={styles.description}>{descricao}</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate("Mapa", {
              nome,
              latitude: -5.0892, // Substitua pelas coordenadas reais
              longitude: -42.8016,
            })
          }
        >
          <Icon name="location-sharp" size={20} color="#fff" />
          <Text style={styles.buttonText}>Ver no Mapa</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.favButton,
            { backgroundColor: isFavorite ? "#aaa" : "#FF6347" },
          ]}
          onPress={toggleFavorite}
        >
          <Icon name="heart" size={20} color="#fff" />
          <Text style={styles.buttonText}>
            {isFavorite ? "Remover dos Favoritos" : "Adicionar aos Favoritos"}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 200,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  stars: {
    fontSize: 18,
    color: "#FFD700",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: "#555",
    marginBottom: 16,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#007BFF",
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 8,
  },
  favButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    borderRadius: 8,
  },
});