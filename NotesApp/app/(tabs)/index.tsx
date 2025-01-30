import React, { useLayoutEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter, useNavigation } from "expo-router";
import { items } from "../../assets/data"; 

export default function HomeScreen() {
  const router = useRouter();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ title: "Home" });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notes App</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: "/notes/[id]",
                params: { id: item.id },
              })
            }
          >
            <View style={styles.card}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardBody}>{item.body}</Text>
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
    backgroundColor: "#121212",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 16,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#2c2c2c",
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  cardBody: {
    fontSize: 14,
    color: "#ccc",
    marginTop: 8,
  },
});
