import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

interface TasksHeaderProps {
  totalPending: number;
  totalCompleted: number;
  onAddPress: () => void;
}

export default function TasksHeader({
  totalPending,
  totalCompleted,
  onAddPress,
}: TasksHeaderProps) {
  return (
    <View style={styles.headerGradient}>
        
    

      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>My Tasks</Text>
          <Text style={styles.taskSummary}>
            {totalPending} pending • {totalCompleted} done
          </Text>
        </View>

        <TouchableOpacity
          style={styles.addButton}
          onPress={onAddPress}
          activeOpacity={0.85}
        >
          <FontAwesome5 name="plus" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
      
    

    </View>
  );
}

const styles = StyleSheet.create({

  
  headerGradient: {
    backgroundColor: '#667EEA',
    paddingVertical: 20,
    paddingHorizontal: 16,
    paddingTop: 50,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 20,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerContent: {
    flex: 1,
  },

  headerTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 4,
  },

  taskSummary: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.85)',
    fontWeight: '500',
  },

  addButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
    borderWidth: 1.5,
    borderColor: 'rgba(255, 255, 255, 0.4)',
    zIndex:99,
  },
});
