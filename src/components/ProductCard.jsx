import { TouchableOpacity, Text, View, Image } from "react-native";
import { SharedElement } from "react-navigation-shared-element";

import tw from "twrnc";
import { LineDivider } from ".";

export function ProductCard({ item, navigation }) {
  return (
    <>
      <TouchableOpacity
        onPress={() => navigation.push("ProductDetails", { item })}
        style={tw`flex-row items-start justify-between pl-5 pr-5 py-2`}
      >
        <View style={tw`w-50`}>
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
        <SharedElement id={`item.${item.id}.image`}>
          <Image
            source={{ uri: item.image }}
            style={{ width: 120, height: 120, resizeMode: "contain" }}
          />
        </SharedElement>
      </TouchableOpacity>
      <LineDivider />
    </>
  );
}
