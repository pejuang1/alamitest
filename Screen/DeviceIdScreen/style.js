import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerTitle:{
        color: 'black',
        fontSize: hp(2),
        fontWeight: 'bold'
    },
    containerText:{
        color: 'black',
        fontSize: hp(1.5),
        marginTop: hp(1)
    }
});