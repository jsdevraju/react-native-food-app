import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  StatusBar,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { XIcon } from "react-native-heroicons/outline";
import * as Progress from "react-native-progress";

const Delivery = () => {
  const navigation = useNavigation();

  return (
    <View className="bg-[#00ccbb] flex-1">
      <SafeAreaView
        style={{
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        }}
        className="z-50"
      >
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XIcon color="white" size={30} />
          </TouchableOpacity>
          <Text className="text-white font-light text-lg">Order help</Text>
        </View>
        <View>
          <View className="bg-white mx-5 my2 rounded-md p-6 z-50 shadow-md">
            <View className="flex-row justify-between">
              <View>
                <Text className="text-gray-400 text-lg">
                  Your order is on the way!
                </Text>
                <Text className="text-4xl font-bold">45-55 Minutes</Text>
              </View>
              <Image
                source={{ uri: "https://links.papareact.com/fls" }}
                className="h-20 w-20"
              />
            </View>
            <Progress.Bar size={30} color="#00ccbb" indeterminate={true} />
            <Text className="mt-3 text-gray-300">
                Your order is being prepared and will be delivered soon
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Delivery;
