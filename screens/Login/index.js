import { useNavigation } from "@react-navigation/native";
import { View, Text, SafeAreaView, Platform, StatusBar } from "react-native";
import AppForm from "../../components/Form/AppForm";
import AppFormFeilds from "../../components/Form/AppFormFeilds";
import AppSubmitButton from "../../components/Form/AppSubmitButton";
import { LoginSchema } from "../../Validation";

const Login = () => {

  const navigation = useNavigation();

  const loginUser = (values) => {
    console.log(values);
  }

  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
      className="pt-5 flex-1 items-center justify-center"
    >
      <View className="shadow-md bg-white w-full p-8">
        <Text className="text-1xl font-bold text-center">
          Welcome to join our community
        </Text>
        <AppForm
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={(values) => loginUser(values)}
        >
          <AppFormFeilds
            name="email"
            placeholder="Email"
            keyboardType="email-address"
          />
          <AppFormFeilds
            name="password"
            placeholder="Password"
            autoCompleteType="off"
            password={true}
          />
          <AppSubmitButton title="Login Now" />
        </AppForm>
        <Text className="mt-4 text-gray-700">
          If you don't have account?
          <Text className="text-blue-600" onPress={() => navigation.navigate("Register")}>signup</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;
