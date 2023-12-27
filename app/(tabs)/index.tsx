import { useState, useEffect } from "react";
import axios from "axios";
import { Image } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";

export default function TabOneScreen() {
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/pikachu").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);

  return (
    <View className="flex flex-1 items-center justify-center">
      <Text className="text-2xl font-bold capitalize">{data?.name}</Text>
      <View className="my-8 h-px w-80 bg-gray-300 dark:bg-gray-700" />
      {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
      <Image
        source={{ uri: data?.sprites?.front_default }}
        className="h-64 w-64"
      />
    </View>
  );
}
