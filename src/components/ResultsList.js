import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
// import { YELP_API_KEY } from "@env";

const ResultsList = (props) => {
  const { title, results } = props;

  const [term, setTerm] = useState("");
  console.log(process.env.YELP_API_KEY, "test");

  return (
    <View>
      <Text style={styles.title}> {title} </Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <Text>{item.name}</Text>;
        }}
      />
      <Text style={styles.title}>Results: {results.length} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ResultsList;
