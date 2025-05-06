import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';

const restaurantes = [
  {
    id: '1',
    nome: 'Cantinho do Sertão',
    imagem: require('../assets/Cabana-del-primo.jpg'),
    nota: 4.5,
  },
  {
    id: '2',
    nome: 'Vasto Teresina',
    imagem: require('../assets/restaurante.jpg'),
    nota: 4.7,
  },
  {
    id: '3',
    nome: 'Restaurante flutuante',
    imagem: require('../assets/Captura de tela 2025-05-06 155911.png'),
    nota: 4.2,
  },
];

export default function RestaurantesScreen() {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={item.imagem} style={styles.image} />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.nome}</Text>
        <Text style={styles.rating}>⭐ {item.nota}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Restaurantes Recomendados</Text>
      <FlatList
        data={restaurantes}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 20,
    marginHorizontal: 16,
    color: '#333',
  },
  list: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    marginBottom: 15,
    overflow: 'hidden',
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 180,
  },
  cardContent: {
    padding: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
  },
  rating: {
    marginTop: 5,
    color: '#f59e0b',
    fontWeight: '600',
  },
});
