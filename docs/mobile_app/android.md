---
id: android
title: Android installation instructions
---

This document details the mobile application installation instructions for Android usage.

## Overview
In this tutorial you will:
1. Clone the mobile repository
2. Connect your Android phone to your computer using an Android-based Lightning-to-USB cable
3. Enable USB-debugging on your Android phone
4. Install the app on your Android phone
5. Run the app

## Requirements
* Git installed
* Basic knowledge of GitHub and Git
* Android Studio installed
* Access to the Internet
* Android device
* Android-based Lightning-to-USB cable

## Procedures

### Clone the mobile repository
1. Fork this repository: https://github.com/bcit-pollination/mobile_pollination.git

2. Ensure you are at the desired parent directory of the repository to be installed

3. Clone your fork
```shell
git clone <your fork clone link here>
```

4. Navigate to the directory of the recently cloned mobile repository
```shell
cd mobile_pollination
```

:::note
If you haven't installed the latest LTS version of Node.js on your computer, you can do so here: https://nodejs.org/en/download/
:::

Alternatively, you can use ``nvm`` (Node Version Manager) to update your node version

5. Install node modules
```shell
npm install
```

### Connect your Android phone to your computer using an Android-based Lightning-to-USB cable
1. Connect your Android phone to your computer using an Android-based Lightning-to-USB cable

    A Lightning-to-USB cable is the cable that connects your phone to your charger's power adapter

### Enable USB-debugging on your Android phone
1. Unlock your Android phone

    This allows your computer to access your mobile phone

2. Navigate to your Settings

:::warning
You must have ``Developer Mode`` enabled in your Android phone in order to use the USB-debugging feature
:::

The ``Developer Mode`` screen in ``Settings`` is available by default on Android 4.1 and lower and can easily be toggled on by navigating there

If your phone utilizes Android 4.2 or higher, you can enable Developer Mode by navigating to ``About Phone`` in ``Settings`` and then tap ``Build Number`` seven times

Android 8.0.0 and 8.1.0 requires an additional step in the navigation order:
Settings > ``System`` > About Phone > Build Number

More details can be found here: https://developer.android.com/studio/debug/dev-options

3. Search for USB-debugging using the search bar and select the most relevant search result
    
    Alternatively, you can navigate to ``Developer Options`` in ``Settings`` (usually located at the very bottom) and look for the ``USB-debugging`` option from there

:::note
Disable USB-debugging if it is already enabled in order receive the RSA authentication pop-up once again
:::

4. Enable USB-debugging and press OK when prompted by the RSA authentication pop-up

:::note
The adb (Android Debug Bridge) command from Android Studio must be run in the respective directory: ``android_sdk/platform-tools/``
:::

If you are on Windows, you can add the directory to the system environment PATH: ``C:\Users\<user>\AppData\Local\Android\Sdk\platform-tools``

Doing so will allow you to run the adb command-line tool globally and forgo the previous note

If you are on Ubuntu Linux, please follow the second step within the ``Set up a device for development`` section from this tutorial: https://developer.android.com/studio/run/device#setting-up

:::note
You may receive errors after attempting to run the adb command-line tool if the terminal is not given administrator privileges
:::

5. Check that your device is detected and authorized using the adb command-line tool
```shell
adb devices
```

At this point, the terminal should give a similar output:
```shell
List of devices attached
<device_serial> authorized
```

If instead it lists your device as unauthorized, then something went wrong.

More details can be found here: https://developer.android.com/studio/run/device

### Install the app on your Android phone
1. Open a terminal with administrator privileges

2. Navigate to the root directory of the mobile repository

3. Install the app onto your phone via react-native
```shell
react-native run-android
```

Installation may take several minutes

If you are getting an error regarding ``gradle``, you will need to open Android Studio and let it build the gradle before attempting to retry the installation process

After compilation and installation, the app should automatically open on your Android phone

### Run the app
1. Begin voting by pressing ``Get Started``

This marks the end of the installation instructions for Android devices