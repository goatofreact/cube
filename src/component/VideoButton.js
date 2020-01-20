import React, { useEffect, useContext, useState, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableHighlight, TouchableOpacity, Animated, Linking } from 'react-native';
import Video from 'react-native-video';

import BtnVideo from '../../assets/video/waveBtn.mp4'
const { height, width } = Dimensions.get('window')
const btnHeight = height * .1
const btnWidth = width * .3
export default App = ({onPress, style, playerStyle}) => {
    const [player, setPlayer] = useState(null)
    const [paused, setPaused] = useState(true)
    //player controls
    const resume = () => {
        setPaused(false)
        if(onPress != undefined){
            onPress()
        }
        
    }
    const onEnd = () => {
        setPaused(true)
    }
    const onLoad = () => {
        player.seek(0)
    }
    return (
        <TouchableOpacity style={[styles.container, style]} onPress={resume} activeOpacity={1}>
            <Video source={BtnVideo}   // Can be a URL or a local file.
                ref={(ref) => {
                    setPlayer(ref)
                }}                                     // Store reference
                onBuffer={this.onBuffer}                // Callback when remote video is buffering
                onError={this.videoError}             // Callback when video cannot be loaded
                style={[playerStyle]}
                // fullscreen={true}
                repeat={false}
                onEnd={onEnd}
                onLoad={onLoad}
                paused={paused}
                resizeMode='contain' />
        </TouchableOpacity>

    )

}


var styles = StyleSheet.create({

    container: {
    }

});