import { useState } from "react";
import { Image, TextInput, Button, View, ScrollView, StyleSheet } from "react-native";
import axios from "axios";

import { Text } from "../../components/Themed";

export default function TabOneScreen() {
  const [pokemonName, setPokemonName] = useState("pikachu"); // Default Pokémon name
  const [data, setData] = useState({});

  const fetchPokemonData = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching Pokémon data:", error);
        setData({}); // Reset data on error
      });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView} >
      {/* className="flex flex-1 items-center justify-center bg-white" */}
      <Text className="my-4 text-2xl font-bold text-black">
        Search for a Pokémon
      </Text>
      <TextInput
        className="w-1/2 border p-2"
        value={pokemonName}
        onChangeText={setPokemonName}
        onSubmitEditing={fetchPokemonData}
      />
      <Button title="Search" onPress={fetchPokemonData} />
      <View className="flex flex-1 items-center justify-center rounded-md border">
        <Text className="text-xl font-bold capitalize text-black">
          Name: {data?.name}
        </Text>
        <Text className="text-xl font-bold capitalize text-black">
          Order: {data?.order}
        </Text>
        <Text className="text-xl font-bold capitalize text-black">
          Types: {data?.types?.[0]?.type?.name}
        </Text>
        <Image
          source={{ uri: data?.sprites?.front_default }}
          className="h-64 w-64"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100%",
  }
})