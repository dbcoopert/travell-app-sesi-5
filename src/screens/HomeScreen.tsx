import React from "react";
import { View, Text, ScrollView, StyleSheet, TextInput } from "react-native";
import { destinations } from "../data/destinations";
import DestinationCard from "../components/DestinationCard";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.greeting}>Hi, Haikal 👋</Text>

      <View style={styles.banner}>
        <Text style={styles.bannerText}>Plan Your Summer!</Text>
      </View>

      <TextInput style={styles.search} placeholder="Search destination..." />

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Popular Destination</Text>
        <Text style={styles.viewAll}>View All</Text>
      </View>

      {destinations.map((item) => (
        <DestinationCard
          key={item.id}
          title={item.title}
          country={item.country}
          imageUrl={item.imageUrl}
          rating={item.rating}
          price={item.price}
          onPress={() =>
            navigation.navigate("Detail" as never, { ...item } as never)
          }
        />
      ))}
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: "#FDFCFB" },
  greeting: { fontSize: 22, fontWeight: "600", marginBottom: 16 },
  banner: {
    backgroundColor: "#FF7F50",
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
  },
  bannerText: { fontSize: 20, color: "#fff", fontWeight: "bold" },
  search: {
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
    padding: 10,
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitle: { fontSize: 16, fontWeight: "bold" },
  viewAll: { color: "#FF7F50", fontSize: 13 },
});
