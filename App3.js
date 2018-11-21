import React from 'react'
import { View, Text, Button } from 'react-native'
// import { createStackNavigator } from 'react-navigation'


export default class Second extends React.Component {
    // static navigationOptions = {
    //     title : 'Second',
    // }
    // static navigationOptions = ({navigation})=>{
    //     return{
    //         title:navigation.getParam('otherParam','default value')
    //     }
    // }
    static navigationOptions = ({navigation,navigationOptions})=>{
        const {params} = navigation.state;

        return{
            title:params? params.otherParam:'default value',
            headerStyle:{
                backgrounderColor:navigationOptions.headerTintColor,
            },
            headerTintColor:navigationOptions.headerStyle.backgrounderColor
        }
    }


    render() {
        const { navigation } = this.props;
        const itemId = navigation.getParam('itemId','NO-ID');
        const otherParam = navigation.getParam('otherParam','default value');

        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Second</Text>
                <Text>itemId:{JSON.stringify(itemId)}</Text>
                <Text>otherParam:{JSON.stringify(otherParam)}</Text>
                <Button title='now' onPress={()=>this.props.navigation.push('Second',{itemId:Math.floor(Math.random()*100),})}>
                </Button>
                <Button title='更新' onPress={()=>this.props.navigation.setParams({otherParam : "update..."})}></Button>
                <Button title="back" onPress={() => this.props.navigation.goBack()}></Button>
            </View>
        )
    }
}
