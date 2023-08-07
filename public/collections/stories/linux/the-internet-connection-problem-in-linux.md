---
layout: post
title: "The internet connection problem in linux"
author: "DnyaneshwariKolapkar"
created_at: 2023-08-01T17:02:39Z
language: linux
---

### The Backstory about your Linux Metaphor

# Internet Connection Problem related to DNS After Dual Booting

As depicted in the image provided, the ping test with an IP address shows successful packet transmission, but when attempting to ping a website name, a name resolution error is encountered. This indicates that there is an internet connection, but there seems to be an issue with the Domain Name System (DNS).

![Screenshot from 2023-08-01 22-24-09](https://github.com/StreetCommunityProgrammer/metaphore/assets/76815965/db3bef9d-ed9d-4603-a730-b2934121d398)


### The Linux Story!

## To Solve the Internet Connection Problem:

1. Open the `resolv.conf` file in a text editor like `nano` or any other of your choice with superuser privileges using the following command:

```shell
sudo nano /run/NetworkManager/resolv.conf
```


2. Add the following lines to the `resolv.conf` file and save it:

```shell
nameserver 8.8.8.8
nameserver 8.8.4.4
```

3. After making the changes, you need to restart the `systemd-resolved.service` to apply the new DNS settings. Execute the following command:

```shell
sudo systemctl restart systemd-resolved.service
```

Now, the DNS servers `8.8.8.8` and `8.8.4.4` (Google's Public DNS servers) have been added to your DNS resolution configuration. This should resolve the DNS issues, and you should be able to access websites using their names, and enjoy a working internet connection.

![Screenshot from 2023-08-01 22-31-56](https://github.com/StreetCommunityProgrammer/metaphore/assets/76815965/d05f8305-ffc1-4dce-8377-e77c738aa9df)


### A Linux demo/repos link

_No response_

### PayPal Link for Donation (Linux Storyteller)

_No response_