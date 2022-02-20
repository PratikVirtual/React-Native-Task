import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


export default EmptyScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text> This is Empty Screen</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red'
    }
})


// function EmptyScreen() {
//     return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         </View>
//     );
// }
