import React from 'react'
import { View, Text, Button, Image } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation';
import Second from './App3'
import Third from './App4'
import Login from './Login'
import zfb from './zfb.js'

class Logo extends React.Component {
    render() {
        return (

            <Image
                source={require('./src/images/grab.png')}
                style={{ width: 50, height: 50 }}
                ></Image>
        )
    }
}


class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings!</Text>
            </View>
        );
    }
}

class Find extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Find!</Text>
            </View>
        );
    }
}


/* class Home extends React.Component {
 static navigationOptions = {
 title: 'Home主页',
 // headerStyle: {
 //     backgroundColor: 'red'//背景颜色
 // },
 // headerTintColor: '#grey',//字体颜色
 // headerTitleStyle: {//字体设置
 //     fontWeight: 'bold',
 //     fontfamily: '微软雅黑'
 // }
 headerTitle:<Logo />,
 headerRight:(
 <Button onPress={()=>alert("tanchuan Button")}
 title = 'Info'
 color='green'
 ></Button>
 )
 } */

class Home extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: <Logo />,
            headerLeft: (
                <Button
                    onPress={navigation.getParam('increaseCount')}
                    // onPress={() => this.props.navigation.navigate('Second')}
                    title='+1'
                    color='#000000'
                    ></Button>
            ),
            headerRight: (
                <Button
                    onPress={() => navigation.navigate('MyModal')}
                    title='info'
                    color='#000000'
                    ></Button>
            )
        }
    }

    componentDidMount() {
        this.props.navigation.setParams({
            increaseCount: this._increaseCount
            // increaseCount:this.setState({count : this.state.count + 1})
        });
    }

    state = {
        count: 0
    }

    _increaseCount = () => {
        this.setState({count: this.state.count + 1})
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "space-around" }}>
                <Text>Home</Text>
                <Text>Count: {this.state.count}</Text>
                <Button title='链接Second' onPress={() =>
                    this.props.navigation.navigate('Second', {
                        itemId: 86,
                        otherParam: 'i come from Home',
                    })
                }></Button>
                <Button title='链接Third' onPress={() =>
                    this.props.navigation.navigate('Third')
                }></Button>
                <Button title='zfb' onPress={() =>
                    this.props.navigation.navigate('ZFB')
                }></Button>
                <Button title='Login' onPress={() =>
                    this.props.navigation.navigate('Login')
                }></Button>
            </View>
        )
    }


}

class MyModal extends React.Component {
    render() {
        return (
            <View>
                <Text>this is a MyModal</Text>
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="dismiss"
                    ></Button>
            </View>
        )
    }
}

// class Second extends React.Component {
//     render() {
//         return (
//             <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//                 <Text>Second</Text>
//                 <Button title="back" onPress={()=>this.props.navigation.goBack()}></Button>
//             </View>
//         )
//     }
// }


// const Tab = createBottomTabNavigator({
//     Home: Home,
//     Settings: SettingsScreen,
//     Find:Find,
// })


const MainStack = createStackNavigator({
        // Home:{
        //     screen:Home
        // }
        Home: Home,
        Second: Second,
        Third: Third,
        Login: Login,

    }, {
        initialRouteName: 'Home',
        navigationOptions: {
            headerStyle: {
                backgroundColor: 'yellow'
            },
            headerTintColor: "black",
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }
    }
)

const RootStack = createStackNavigator({
        Main: MainStack,
        MyModal: MyModal,
        ZFB: zfb,
    }, {
        mode: 'modal',
        headerMode: 'none',
    }
)

// export default class App2 extends React.Component {
//     render() {
//         return <RootStack />
//     }
// }

export default createBottomTabNavigator({
    Home: RootStack,
    Settings: SettingsScreen,
    Find: Find,
});