import React from 'react';
import { SafeAreaView, View, StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { Card } from './src/components';
import { defaultTheme } from './src/theme';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#F3F3F3' }}>
        <View>
          <ThemeProvider theme={defaultTheme}>
            <Card amount="R$ 100,00" status="PAGO" />
            <Card amount="R$ 25,00" status="EM_ABERTO" />
            <Card amount="R$ 05,00" status="EM_ATRASO" />
            <Card amount="R$ 40,00" status="REVERTIDO" />
          </ThemeProvider>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
