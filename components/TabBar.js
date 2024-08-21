import { View, Image, StyleSheet } from "react-native";

const mapPinIcon = require('../assets/icons/map-pin.png');
const shopIcon = require('../assets/icons/Shop.png');
const piggyIcon = require('../assets/icons/PiggyBank.png');

export default function TabBar() {
    return (
        <View style={styles.tabBarContainer}>
            <Image source={mapPinIcon} alt="Icono de mapa" style={{width:24, height:24, marginTop: 12}} />
            <Image source={shopIcon} alt="Icono de canasta" style={{width:52, height:52}} />
            <Image source={piggyIcon} alt="Icono de cerdito" style={{width:24, height:24, marginTop: 12}} />
        </View>
    )
}

const styles = StyleSheet.create({
    tabBarContainer: {
        height: 80,
        position: "static",
        bottom: 0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexDirection: "row", 
    },
    
})