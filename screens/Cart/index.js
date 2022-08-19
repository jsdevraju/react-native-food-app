import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { XCircleIcon } from "react-native-heroicons/solid";
import ListItem from "../../components/ListItem";

const Cart = () => {
  const navigation = useNavigation();

  // useEffect(() =>{
  //     const groupItems = items.reduce((result, item) => {
  //         (result[item._id] = result[item._id] || []).push(item);
  //         return result;
  //     })
  //     setGroupItemsCart(groupItems)
  // }, [])

  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
      className="flex-1 bg-white"
    >
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#00ccbb] bg-white shadow-md">
          <View>
            <Text className="text-lg font-bold text-center">Cart</Text>
            <Text className="text-center text-gray-400">Restaurant name</Text>
          </View>
          {/* Close Button */}
          <TouchableOpacity
            onPress={navigation.goBack}
            className="rounded-full bg-gray-100 absolute top-3 right-5"
          >
            <XCircleIcon color="#00CCBB" height={50} width={50} />
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image
            source={{ uri: "https://links.papareact.com/wru " }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <Text className="flex-1">Deliver in 58-75 min</Text>
          <TouchableOpacity>
            <Text className="text-[#00ccbb]">Change</Text>
          </TouchableOpacity>
        </View>
        {/* Render Cart Item */}
        <ScrollView>
          {/* Object.emtries(GroupItemsCart).map((key, item)) => () */}
          {/* Need Map Throw  */}
          <View className="flex-row items-center space-x-3 bg-white py-2 px-5">
            <Text className="text-[#00ccbb]">2x</Text>
            <Image
              source={{ uri: "https://links.papareact.com/wru" }}
              className="h-12 w-12 rounded-full"
            />
            <Text className="flex-1">Item Name</Text>
            <Text className="text-gray-600">$100</Text>
            <TouchableOpacity>
              <Text className="text-[#00ccbb] text-xs">Remove</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        {/* Place Order  */}
        <View className="p-5 bg-white space-y-4">
          <ListItem name="Subtotal" price={100} />
          <ListItem name="Delivery Fee" price={10} />
          <ListItem name="Order Total" price={110} />
          <TouchableOpacity className="rounded-lg bg-[#00ccbb] p-4" onPress={() => navigation.navigate("Order")}>
            <Text className="text-center text-white text-lg font-bold">
              Place order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Cart;
