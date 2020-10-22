# [WIP] 🤮 Belch

### Open Source Integrated Web Proxy

## Project structure
- `/electron`: Electron specific code
- `/src/react`: CRA specific code
- `/src/shared`: Shared between Electron & CRA

## Setup
```
yarn
```

## Dev
```
yarn start
yarn start-electron
```
_Note_: Use `start-electron-win` on Windows

## Distro
```
yarn build
yarn build-electron
yarn package
```
_Note_: Use `build-electron-win` and `package-win` on Windows

The distributable applications will be in the `/dist` folder.

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
