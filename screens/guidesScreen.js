import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const GuidesScreen = (props) => {
    return (
        <View>
            <Text>GuidesScreen</Text>
            <Button onPress={() => {props.navigation.navigate('Singleguide')}}>click</Button>
        </View>
    )
}


const styles = StyleSheet.create({

})

export default GuidesScreen