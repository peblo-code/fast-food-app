import { View, StyleSheet, ScrollView } from "react-native";
import FoodTab from "./FoodTab";
import FoodItem from "./FoodItem"

const items = [
    {
        item_id: 1,
        item_name: "Beef Burguer",
        item_description: "Carne con queso",
        item_price: "18.000",
        item_image: require("../assets/Burger1.png"),
    },
    {
        item_id: 2,
        item_name: "Rancho Burguer",
        item_description: "Carne con huevo",
        item_price: "16.000",
        item_image: require("../assets/Burger2.png"),
    },
    {
        item_id: 3,
        item_name: "Tehas Burguer",
        item_description: "Carne con tomate",
        item_price: "12.000",
        item_image: require("../assets/Burger3.png"),
    },
    {
        item_id: 4,
        item_name: "Chicken Burguer",
        item_description: "Carne de pollo",
        item_price: "8.000",
        item_image: require("../assets/Burger4.png"),
    },
]

export default function FoodList() {
    return (
        <View style={styles.foodListContainer}>
            <FoodTab />
            <ScrollView>
                <View style={styles.foodList}>
                    { items.map(item => <FoodItem items={item} key={item.item_id} />) }
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    foodListContainer: {
        marginTop: 48,
        flex: 1,
        
    },
    foodList: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    }
})