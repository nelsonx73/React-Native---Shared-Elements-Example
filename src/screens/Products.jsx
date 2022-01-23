import React from "react";

import { View, Text, StatusBar, ScrollView } from "react-native";
import axios from "axios";
import tw from "twrnc";
import { ProductCard } from "../components";

export default function Products({ navigation }) {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    async function getData() {
      const request = await fetch("https://fakestoreapi.com/products");
      const response = await request.json();
      setProducts(response);
    }

    getData();
  }, []);

  return (
    <View style={tw`flex-1 pt-0 bg-white`}>
      <ScrollView contentContainerStyle={{}}>
        {products.map((item, key) => (
          <ProductCard
            item={item}
            index={key}
            key={key}
            navigation={navigation}
          />
        ))}
      </ScrollView>

      <StatusBar barStyle="dark-content" backgroundColor="#eee" />
    </View>
  );
}
