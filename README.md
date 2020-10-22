#🤮 [WIP] Belch

### Open Source Integrated Web Proxy

## Project structure
- `/electron`: Electron specific code
- `/src/react`: CRA specific code
- `/src/shared`: Shared between Electron & CRA

## Setup
Install dependencies:
```
yarn
```

## Dev
Start the CRA and Electron `dev` servers:
```
yarn start
yarn start-electron
```
_NOTE_: Use `start-electron-win` on Windows

## Distro
Build and package the application in the `/dist` folder:
```
yarn build
yarn build-electron
yarn package
```
_NOTE_: Use `build-electron-win` and `package-win` on Windows

## Todo
- [x] ~~Configure Electron && CRA~~
  - [x] ~~Dev environment~~
  - [x] ~~Package script~~
- [ ] Finish MVP
  - [ ] Add browser
  - [ ] Intercept request
  - [ ] Inercept response
- [ ] Update app name
- [ ] Update app icon
