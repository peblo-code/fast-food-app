import { View, Text, StyleSheet } from 'react-native'
import { Slot } from 'expo-router'

export default function Layout() {
    return (
        <View style={styles.container}>
            <Slot />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#242329',
    },
})