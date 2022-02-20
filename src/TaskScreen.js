import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import UserCard from './user/UserCard'


export default TaskScreen = ({ navigation }) => {
    return (
        <View style={styles.Container}>
            {/* <Text>hii</Text> */}
            <UserCard />

        </View>
    )
};


const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
        // backgroundColor: '#121212'
        backgroundColor: '#121212'

    }
})