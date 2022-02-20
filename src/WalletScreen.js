import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


export default WalletScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text> This is Taks Screen</Text>
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



// function WalletScreen() {
//     return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <Text>Wallet</Text>
//         </View>
//     );
// }
