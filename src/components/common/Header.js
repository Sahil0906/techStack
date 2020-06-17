//import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

//Make a component
//to move text in vertical direction
//justifyContent:'flex-start'
//justifyContent:'center'
//justifyContent:'flex-end'

//for horizontal- alignItems

const Header = (props) => {
    const { textStyle , viewStyle} = styles;
    
    return (
        <View style={ viewStyle }> 
            <Text style={ textStyle }>{ props.headerText }</Text>
        </View>
    );
};


//Styles
const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        paddingTop: 30,
        shadowOffset:{  width: 0,  height: 10  },
        shadowColor: '#000',
        shadowOpacity: 0.2,
        elevation: 5,
        position: 'relative'
        
    },
    textStyle: {
        fontSize: 20
    }
};


//Make the component available to other parts 
export { Header };
