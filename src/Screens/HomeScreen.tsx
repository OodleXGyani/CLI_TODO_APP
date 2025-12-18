import { StyleSheet, View, ScrollView } from 'react-native'

import React from 'react'
import Calendar from '../Components/Calendar'
import { useTasks} from '../Context/TaskContext'
import CurrentTasksSection from '../Components/Tasks/CurrentTasksSection';
import HomeHeader from '../Components/Headers/HomeHeader';


const HomeScreen = () => {
  let task = useTasks();

  let currentTasks = task.tasks.filter(Tasks => Tasks.status === 'current');

  return (

    <View style={styles.mainContainer}>
      <HomeHeader/>
     
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Calendar on top */}
        <View style={styles.calendarWrapper}>
          <Calendar />
        </View>

        {/*Current Tasks*/}

        <CurrentTasksSection tasks={currentTasks} />

        
      </ScrollView>
    

    </View>



    
  );
}

export default HomeScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // backgroundColor: '#FFFFFF',
    
  },

  container: {
    flex: 1,
    // backgroundColor: '#F8FAFC',
    
  },
  scrollContent: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    paddingBottom: 32,
  },
  calendarWrapper: {
    marginBottom: 20,
  },
  taskWrapper: {
    marginBottom: 12,
  },
});
