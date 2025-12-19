import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useAuth } from '../Context/AuthContext';
import { useNavigation } from '@react-navigation/native';
import Button from '../Components/Button';

const LoginScreen = () => {
  const { login, loading, error: authError } = useAuth();
  const navigation = useNavigation<any>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);

  const validateInputs = (): boolean => {
    if (!email.trim()) {
      setLocalError('Email is required.');
      return false;
    }
    if (!password.trim()) {
      setLocalError('Password is required.');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setLocalError('Please enter a valid email address.');
      return false;
    }
    return true;
  };

  const handleLogin = async () => {
    setLocalError(null);

    if (!validateInputs()) {
      return;
    }

    try {
      await login(email, password);
    } catch (err: any) {
      setLocalError(err.message);
    }
  };

  const displayError = localError || authError;

  return (
    <SafeAreaView style={styles.safe}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color="#111827" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>LogIn</Text>
        <View style={{ width: 48 }} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        {/* Icon Section */}
        <View style={styles.iconSection}>
          <View style={styles.iconCircle}>
            <Ionicons name="checkmark-circle" size={40} color="#1392ec" />
          </View>
        </View>

        {/* Title & Description */}
        <View style={styles.titleSection}>
          <Text style={styles.title}>Welcome back!</Text>
          <Text style={styles.description}>
            Please sign in to continue managing your tasks effortlessly.
          </Text>
        </View>

        {/* Error */}
        {displayError && (
          <View style={styles.errorContainer}>
            <Ionicons name="alert-circle" size={18} color="#EF4444" />
            <Text style={styles.errorText}>{displayError}</Text>
          </View>
        )}

        {/* Form */}
        <View style={styles.formSection}>
          {/* Email */}
          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Email or Username</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                setLocalError(null);
              }}
              keyboardType="email-address"
              autoCapitalize="none"
              editable={!loading}
              placeholderTextColor="#9CA3AF"
            />
          </View>

          {/* Password */}
          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.passwordInputWrapper}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Enter your password"
                value={password}
                onChangeText={(text) => {
                  setPassword(text);
                  setLocalError(null);
                }}
                secureTextEntry={!showPassword}
                editable={!loading}
                placeholderTextColor="#9CA3AF"
              />
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                style={styles.visibilityButton}
              >
                <Ionicons
                  name={showPassword ? 'eye' : 'eye-off'}
                  size={20}
                  color="#9CA3AF"
                />
              </TouchableOpacity>
            </View>

            {/* Forgot Password Link */}
            <TouchableOpacity style={styles.forgotPasswordContainer}>
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Login Button */}
        <Button
          label="Login"
          onPress={handleLogin}
          loading={loading}
          disabled={loading}
          variant="primary"
          size="large"
          style={styles.loginButton}
        />

        {/* Divider */}
        <View style={styles.dividerSection}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>Or continue with</Text>
          <View style={styles.dividerLine} />
        </View>

        {/* Social Buttons */}
        <View style={styles.socialButtonsRow}>
          <Button
            label="Google"
            onPress={() => Alert.alert('Google Login', 'Not implemented yet')}
            variant="outline"
            size="medium"
            style={styles.socialButton}
            icon={
              <Text style={styles.socialIcon}>🔵</Text>
            }
          />
          <Button
            label="Apple"
            onPress={() => Alert.alert('Apple Login', 'Not implemented yet')}
            variant="outline"
            size="medium"
            style={styles.socialButton}
            icon={
              <Ionicons name="logo-apple" size={20} color="#111827" />
            }
          />
        </View>

        {/* Sign Up Link */}
        <View style={styles.signUpSection}>
          <Text style={styles.signUpText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.signUpLink}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#F6F7F8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#F6F7F8',
  },
  backButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },
  container: {
    padding: 24,
    paddingBottom: 40,
  },

  /* Icon Section */
  iconSection: {
    alignItems: 'center',
    marginBottom: 24,
    paddingTop: 8,
  },
  iconCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#DBEAFE',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },

  /* Title & Description */
  titleSection: {
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#111827',
    textAlign: 'center',
    letterSpacing: -0.5,
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 24,
  },

  /* Error */
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEE2E2',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginBottom: 20,
    gap: 8,
  },
  errorText: {
    fontSize: 14,
    color: '#EF4444',
    fontWeight: '500',
    flex: 1,
  },

  /* Form */
  formSection: {
    gap: 20,
    marginBottom: 24,
  },
  fieldGroup: {
    gap: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  input: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: '#111827',
    backgroundColor: '#FFFFFF',
  },
  passwordInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
  },
  passwordInput: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: '#111827',
  },
  visibilityButton: {
    width: 48,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    marginTop: 4,
  },
  forgotPassword: {
    fontSize: 14,
    color: '#1392ec',
    fontWeight: '600',
  },

  /* Login Button */
  loginButton: {
    width: '100%',
  },

  /* Divider */
  dividerSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
    gap: 12,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E5E7EB',
  },
  dividerText: {
    fontSize: 14,
    color: '#6B7280',
  },

  /* Social Buttons */
  socialButtonsRow: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 24,
  },
  socialButton: {
    flex: 1,
  },
  socialIcon: {
    fontSize: 20,
  },

  /* Sign Up Link */
  signUpSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  signUpText: {
    fontSize: 14,
    color: '#6B7280',
  },
  signUpLink: {
    fontSize: 14,
    color: '#1392ec',
    fontWeight: '700',
  },
});

export default LoginScreen;
