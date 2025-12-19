import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Button from '../Components/Button';
import logo from '../Assets/Images/logo.png';


export default function WelcomeScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Status Bar Space */}
        <View style={styles.statusBarSpace} />

        {/* Icon Section */}
        <View style={styles.iconSection}>
          <Image source={logo} style={styles.logo} />
        </View>

        {/* Welcome Section */}
        <View style={styles.welcomeSection}>
          <Text style={styles.title}>
            Welcome. 
          </Text>
          <Text style={styles.description}>
            Manage your tasks efficiently and stay productive with TO_DO Oodles.
          </Text>
        </View>

        {/* Spacer */}
        <View style={styles.spacer} />

        {/* Buttons Section */}
        <View style={styles.buttonsSection}>
          <Button
            label="Login"
            onPress={() => navigation.navigate('Login')}
            variant="primary"
            size="large"
            style={styles.loginButton}
            icon={<Ionicons name="arrow-forward" size={20} color="#FFFFFF" />}
          />

          <Button
            label="Create Account"
            onPress={() => navigation.navigate('Register')}
            variant="outline"
            size="large"
            style={styles.createButton}
          />
        </View>

        {/* Footer Links */}
        <View style={styles.footerSection}>
          <TouchableOpacity>
            <Text style={styles.footerLink}>Privacy Policy</Text>
          </TouchableOpacity>
          <Text style={styles.footerDot}>•</Text>
          <TouchableOpacity>
            <Text style={styles.footerLink}>Terms of Service</Text>
          </TouchableOpacity>
        </View>

        {/* Home Indicator Space */}
        <View style={styles.homeIndicatorSpace} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#F6F7F8',
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
  },
  statusBarSpace: {
    height: 40,
  },

  /* Icon Section */
  iconSection: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  logo: {
    width: 140,
    height: 80,
    resizeMode: 'contain',
  },

  /* Welcome Section */
  welcomeSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: '900',
    color: '#111827',
    textAlign: 'center',
    marginBottom: 16,
    letterSpacing: 0.8,
    fontFamily: 'System',
    fontStyle: 'italic',
  },
  waveEmoji: {
    fontSize: 36,
  },
  description: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 24,
    maxWidth: '100%',
  },

  /* Spacer */
  spacer: {
    flex: 1,
    minHeight: 40,
  },

  /* Buttons Section */
  buttonsSection: {
    gap: 12,
    marginBottom: 32,
  },
  loginButton: {
    width: '100%',
  },
  createButton: {
    width: '100%',
  },

  /* Footer */
  footerSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },
  footerLink: {
    fontSize: 13,
    color: '#9CA3AF',
    fontWeight: '500',
  },
  footerDot: {
    fontSize: 13,
    color: '#9CA3AF',
  },

  /* Home Indicator Space */
  homeIndicatorSpace: {
    height: 20,
  },
});
