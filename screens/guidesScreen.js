import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderbutton from '../components/Custombutton';

const GuidesScreen = (props) => {
    return (
        <View>
            <Text>GuidesScreen</Text>
            <Button onPress={() => {props.navigation.navigate('Singleguide')}}>click</Button>
        </View>
    )
}

GuidesScreen.navigationOptions = navData => {
    return {
    headerTitle: 'GUIDES',
    headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderbutton}>
        <Item
        title="create place"
        iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
        onPress={() => {
            navData.navigation.navigate('Singleguide')
        }}>

        </Item>
        </HeaderButtons>
    )
    }
}


const styles = StyleSheet.create({

})

export default GuidesScreen