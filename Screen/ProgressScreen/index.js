import React, { useState, useRef, useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as Progress from 'react-native-progress';

import { styles } from './style';

const ProgressScreen = () => {

    const intervalRef = useRef();
    
    const [onHold, setOnHold] = useState(false);
    const [count, setCount] = useState(0);

    const increaseProgress = () => setCount((prev) => prev + 0.01);

    useEffect(() => {
        intervalRef.current = setInterval(increaseProgress, 1000);
        return () => clearInterval(intervalRef.current);
    }, []);
      
    const handleHoldStart = () => {
        if (!onHold) {
            clearInterval(intervalRef.current);
        } else {
            intervalRef.current = setInterval(increaseProgress, 1000);
        }
        setOnHold((prev) => !prev);
    };


    return (
        <View style={styles.container}>
            <TouchableOpacity onPressIn={handleHoldStart} onPressOut={handleHoldStart}>
                <Progress.Circle size={hp(10)} progress={count} showsText/>
            </TouchableOpacity>
        </View>
    );
}

export default ProgressScreen;