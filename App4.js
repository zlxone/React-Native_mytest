import React from 'react'
import { View, Text,Button } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import Second from './App3'


export default class Third extends React.Component {
    static navigationOptions = {
        title : 'Third',
    }

    // static navigationOptions = ({navigation,navigationOptions})=>{
    //     const {params} = navigation.state;

    //     return {
    //         title: params?pa
    //     }

    // }
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Third</Text>
                <Button title="back" onPress={()=>this.props.navigation.goBack()}></Button>
                <Button title="Second" onPress={()=>this.props.navigation.navigate('Second')}></Button>
                <Button title="now" onPress={()=>this.props.navigation.navigate('Third')}></Button>
            </View>
        )
    }
}