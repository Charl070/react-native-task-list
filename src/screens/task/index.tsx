import React, {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList, TouchableOpacity} from 'react-native';
import {Text} from '@react-native-material/core';
import {ActivityIndicator, Flex} from '@react-native-material/core';
import {useTasks} from '../../hooks/useTasks';
import {TaskCard, Header} from '../../components';

const TaskListScreen = () => {
  const {data, isLoading, isError, error, refetch} = useTasks();
  const [localTasks, setLocalTasks] = useState<Task[]>([]);

  useEffect(() => {
    if (data) {
      setLocalTasks(data);
    }
  }, [data]);

  const handleComplete = (id: number) => {
    const updatedTasks = localTasks.map(task =>
      task.id === id ? {...task, completed: true} : task,
    );
    setLocalTasks(updatedTasks);
  };

  const resetTasks = () => {
    const resetTasks = localTasks.map(task => ({...task, completed: false}));
    setLocalTasks(resetTasks);
  };

  if (isLoading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#6200ea" />
      </View>
    );
  }

  if (isError) {
    return (
      <View>
        <Header title="Task List" />
        <View style={styles.error}>
          <Text>Error: {error.message}</Text>
          <TouchableOpacity
            onPress={() => refetch()}
            style={styles.resetButton}>
            <Flex direction="row" justify="center">
              <Text>Reload page</Text>
            </Flex>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View>
      <Header title="Task List" />

      <View style={styles.container}>
        <TouchableOpacity onPress={resetTasks} style={styles.resetButton}>
          <Flex direction="row" justify="center">
            <Text>Reset all tasks</Text>
          </Flex>
        </TouchableOpacity>
        <FlatList
          data={localTasks}
          renderItem={({item}) => (
            <TaskCard task={item} onComplete={handleComplete} />
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  resetButton: {
    marginBottom: 16,
    backgroundColor: '#E98A15',
    padding: 8,
    borderRadius: 8,
  },
});
export default TaskListScreen;
