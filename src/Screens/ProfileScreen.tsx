import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  ScrollView,
  Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '../Context/AuthContext';
import { useTasks } from '../Context/TaskContext';

const ProfileScreen = () => {
  const { user, logout } = useAuth();
  const { tasks } = useTasks();

  const pendingCount = tasks.filter(
    task => task.status === 'current' || task.status === 'upcoming'
  ).length;
  const completedCount = tasks.filter(task => task.status === 'completed').length;

  const handleLogout = async () => {
    Alert.alert(
      'Log Out',
      'Are you sure you want to log out?',
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Log Out',
          onPress: async () => {
            try {
              await logout();
            } catch (error) {
              Alert.alert('Error', 'Failed to log out. Please try again.');
            }
          },
          style: 'destructive',
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Profile</Text>
          <TouchableOpacity>
            <Text style={styles.editText}>Edit</Text>
          </TouchableOpacity>
        </View>

        {/* Avatar */}
        <View style={styles.avatarSection}>
          <View style={styles.avatarWrapper}>
            <Text style={styles.avatar}>👨🏻‍💻</Text>

            <View style={styles.cameraBadge}>
              <Ionicons name="camera" size={14} color="#fff" />
            </View>
          </View>

          <Text style={styles.name}>{user?.displayName || 'User'}</Text>
          <Text style={styles.email}>{user?.email}</Text>
        </View>

        {/* Stats */}
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{pendingCount}</Text>
            <Text style={styles.statLabel}>PENDING</Text>
          </View>

          <View style={styles.statItem}>
            <Text style={styles.statValue}>{completedCount}</Text>
            <Text style={styles.statLabel}>COMPLETED</Text>
          </View>
        </View>

        {/* Menu */}
        <View style={styles.menu}>
          <MenuItem
            icon="person-outline"
            label="Account Settings"
          />
          <MenuItem
            icon="notifications-outline"
            label="Notifications"
          />
          <MenuItem
            icon="help-circle-outline"
            label="Help & Support"
          />
          <MenuItem
            icon="moon-outline"
            label="Dark Mode"
            right={<Switch />}
          />
        </View>

        {/* Logout */}
        <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
          <Ionicons
            name="log-out-outline"
            size={18}
            color="#EF4444"
          />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;



//-----------------------------------------------------

const MenuItem = ({
  icon,
  label,
  right,
}: {
  icon: string;
  label: string;
  right?: React.ReactNode;
}) => (
  <TouchableOpacity style={styles.menuItem}>
    <View style={styles.menuLeft}>
      <View style={styles.menuIcon}>
        <Ionicons name={icon} size={18} color="#4F46E5" />
      </View>
      <Text style={styles.menuLabel}>{label}</Text>
    </View>

    {right ? (
      right
    ) : (
      <Ionicons
        name="chevron-forward"
        size={18}
        color="#9CA3AF"
      />
    )}
  </TouchableOpacity>
);


//--------------------------------- --------------------
const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  container: {
    padding: 16,
    paddingBottom: 32,
  },

  /* Header */
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  editText: {
    fontSize: 14,
    color: '#4F46E5',
    fontWeight: '500',
  },

  /* Avatar */
  avatarSection: {
    alignItems: 'center',
    marginBottom: 24,
  },
  avatarWrapper: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    fontSize: 44,
  },
  cameraBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#4F46E5',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  email: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 2,
  },

  /* Stats */
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 24,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },
  statLabel: {
    fontSize: 11,
    color: '#6B7280',
    marginTop: 4,
    letterSpacing: 0.6,
  },

  /* Menu */
  menu: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 8,
    marginBottom: 24,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#EEF2FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  menuLabel: {
    fontSize: 14,
    color: '#111827',
    fontWeight: '500',
  },

  /* Logout */
  logoutBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 14,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#FCA5A5',
    backgroundColor: '#FFFFFF',
  },
  logoutText: {
    color: '#EF4444',
    fontWeight: '600',
    fontSize: 14,
  },
});
