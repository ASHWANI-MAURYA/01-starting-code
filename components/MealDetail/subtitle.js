import { Text, View, StyleSheet } from 'react-native';
function subTitle({ Children }) {
    return (
        <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>{Children}</Text>
        </View>
);
}
export default subTitle;
const styles = StyleSheet.create({
    subTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#e2b497',
        textAlign: 'center',

    },
    subTitleContainer: {
        borderBottomWidth: 2,
        borderBottomColor: '#e2b497',
        padding: 6,
        marginHorizontal: 12,
        marginVertical: 4,
    }
})