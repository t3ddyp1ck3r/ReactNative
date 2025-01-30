import React from "react";
import { Stack } from "expo-router";

export default function NoteLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#000" },
        headerTintColor: "#fff",
      }}
    />
  );
}
