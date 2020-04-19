import React, { useState } from 'react'
import { View, ScrollView, TextInput, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import axios from '../axios-guides';

const CreateGuideScreen = (props) => {
    
    const [title, settitle] = useState()

    const titleHandler = (title) => {
        settitle(title)
    }

    const saveguideHandler = () => {
        axios.post('/guides.json', {titel:title} )
        .then(response => {
            console.log(response)
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <ScrollView>
        <View style={styles.form}>
            
            <Text style={styles.label}>Title</Text>
            <TextInput
             onChangeText={titleHandler} 
             value={title}
             style={styles.textinput}></TextInput>
             <Button onPress={saveguideHandler}>SAVE</Button>
        </View>
        </ScrollView>

    )
}


const styles = StyleSheet.create({
    form: {
        margin: 30
    },
    label: {
        fontSize: 18,
        marginBottom: 15
    },
    textinput: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 15,
        paddingVertical: 10,
        paddingHorizontal: 10
    }
})
export default CreateGuideScreen;