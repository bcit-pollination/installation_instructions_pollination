---
id: ios
title: iOS Installation Instructions
---

## Overview

In this tutorial you will:

* clone the Pollination mobile app GitHub repository
* install required dependencies and packages
* build and install the Pollination iOS app onto your device or simulator

## Requirements

To successfully complete this tutorial you need:

* a macOS machine with Xcode installed
* an Apple ID or Apple developer account
* an iOS device 

##  Setup

1. Clone the GitHub repository at:
   
   https://github.com/bcit-pollination/mobile_pollination

2. Navigate to the ios folder of the project.

  ```shell
  cd mobile_pollination/ios/
  ```

3. Install the required dependencies.

  ```shell
  pod install && pod update
  ```

## Running the Project on an iOS Device.

1. Navigate to the root folder of the project.

2. Plug in your iOS device into your macOS device via USB.

3. Install the required ios-deploy library.

  ```shell
  npm install -g ios-deploy
  ```
  or
    ```shell
  brew install ios-deploy
  ```

4. Launch the project on your iOS device.

  ```shell
  react-native run-ios --device="Device Name"
  ```

## Running the Project on an iOS Simulator

:::note
  Bluetooth functions are not available on a simulator.
:::

1. Navigate to the root folder of the project.

2. Launch the project on the simulator.

  ```shell
  react-native run-ios
  ```
  or
  ```shell
  react-native run-ios --simulator="Simulator Name"
  ```

## Troubleshooting

#### "Untrusted Developer" Error When Launching App on iOS Device

1. On your device, go to Settings > General > Profiles/Device Management.

2. Choose your Apple Development account under "Developer App".

3. Click "Trust".
