import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";

export default function NoteDetails() {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({ title: "Note Details" });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.noteTitle}>Note {id}</Text>
      <Text style={styles.noteBody}>This is the detail page for note {id}.</Text>
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
  },
});
