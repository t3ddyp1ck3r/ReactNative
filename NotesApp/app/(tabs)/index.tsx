import React, { useLayoutEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter, useNavigation } from "expo-router";

const items = [
  {
    id: "1",
    title: "Introduction to JavaScript",
    body: "JavaScript is a versatile programming language used for web development.",
  },
  {
    id: "2",
    title: "DOM Manipulation",
    body: "The Document Object Model (DOM) allows interaction with HTML elements using JavaScript.",
  },
  {
    id: "3",
    title: "Async/Await",
    body: "Async/Await simplifies handling asynchronous operations in JavaScript.",
  },
  {
    id: "4",
    title: "Closures",
    body: "Closures allow functions to retain access to variables from their parent scope even after the parent function has executed.",
  },
  {
    id: "5",
    title: "JavaScript Modules",
    body: "JavaScript modules allow code organization and reuse across multiple files.",
  },
];

export default function HomeScreen() {
  const router = useRouter();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Home",
    });
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
