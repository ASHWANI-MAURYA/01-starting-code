import { useLayoutEffect } from 'react'
import { Text, View, Image, StyleSheet, ScrollView, Button } from 'react-native'
import { MEALS } from '../Data/dummyData'
import SubTitle from '../components/MealDetail/subtitle'
import List from '../components/MealDetail/list'
import MealDetails from '../components/mealDetails'
import IconButton from '../components/IconButton'
function MealDetailScreen({ route, navigation }) {
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    function headerButtonPressHamdler() {
        console.log('pressed right button');
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return(
                // <Button onPress={headerButtonPressHamdler} />
                <View style={{marginRight:10}}>
                    <IconButton color="white" onPress={headerButtonPressHamdler} icon="star" />
                </View>
                )
            }
        });
    }, [navigation, headerButtonPressHamdler]);

    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.Image} source={{ uri: selectedMeal.imageUrl }} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                duration={selectedMeal.duration}
                affordability={selectedMeal.affordability}
                complexity={selectedMeal.complexity}
                textStyle={styles.detailText}
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <SubTitle><Text>ingredients</Text></SubTitle>
                    <List data={selectedMeal.ingredients} />
                    <SubTitle><Text>Step</Text></SubTitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    )
};
export default MealDetailScreen;
const styles = StyleSheet.create({
    Image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 6,
        textAlign: 'center',
        color: 'white',
    },
    detailText: {
        color: 'white',
    },
    listContainer: {
        width: '80%',
    },
    listOuterContainer: {
        alignItems: 'center'
    },
    rootContainer: {
        marginBottom: 32
    }


})