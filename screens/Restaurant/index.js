import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  LocationMarkerIcon,
  QuestionMarkCircleIcon,
} from "react-native-heroicons/outline";
import { StarIcon } from "react-native-heroicons/solid";
import DishRow from "../../components/DishRow";
import CartIcon from "../../components/CartIcon";

const Restaurant = () => {
  const {
    params: { id },
  } = useRoute();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <>
      <CartIcon />
      <ScrollView>
        {/* Image */}
        <View className="relative">
          <Image
            source={{
              uri: "https://links.papareact.com/gn7",
            }}
            className="w-full h-56 bg-gray-300 p-4"
          />
          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
          >
            <ArrowLeftIcon size={20} color="#00CCBB" />
          </TouchableOpacity>
        </View>
        {/* Description Details */}
        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">Test Titlw</Text>
            {/* Header Description */}
            <View className="flex-row space-x-2 my-1">
              {/* Start Icon */}
              <View className="flex-row items-center space-x-1">
                <StarIcon color="green" opacity={0.5} size={22} />
                <Text className="text-xs text-gray-500">
                  <Text className="text-green-500">4.5</Text> Japins
                </Text>
              </View>
              {/* Nearby By Address */}
              <View className="flex-row items-center space-x-1">
                <LocationMarkerIcon color="green" opacity={0.5} size={22} />
                <Text className="text-xs text-gray-500">
                  <Text className="text-green-500">Nearby </Text> 123 Main St
                </Text>
              </View>
            </View>
            {/* Short Description */}
            <Text className="text-gray-500 mt-2 pb-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse et
              ipsum temporibus possimus dolores corporis quam eum odio commodi
              itaque!
            </Text>
          </View>
          {/* Touchable Button */}
          <TouchableOpacity className="flex-row items-center space-x-2 border-y border-gray-300 p-4">
            <QuestionMarkCircleIcon color="gray" opacity={0.5} size={20} />
            <Text className="pl-2 flex-1 text-md font-bold">
              Have a food allergy? Let us know
            </Text>
            <ChevronRightIcon color="#00CCBB" />
          </TouchableOpacity>
        </View>
        {/* Menu Dish */}
        <View className="pb-36">
          <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>
          {/* Dishes */}
          <DishRow
            id="12"
            name="awesome"
            description="lorem imsup doller set amet"
            price={10}
            images="https://links.papareact.com/gn7"
          />
          <DishRow
            id="12"
            name="awesome"
            description="lorem imsup doller set amet"
            price={10}
            images="https://links.papareact.com/gn7"
          />
          <DishRow
            id="12"
            name="awesome"
            description="lorem imsup doller set amet"
            price={10}
            images="https://links.papareact.com/gn7"
          />
        </View>
      </ScrollView>
    </>
  );
};

export default Restaurant;
