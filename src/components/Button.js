import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

export default function Button(props) {
    const { onPress, title = 'Lets Go!' } = props;



    return (
        <View style={{ alignItems:'center'}}>
        <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
        </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        margin: 160,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#1E212D',
    width: '50%',
    borderRadius: 12
},
    text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#FAF3E0',
},
});
