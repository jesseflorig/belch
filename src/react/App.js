import React from 'react';
import logo from './logo.svg';
import './App.css';
import { channels } from '../shared/constants';
const { ipcRenderer } = window; 

const App = () => {
  const [appName, setAppName] = React.useState()
  const [appVersion, setAppVersion] = React.useState()

  ipcRenderer.send(channels.APP_INFO);
  ipcRenderer.on(channels.APP_INFO, (event, arg) => {
    ipcRenderer.removeAllListeners(channels.APP_INFO);
    const { appName, appVersion } = arg;
    setAppName(appName)
    setAppVersion(appVersion)
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{appName} version {appVersion}</p>
      </header>
    </div>
  );
}

export default App;
