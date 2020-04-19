import React from 'react'
import { View, ScrollView, TextInput, Text } from 'react-native';

const CreateGuideScreen = (props) => {
    return (
        <ScrollView>
        <View style={styles.form}>
            
            <Text style={styles.label}>Title</Text>
            <TextInput
             onChangeText={titleHandler} 
             value={title}
             style={styles.textinput}></TextInput>
        </View>
        </ScrollView>

    )
}

export default CreateGuideScreen;