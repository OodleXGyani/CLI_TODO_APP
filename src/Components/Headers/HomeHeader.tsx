import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import logo from '../../Assets/Images/logo.png';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '../../Context/AuthContext';

const HomeHeader = () => {
  const { user } = useAuth();
  return (
    <View style={styles.wrapper}>
        <View style={styles.container}>
            <SafeAreaView style={styles.safeArea} edges={['top']}> 
                {/* Left Section */}
                <View style={styles.left}>
                  <Image
                    source={logo}
                    style={styles.logo}
                  />
                  <Text style={styles.subtitle}>
                    Welcome back, {user?.displayName || 'User'}!
                  </Text>
                </View>

                {/* Right Icon */}
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.iconWrapper}
                >
                  <Ionicons
                    name="notifications-outline"
                    size={18}
                    color="#111827"
                  />
                </TouchableOpacity>
        </SafeAreaView>
      </View>

        
    
      
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  wrapper: {
    // marginHorizontal: 16,
    // marginTop: 8,
    borderRadius: 20,
    
  },
  safeArea: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    height: 80,
    

  },
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    // padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 30,
    

    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,

    // Android shadow
    elevation: 3,
  },
  left: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: 0,
    // backgroundColor: '#dd7777ff',
    height: 80,
    
  },
  Image: {
    height: 50,
  },
  logo: {
    resizeMode: 'stretch',
    height: 50,
    width:120,
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 20,
    color: '#000000ff',
    fontWeight: '400',
    paddingLeft: 8,
    paddingBottom: 8,
  },
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
