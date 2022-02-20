import { View, Text, StyleSheet } from 'react-native'
import React from 'react'



export default HomeScreens = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text> This is Home Screen</Text>
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


// function HomeScreen() {
//     return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <Text>Home</Text>
//         </View>
//     );
// }