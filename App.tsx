import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import Routes from './src/Routes';
import { Provider } from 'react-redux';
import store from './src/store';

Icon.loadFont();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Routes />
      </Provider>
    </NavigationContainer>
  );
}

export default App;