import React, { useState, useEffect } from 'react';
import { Container, Tabs, Tab } from '@mui/material';
import UrlForm from './components/UrlForm';
import UrlList from './components/UrlList';
import StatsPage from './components/StatsPage';
import LoggerMiddleware from './components/LoggerMiddleware';

export const LoggerContext = React.createContext();

function App() {
  const [urls, setUrls] = useState(() => {
    const saved = localStorage.getItem('shortenedUrls');
    return saved ? JSON.parse(saved) : [];
  });

  const [logs, logEvent] = LoggerMiddleware();
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    localStorage.setItem('shortenedUrls', JSON.stringify(urls));
  }, [urls]);

  return (
    <LoggerContext.Provider value={{ logEvent }}>
      <Container maxWidth="md">
        <Tabs value={tabIndex} onChange={(e, newIndex) => setTabIndex(newIndex)}>
          <Tab label="Shorten URLs" />
          <Tab label="Statistics" />
        </Tabs>

        {tabIndex === 0 && (
          <>
            <UrlForm setUrls={setUrls} urls={urls} />
            <UrlList urls={urls} setUrls={setUrls} />
          </>
        )}

        {tabIndex === 1 && <StatsPage urls={urls} />}
      </Container>
    </LoggerContext.Provider>
  );
}

export default App;
