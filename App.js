import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { requireNativeViewManager } from '@unimodules/core';
import Icon from 'react-native-vector-icons/MaterialIcons';
import VideoItem from './components/VideoItem';
import data from './data.json';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
      <Image
          style={{width: 100, height: 25}}
          source={require('./components/logoo.png')}
        />
        <View style={styles.rightNav}>
          <TouchableOpacity>
            <Icon style={styles.navItem} name="search" size={25}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon style={styles.navItem} name="account-circle" size={25}/>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}>
        <FlatList
          data={data.items}
          renderItem = {(video) => <VideoItem video={video.item} />}
          keyExtractor = {(item) => item.id}
          ItemSeparatorComponent = {() => <View style={{height: 0.5, backgroundColor: '#E5E5E5'}}/>}
        />
      </View>

      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem}>
          <Icon name="home" size={25} />
          <Text style={styles.tabTitle}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Icon name="whatshot" size={25} />
          <Text style={styles.tabTitle}>Trending</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Icon name="subscriptions" size={25} />
          <Text style={styles.tabTitle}>Subscriptions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Icon name="folder" size={25} />
          <Text style={styles.tabTitle}>Library</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navBar: {
    height: 55,
    backgroundColor: 'white',
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 18,
    justifyContent: 'space-between',
  },
  rightNav: {
    flexDirection: 'row',
  },
  navItem: {
    paddingLeft: 15
  },
  body: {
    flex: 1,

  },
  tabBar: {
    backgroundColor: 'white',
    height: 60,
    borderColor: '#EEECEC',
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabTitle: {
    color: "#333",
    fontSize: 12,
    paddingTop: 2
  }
});
