import React from 'react'
import { View, Text, Button, TextInput, StyleSheet } from 'react-native'

var Dimensions = require('Dimensions');
var { width } = Dimensions.get('window');

export default class Login extends React.Component {

    render() {

        return (
            <View style={styles.container}>
                <View>
                    <TextInput
                        style={styles.TextInputStyle}
                        editable={true}
                        placeholder='用户名'
                    ></TextInput>
                    <TextInput
                        style={styles.TextInputStyle}
                        placeholder='密码'
                    ></TextInput>
                </View>
                <View style={styles.ButtonStyle}>
                    <Button style={{ color: 'red' }}
                        title='登录'></Button>
                </View>
                <View style={styles.SetStyle}>
                    <Text style={{ color: 'lightblue' }}
                    >注册</Text>
                    <Text style={{ color: 'lightblue' }}
                    >找回密码</Text>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:"center",
        width:width,
        
    },
    TextInputStyle: {
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
        width: width,

    },
    ButtonStyle: {
        marginTop: 30,
        padding: 10,
        borderRadius: 18,
        width: width *0.9,
        // alignItems:"center",
        // backgroundColor:'red'
    },
    SetStyle: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        padding: 10,
        color: 'blue',
        width: width,
    }
})
