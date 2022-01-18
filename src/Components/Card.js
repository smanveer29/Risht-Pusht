import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Colors } from './Colors'
import Icon from 'react-native-vector-icons/dist/AntDesign';
const Card = (props) => {
    return (
        <TouchableOpacity style={props.image?{...styles.cont,backgroundColor:'#E0ECDE',height:100}:{...styles.cont}}>
            {props.image ?
                <Image source={{ uri: props.image }} style={{ width: 60, height: 60,borderRadius:100 }} />
                :
                <>
                    <Icon name={props.icon} size={30} color="#fff" />
                    <Text style={{ textTransform: 'capitalize', color: '#fff', fontWeight: 'bold' }}>{props.title}</Text>

                </>
            }
        </TouchableOpacity>
    )
}

export default Card

const styles = StyleSheet.create({
    cont: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 25,
        height: 120,
        backgroundColor: 'linear-gradient(153deg, rgba(50,111,119,1) 35%, rgba(140,205,207,1) 74%)',
        width: Dimensions.get('window').width / 3.6,
        marginBottom: 10,
        elevation: 5,
        paddign: 10
    },
})
