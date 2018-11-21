import React from 'react'
import {
    View,
    Text,
    Button,
    ScrollView,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    Image,
    FlatList,
    Animated,
} from 'react-native'
import Swiper from 'react-native-swiper';
var Dimensions = require('Dimensions');
var { width } = Dimensions.get('window');


export default class zfb extends React.Component {
    render() {
        return (
            <View style={styles.container}>

                {/* <View style={{ flexDirection: 'row',alignItems:'center',width:width, height: 60,justifyContent:'space-between', backgroundColor: 'rgba(33, 131, 211,1)' }}>
                    <View style={{ flexDirection: 'row',alignItems:'center' }}>
                    <Text>123</Text>
                        <Image style={{ height: 36 }} source={require("./src/images/sm2.png")}></Image>
                        <Image style={{ height: 36 }} source={require("./src/images/sq22.png")}></Image>
                        <Image style={{ height: 36 }} source={require("./src/images/fq2.png")}></Image>
                        <Image style={{ height: 36 }} source={require("./src/images/f2.png")}></Image>
                    </View>
                    <Text>789</Text>
                    <Image style={{ height: 36 }} source={require("./src/images/fj2.png")}></Image>
                </View> */}

                <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollview}>

                    <View style={styles.header}>
                        <View style={styles.search}>
                            <View style={{ flexDirection: 'row', width: width * 0.74, backgroundColor: 'rgb(24,114,185)', height: 36 }}>
                                <Image style={{ height: 36, position: 'relative', left: 10 }} source={require("./src/images/ss.png")}></Image>
                                <TextInput style={{ width: width * 0.74 - 50, height: 36, color: 'white', marginLeft: 10 }}></TextInput>
                                <TouchableOpacity style={{ position: 'relative', left: -18 }}>
                                    <Image style={{ height: 36 }} source={require("./src/images/y.png")}></Image>
                                </TouchableOpacity>
                            </View>

                            {/* <TextInput
                            inlineImageLeft="ss"
                            style={styles.inputstyle} 
                            placeholder='搜索'></TextInput> */}

                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity style={{ marginLeft: 6, }}>
                                    <Image source={require('./src/images/txl.png')}></Image>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ flexDirection: 'row', marginLeft: 6, }}>
                                    <Image source={require('./src/images/tj.png')}></Image>
                                </TouchableOpacity>
                            </View>

                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 6, color: 'white', justifyContent: 'space-around' }}>
                            <TouchableOpacity style={styles.fourimg}>
                                <Image source={require("./src/images/sm.png")} style={{ width: 40,resizeMode:'contain' }}></Image>
                                <Text style={{ color: 'white', marginTop: 4 }}>扫一扫</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.fourimg}>
                                <Image source={require("./src/images/fq.png")} style={{ width: 40 ,resizeMode:'contain'}}></Image>
                                <Text style={{ color: 'white', marginTop: 4 }}>付钱</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.fourimg}>
                                <Image source={require("./src/images/sq.png")} style={{ width: 40 ,resizeMode:'contain'}}></Image>
                                <Text style={{ color: 'white', marginTop: 4 }}>收钱</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.fourimg}>
                                <Image source={require("./src/images/qb.png")} style={{ width: 40 ,resizeMode:'contain'}}></Image>
                                <Text style={{ color: 'white', marginTop: 4 }}>卡包</Text>
                            </TouchableOpacity>

                        </View>
                    </View>

                    <View style={styles.view2}>
                        <TouchableOpacity style={styles.more}>
                            <Image source={require('./src/images/kd.png')}>
                            </Image>
                            <Text>我的快递</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.more}>
                            <Image source={require('./src/images/hb.png')}>
                            </Image>
                            <Text>红包</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.more}>
                            <Image source={require('./src/images/sq2.png')}>
                            </Image>
                            <Text>收钱</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.more}>
                            <Image source={require('./src/images/sk.png')}>
                            </Image>
                            <Text>AA收款</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.more}>
                            <Image source={require('./src/images/my.png')}>
                            </Image>
                            <Text>蚂蚁森林</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.more}>
                            <Image source={require('./src/images/more.png')}>
                            </Image>
                            <Text>更多</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.view3}>
                        <Image source={require("./src/images/myimg.png")} style={{ width: 54, height: 54 }}></Image>
                        <View style={styles.tip}>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 13, marginBottom: 6 }}>恭喜推荐成功，获得奖金  35分钟前</Text>
                                <Text style={{ fontSize: 13 }}>惠支付喊你来领优惠啦  36分钟前</Text>
                            </TouchableOpacity>

                        </View>
                        <TouchableOpacity>
                            <Image source={require('./src/images/r.png')}></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={{ width: width, height: 100, backgroundColor: 'white', marginTop: 10 }}>

                        {/* <Sowingmaprender /> */}


                        <Swiper
                            style={styles.swiper}
                            // height={100}
                            horizontal={true}
                            paginationStyle={{ bottom: 10 }}
                            showsButtons={false}
                            loop={true}                    
                            autoplay={true}                
                            autoplayTimeout={4}
                        >
                            <Image source={require('./src/images/lbt1.png')} style={styles.img} />
                            <Image source={require('./src/images/lbt1.png')} style={styles.img} />
                            <Image source={require('./src/images/lbt1.png')} style={styles.img} />
                        </Swiper>


                        {/* <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            <Image source={require('./src/images/lbt1.png')}></Image>
                            <Image source={require('./src/images/lbt1.png')}></Image>
                            <Image source={require('./src/images/lbt1.png')}></Image>
                        </ScrollView>
                        <View style={{fontSize:40,width:width,color:'white',position:'absolute',bottom:0,justifyContent:'center',alignItems:'center'}}>
                            <Text >&bull;&bull;&bull;</Text>
                        </View>  */}
                    </View>

                    <View style={styles.view4}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('./src/images/lv.png')}></Image>
                            <Text style={{ marginLeft: 4, position: 'relative', top: -2 }}>惠支付</Text>
                        </View>

                        <View style={{ marginTop: 10, flexDirection: 'row' }}>

                            <TouchableOpacity>
                                <View style={styles.v4content}>
                                    <View>
                                        <Text style={{ fontSize: 16 }}>全场5折起</Text>
                                        <Text style={{ fontSize: 12, color: 'rgb(161,161,161)' }}>吕氏疙瘩汤</Text>
                                    </View>
                                    <Image style={{ width: 60, height: 60 }} source={require('./src/images/q.png')}></Image>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.v4content}>
                                    <View>
                                        <Text style={{ fontSize: 16 }}>赚钱红包升级</Text>
                                        <Text style={{ fontSize: 12, color: 'rgb(161,161,161)' }}>2份赏金到手</Text>
                                    </View>
                                    <Image style={{ width: 60, height: 60 }} source={require('./src/images/q2.png')}></Image>

                                </View>
                            </TouchableOpacity>

                        </View>
                    </View>

                    <View style={styles.view4}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('./src/images/lv.png')}></Image>
                            <Text style={{ marginLeft: 4, position: 'relative', top: -2 }}>生活服务</Text>
                        </View>

                        <View style={{ marginTop: 10, flexDirection: 'row' }}>

                            <TouchableOpacity>
                                <View style={styles.v4content}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', height: 60 }}>
                                        <Text style={{ fontSize: 16 }}>城市抢人大战</Text>
                                        <Text style={{ fontSize: 12, color: 'rgb(161,161,161)' }}>福利不止户口买房</Text>
                                    </View>
                                    {/* <Image style={{ width: 60, height: 60 }} source={require('./src/images/q.png')}></Image> */}
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.v4content}>
                                    <View>
                                        <Text style={{ fontSize: 16 }}>52趟高铁停售</Text>
                                        <Text style={{ fontSize: 12, color: 'rgb(161,161,161)' }}>提前调整出行路线</Text>
                                    </View>
                                    <Image style={{ width: 60, height: 60 }} source={require('./src/images/q2.png')}></Image>

                                </View>
                            </TouchableOpacity>

                        </View>
                    </View>

                    <View style={styles.view5}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('./src/images/lv.png')}></Image>
                            <Text style={{ marginLeft: 4, position: 'relative', top: -2 }}>每日必抢</Text>
                        </View>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 15 }}>
                            <TouchableOpacity>
                                <View style={styles.v5content}>
                                    <Image source={require('./src/images/m1.png')}></Image>
                                    <Text style={{ fontSize: 16 }}>男士皮夹克</Text>
                                    <Text style={{ fontSize: 12, color: 'rgb(161,161,161)' }}>拼团价468.8元</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <View style={styles.v5content}>
                                    <Image source={require('./src/images/m1.png')}></Image>
                                    <Text style={{ fontSize: 16 }}>男士皮夹克</Text>
                                    <Text style={{ fontSize: 12, color: 'rgb(161,161,161)' }}>拼团价468.8元</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.v5content}>
                                    <Image source={require('./src/images/m1.png')}></Image>
                                    <Text style={{ fontSize: 16 }}>男士皮夹克</Text>
                                    <Text style={{ fontSize: 12, color: 'rgb(161,161,161)' }}>拼团价468.8元</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.v5content}>
                                    <Image source={require('./src/images/m1.png')}></Image>
                                    <Text style={{ fontSize: 16 }}>男士皮夹克</Text>
                                    <Text style={{ fontSize: 12, color: 'rgb(161,161,161)' }}>拼团价468.8元</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <View style={styles.v5content}>
                                    <Image source={require('./src/images/m1.png')}></Image>
                                    <Text style={{ fontSize: 16 }}>男士皮夹克</Text>
                                    <Text style={{ fontSize: 12, color: 'rgb(161,161,161)' }}>拼团价468.8元</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.v5content}>
                                    <Image source={require('./src/images/m1.png')}></Image>
                                    <Text style={{ fontSize: 16 }}>男士皮夹克</Text>
                                    <Text style={{ fontSize: 12, color: 'rgb(161,161,161)' }}>拼团价468.8元</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity>
                            <View style={{ flexDirection: 'row', marginTop: 15, height: 40, borderTopWidth: 1, borderColor: 'rgb(245,245,245)', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Text style={{ marginLeft: 4, }}>查看更多拼团</Text>
                                <Image source={require('./src/images/r.png')}></Image>
                            </View>
                        </TouchableOpacity>

                    </View>

                    <View style={{ alignItems: 'center', height: 80, justifyContent: 'center' }}>
                        <Text style={{ color: 'rgb(160,160,160)' }}>———————— 我是有底线的 ————————</Text>
                    </View>
                </ScrollView>

            </View>
        )
    }

}


class Sowingmaprender extends React.Component {
    state = {
        currentPage: 0,
    }

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
                    {/* <Image key={0} source={require('./src/images/lbt1.png')}></Image>
                    <Image key={1} source={require('./src/images/lbt1.png')}></Image>
                    <Image key={2} source={require('./src/images/lbt1.png')}></Image> */}
                    {this.renderAllImage()}
                </ScrollView>
                <View style={{ flexDirection: 'row', fontSize: 40, width: width, color: 'white', position: 'absolute', bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
                    {/* <Text >&bull;&bull;&bull;</Text> */}
                    {this.renderPageCircle()}
                </View>
            </View>
        )
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
        var imgCount = 3;

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
        for (var i = 0; i < 3; i++) {
            allImage.push(
                <Image key={i}
                    source={require('./src/images/lbt1.png')}
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
        for (var i = 0; i < 3; i++) {
            style = (i == this.state.currentPage) ? { color: 'rgb(31,130,210)' } : { color: '#fff' };

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
    container: {
        flex: 1,
        alignItems: "center",
        width: width,
        // backgroundColor:'rgb(245,245,245)',
        // backgroundColor: 'yellow',
    },

    swiper: {},
    img: {
        resizeMode:'contain',
        // width: width,
        // height: 120,
        width: '100%', height: '100%'
    },

    inputstyle: {
        width: width * 0.74,
        height: 36,
        backgroundColor: 'rgb(24,114,185)',
        padding: 4,
        color: 'white',
    },
    header: {
        height: 148,
        width: width,
        backgroundColor: 'rgb(30, 130, 210)',
    },
    search: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    fourimg: {
        width: width / 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    view2: {
        height: 146,
        backgroundColor: 'white',
        flexDirection: 'row',
        // paddingTop: 10,
        flexWrap: 'wrap',
    },
    more: {
        width: width / 4,
        // justifyContent:'center',
        alignItems: 'center',
        marginTop: 12,

    },
    scrollview: {
        // marginTop: 10,
        // height: 100,
        width: width,
        backgroundColor: 'rgb(245,245,245)',
    },
    view3: {
        height: 80,
        backgroundColor: 'white',
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    tip: {
        fontSize: 12,
        width: width - 110,
    },
    view4: {
        // height: 1000,
        backgroundColor: 'white',
        padding: 14,
        marginTop: 10,
    },
    v4content: {
        flexDirection: 'row',
        width: width / 2 - 24,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: 'rgb(245,245,245)',
    },
    view5: {
        backgroundColor: 'white',
        padding: 14,
        marginTop: 10,
    },
    v5content: {
        width: width / 3 - 10,
        // marginTop: 10,
        alignItems: 'center',
        justifyContent: 'space-between',

    },



})
