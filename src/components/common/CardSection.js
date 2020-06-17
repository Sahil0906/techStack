import React from 'react';
import { View } from 'react-native';


const CardSection = (props) => {
    return(
        <View style = {Styles.containerStyle}>
            {props.children}
        </View>
    );
};

const Styles = {
    containerStyle: {
        borderWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        positive: 'relative'
    
    }
};


export { CardSection };