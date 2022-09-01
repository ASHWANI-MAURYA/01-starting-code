import { CATEGORIES } from '../Data/dummyData';
import { FlatList, } from 'react-native';
import CategoryGridTitle from '../components/CategoryGridTitle'

function CategoryScreen({ navigation }) {
    function renderCategoryItem(itemData) {
        function pressHandler() {
            navigation.navigate('MealsOverView', {
                CategoryId: itemData.item.id,
            });
        }
        return (
            <CategoryGridTitle
                title={itemData.item.title}
                color={itemData.item.color}
                onPress={pressHandler}
            />
        );

    }
    return (
        <>
            <FlatList
                data={CATEGORIES}
                keyExtractor={(item) => item.id}
                renderItem={renderCategoryItem}
                numColumns={2}
            />
        </>
    )
}
export default CategoryScreen;