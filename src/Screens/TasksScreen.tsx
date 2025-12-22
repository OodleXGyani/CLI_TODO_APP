import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { useTasks } from '../Context/TaskContext';
import { formatAsYYYYMMDD } from '../utils/date';
import TasksHeader from '../Components/Headers/TasksHeader';
import CurrentTasksSection from '../Components/Tasks/CurrentTasksSection';
import UpcomingTasksSection from '../Components/Tasks/UpcomingTasksSection';
import CompletedTasksSection from '../Components/Tasks/CompletedTasksSection';

export default function TasksScreen() {
  const { tasks, addTask } = useTasks();

  const [showAddModal, setShowAddModal] = useState(false);
  const [taskTitle, setTaskTitle] = useState('');

  const currentTasks = tasks.filter(t => t.status === 'current');
  const upcomingTasks = tasks.filter(t => t.status === 'upcoming');
  const completedTasks = tasks.filter(t => t.status === 'completed');

  const totalPending = currentTasks.length + upcomingTasks.length;
  const totalCompleted = completedTasks.length;

  const handleAddTask = () => {
    if (!taskTitle.trim()) return;

    addTask({
      title: taskTitle.trim(),
      status: 'current',
      date: formatAsYYYYMMDD(new Date()),
    });

    setTaskTitle('');
    setShowAddModal(false);
  };

  return (

    <View style={styles.mainContainer}>

      {/* Header */}
        <TasksHeader
          totalPending={totalPending}
          totalCompleted={totalCompleted}
          onAddPress={() => {setShowAddModal(true)}}
        />



      <View style={styles.container}>
      
        {/* Content */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <CurrentTasksSection tasks={currentTasks} />
          <UpcomingTasksSection tasks={upcomingTasks} />
          <CompletedTasksSection tasks={completedTasks} />

          {/* Empty State */}
          {tasks.length === 0 && (
            <View style={styles.emptyState}>
              <FontAwesome5 name="inbox" size={48} color="#D1D5DB" />
              <Text style={styles.emptyStateText}>No tasks yet</Text>
              <Text style={styles.emptyStateSubtext}>
                Tap the + button to create your first task
              </Text>
            </View>
          )}
        </ScrollView>
      </View>

      
    {/* Add Task Modal */}
      <Modal
        visible={showAddModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowAddModal(false)}
      >
        <KeyboardAvoidingView style={styles.modalOverlay} behavior="padding">
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Add New Task</Text>
              <TouchableOpacity
                onPress={() => {
                  setTaskTitle('');
                  setShowAddModal(false);
                }}
              >
                <FontAwesome5 name="times" size={20} color="#6B7280" />
              </TouchableOpacity>
            </View>

            <TextInput
              style={styles.modalInput}
              placeholder="What needs to be done?"
              placeholderTextColor="#9CA3AF"
              value={taskTitle}
              onChangeText={setTaskTitle}
              autoFocus
              onSubmitEditing={handleAddTask}
              maxLength={100}
            />

            <View style={styles.modalActions}>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => {
                  setTaskTitle('');
                  setShowAddModal(false);
                }}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.modalButton, styles.addButtonModal]}
                onPress={handleAddTask}
                activeOpacity={0.85}
              >
                <FontAwesome5 name="plus" size={14} color="#fff" />
                <Text style={styles.addButtonText}>Add Task</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>


    </View>

    
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  mainContainer:{
    flex: 1,
    gap: 10,
  },

  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 16,
    
  },

  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 32,
  },

  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },

  emptyStateText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#6B7280',
    marginTop: 16,
  },

  emptyStateSubtext: {
    fontSize: 14,
    color: '#9CA3AF',
    marginTop: 8,
    textAlign: 'center',
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },

  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 24,
    width: '88%',
    maxWidth: 420,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    elevation: 10,
  },

  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1F2937',
  },

  modalInput: {
    borderWidth: 1.5,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    marginBottom: 22,
    color: '#1F2937',
    backgroundColor: '#F9FAFB',
    fontWeight: '500',
  },

  modalActions: {
    flexDirection: 'row',
    gap: 12,
  },

  modalButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
  },

  cancelButton: {
    backgroundColor: '#F3F4F6',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },

  cancelButtonText: {
    color: '#6B7280',
    fontSize: 14,
    fontWeight: '600',
  },

  addButtonModal: {
    backgroundColor: '#667EEA',
  },

  addButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});
