import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SafeAreaView, StyleSheet} from 'react-native';
import {TaskScreen} from './src/screens';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <SafeAreaView style={styles.container}>
      <TaskScreen />
    </SafeAreaView>
  </QueryClientProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default App;
