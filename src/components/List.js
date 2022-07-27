import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList
} from 'react-native';
import styles from '../styles/styles';
import dummyData from '../Data';
const CourseList=()=>{
    const renderItem = ({ item }) => (
        <>
            <View style={styles.titleDesc}>
                <Text style={styles.coursetitle}>{item.title}</Text>
                <Text style={styles.courseDesc}>{item.desription}</Text>
            </View>
        </>
    )
    return(
        <View style={styles.listContainer}>
            <FlatList
                data={dummyData}
                keyExtractor={item=>item.id}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}
export default CourseList;