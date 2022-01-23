import { NavigationContainer } from "@react-navigation/native";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import Products from "./screens/Products";
import ProductDetails from "./screens/ProductDetails";

import { Easing } from "react-native";

const Stack = createSharedElementStackNavigator();

const MainApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Products">
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={() => ({
            transitionSpec: {
              open: {
                animation: "timing",
                config: { duration: 400, easing: Easing.inOut(Easing.ease) },
              },
              close: {
                animation: "timing",
                config: { duration: 400, easing: Easing.inOut(Easing.ease) },
              },
            },
          })}
          sharedElements={(route, otherRoute, showing) => {
            const { item } = route.params;
            return [
              { id: `item.${item.id}.image` },
              { id: `item.${item.id}.title`, animation: "fade-in" },
            ];
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainApp;
