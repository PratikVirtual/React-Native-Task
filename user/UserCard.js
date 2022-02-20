import { View, Text, StyleSheet, Dimensions, ScrollView, Image } from 'react-native'
import React from 'react'
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';

const UserCard = () => {
    return (

        <View style={styles.cardContainer1}>
            <Text style={styles.txt}>Task name</Text>

            <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
                <EvilIcons name="calendar" size={24} color="#556969" />
                <Text style={{ color: '#556969', fontSize: 10, position: 'absolute', paddingHorizontal: 50, marginTop: 2 }}>
                    13:00,2nd October, 2021
                </Text>
            </View>


            <View style={{
                color: '#FFFFFF',
                alignSelf: 'flex-end',
                position: 'absolute',
                paddingHorizontal: 10,
                // marginTop: 2,
                backgroundColor: '#2DAF95',
                padding: 10,
                alignItems: 'center',
                borderTopLeftRadius: 20,
                borderBottomLeftRadius: 20,
                marginTop: 20,
                textAlign: 'center',
                width: Dimensions.get('screen').width - 500,
                flexDirection: 'row-reverse'

            }}>
                <Text style={{ color: '#FFFFFF', fontSize: 14, paddingLeft: 5 }}>Completed</Text>

                <AntDesign name="check" size={24} color="white" />
            </View>

            <View style={{ paddingLeft: 20, paddingTop: 10 }}>
                <Ionicons name="location-sharp" size={24} color="#556969" />
                <Text style={{ fontSize: 10, color: '#C7D6D6', position: 'absolute', paddingTop: 15, paddingHorizontal: 50 }}>Pick up location      - - - - - -</Text>

                <View style={{
                    position: 'absolute',
                    width: Dimensions.get('screen').width - 150,
                    flexDirection: 'row-reverse',
                    marginTop: 10

                }}>
                    <Ionicons name="ios-ellipse" size={24} color="#EB7F01" />
                </View>
            </View>

            <Text style={{
                fontSize: 10,
                color: '#C7D6D6',
                position: 'absolute',
                flexDirection: 'row-reverse',
                alignSelf: 'flex-end',
                marginVertical: 75,
                paddingRight: 45
            }}>Drop off location</Text>

            <Text style={{ color: '#556969', fontSize: 10, paddingHorizontal: 50 }}>2972 Westheimer Rd....</Text>
            <Text style={{ color: '#556969', fontSize: 10, position: 'absolute', alignSelf: 'flex-end', marginVertical: 98, paddingRight: 35 }}>3517 W. Gray St. ...</Text>


            <View style={{ backgroundColor: '#05120F', marginVertical: 20, padding: 34.4, borderBottomLeftRadius: 5, borderBottomRightRadius: 5 }}>
                <Text style={{
                    color: '#2DAF95',
                    fontSize: 10,
                    // alignItems: 'center',
                    position: 'absolute',
                    paddingHorizontal: 60,
                    paddingVertical: 10
                }}>Max Doe</Text>

                <View style={{
                    paddingHorizontal: 29
                }}>
                    <Foundation name="telephone" size={15} color='#2DAF95' />
                </View>

                <View style={{ position: 'absolute', paddingHorizontal: 85, paddingVertical: 34, }}>
                    <Ionicons name="mail" size={15} color="#2DAF95" />
                </View>

                <View style={{ position: 'absolute', alignSelf: 'flex-end', paddingVertical: 34, paddingRight: 45 }}>
                    <Ionicons name="star" size={20} color="#EB7F01" />
                </View>
                <Text style={{ color: '#556969', position: 'absolute', alignSelf: 'flex-end', paddingEnd: 17, paddingVertical: 34, fontSize: 16 }}>4.5</Text>

                <View style={{ position: 'absolute', paddingHorizontal: 20, paddingVertical: 20, }}>
                    <Image
                        style={styles.imageStyle}
                        source={require('../../assets/man.png')} />
                </View>
            </View>


            <View style={styles.cardContainer2}>
                <Text style={styles.txt}>Task name</Text>

                <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
                    <EvilIcons name="calendar" size={24} color="#556969" />
                    <Text style={{ color: '#556969', fontSize: 10, position: 'absolute', paddingHorizontal: 50, marginTop: 2 }}>
                        13:00,2nd October, 2021
                    </Text>
                </View>


                <View style={{
                    color: '#FFFFFF',
                    alignSelf: 'flex-end',
                    position: 'absolute',
                    paddingHorizontal: 10,
                    // marginTop: 2,
                    backgroundColor: '#2DAF95',
                    padding: 10,
                    alignItems: 'center',
                    borderTopLeftRadius: 20,
                    borderBottomLeftRadius: 20,
                    marginTop: 20,
                    textAlign: 'center',
                    width: Dimensions.get('screen').width - 500,
                    flexDirection: 'row-reverse'

                }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 14, paddingLeft: 5 }}>Completed</Text>

                    <AntDesign name="check" size={24} color="white" />
                </View>

                <View style={{ paddingLeft: 20, paddingTop: 10 }}>
                    <Ionicons name="location-sharp" size={24} color="#556969" />
                    <Text style={{ fontSize: 10, color: '#C7D6D6', position: 'absolute', paddingTop: 15, paddingHorizontal: 50 }}>Pick up location      - - - - - -</Text>

                    <View style={{
                        position: 'absolute',
                        width: Dimensions.get('screen').width - 150,
                        flexDirection: 'row-reverse',
                        marginTop: 10

                    }}>
                        <Ionicons name="ios-ellipse" size={24} color="#EB7F01" />
                    </View>
                </View>

                <Text style={{
                    fontSize: 10,
                    color: '#C7D6D6',
                    position: 'absolute',
                    flexDirection: 'row-reverse',
                    alignSelf: 'flex-end',
                    marginVertical: 75,
                    paddingRight: 45
                }}>Drop off location</Text>

                <Text style={{ color: '#556969', fontSize: 10, paddingHorizontal: 50 }}>2972 Westheimer Rd....</Text>
                <Text style={{ color: '#556969', fontSize: 10, position: 'absolute', alignSelf: 'flex-end', marginVertical: 98, paddingRight: 35 }}>3517 W. Gray St. ...</Text>


                <View style={{ backgroundColor: '#05120F', marginVertical: 20, padding: 34.4, borderBottomLeftRadius: 5, borderBottomRightRadius: 5 }}>
                    <Text style={{
                        color: '#2DAF95',
                        fontSize: 10,
                        // alignItems: 'center',
                        position: 'absolute',
                        paddingHorizontal: 60,
                        paddingVertical: 10
                    }}>Max Doe</Text>

                    <View style={{
                        paddingHorizontal: 29
                    }}>
                        <Foundation name="telephone" size={15} color='#2DAF95' />
                    </View>

                    <View style={{ position: 'absolute', paddingHorizontal: 85, paddingVertical: 34, }}>
                        <Ionicons name="mail" size={15} color="#2DAF95" />
                    </View>

                    <View style={{ position: 'absolute', alignSelf: 'flex-end', paddingVertical: 34, paddingRight: 45 }}>
                        <Ionicons name="star" size={20} color="#EB7F01" />
                    </View>
                    <Text style={{ color: '#556969', position: 'absolute', alignSelf: 'flex-end', paddingEnd: 17, paddingVertical: 34, fontSize: 16 }}>4.5</Text>

                    <View style={{ position: 'absolute', paddingHorizontal: 20, paddingVertical: 20, }}>
                        <Image
                            style={styles.imageStyle}
                            source={require('../../assets/man.png')} />
                    </View>
                </View>
            </View >


            <View style={styles.cardContainer3}>
                <Text style={styles.txt}>Task name</Text>

                <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
                    <EvilIcons name="calendar" size={24} color="#556969" />
                    <Text style={{ color: '#556969', fontSize: 10, position: 'absolute', paddingHorizontal: 50, marginTop: 2 }}>
                        13:00,2nd October, 2021
                    </Text>
                </View>


                <View style={{
                    color: '#FFFFFF',
                    alignSelf: 'flex-end',
                    position: 'absolute',
                    paddingHorizontal: 10,
                    // marginTop: 2,
                    backgroundColor: '#2DAF95',
                    padding: 10,
                    alignItems: 'center',
                    borderTopLeftRadius: 20,
                    borderBottomLeftRadius: 20,
                    marginTop: 20,
                    textAlign: 'center',
                    width: Dimensions.get('screen').width - 500,
                    flexDirection: 'row-reverse'

                }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 14, paddingLeft: 5 }}>Completed</Text>

                    <AntDesign name="check" size={24} color="white" />
                </View>

                <View style={{ paddingLeft: 20, paddingTop: 10 }}>
                    <Ionicons name="location-sharp" size={24} color="#556969" />
                    <Text style={{ fontSize: 10, color: '#C7D6D6', position: 'absolute', paddingTop: 15, paddingHorizontal: 50 }}>Pick up location      - - - - - -</Text>

                    <View style={{
                        position: 'absolute',
                        width: Dimensions.get('screen').width - 150,
                        flexDirection: 'row-reverse',
                        marginTop: 10

                    }}>
                        <Ionicons name="ios-ellipse" size={24} color="#EB7F01" />
                    </View>
                </View>

                <Text style={{
                    fontSize: 10,
                    color: '#C7D6D6',
                    position: 'absolute',
                    flexDirection: 'row-reverse',
                    alignSelf: 'flex-end',
                    marginVertical: 75,
                    paddingRight: 45
                }}>Drop off location</Text>

                <Text style={{ color: '#556969', fontSize: 10, paddingHorizontal: 50 }}>2972 Westheimer Rd....</Text>
                <Text style={{ color: '#556969', fontSize: 10, position: 'absolute', alignSelf: 'flex-end', marginVertical: 98, paddingRight: 35 }}>3517 W. Gray St. ...</Text>


                <View style={{ backgroundColor: '#05120F', marginVertical: 20, padding: 34.4, borderBottomLeftRadius: 5, borderBottomRightRadius: 5 }}>
                    <Text style={{
                        color: '#2DAF95',
                        fontSize: 10,
                        // alignItems: 'center',
                        position: 'absolute',
                        paddingHorizontal: 60,
                        paddingVertical: 10
                    }}>Max Doe</Text>

                    <View style={{
                        paddingHorizontal: 29
                    }}>
                        <Foundation name="telephone" size={15} color='#2DAF95' />
                    </View>

                    <View style={{ position: 'absolute', paddingHorizontal: 85, paddingVertical: 34, }}>
                        <Ionicons name="mail" size={15} color="#2DAF95" />
                    </View>

                    <View style={{ position: 'absolute', alignSelf: 'flex-end', paddingVertical: 34, paddingRight: 45 }}>
                        <Ionicons name="star" size={20} color="#EB7F01" />
                    </View>
                    <Text style={{ color: '#556969', position: 'absolute', alignSelf: 'flex-end', paddingEnd: 17, paddingVertical: 34, fontSize: 16 }}>4.5</Text>

                    <View style={{ position: 'absolute', paddingHorizontal: 20, paddingVertical: 20, }}>
                        <Image
                            style={styles.imageStyle}
                            source={require('../../assets/man.png')} />
                    </View>
                </View>
            </View >





        </View >







    )
}

export default UserCard;


const DeviceWidth = Math.round(Dimensions.get('screen').width);


const styles = StyleSheet.create({
    cardContainer1: {
        // justifyContent: 'flex-start',
        // marginTop: 17,
        paddingVertical: 20,
        width: DeviceWidth - 20,
        backgroundColor: '#040505',
        // backgroundColor: 'aqua',
        height: 200,
        borderRadius: 5
    },


    cardContainer2: {
        marginTop: 3,
        width: DeviceWidth - 20,
        backgroundColor: '#040505',
        height: 200,
        borderRadius: 5
    },
    cardContainer3: {
        marginTop: 20,
        width: DeviceWidth - 20,
        backgroundColor: '#040505',
        height: 200,
        borderRadius: 5
    },
    cardContainer4: {
        marginTop: 3,
        width: DeviceWidth - 20,
        backgroundColor: '#040505',
        height: 200,
        borderRadius: 5
    },
    cardContainer5: {
        marginTop: 3,
        width: DeviceWidth - 20,
        backgroundColor: '#040505',
        height: 200,
        borderRadius: 5
    },

    imageStyle: {
        height: 36,
        width: 36,
    },
    txt: {
        marginTop: 10,
        paddingHorizontal: 15,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
    },
    // scrollView: {
    //     marginHorizontal: 20,
    // },
});
