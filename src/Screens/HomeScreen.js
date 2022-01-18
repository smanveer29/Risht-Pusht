import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../Components/Colors';
import { SliderBox } from "react-native-image-slider-box";
import Card from '../Components/Card';
import { cardData, CategoryCard } from '../Assets/CardData';
import CategoriesCard from '../Components/CategoriesCard';
import firestore from '@react-native-firebase/firestore';
import FeaturedProducts from '../Components/FeaturedProducts';
const images = [
    "https://i.ytimg.com/vi/8L4LYX4T9wM/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCXhEYGR-JlrqkpfMf73YoHqWiw4g",
    "https://i.ytimg.com/vi/SB5jz6M34a0/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDal5wATskYpafOwIy3XGjojFIfLA",
    "https://i.ytimg.com/vi/0laNhLEY7jw/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLA6sWtgObdn2lqQ6rCXieES7b5sJQ",
]
const HomeScreen = ({ navigation }) => {
    const [data, setData] = useState([])
    const [products, setProducts] = useState([])
    const [partners, setPartners] = useState([])
    useLayoutEffect(() => {
        navigation.setOptions({
            title: '',
            headerTintColor: Colors.primary,
            headerLeft: () => (<Image style={{ width: 40, height: 40, margin: 20 }} source={{ uri: 'http://cdn.shopify.com/s/files/1/0267/2774/3679/files/RISHTPUSHT_LOGO-removebg-preview.png?v=1620584579' }} />)
            ,
            headerRight: () => (
                <TouchableOpacity style={{ marginRight: 20 }}>
                    <Icon name='menu' size={30} color={Colors.primary} />
                </TouchableOpacity>
            )
        })
    }, [navigation])
    useEffect(() => {
        firestore()
            .collection('categories')
            .get()
            .then(querySnapshot => {
                let temp = []
                querySnapshot.forEach(doc => {
                    temp.push(doc.data())
                });
                setData(temp)
            });

        firestore()
            .collection('products')
            .get()
            .then(querySnapshot => {
                let temp = []
                querySnapshot.forEach(doc => {
                    temp.push(doc.data())
                });
                setProducts(temp)
            });

        firestore()
            .collection('partners')
            .get()
            .then(querySnapshot => {
                let temp = []
                querySnapshot.forEach(doc => {
                    temp.push(doc.data())
                });
                setPartners(temp)
            });
    }, [])
    return (
        <View style={styles.cont}>
            <ScrollView style={{ width: '90%' }} vertical={true} showsVerticalScrollIndicator={false}>
                <View style={{ marginTop: 20 }}>
                    <Text style={{ ...styles.textHead }}>Hello there,</Text>
                    <Text style={{ ...styles.textHead, fontSize: 18 }}>how can we serve you today...</Text>
                </View>
                {/* Image slider */}
                <View style={{ flex: 1, alignItems: 'center', marginTop: 30, width: '100%', marginBottom: 40 }}>
                    <SliderBox
                        images={images}
                        ImageComponentStyle={{ borderRadius: 20, width: '90%', marginTop: 5 }}
                        dotColor={Colors.primary}
                        slider
                        autoplay
                        circleLoop
                        paginationBoxStyle={{
                            position: "absolute",
                            bottom: -30,
                            padding: 0,
                            alignItems: "center",
                            alignSelf: "center",
                            justifyContent: "center",
                            paddingVertical: 10
                        }}
                        dotStyle={{
                            width: 10,
                            height: 10,
                            borderWidth: 1,
                            borderRadius: 20,
                        }}
                    />
                </View>
                {/* Card Componnetns */}
                <View style={{ flex: 1, flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 30 }}>
                    {cardData.map(item =>
                        <Card title={item.title} key={item.title} icon={item.icon} />
                    )}
                </View>

                {/* Categorries */}
                <View style={{ justifyContent: 'space-evenly', marginTop: 20, marginBottom: 20 }}>
                    <View style={{ width: '100%', flexDirection: 'row', alignItems: "center", justifyContent: "space-between" }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: Colors.primary }}>Categories</Text>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: Colors.primary, textTransform: 'uppercase' }}>View All</Text>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'space-evenly', padding: 5, marginBottom: 20 }}>
                        <CategoriesCard data={data} />
                    </View>
                </View>

                {/* Featured PRoducts */}
                <View>
                    <View style={{ width: '100%', flexDirection: 'row', alignItems: "center", justifyContent: "space-between" }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: Colors.primary, marginBottom: 20 }}>Featured Products</Text>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'space-evenly', padding: 5, marginBottom: 20 }}>
                        <FeaturedProducts data={products} />
                    </View>
                </View>

                {/* MOst puchased PRoducts */}
                <View>
                    <View style={{ width: '100%', flexDirection: 'row', alignItems: "center", justifyContent: "space-between" }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: Colors.primary, marginBottom: 20 }}>Most Purchased Products</Text>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'space-evenly', padding: 5, marginBottom: 20 }}>
                        <FeaturedProducts data={products} />
                    </View>
                </View>

                {/* MEdia Associated */}

                <View style={{ flex: 1, flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 30, marginBottom:30 }}>
                    <View style={{ width: '100%', flexDirection: 'row', alignItems: "center", justifyContent: "space-between" }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: Colors.primary, marginBottom: 20 }}>Our Media Associates</Text>
                    </View>

                    {partners.map((item,index) =>
                        <Card key={index} image={item.image_url} />
                    )}
                </View>
                <View style={{padding:20}}>
                    <Text style={{color:'#000',fontWeight:'bold'}}>  ND Care Nirogram Pvt, Ltd, - All rights Reserved</Text>
                </View>


            </ScrollView>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    textHead: {
        fontSize: 24,
        fontWeight: 'bold', color: Colors.primary
    },
    categoryCard: {
        width: '100%',
        height: 120,
        backgroundColor: '#fff',
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 10,
        marginTop: 10,
        marginBottom: 10
    },
    image: {
        width: 100,
        height: 100,
        backgroundColor: '#fff',
        borderRadius: 100,
    }
})
