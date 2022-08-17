import { useNavigation } from "@react-navigation/native";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { ArrowLeftIcon } from "react-native-heroicons/solid";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      {/* Image */}
      <View className="relative">
        <Image
          source={{
            uri: "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_960_720.jpg",
          }}
          className="w-full h-72 bg-gray-300 p-4"
        />
        <TouchableOpacity
          onPress={navigation.goBack}
          className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
        >
          <ArrowLeftIcon size={20} color="#00CCBB" />
        </TouchableOpacity>

        <View className="items-center mt-[-65px]">
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/men/64.jpg" }}
            className="w-[120px] h-[120px] rounded-md object-cover"
          />
          <Text className="text-center mt-[16px] text-2xl font-bold">
            Ricky Alex
          </Text>
          <Text className="text-center">email@gmail.com</Text>
          <TouchableOpacity className="px-5 py-2 border-2 border-[#6327d3] mt-2 rounded-md">
            <Text className="text-[#6327d3]">Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
