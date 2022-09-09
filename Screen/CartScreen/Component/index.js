import React from 'react';
import { View, Image, Button, TextInput, TouchableOpacity, Text } from 'react-native';
import { iconPackage } from '../../../Assets/CartScreen';

import { styles } from './style';

const Cart = ({ quantity, onpressMinus, onpressPlus, icon = iconPackage }) => {

    return (
        <View style={styles.container}>
            <Image style={styles.containerImage} source={icon} resizeMode='contain'/>
            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.button} onPress={onpressMinus}>
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.inputQuantity}>{quantity}</Text>
                <TouchableOpacity style={styles.button} onPress={onpressPlus}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Cart;