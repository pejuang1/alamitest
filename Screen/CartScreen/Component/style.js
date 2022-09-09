import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerImage:{
        height: hp(15),
        width: wp(15)
    },
    containerButton:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    button:{
        backgroundColor: '#cdcfd4',
        paddingHorizontal: wp(3),
    },
    buttonText:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: hp(2),
        color: 'black'
    },
    inputQuantity:{
        color: 'black',
        fontSize: hp(2),
        width: wp(15),
        textAlign: 'center',
        borderWidth: 1
    }
});