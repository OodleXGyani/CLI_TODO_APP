import { StyleSheet, View, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

import React from 'react'
import Calendar from '../Components/Calendar'

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Calendar on top */}
        <View style={styles.calendarWrapper}>
          <Calendar />
        </View>

        {/* Current Tasks */}
        {/* {currentTasks.length > 0 && (
          <View style={styles.taskWrapper}>
            <CurrentTasksSection tasks={currentTasks} />
          </View>
        )} */}
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    paddingBottom: 32,
  },
  calendarWrapper: {
    marginBottom: 20,
  },
  taskWrapper: {
    marginBottom: 12,
  },
});
