import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class VideoItem extends Component {
    render() {      
    let video = this.props.video;
        return (
            <View style={styles.container}>
                <Image source={{uri:video.snippet.thumbnails.medium.url}} style={{height: 200}}/>
                <View style={styles.description}>
                    <Image
                        style={{width: 50, height: 50, borderRadius: 50}}
                        source={require('./user1.jpg')}
                    />
                    <View style={styles.videoDetails}>
                        <Text numberOfLines={2} style={styles.videoTitle}>{video.snippet.title}</Text>
                        <Text style={styles.videoChanel}>{video.snippet.channelTitle + " - " + nFormatter(video.statistics.viewCount,1)}</Text>
                    </View>
                    <TouchableOpacity>
                        <Icon style={{opacity: .4}} name="more-vert" size={20}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
// For viewCount Formating
function nFormatter(num, digits) {
    var si = [
      { value: 1, symbol: "" },
      { value: 1E3, symbol: "k" },
      { value: 1E6, symbol: "M" },
      { value: 1E9, symbol: "G" },
      { value: 1E12, symbol: "T" },
      { value: 1E15, symbol: "P" },
      { value: 1E18, symbol: "E" }
    ];
    var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var i;
    for (i = si.length - 1; i > 0; i--) {
      if (num >= si[i].value) {
        break;
      }
    }
    return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol + ' views';
  }
  // For viewCount Formating End

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    description: {
        flexDirection: 'row',
        paddingTop: 15
    },
    videoDetails: {
        paddingHorizontal: 8,
        flex: 1
    },
    videoTitle: {
        fontSize: 14,
        color: '#333'
    },
    videoChanel: {
        fontSize: 12,
        color: '#797777',
        paddingTop: 2,
    }
});
