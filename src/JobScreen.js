import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


export default JobScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text> This is job Screen!!</Text>
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


// function JobScreen() {
//     return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <Text>Home</Text>
//         </View>
//     );
// }

