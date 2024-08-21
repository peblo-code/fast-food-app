import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import { useState } from 'react';

const FilterIcon = require('../assets/icons/Filter.png')
const EllipseIcon = require('../assets/icons/Ellipse.png')

export default function FoodTab() {
    const [tabSelected, setTabSelected] = useState(0)

    const TabText = ({ tabId, text }) => {
        return (
            <Pressable style={styles.tabFontsContainer} onPress={() => setTabSelected(tabId)}>
                { tabSelected == tabId ? <Image source={EllipseIcon} alt="Icono de elipse" style={styles.ellipseIcon} /> : [] }
                <Text style={tabSelected == tabId ? styles.tabFontsSelected : styles.tabFonts}>{text}</Text>
            </Pressable>
        )
    }

    return (
        <View style={styles.tabContainer}>
            <View style={styles.tabList}>
                <TabText tabId={0} text={"Hamburguesa"} />
                <TabText tabId={1} text={"Pasta"} />
                <TabText tabId={2} text={"Ensalada"} />
            </View>
            <Image source={FilterIcon} alt="Icono de Filtro"/>
        </View>
    )
}

const styles = StyleSheet.create({
    tabContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    tabList: {
        flexDirection: "row",
        alignItems: "center",
        gap: 40
    },
    tabFontsContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
    },
    tabFonts: {
        fontFamily: "Lato_400Regular",
        fontSize: 11,
        color: 'white'
    },
    tabFontsSelected: {
        fontFamily: "Lato_900Black",
        fontSize: 13,
        color: 'white'
    },
    ellipseIcon: {
        width: 4,
        height: 4,
    },
    filterIcon: {
        width: 24,
        height: 24,
        marginLeft: 180, 
    },
})