// src/components/LoggerMiddleware.js
import { useState } from 'react';

function LoggerMiddleware() {
  const [logs, setLogs] = useState([]);

  const logEvent = (type, message, meta = {}) => {
    const timestamp = new Date().toISOString();
    const log = { type, message, timestamp, ...meta };
    setLogs(prev => [...prev, log]);
  };

  return [logs, logEvent];
}

export default LoggerMiddleware;
