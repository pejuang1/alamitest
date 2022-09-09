import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './style';

import { iconCart, iconFingerprint, iconProfile, iconProgress } from '../../Assets/HomeScreen';

const HomeScreen = () => {

    const navigation = useNavigation();

    const data = [
        { name: 'Cart', navigate: 'CartScreen', icon: iconCart },
        { name: 'Progress', navigate: 'ProgressScreen', icon: iconProgress },
        { name: 'Device ID', navigate: 'DeviceIdScreen', icon: iconFingerprint }
    ]

    return (
        <View>
            <View style={styles.containerHeader}>
                <View style={styles.containerSubHeader}>
                    <Image style={styles.subHeaderImageProfile} source={iconProfile} resizeMode='contain' />
                    <Text style={styles.subHeaderTitle}>Rizal Dwi Setiawan</Text>
                </View>
            </View>
            <View style={styles.containerBodyTask}>
                <Text style={styles.bodyTitle}>My Task</Text>
                {
                    data.map((item, index) => {
                        return (
                            <TouchableOpacity style={styles.bodyPressIcon} key={index} activeOpacity={0.8} onPress={() => navigation.navigate(item.navigate)}>
                                <View style={styles.containerBodyIconCart}>
                                    <Image style={styles.bodyIconCart} source={item.icon}/>
                                    <Text style={styles.bodyIconCartTitle}>{item.name}</Text>
                                </View>
                            </TouchableOpacity>
                        );
                    })
                }
            </View>
        </View>
    );
}

export default HomeScreen;