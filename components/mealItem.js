import React from 'react';
import { View, Text, Pressable, Image, StyleSheet, Platform } from 'react-native';
import MealDetails from '../components/mealDetails'
import {useNavigation} from '@react-navigation/native'
function mealItem({id, title, imageUrl, duration, complexity, affordability }) {
    const navigation=useNavigation();
    function selectMealItemHandler(){
        navigation.navigate('MealDetailScreen',{
            mealId:id
        });
    }
    return (
        <View style={styles.mealItem}>
            <Pressable android_ripple={{color:'#ccc'}}
            style={({pressed})=>pressed?styles.buttonPressed:null} 
            onPress={selectMealItemHandler}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{ uri: imageUrl }} style={styles.image} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                   <MealDetails duration={duration} complexity={complexity} affordability={affordability}/>
                </View>
            </Pressable>
        </View>

    );
}

export default mealItem;
const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 200,
    },
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
    innerContainer:{
        borderRadius:8,
        overflow:'hidden',
    },
    buttonPressed:{
        opacity:0.5,
    },
});