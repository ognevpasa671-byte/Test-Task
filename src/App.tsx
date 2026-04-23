import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { store } from './store';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import Board from './components/Board/Board';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ErrorBoundary>
          <Board />
        </ErrorBoundary>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
