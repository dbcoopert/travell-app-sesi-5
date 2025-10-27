import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  title: string;
  country: string;
  imageUrl: string;
  rating: number;
  price: number;
  onPress: () => void;
};

const DestinationCard: React.FC<Props> = ({
  title,
  country,
  imageUrl,
  rating,
  price,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.country}>📍 {country}</Text>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.row}>
          <Text style={styles.price}>${price.toLocaleString()}/pax</Text>
          <View style={styles.rating}>
            <Ionicons name="star" size={14} color="#FFD700" />
            <Text style={styles.ratingText}>{rating}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.heart}>
        <Ionicons name="heart-outline" size={20} color="#fff" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default DestinationCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    marginBottom: 16,
    overflow: "hidden",
    position: "relative",
  },
  image: { width: "100%", height: 180 },
  info: { padding: 10 },
  country: { fontSize: 12, color: "#555" },
  title: { fontSize: 16, fontWeight: "600" },
  row: { flexDirection: "row", justifyContent: "space-between", marginTop: 4 },
  price: { fontWeight: "bold", color: "#333" },
  rating: { flexDirection: "row", alignItems: "center" },
  ratingText: { marginLeft: 4, color: "#555" },
  heart: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "rgba(0,0,0,0.3)",
    padding: 6,
    borderRadius: 20,
  },
});
