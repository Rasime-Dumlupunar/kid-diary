import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import RootNavigator from './src/router/rootNavigator';
import { Provider } from 'react-redux';
import store from './src/store/store';
import { initializeDatabase } from './src/utils/db';

const App: React.FC = props => (
  useEffect(() => {
    initializeDatabase();
  }, []),
  (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  )
);

export default App;
