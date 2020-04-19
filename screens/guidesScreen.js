import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderbutton from '../components/Custombutton';
import axios from '../axios-guides';
import fire from '../config/fire';

const GuidesScreen = (props) => {

/*     useEffect(() => {
        async function getguides () {
            axios.get('/guides.json')
            .then(response => {
                console.log(response)
            }).catch(err => {
                console.log(err)
            })
        }
        getguides()
    }, [])
 */

 const [guides, setguides] = useState([])

 useEffect(() => {
     async function getguides () {
        fire.database().ref('guides').once('value')
        .then(data => {
        const guideslist = []
        const obj = data.val()
        
        if(obj) {
            const guideslistfromdb = Object.keys(obj).map(key => ({
                ...obj[key],
                id: key
            }));
           setguides(guideslistfromdb)
            console.log(guideslistfromdb)
        }
        
        console.log('guides :' + guides)
    }).catch(err => {
        console.log(err)
    })
 
     }
     getguides()
    }, [])
    
    let guidelist 
    if(guides) {
        guidelist = guides.map(singleguide => {
           return ( <Text key={singleguide.titel}>{singleguide.titel}</Text> )
        }) 
    }
    return (
        <View>
            <Text>GuidesScreen</Text>
            {guidelist}
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
            navData.navigation.navigate('Createguide')
        }}>

        </Item>
        </HeaderButtons>
    )
    }
}


const styles = StyleSheet.create({

})

export default GuidesScreen