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
              uri: "https://i.vimeocdn.com/video/797242259-f4d604a2ad941fcfabfae095cf6d90c244322340c37ab3cff20c33642b9e97ec-d_640x360.jpg",
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
            <Text className="text-3xl font-bold">Vanilla Ice Cream</Text>
            {/* Header Description */}
            <View className="flex-row space-x-2 my-1">
              {/* Start Icon */}
              <View className="flex-row items-center space-x-1">
                <StarIcon color="green" opacity={0.5} size={22} />
                <Text className="text-xs text-gray-500">
                  <Text className="text-green-500">4.5</Text> Ice Cream
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
            name="Vanilla Ice Cream"
            description="lorem imsup doller set amet"
            price={10}
            images="https://i.vimeocdn.com/video/529929036-14d354dda7c4f5dc01637826ef0c2579a0be3c29dd8c704ad6ca2883ff88d84b-d_640x360.jpg"
          />
          <DishRow
            id="12"
            name="Storybook Ice Cream"
            description="lorem imsup doller set amet"
            price={10}
            images="https://i.vimeocdn.com/video/652646080-9cec46c7974c67a2c913b32395de344bd7f678bb08000aaf3716b08e84957402-d_640x360.jpg"
          />
          <DishRow
            id="12"
            name="New Vegetable"
            description="lorem imsup doller set amet"
            price={10}
            images="https://i.vimeocdn.com/video/540521405-91d23f47ce423452e826a93d44dce06c7ab4ee49d828cb2f6e616381f87252f0-d_640x360.jpg"
          />
        </View>
      </ScrollView>
    </>
  );
};

export default Restaurant;
