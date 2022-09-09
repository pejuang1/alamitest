import React, { useEffect, useState } from 'react';
import DeviceInfo from 'react-native-device-info';
import { View, Text } from 'react-native';

import { styles } from './style';

const DeviceIdScreen = () => {

    const [deviceId, setDeviceId] = useState(false);

    useEffect(() => {
        handleGetDeviceId();
    }, []);

    const handleGetDeviceId = async() => {
        const deviceId = await DeviceInfo.getUniqueId();
        setDeviceId(deviceId);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.containerTitle}>Your Device ID</Text>
            <Text style={styles.containerText}>{deviceId}</Text>
        </View>
    );
}

export default DeviceIdScreen