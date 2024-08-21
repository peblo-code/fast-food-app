import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function Page() {
    const { id } = useLocalSearchParams();
    return (
        <View>
            <Text>Hello! {id}</Text>
        </View>
    )
}