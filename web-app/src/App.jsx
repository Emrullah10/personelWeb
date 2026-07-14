import { ThemeProvider } from '@shared/providers/ThemeProvider';
import { QueryProvider } from '@shared/providers/QueryProvider';
import { MainLayout } from '@layouts/MainLayout';
import { HomePage } from '@pages/HomePage';

function App() {
  return (
    <ThemeProvider>
      <QueryProvider>
        <MainLayout>
          <HomePage />
        </MainLayout>
      </QueryProvider>
    </ThemeProvider>
  );
}

export default App;
