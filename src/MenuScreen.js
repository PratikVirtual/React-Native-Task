import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


export default MenuScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text> This is Menu Screen</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue'
    }
})





// function MenuScreen() {
//     return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <Text>Menu</Text>
//         </View>
//     );
// }