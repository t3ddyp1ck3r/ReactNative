import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { items } from "../../assets/data";

export default function NoteDetails() {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ title: "Note Details" });
  }, [navigation]);

  const noteId = Array.isArray(id) ? id[0] : id;
 
  const index = parseInt(noteId ?? "0", 10) - 1;

  if (!items[index]) {
    return (
      <View style={styles.container}>
        <Text style={styles.noteTitle}>Note not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.noteTitle}>{items[index].title}</Text>
      <Text style={styles.noteBody}>{items[index].body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  noteTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 12,
  },
  noteBody: {
    fontSize: 16,
    color: "#ccc",
    textAlign: "center",
  },
});
