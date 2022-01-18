import React, { useEffect, useState } from 'react'
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import firestore from '@react-native-firebase/firestore';
import { Colors } from './Colors';
import { Button } from 'react-native-paper';
const CategoriesCard = ({ data }) => {
    const image = { uri: "https://reactjs.org/logo-og.png" };
    return (
        <>
            {
                data.map((item, index) =>
                    <TouchableOpacity key={index} style={index % 2 === 0 ? { ...styles.cont, borderTopRightRadius: 100, borderBottomRightRadius: 100, flexDirection: 'row' } : { ...styles.cont, borderTopLeftRadius: 100, borderBottomLeftRadius: 100, flexDirection: 'row-reverse' }}>
                        <View style={{flex: 0.8,justifyContent:'space-evenly'}}>
                            <Text style={{ ...styles.text,fontWeight: 'bold',textTransform: 'uppercase'}}>{item.title}</Text>
                            <Text style={{ ...styles.text,textAlign:'justify',fontSize:11 }}>{item.desc.slice(0,70)}</Text>
                            <Button icon="forward" mode="text" style={{alignSelf:'flex-end',marginRight:-10}} contentStyle={{flexDirection:'row-reverse'}} onPress={() => console.log('Pressed')}
                            theme={{colors:{primary:Colors.primary}}}
                            >
                                Explore
                            </Button>
                        </View>
                        <Image style={styles.image} source={{ uri: item.image }} />
                    </TouchableOpacity>
                )
            }
        </>
    )
}

export default CategoriesCard

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        width: '100%',
        height: 120,
        backgroundColor: '#fff',
        marginTop: 20,
        marginBottom:10,
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 10,
    },
    image: {
        width: 100,
        height: 100,
        backgroundColor: '#fff',
        borderRadius: 100,
    },
    text: {
        color: '#000'
    }
})
