import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";

type Params = {
  id: number;
  title: string;
  country: string;
  imageUrl: string;
  rating: number;
  price: number;
  description: string;
};

const DetailScreen = () => {
  const route = useRoute<RouteProp<Record<string, Params>, string>>();
  const data = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: data.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.country}>{data.country}</Text>
      <Text style={styles.desc}>{data.description}</Text>
      <Text style={styles.price}>${data.price.toLocaleString()}/pax</Text>
    </ScrollView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: { backgroundColor: "#fff" },
  image: { width: "100%", height: 240 },
  title: { fontSize: 24, fontWeight: "bold", margin: 16 },
  country: { fontSize: 16, marginHorizontal: 16, color: "#666" },
  desc: { fontSize: 14, margin: 16, color: "#333" },
  price: { fontSize: 16, fontWeight: "bold", margin: 16 },
});
