/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @format
 * @flow
 *                                    轮播图
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

var Dimensions = require('Dimensions')
var { width } = Dimensions.get('window')

var TimerMixin = require('react-timer-mixin')

// var pic1 = {
//   uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
// };
var pic = require('./src/images/lbt1.png')
var ImageData = require('./ImageData.json')


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 0,
    }
  }


  mixins: [TimerMixin]

  getDefaultProps() {
    return {
      duration: 50000
    }
  }

  // getInitialState() {
  //   return {
  //     currentPage: 0,
  //   }
  // }



  render() {
    return (
      <View>
        <ScrollView
          ref="scrollView"
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          style={{ backgroundColor: 'white' }}
          onMomentumScrollEnd={(e) => this.onAnimationEnd(e)}
          onScrollBeginDrag={this.onScrollBeginDrag}
          onScrollEndDrag={this.onScrollEndDrag}
        >
          {this.renderAllImage()}
        </ScrollView>

        <View style={styles.pageViewStyle}>
          {this.renderPageCircle()}
        </View>

        {/* <Text>{ImageData.data[0].img}</Text> */}
        {/* <Image source={{ uri: ImageData.data[2].img }}
          style={{ width: 200, height: 120, marginRight: 1, backgroundColor: 'red' }}
        ></Image> */}
      </View>
    );
  }

  onScrollBeginDrag() {
    this.clearInterval(this.timer);
  }
  onScrollEndDrag() {
    this.startTimer();
  }
  componentDidMount() {
    this.startTimer();
  }
  startTimer() {
    var scrollView = this.refs.scrollView;
    var imgCount = ImageData.data.length;

    this.timer = setInterval(() => {
      var activePage = 0;
      if ((this.state.currentPage + 1) >= imgCount) {
        activePage = 0;

      } else {
        activePage = this.state.currentPage + 1;
      }

      this.setState({
        currentPage: activePage
      });

      var offsetX = activePage * width;
      scrollView.scrollResponderScrollTo({
        x: offsetX, y: 0, animated: true
      })
    },
      3000
      // this.props.duration
    );
  }

  renderAllImage() {
    var allImage = [];
    var imgsArr = ImageData.data;
    for (var i = 0; i < imgsArr.length; i++) {
      var imgItem = imgsArr[i];
      allImage.push(
        <Image key={i}
          source={pic}
          // source={{
          //   uri: imgItem.img
          // }}
          style={{ width: width, height: 120, marginRight: 1, backgroundColor: 'blue' }} />
      )
    }
    return allImage;
  }

  renderPageCircle() {
    var indicatorArr = [];
    var style;
    var imgsArr = ImageData.data;
    for (var i = 0; i < imgsArr.length; i++) {
      style = (i == this.state.currentPage) ? { color: 'orange' } : { color: '#fff' };

      indicatorArr.push(<Text key={i} style={[{ fontSize: 25 }, style]}>&bull;</Text>
      );
    }
    return indicatorArr;
  }

  onAnimationEnd(e) {
    var offsetX = e.nativeEvent.contentOffset.x;
    var currentPage = Math.floor(offsetX / width);

    this.setState({
      currentPage: currentPage
    });
  }

}



const styles = StyleSheet.create({
  pageViewStyle: {
    width: width,
    height: 25,
    backgroundColor: 'rgba(0,0,0,0.4)',
    position: 'absolute',
    bottom: 0,
    flexDirection: "row",
    alignItems: "center",
  }

});
