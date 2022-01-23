import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import { SharedElement } from "react-navigation-shared-element";

export default function ProductDetails({ route }) {
  const { item } = route.params;

  return (
    <View style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}>
      <SharedElement id={`item.${item.id}.image`}>
        <Image
          source={{ uri: item.image }}
          style={{ resizeMode: "contain", height: 350, width: 350 }}
        />
      </SharedElement>
      <View style={tw`px-5 pt-10 `}>
        <SharedElement id={`item.${item.id}.title`}>
          <>
            <Text numberOfLine={1} style={tw`text-base font-bold`}>
              {item?.title}
            </Text>
            <Text style={tw`text-lg`}>{item.category}</Text>
            <Text style={tw`text-red-500`}>${item.price}</Text>
          </>
        </SharedElement>
      </View>
    </View>
  );
}
