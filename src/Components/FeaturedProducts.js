import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Colors } from './Colors'
import Icon from 'react-native-vector-icons/Ionicons';

const FeaturedProducts = ({ data }) => {
    return (
        <>
            {data.map((item, index) =>
                <View key={index} style={styles.cont}>
                    <View style={{ justifyContent: 'space-evenly', alignItems: 'center' }}>
                        <Image source={{ uri: item.image_url }} style={{ width: 100, height: 130 }} />
                        <Text style={{ fontWeight: 'bold', fontSize: 12 }}>40 capsules</Text>
                    </View>
                    <View style={styles.textCard}>
                        <Text style={{fontWeight: 'bold',fontSize: 16,textTransform: 'uppercase',marginBottom: 10,color:'#000' }}>{item.title}</Text>
                        <Text style={{fontSize:11,fontWeight: 'bold',marginBottom: 10}}>{item.desc.slice(0,180)}</Text>
                        <Text style={{ fontWeight: 'bold',fontSize:15,color:'#000'}}>Rs.{item.price}</Text>
                        <View style={styles.cartCard}>
                            <TouchableOpacity>
                                <Text style={{textTransform: 'uppercase',fontWeight:'bold',color: Colors.primary}}>add to cart</Text>
                            </TouchableOpacity>
                                <Icon name="share-social" color={Colors.primary} size={18}/>
                        </View>
                    </View>
                </View>

            )}
        </>
    )
}

export default FeaturedProducts

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        padding: 10,
        elevation: 10,
        backgroundColor: '#fff',
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 10
    },
    textCard: {
        flex:1,
        width:'100%',
        borderLeftWidth: 0.6,
        borderColor: Colors.primary,
        padding:10,
    },
    cartCard:{
        flex:1,
        flexDirection:'row',
        justifyContent: 'space-between',
        borderTopWidth:1,
        marginTop:10,
        padding:5
    }
})
