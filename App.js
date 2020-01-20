import React, { useEffect, useContext, useState, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableHighlight, TouchableOpacity, Animated, Linking } from 'react-native';
import Video from 'react-native-video';
import CubeVideo from './assets/video/cubeColor.mp4'
import SampleVideo from './assets/video/video.mp4'
import BtnVideo from './assets/video/waveBtn.mp4'
import VideoButton from './src/component/VideoButton'
const { height, width } = Dimensions.get('window')
const btnHeight = height * .1
const btnWidth = width * .3
export default App = () => {
  const [player, setPlayer] = useState(null)
  const [paused, setPaused] = useState(true)
  const [fadeAnim] = useState(new Animated.Value(1))  // Initial
  //background player
  const resume = () => {
    setPaused(false)
    fadeAnim.setValue(0)
    setTimeout(() => {
      Animated.timing(
        fadeAnim,
        {
          toValue: 1,
          duration: 2000,
        }
      ).start();
    }, 4000)
  }
  const onEnd = () => {
    setPaused(true)
  }
  const onLoad = () => {
    player.seek(0)
  }

  const btnOnPress = () => {
    resume()
  }
  return (
    <View style={{ width: '100%', height: '100%' }}>


      <Video source={CubeVideo}   // Can be a URL or a local file.
        ref={(ref) => {
          setPlayer(ref)
        }}                                      // Store reference
        onBuffer={this.onBuffer}                // Callback when remote video is buffering
        onError={this.videoError}             // Callback when video cannot be loaded
        style={[styles.backgroundVideo]}
        // fullscreen={true}
        // repeat={false}
        onEnd={onEnd}
        onLoad={onLoad}
        paused={paused}
        resizeMode="cover" />
      <View style={styles.uiContainer}>
        <View style={{ flex: 1 }}>
        </View>
        <View style={{ flex: 1 }}>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-evenly' }}>

          <View>
          <Animated.View                 // Special animatable View
            style={{
              opacity: fadeAnim,         // Bind opacity to animated value
              alignItems: 'center',
            }}
          >
          <Text>Previous</Text>
          </Animated.View>

          <VideoButton style={styles.btn} onPress={btnOnPress} playerStyle={{ height: btnHeight, width: btnWidth }} />
          </View>

          <View>
          <Animated.View                 // Special animatable View
            style={{
              opacity: fadeAnim,         // Bind opacity to animated value
              alignItems: 'center',
            }}
          >
          <Text>Previous</Text>
          </Animated.View>

          <VideoButton style={styles.btn} onPress={btnOnPress} playerStyle={{ height: btnHeight, width: btnWidth }} />
          </View>

          <View>
          <Animated.View                 // Special animatable View
            style={{
              opacity: fadeAnim,         // Bind opacity to animated value
              alignItems: 'center',
            }}
          >
          <Text>Previous</Text>
          </Animated.View>

          <VideoButton style={styles.btn} onPress={btnOnPress} playerStyle={{ height: btnHeight, width: btnWidth }} />
          </View>

        </View>


      </View>
    </View>
  )

}


var styles = StyleSheet.create({
  backgroundVideo: {
    flex: 1,
  },
  uiContainer: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  btn: {
    backgroundColor: 'black',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'gray',

  },

});