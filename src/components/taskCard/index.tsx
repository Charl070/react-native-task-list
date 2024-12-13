import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Box, Flex, Text} from '@react-native-material/core';

const TaskCard: React.FC<TaskCardProps> = ({task, onComplete}) => {
  return (
    <Box style={[styles.card, task.completed && styles.completed]}>
      <View style={styles.header}>
        <Text
          style={[styles.headerText, task.completed && styles.TextCompleted]}>
          {'Task'} {task.completed ? '(Completed)' : ''}
        </Text>
      </View>

      <Text style={styles.title}>{task.title}</Text>

      {!task.completed && (
        <TouchableOpacity
          style={styles.completeButton}
          onPress={() => onComplete(task.id)}>
          <Flex direction="row" justify="center">
            <Text style={styles.completeButtonText}>Mark as Complete</Text>
          </Flex>
        </TouchableOpacity>
      )}
    </Box>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 8,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#EEEEEE',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  completed: {
    backgroundColor: '#0B6E4F',
  },
  TextCompleted: {
    color: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
  },
  headerText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#26547C',
  },
  title: {
    fontSize: 16,
    color: '#000',
    marginBottom: 16,
  },
  completeButton: {
    marginTop: 16,
    backgroundColor: '#26547C',
    padding: 8,
    borderRadius: 8,
  },
  completeButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default TaskCard;
