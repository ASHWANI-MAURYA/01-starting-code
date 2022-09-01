import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { MEALS, CATEGORIES } from '../Data/dummyData';
import MealItem from '../components/mealItem';
function MealsOverViewScreen({ route, navigation }) {
    const catId = route.params.CategoryId;
    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });
    useEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;
        navigation.setOptions(
           { title:categoryTitle}
        );
    }, [catId, navigation]);

    function renderMealItem(itemData) {
        const item = itemData.item;
        const mealItemprops = {
            id:item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration,
        };
        return (
            <MealItem {...mealItemprops} />
        )
    }
    return (
        <>

            <View style={styles.Container}>
                <FlatList
                    data={displayedMeals}
                    keyExtractor={(item) => item.id}
                    renderItem={renderMealItem}
                />
            </View>
        </>
    );
}

export default MealsOverViewScreen;
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        padding: 16,
    }
})
