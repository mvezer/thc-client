import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, TouchableHighlight } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { BASE_URL } from '../constants/urls';
import { applyCombo } from '../handlers/THCapi';

const SVG_BASE_URL = `${BASE_URL}/static/images/icons`;

const getUrl = (comboData) => {
  return `${SVG_BASE_URL}/${comboData.icon}`;
}

export default function ComboButton(props) {
  const { comboData } = props; 
  return (
    <TouchableHighlight onPress={() => applyCombo(comboData.comboId)} >
      <View style={styles.container}>
        <SvgUri uri={getUrl(comboData)} width={80} height={80} fill="#000" />
      </View>    
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
});
