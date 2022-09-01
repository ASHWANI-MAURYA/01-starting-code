import { NativeAppEventEmitter, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native'
function IconButton({ onPress, icon, color }) {
    return (
        <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
            <Ionicons name={icon} size={25} color={color} />
        </Pressable>
    )
}
export default IconButton;
const styles = StyleSheet.create({
    pressed: {
        opacity: 0.5,
    }
})