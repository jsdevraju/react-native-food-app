//import liraries
import { View, Text, ScrollView } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "../RestaurantCard";

// create a component
const FeaturedRow = ({ id, title, description, featuredCategory }) => {
  return (
    <View>
      <View className="flex-row mt-4 items-center justify-between px-4">
        <Text className="font-bold text-lg">FeaturedRow</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* Restaurant Card */}
        <RestaurantCard
          id="1223"
          imageUrl="https://links.papareact.com/gn7"
          title="Yo pop"
          rating={4.5}
          genre-="Japanis"
          address="123 Main Sr"
          short_description="This is test description"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

//make this component available to the app
export default FeaturedRow;
