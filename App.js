import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/Home";
import Restaurant from "./screens/Restaurant";
import Cart from "./screens/Cart";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restaurant" component={Restaurant} />
          <Stack.Screen name="Cart" component={Cart} options={{
            presentation: 'modal',
            headerShown: false
          }} />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}
