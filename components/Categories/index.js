//import liraries
import { ScrollView } from "react-native";
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
        imageUrl="https://i.vimeocdn.com/video/959503411-bdaf954f139c18d99b6c163f411915e53156311484a328b7882272b736dff3d0-d_640x360.jpg"
        title="Vanilla"
      />
      <CategoryCard
        imageUrl="https://i.vimeocdn.com/video/547604932-2e11315f04dd3479a9da84e71666af656ffbef0a204ded200f38d061acf37fa3-d_640x360.jpg"
        title="Chocolate"
      />
      <CategoryCard
        imageUrl="https://i.vimeocdn.com/video/652646067-7222aceb277c225bd72250b89c2f08fe232434bfc5773ef0a8131531618fd598-d_640x360.jpg"
        title="Strawberry"
      />
      <CategoryCard
        imageUrl="https://i.vimeocdn.com/video/806054489-e0f90f50ac1842c9c3274bd60750f743f0aa4eeede7a3f62dd10d020d2e11483-d_640x360.jpg"
        title="Mango"
      />
      <CategoryCard
        imageUrl="https://i.vimeocdn.com/video/932512125-67834dbe9e4c250d6f10015e533065016106d5fc708506455271b8facb1cbac1-d_640x360.jpg"
        title="Pineapple"
      />
      <CategoryCard
        imageUrl="https://i.vimeocdn.com/video/577057284-00ec7c8fd728cb25a73e7c586200f1305c255ccb40770f306a618c32f48b14cb-d_640x360.jpg"
        title="Banana"
      />
      <CategoryCard
        imageUrl="https://i.vimeocdn.com/video/529928826-b14cc5c03e2acf47fd1aac11c84ce93e6c1faba61908d10eedbba40cb6d2e894-d_640x360.jpg"
        title="Pistachio"
      />
      <CategoryCard
        imageUrl="https://i.vimeocdn.com/video/652646184-727c7bd583d184529b9f1ee937b52f53759f158d2d2fd9f34108734bf7230a95-d_640x360.jpg"
        title="Coffee"
      />
    </ScrollView>
  );
};

//make this component available to the app
export default Categories;
