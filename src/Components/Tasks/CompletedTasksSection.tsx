import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SwipeableTaskItem from './SwipeableTaskItem';

import { Task } from '../../Types/Task';
import { useTasks } from '../../Context/TaskContext';

interface CompletedTasksSectionProps {
  tasks: Task[];
}

export default function CompletedTasksSection({
  tasks,
}: CompletedTasksSectionProps) {
  const { removeTask } = useTasks();

  if (!tasks || tasks.length === 0) return null;

  return (
    <View style={styles.section}>
      {/* Section Header */}
      <View style={styles.sectionHeader}>
        <FontAwesome5 name="check-circle" size={16} color="#10B981" />
        <Text style={styles.sectionTitle}>Completed Tasks</Text>
        <View style={[styles.countBadge, { backgroundColor: '#10B981' }]}>
          <Text style={styles.countBadgeText}>{tasks.length}</Text>
        </View>
      </View>

      {/* Task List */}
      {tasks.map(task => (
        <SwipeableTaskItem key={task.id} task={task} onDelete={() => removeTask(task.id)} onComplete={() => {Alert.alert("Task already completed") }}>

        <View  style={styles.taskCard}>
          <View style={styles.taskContent}>
            <View style={[styles.taskDot, { backgroundColor: '#10B981' }]} />
            <Text
              style={[styles.taskText, styles.completedText]}
              numberOfLines={2}
            >
              {task.title}
            </Text>
          </View>

          {/* Actions */}
          <View style={styles.actions}>
            <TouchableOpacity
              onPress={() => removeTask(task.id)}
              style={styles.iconBtn}
              activeOpacity={0.7}
            >
              <FontAwesome5 name="trash-alt" size={14} color="#EF4444" />
            </TouchableOpacity>
          </View>
        </View>
        </SwipeableTaskItem>
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
    backgroundColor: '#F0FDF4',
    paddingVertical: 14,
    paddingHorizontal: 14,
    borderRadius: 12,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderLeftWidth: 4,
    borderLeftColor: '#10B981',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    opacity: 0.85,
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
    opacity: 1,
  },

  taskText: {
    fontSize: 15,
    color: '#1F2937',
    flex: 1,
    fontWeight: '500',
    lineHeight: 20,
  },

  completedText: {
    textDecorationLine: 'line-through',
    color: '#9CA3AF',
    fontWeight: '400',
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
