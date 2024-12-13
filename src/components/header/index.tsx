import React from 'react';
import {StyleSheet} from 'react-native';
import {AppBar} from '@react-native-material/core';

const Header: React.FC<HeaderProps> = ({title}) => {
  return <AppBar title={title} style={styles.appBar} />;
};

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: '#26547C',
  },
});

export default Header;
