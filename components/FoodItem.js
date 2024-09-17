import { View, StyleSheet, Image, Pressable, Text } from "react-native"
import { Link } from "expo-router"

const CircledPlus = require('../assets/icons/CircledPlus.png')

export default function FoodItem({items}) {
    const {item_id, item_name, item_description, item_price, item_image} = items
    return (
        <View key={item_id} style={styles.foodItemContainer}>
            <Image source={item_image} alt="Imagen del menu" style={styles.foodImage} />
            <View style={styles.foodTextsContainer}>
                <Text style={styles.titleFont}>{item_name}</Text>
                <Text style={styles.descriptionFont}>{item_description}</Text>
            </View>
            <View style={styles.foodBottomContainer}>
                <Text style={[styles.titleFont, {fontSize: 11}]}>Gs. {item_price}</Text>
                <Link
                    href={{
                    pathname: '/foodView',
                    }}>
                    <Image source={CircledPlus} alt="Icono de Agregar a la Canasta" style={styles.circledPlus}/>
                </Link>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    foodItemContainer: {
        height: 214,
        width: 150,
        marginTop: 27,
        paddingHorizontal: 4
    },
    foodImage: {
        width: 150,
        height: 112,
    },
    foodTextsContainer: {
        marginTop: 8,
        marginLeft: 6,
        gap: 6,
    },
    titleFont: {
        fontFamily: "Lato_900Black",
        fontSize: 13,
        color: 'white'
    },
    descriptionFont: {
        fontFamily: "Lato_400Regular",
        fontSize: 11,
        color: 'white'
    },
    foodBottomContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 26,
        marginLeft: 6,
    },
    circledPlus: {
        width: 24,
        height: 24,
    }
})