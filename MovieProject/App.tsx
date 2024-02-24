import * as React from 'react';
import {LogBox, StatusBar} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigation from './src/constants/navigation';
import {grayBackground} from './src/constants/styles/colors';
LogBox.ignoreAllLogs();

function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <StatusBar
          animated
          backgroundColor={grayBackground}
          barStyle="dark-content"
          hidden={true}
          translucent
        />
        <Navigation />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;
