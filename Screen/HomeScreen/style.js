import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    containerHeader:{
        backgroundColor: '#f0b576',
        height: hp(25),
        width: wp(100),
        borderBottomLeftRadius: hp(5),
        borderBottomRightRadius: hp(5)
    },
    containerSubHeader:{
        margin: hp(2),
        flexDirection: 'row',
        alignItems: 'center'
    },
    subHeaderImageProfile:{
        height: hp(20),
        width: wp(20)
    },
    subHeaderTitle:{
        color: 'black',
        fontSize: hp(2),
        fontWeight: 'bold'
    },
    headerTitle:{
        color: 'black',
        fontSize: hp(2),
    },
    headerDeviceId:{
        color: 'black',
        fontSize: hp(2),
    },
    containerBodyTask:{
        margin: hp(2)
    },
    bodyTitle:{
        color: 'black',
        fontSize: hp(2),
        fontWeight: 'bold'
    },
    containerBodyIconCart:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.26,
        shadowRadius: 6.68,
        elevation: 5,
        height:hp(7),
        padding: hp(2),
        backgroundColor:'white',
        borderRadius: hp(5),
        flexDirection: 'row',
        alignItems: 'center'
    },
    bodyIconCart:{
        height: hp(5),
        width: wp(10)
    },
    bodyIconCartTitle:{
        color: 'black',
        fontSize: hp(2),
        marginLeft: wp(2)
    },
    bodyPressIcon:{
        marginTop: hp(2)
    }
});