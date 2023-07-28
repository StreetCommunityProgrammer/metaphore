---
layout: post
title: "After triple boot 3 OS options not showing on the grub"
author: "DnyaneshwariKolapkar"
created_at: 2023-07-28T05:30:38Z
language: linux
---

### The Backstory about your Linux Metaphor

As a Linux enthusiast, I have a dual-booted system comprising Windows and Ubuntu. Recently, I made the decision to triple boot and added Endeavour OS as a third operating system. However, upon booting the system, the GRUB menu failed to display the option for Endeavour OS. we will see a solution to this problem in this story.

### The Linux Story!

# Triple Boot Setup: Windows, Ubuntu, and Endeavour OS

## Introduction
As a Linux enthusiast, I decided to venture into a triple boot setup, integrating Windows, Ubuntu, and Endeavour OS into my system. However, after installing Endeavour OS, I encountered an issue where it didn't appear in the GRUB menu alongside Windows and Ubuntu. This README documents the troubleshooting journey and the ultimate solution.

## Initial Verification
To verify if Endeavour OS was successfully installed and functional, I accessed the BIOS and temporarily changed the boot sequence to set Endeavour OS as the first option. This confirmed that Endeavour OS was installed correctly and could boot up when selected directly from the BIOS boot menu.

## The Challenge
The primary goal was to display all three operating systems in the GRUB menu without having to modify the boot sequence every time I started the computer. I attempted a couple of solutions, but they didn't yield the desired results.

### Attempted Solutions
1. **Using Ubuntu Commands:**
   While booted into Ubuntu, I tried running the following commands in the terminal:
   -sudo os-prober
   -sudo update-grub
  Unfortunately, this method didn't add Endeavour OS to the GRUB menu.

2. **Manual Configuration:**
Next, I attempted to manually add an entry for Endeavour OS to the GRUB configuration file. Despite being cautious with the process, it still didn't show up in the GRUB menu as expected.

## The Solution
After exploring different options, I decided to take a different approach, which ultimately worked.

**Solution:**
Booting into Endeavour OS, I ran the following command in the terminal:
-sudo update-grub
Magically, this time, it worked! The GRUB menu was updated, and now it displayed all three operating systems - Windows, Ubuntu, and Endeavour OS - allowing me to choose between them seamlessly during boot.

## Conclusion
With this successful solution, I no longer needed to modify the boot sequence in the BIOS every time I wanted to access Endeavour OS. Now, for every boot-up, the GRUB menu presented me with the full array of options, making my triple-boot setup a convenient reality. My journey as a Linux enthusiast continued, and I reveled in the versatility of my system, ready to explore new frontiers with Endeavour OS.


### A Linux demo/repos link

_No response_

### PayPal Link for Donation (Linux Storyteller)

_No response_