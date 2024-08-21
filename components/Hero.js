import { StyleSheet, View, Image, Text } from "react-native";

const MenuIcon = require('../assets/icons/Menu.png');
const BellIcon = require('../assets/icons/Bell.png');
export default function Hero() {
    return(
        <View const={styles.container}>
            <View style={styles.iconsContainer}>
                <Image source={MenuIcon} alt="Icono de menu" style={styles.iconImage}/>
                <Image source={BellIcon} alt="Icono de menu" style={styles.iconImage}/>
            </View>
            <Text style={{
                fontFamily: 'Lato_900Black',
                fontSize: 23,
                color: 'white',
                marginBottom: 8,
            }}>Cada bocado</Text>
            <Text style={{
                fontFamily: 'Lato_400Regular',
                fontSize: 17,
                color: 'white',
            }}>Una mejor hamburguesa!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
    },
    iconsContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 44,
    },
    iconImage: {
        width: 20,
        height: 20,
    }
})