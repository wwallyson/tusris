import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AuthStack from "./src/navigation/AuthStack"; // Importação do AuthStack
import HomeScreen from "./src/screens/HomeScreen";
import FavoritosScreen from "./src/screens/FavoritosScreen";
import MapScreen from "./src/screens/MapScreen";
import DestinationDetails from "./src/screens/DestinationDetails";
import CitiesScreen from "./src/screens/CitiesScreen";
import PerfilScreen from "./src/screens/PerfilScreen";
import LocationScreen from "./src/screens/location";
import bebScreen from "./src/screens/beb";
import RestaurantScreen from "./src/screens/restaurante";
import trailScreen from "./src/screens/trailScreen"; 

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para controlar login

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Explore o Piauí" }}
          />
          <Stack.Screen
            name="Favoritos"
            component={FavoritosScreen}
            options={{ title: "Destinos Favoritos" }}
          />
          <Stack.Screen
            name="Mapa"
            component={MapScreen}
            options={{ title: "Mapa Turístico" }}
          />
          <Stack.Screen
            name="DestinationDetails"
            component={DestinationDetails}
            options={{ title: "Mais Informações" }}
          />
          <Stack.Screen
            name="Cities"
            component={CitiesScreen}
            options={{ title: "Cidades do Piauí" }}
          />
          <Stack.Screen
            name="Perfil"
            component={PerfilScreen}
            options={{ title: "Meu Perfil" }}
          />
          <Stack.Screen
            name="Location"
            component={LocationScreen}
            options={{ title: "Localização" }}
          />
          <Stack.Screen
            name="restaurante"
            component={RestaurantScreen}
            options={{ title: "Restaurantes" }}
          />
          <Stack.Screen
            name="bebida"
            component={bebScreen}
            options={{ title: "Bebidas" }}  
          />
          <Stack.Screen
            name="trilha"
            component={trailScreen}
            options={{ title: "Trilhas" }}
          />
        </Stack.Navigator>
      ) : (
        <AuthStack setIsLoggedIn={setIsLoggedIn} /> // Exibe o AuthStack se o usuário não estiver logado
      )}
    </NavigationContainer>
  );
}