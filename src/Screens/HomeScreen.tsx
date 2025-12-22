import { StyleSheet, View, ScrollView , Text } from 'react-native'
import React from 'react'
import Calendar from '../Components/Calendar'
import { useTasks} from '../Context/TaskContext'
import CurrentTasksSection from '../Components/Tasks/CurrentTasksSection';
import CompletedTasksSection from '../Components/Tasks/CompletedTasksSection';
import HomeHeader from '../Components/Headers/HomeHeader';



const HomeScreen = () => {
 
  const {tasks , selectedDate} = useTasks();

  let currentTasks = tasks.filter(tasks => tasks.status === 'current');

  const completedTasksForDay = tasks.filter(
    task =>{
      return (task.status === 'completed' && 
      task.date === selectedDate)
    }
  )

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

        {/* Completed Task on that day or sellected day List */}
        {
          completedTasksForDay.length === 0 ? (
            <View style={styles.emptyState}>
              <Text style={styles.emptyText}>No completed tasks for selected day.</Text>
            </View>

            
          ) : (
            <CompletedTasksSection tasks={completedTasksForDay} />
          )


        }

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
  emptyState: {
  marginTop: 16,
  paddingVertical: 20,
  paddingHorizontal: 16,
  backgroundColor: '#F9FAFB',
  borderRadius: 12,
  borderWidth: 1,
  borderColor: '#E5E7EB',
  alignItems: 'center',
  justifyContent: 'center',
},

emptyText: {
  fontSize: 14,
  fontWeight: '500',
  color: '#6B7280',
  textAlign: 'center',
},

});
