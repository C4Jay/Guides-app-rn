import React from 'react'

import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

const CustomHeaderbutton = props => {
    return <HeaderButton {...props} IconComponent={Ionicons} iconSize={30} color="#e836f5"></HeaderButton>
}

export default CustomHeaderbutton;