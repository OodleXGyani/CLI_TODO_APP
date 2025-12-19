import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
} from 'react-native';

interface ButtonProps {
  onPress: () => void;
  label: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  loading?: boolean;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  onPress,
  label,
  variant = 'primary',
  size = 'medium',
  loading = false,
  disabled = false,
  style,
  textStyle,
  icon,
}) => {
  const isDisabled = disabled || loading;

  return (
    <TouchableOpacity
      style={[
        styles.button,
        styles[`variant_${variant}`],
        styles[`size_${size}`],
        isDisabled && styles.disabled,
        style,
      ]}
      onPress={onPress}
      disabled={isDisabled}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'primary' ? '#fff' : '#1392ec'} />
      ) : (
        <>
          {icon}
          <Text
            style={[
              styles.label,
              styles[`labelVariant_${variant}`],
              styles[`labelSize_${size}`],
              textStyle,
            ]}
          >
            {label}
          </Text>
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
  },

  /* Variants */
  variant_primary: {
    backgroundColor: '#1392ec',
  },
  variant_secondary: {
    backgroundColor: '#f6f7f8',
  },
  variant_outline: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },

  /* Sizes */
  size_small: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  size_medium: {
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  size_large: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    minHeight: 56,
  },

  /* States */
  disabled: {
    opacity: 0.6,
  },

  /* Labels */
  label: {
    fontWeight: '600',
    fontSize: 14,
  },
  labelVariant_primary: {
    color: '#fff',
  },
  labelVariant_secondary: {
    color: '#111827',
  },
  labelVariant_outline: {
    color: '#475569',
  },

  labelSize_small: {
    fontSize: 12,
  },
  labelSize_medium: {
    fontSize: 14,
  },
  labelSize_large: {
    fontSize: 16,
    fontWeight: '700',
  },
});

export default Button;
