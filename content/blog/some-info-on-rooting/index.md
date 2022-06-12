---
title: Rooting phone
date: "2022-04-28"
description: "How rooting works"
---

## How Rooting Works 

On your Android phone you have access to everything except System Files. Rooting your phone gives you access to that partition. Android is a Linux based Operating System and the partition structure is similar to using a Linux Distro on desktop. There are user permissions (denoted by /user folder). When an app asks you for permission for your camera or reading and writing to your filesystem, this is that aspect in practice. Like linux, there's super user (root access) rights. 

On desktop this is the sudo command you'd type along with your password after. If your updating a package or installing a new one from the Ubuntu Apt repo. Root privileages/sudo is required for writing to a root folder to change your distro visually or running a script on startup. Let's say you'd want to delete System32 on windows, theres an equivalent on that OS for this as well. Root user the highest permission. When you root your android, you activate the permission to modify the filesystem on the /xbin folder.

Making a mistake is never fun. Bricking your phone is the result.

## Root Manager (Like Magisk)

An unintended install of an app could decreases your phone's refresh rate to only 15 hertz. For prevention, an "in-between" app like Magisk that asks for the elevated permission is implmented. On default, it always denies such privileage. Letting the app have root access to read your storage, record with your microphone, turn the camera on, etc... is decided with the root manager prompt for those apps.

## Android partitions

The partitions covered are the ones pertaining to rooting. 

First is the __Boot partition (bootloader).__ The boot partition is read before it decides to boot into the Android Operating System. Kernel and RAMdisk are inside this partition. Ramdisk is used to manage memory. The kernel is a bridge between input and the hardware like ports, sensors, etc... Since this is the first step, you can't boot into Android without it.

__The System partition__ is where the Android Operating System resides. It includes system apps, folders, and the interface. If you lose this partition or is corrupt, then you could boot into recovery or load system.

The __Recovery partition__ lets you boot into recovery mode. Here, you can update your __rom__ by dirty flashing the rom alone and simply updating by running ADB commands. Or you can decide to wipe the system to avoid bricking the phone and work off a clean slate. When installing a new rom, always backup your apps, photos, wifi networks, calls logs, phone messages, and wallpapers. The recovery partition is for maintenance operations. 

The __Data partition__ includes app data (photos, messages, videos) and apps installed. Deleting or wiping the partition is the factory reset option to have the default config when you first bought the phone.

## Rooting through Magisk (what happens at the partition-level)

Once you root, you can't receive official updates. This is partly because Magisk is a __systemless root.__ Another reason why the phone will not receive official updates is because there are signature checks with the help of cryptographic functions to check the validity of the boot partition. This is how phone manfacturers approve and secure your phone when installing new security updates. When the bootloader is locked, the IMEI number is needed to unlock if a request needs to be made to the phone manufacture.

When Magisk modifies the boot-partition, Google's safety net API checks the validity of the filesystem but not the boot-partition so the checks pass to continue to boot into the OS.

After Magisk is installed, you have access to Magisk Modules. 

## Custom ROM (Read Only Memory) & Custom Recovery ROM

A Custom Android ROM is an Android OS based on a modified version of Android. Most of the time, it looks like reskin. Under the hood, there are sometimes more optimized improvements to the OS. Since Android is open source, developers can modify and build their own Android ROMs and make a forumn post on XDA. Custom ROMs can add more functionality to phones, better battery, better performance, and are free.

Android phones come with stock firmware (Stock ROM). When installing a neew ROM you'll need a custom recovery ROM. The stock recovery rom (partition after the stock rom) will conflict with the custom ROM. To avoid a conflict, then you install a custom recovery. As a third-party addition, the custom recovery ROM will then allow the Custom ROM to be [Flashed](https://en.wikipedia.org/wiki/Firmware#Flashing). There are different custom recovery roms available and some offer Backup options, Wiping the phone, Restoring options, and installing a new custom rom. 

## Bootloader Unlock

Everytime the phone starts up, the bootloader is launched. The bootloader either boots the Android OS or it goes into a Custom Recovery. The Stock bootloader on some phones requires that only the stock ROM is launched (Locked Bootloader). Some devices have different methods of unlocking the Bootloader. The warranty will be void when the bootloader is unlocked for some phones. 

## Fastboot

To unlock the bootloader, you will need to launch into [Fastboot](https://en.wikipedia.org/wiki/Fastboot). With Fastboot, you can unlock the bootloader, view filesystem images, etc. When you launch into Fastboot you have access to a tool called [Android Debug Bridge](https://en.wikipedia.org/wiki/Android_Debug_Bridge) (ADB).

From Fastboot, you could run adb commands or boot into Recovery mode.

## Closing Thoughts

These are the most important aspects to know before rooting your own phone. Some details left aside. Some partitions I left out for the sake of brevity. In the next Blog post, I'll have a tutorial on rooting my own Android phone.

## Resources:

[Check how many frequencies/bands your phone supports](https://www.kimovil.com/en/frequency-checker)

[All about bootloaders](https://www.androidcentral.com/bootloaders-all-you-ever-wanted-know)

[Difference between locked and unlocked phones](https://joyofandroid.com/difference-locked-unlocked-android-phones/)


