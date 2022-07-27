import React, { useRef, useState } from 'react'
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated
} from 'react-native';
import CourseList from './List';
import styles from '../styles/styles';
const openMenu="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzlLlr5LDuatbal4_HGITD7XHZ1c9Xrfjmmg&usqp=CAU";
const closeMenu="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSey-JCODoAsjkeLrMT4sQbF0xjfs8PsU-AkA&usqp=CAU"
const javaIcon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAACGCAMAAAAvpwKjAAAAmVBMVEX////ykREAcYwAdY8Ab4sAaYbxiQDyjADyjwAAZoTxhwAAbIkAYoH6/PzU4uf//vzn8PL+9Ouqxc/x9/j87N32tHLylCn86NbxgwD4zKb2uYX738b++PIqepMxf5fA1dyTtsJKi6Bkm6x4obFXjaL62Lvzn1H1sGjzn0X4xZfzmTb0p1b2t3v1qmP3wI351LKCrbtrlKcAVnnHgpImAAAEVUlEQVR4nO2YjVLbOhCFbUn+i22hyAGSgiVLdnsDKWB4/4e7KyuGtIHCTFHE3KtvJhNH8UxOpN2zu46iQCAQCAQCgUAgEAgE/l+c+RZgWX33rcDy49q3gon00reCiWzjW8HE4ty3AsNq8Y9vCYbNl9iNs+3ixrcG4GGx+AKZsrzIb5e+RUTRLsu++dYQRedZvPBvoj/T+AuYl1Gx9S0iukvj/MJ3fC5/ZHGerfafzjzJubwFFfGV/XD9sPETqFdpDnthVZxttldeREQ3ixjiYmVFpL6Kys8sjjPrnqvt2lPKnp3DXqTbKRo22frBkwpI1Di9m66/LVJf9jWdiFVxn2a+ep7va1Cxm6aTBzic1Xv3u2EZQ45YB19msbfyemMCw27BPZRXT4YRbfM4u7eXsC9rTx6+uohja1vRau1PxiVExs5eXkGA+joUkJGdv8jwFaLLizjfW8USDiX21W9s8/zu+RKSxtOQcp/m231vsQE7jWM/27HM83iej27zl0g5NZs0mw/iymzH2pOdQ/c3X55nHpMlXszF/To3BcbTvLSKszkubzJ/MqJVfrd/DHkJjfHdn292yPVu/m0IUZ8PJDdzlc12h8s1Y80Jfr1pGK2nq8vJPJbpL27OOt0KTZ1KYHwcei7Z4drNkYnStqxGdxq6NhGy/m11uTt+Ys5aXHBHKiQuEZJHy9evPbfvSiTYK+ufQFchjNqO/r4de2rKx3H+jiY4cRUeckgSVCYF1h2XlFJmgHcpu1GRIkmKSjQvMo437pOAP6wFBiVJUiLcWjAhybTQqo7OmcoTjJ0mS00lH7UoK6AoiukNq77j9NAsBoSUSxUHehpzIJQ1r8QKRbhw6xxR834G1AIlrvLVInvRvXuTTpy5xgQTFSL9qxWjft6kRlXK7YlQSBBMhOaQrE1TAw1UGMYkBG3bWXmU4O4Na/k0pCjASklZECzUMOhBKdGCZZSElJXJjbpPuCP7/AXW9aKcfheBHvMqwdFK1XOzGUw7M60jIFN51+vBokfwjLnDcH0agTeoaXeKIHwHCnW28ymglqb1agnGZWlqvZyKPOejSpw7xZ6GcvUoTT5wUmKMEZkyFvKVlAThkpwiUetOETIbNBuNCFCAjRxslBBxinDhKEH4sJKAb2jVGjFYDH0nf9PgZmc4iED90XJtOb5fVk7GJTVt/0f/Yj2SwokMXhgdhfpIzZIjKly1PFKVUOGhiIle0jcG1JpRCYGcVKg3apmLjqOmowAVkBQJaZW2A4JpOcyAIHk3aq0EqaoS77dMtq6maSY7jQuYRkqo7Intyat9f25GlKJ9Hm7pULltv2oG/73vH027Y1GD7vvxYLpmXDzp0xSdufmDY2kOU7ZhXKPEcScKjv6HLyFCtXh6+lA+/SUUmi44AVvVJqSpbWCp5OmpEo/d0WMHVzQmMbVSgwkOGGERaluh9EEjeFpqGx2vDo+BQCAQCAQCgUAgEAj8R/kX2d1OPFAitwMAAAAASUVORK5CYII="
const CourseDrawer = () => {
  const [showMenu,setShowMenu]=useState(false);
  const offset=useRef(new Animated.Value(0)).current;
  const scale=useRef(new Animated.Value(1)).current;
  const animatedView=()=>{
    Animated.timing(scale,{
      toValue:showMenu?1:0.88,
      duration:150,
      useNativeDriver:true
    }).start();
    Animated.timing(offset,{
      toValue:showMenu?0:230,
      duration:150,
      useNativeDriver:true
    }).start();
    setShowMenu(!showMenu)
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={{justifyContent:'flex-start',padding:15,width:'100%',height:"100%"}}>
        <Image
          style={{width:60,height:60,borderRadius:10}} 
          source={{uri:javaIcon}} 
        />
        <Text style={styles.courseTitle}>JAVA</Text>
        <TouchableOpacity>
          <Text
            style={{
              marginTop:6,
              color:"white"
            }}
          >Course Structure</Text>
        </TouchableOpacity>
        <CourseList/>
      </View>
      <Animated.View style={[
        styles.animatedCard,
        {
          borderRadius:showMenu?15:0,
          transform:[
            {scale:scale},
            {translateX:offset},
          ]
        }
      ]}>
        <TouchableOpacity
          onPress={()=>{
            animatedView()
          }}
          
        >
          <Image 
            // source={require("./src/Assets/arrow.png")}
              source={{uri:showMenu?closeMenu:openMenu}}
              style={{
              width:20,
              height:20,
              marginTop:40,
              paddingHorizontal:15,
              paddingVertical:20
            }}
          />
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  )
}

export default CourseDrawer