import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { Task } from '../../Types/Task';
import { useTasks } from '../../Context/TaskContext';

interface CurrentTasksSectionProps {
  tasks: Task[];
}

export default function CurrentTasksSection({
  tasks,
}: CurrentTasksSectionProps) {
  const { updateTaskStatus, removeTask } = useTasks();

  if (!tasks || tasks.length === 0) return null;

  return (
    <View style={styles.section}>
      {/* Section Header */}
      <View style={styles.sectionHeader}>
        <FontAwesome5 name="circle" size={16} color="#3B82F6" />
        <Text style={styles.sectionTitle}>Current Tasks</Text>
        <View style={[styles.countBadge, { backgroundColor: '#3B82F6' }]}>
          <Text style={styles.countBadgeText}>{tasks.length}</Text>
        </View>
      </View>

      {/* Task List */}
      {tasks.map(task => (
        <View key={task.id} style={styles.taskCard}>
          <View style={styles.taskContent}>
            <View style={styles.taskDot} />
            <Text
              style={styles.taskText}
              numberOfLines={2}
            >
              {task.title}
            </Text>
          </View>

          {/* Actions */}
          <View style={styles.actions}>
            <TouchableOpacity
              onPress={() => updateTaskStatus(task.id, 'completed')}
              style={styles.iconBtn}
              activeOpacity={0.7}
            >
              <FontAwesome5 name="check" size={16} color="#10B981" />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => removeTask(task.id)}
              style={styles.iconBtn}
              activeOpacity={0.7}
            >
              <FontAwesome5 name="trash-alt" size={14} color="#EF4444" />
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginBottom: 28,
  },

  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
    gap: 8,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2937',
    flex: 1,
    letterSpacing: 0.2,
  },

  countBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  countBadgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
  },

  taskCard: {
    backgroundColor: '#fff',
    paddingVertical: 14,
    paddingHorizontal: 14,
    borderRadius: 12,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderLeftWidth: 4,
    borderLeftColor: '#3B82F6',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },

  taskContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  taskDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#3B82F6',
    opacity: 0.6,
  },

  taskText: {
    fontSize: 15,
    color: '#1F2937',
    flex: 1,
    fontWeight: '500',
    lineHeight: 20,
  },

  actions: {
    flexDirection: 'row',
    gap: 8,
  },

  iconBtn: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
  },
});
