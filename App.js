import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { getCombos } from './handlers/THCapi';
import ComboButton from './components/ComboButton';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [combos, setCombos] = useState(null);

  // combos.map((comboData, idx) => <SvgIcon key={`icon_${idx}`} svgFileName={comboData.icon} />)

  useEffect(() => {
    if (!combos) {
      setIsLoading(true);
      getCombos().then((c) => { setCombos(c) });
    } else {
      setIsLoading(false);
    }
  }, [combos]);
  return (
    <View style={styles.container}>
      {isLoading
        ? <ActivityIndicator size="large" />
        : combos.map(comboData => <ComboButton key={comboData.comboId} comboData={comboData} />)
      }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
