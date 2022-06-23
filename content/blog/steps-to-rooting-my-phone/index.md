---
title: Rooting phone steps
date: "2022-05-14"
description: "A how to guide"
---

In this post I'll be configuring my phone (OnePlus 7T) to use a custom rom. The ROM I specifically choose is the [Pixel Experience ROM](https://wiki.pixelexperience.org/). Install instructions can also be found on their site. I choose to make a summary of the most pertinent information for my guide. I encourage you to checkout their guide. I should also mention that this process may waive your warranty. 

## Configuration of [ADB](https://en.wikipedia.org/wiki/Android_Debug_Bridge)

You'll need ADB Drivers installed on your machine. Personally, I use Windows OS for this. For me, it's more convenient over Linux. You can download the drivers from [here](https://github.com/koush/UniversalAdbDriver).

It's pretty simple, follow the prompts and you'll be set.

Then, go to phone settings. Go to "About" section. And tap "Build Number" 7 times. Then "Developer Options" and enable debugging. 

Now you can open the terminal, and check if the phone is detected via the command, ```adb devices```.

It will give a prompt when connecting to your PC about USB Debugging. Enabling this allows you to run commands via ADB when the phone is connected.

## Detect [Fastboot](https://en.wikipedia.org/wiki/Fastboot)

If your phone supports using Fastboot, you can reboot into fastboot mode. To detect if this is the case, ```fastboot devices```. 

## Unlocking [Bootloader](https://en.wikipedia.org/wiki/Bootloader)

Since this is the first time unlocking our Bootloader, our phone data will be erased completely. I highly suggest to make a backup. 

1. Now, connect your phone to to your PC. A prompt will pop-up again if you didn't auto-accept the checkbox from before.
2. In the terminal, type ```adb reboot bootloader``` to boot into Fastboot. On [this wiki page](https://en.wikipedia.org/wiki/Fastboot), it tells you what buttons to hold to boot into Fastboot.
3. Verify PC can detect your phone by running the command, ```fastboot devices```.
4. To unlock the Bootloader via [OEM Unlocking](https://en.droidwiki.org/wiki/OEM-Unlock) we run, ```fastboot oem unlock```. If any prompts appear on your phone, accept them. The phone should auto reboot. After, you will have to follow the first steps above for "Configuration of ADB" and "Detect Fastboot".

## Booting a custom recovery ROM via fastboot

We can download the Pixel Experience Recovery ROM from [here](https://download.pixelexperience.org/devices) and selecting your device.

1. Connect your phone. On your pc, in the terminal type ```adb reboot bootloader```. The phone should now be in Fastboot.
2. Verify detection, by running ```fastboot devices```.
3. To [flash](https://en.wikipedia.org/wiki/Firmware#Flashing) your custom recovery rom, run ```fastboot flash boot <recovery_filename>.img``` Replace "<recovery_filename>" with your image name. I keep this image in the same directory where the Fastboot files are stored.

## Problem I encountered while rooting

Since my phone has an a/b partition structure, I'll have to follow an extra step. That's to say that partition b (slot b) could have an empty or have an older firmware version than slot a. This could lead to an accidental hard-brick (has happened once to me, because I missed this step).

We'll have to [sideload](https://en.wikipedia.org/wiki/Sideloading) one of these partitions.

## Sideloading A/B partition (Ensuring Firmware partitions are consistent)

1. Download copy-partitions-20210323_1922, found [here](https://github.com/PixelExperience-Devices/blobs/blob/main/copy-partitions-20210323_1922.zip?raw=true).
2. To sideload, copy-partitions-20210323_1922.zip and from the recovery screen select "Apply Update" and then "Apply from ADB" to sideload.
3. In terminal, run ```adb sideload copy-partitions-20210323_1922.zip```.
4. Within recovery menu, select “Advanced”, then “Reboot to recovery”.

## Installing the PixelExperience from Recovery

On the PixelExperience site you could find the img file for your phone. Download that. I stored it within the same folder where ADB is located on my PC. Reboot into recovery. Within the recovery menu, go to Factory Reset, Format Data / Factory Reset, and continue. This will remove everything from your device and you will start off with a clean slate. 

To sideload the PixelExperience .zip package, go to "Apply Update", and then "Apply from ADB". While your phone is connected to your PC (host) through ADB, you can now sideload the package with the following command: ```adb sideload filename.zip``` After, go to the main menu, and sideload the .zip package.

After the process is done, you can click "Reboot Now".

## [Install Magisk](https://www.xda-developers.com/how-to-install-magisk/)

You can now install Magisk and have access to [many modules](https://themagisk.com/category/magisk-modules/).

## Conclusion

Rooting my OnePlus 7T was relatively simple, but I had already bricked my phone during one ROM installation. I wrote this guide so that the next time I want to explore a different ROM, I have an understanding of what I have to follow. I hope it has helped you as well. 

## Resources:

[PixelExperience Install Instructions](https://wiki.pixelexperience.org/devices/hotdogb/install/) <br/>

[Magisk Install](https://topjohnwu.github.io/Magisk/install.html)