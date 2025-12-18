import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { Task } from '../../Types/Task';

interface Props {
  task: Task;
  onDelete: () => void;
  onComplete: () => void;
  children?: React.ReactNode;
}

export default function SwipeableTaskItem({
  task,
  onDelete,
  onComplete,
  children,
}: Props) {
  const renderLeftActions = () => (
    <View style={[styles.action, styles.complete]}>
      <FontAwesome5 name="check" size={20} color="#fff" />
      <Text style={styles.actionText}>Done</Text>
    </View>
  );

  const renderRightActions = () => (
    <View style={[styles.action, styles.delete]}>
      <FontAwesome5 name="trash" size={18} color="#fff" />
      <Text style={styles.actionText}>Delete</Text>
    </View>
  );

  return (
    <Swipeable
      renderLeftActions={renderLeftActions}
      renderRightActions={renderRightActions}
      onSwipeableLeftOpen={onComplete}
      onSwipeableRightOpen={onDelete}
    >
      {children}
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  action: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
    height: 59,
    borderRadius: 12,
  },
  complete: {
    backgroundColor: '#10B981',

  },
  delete: {
    backgroundColor: '#EF4444',
  },
  actionText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
    marginTop: 4,
  },
});
