//import liraries
import { View, Text, ScrollView } from "react-native";
import CategoryCard from "../CatrgoryCard";

// create a component
const Categories = () => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
    >
      {/* Category Card */}
      <CategoryCard
        imageUrl="https://links.papareact.com/gn7"
        title="Working"
      />
      <CategoryCard
        imageUrl="https://links.papareact.com/gn7"
        title="Working"
      />
      <CategoryCard
        imageUrl="https://links.papareact.com/gn7"
        title="Working"
      />
      <CategoryCard
        imageUrl="https://links.papareact.com/gn7"
        title="Working"
      />
      <CategoryCard
        imageUrl="https://links.papareact.com/gn7"
        title="Working"
      />
      <CategoryCard
        imageUrl="https://links.papareact.com/gn7"
        title="Working"
      />
      <CategoryCard
        imageUrl="https://links.papareact.com/gn7"
        title="Working"
      />
      <CategoryCard
        imageUrl="https://links.papareact.com/gn7"
        title="Working"
      />
      <CategoryCard
        imageUrl="https://links.papareact.com/gn7"
        title="Working"
      />
    </ScrollView>
  );
};

//make this component available to the app
export default Categories;
