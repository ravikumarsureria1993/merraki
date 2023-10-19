import React from 'react';
import {} from 'react-native';
import ImagePath from '../../assests/ImagePath';
import RouteString from '../../navigation/RouteString';


const MiddleIcon = ({ navigation }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Scan')}
        style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../../assets/images/shared/scan_icon.png')}
          />
        </View>
      </TouchableOpacity>
    );
  };
  
  export default MiddleIcon;
  
  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      bottom: 20,
      height: 58,
      width: 58,
      borderRadius: 58,
      backgroundColor: colors.primaryColor,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 7,
  
      flex: 1,
    },
    icon: {
      width: 40,
      height: 40,
      tintColor: '#fff',
      alignContent: 'center',
    },
    imageContainer: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
  
      elevation: 5,
      width: 30,
      height: 30,
    },
  });