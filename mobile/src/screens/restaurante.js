import React, { useState, useEffect } from "react";
import {View, Text} from "react-native";
import styles from "./HomeScreen/style";

export default function RestaurantScreen() {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Localização</Text>
        <Text style={styles.description}>
            Aqui você pode visualizar sua localização atual e explorar os pontos turísticos ao seu redor.
        </Text>
        </View>
    );
}