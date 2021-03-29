---
id: nginx
title: NGINX installation instructions
---

## Overview

In this tutorial you will:
* install NGINX
* configure NGINX to serve the swagger server and static files using a custom domain
* get an SSL certificate for your custom domain using Let's Encrypt
* learn basic nginx commands

## Requirements

To successfully complete this tutorial you need:
* Ubuntu 20.04 ( while it may be possible to use other versions, this tutorial will only support 20.04 )
* a registered custom domain
* the registered custom domain is pointing to the ip address of the machine where we are installing nginx
* unused 80, 443, 8080 ports
* Common knowledge on the use of Github and Git

## Procedures
### Installing NGINX

1. update the repository information
```shell
sudo apt-get update
```
1. Install NGINX
```shell
sudo apt-get install nginx
```
1. verify
```shell
nginx -v
```

### Configure nginx to serve static files

1. Create a configuration file
    ```shell
    sudo touch /etc/nginx/sites-available/<your domain name here>
    ```
1. Enable the file by creating a hard link
    ```shell
    sudo ln /etc/nginx/sites-available/<your domain name here> /etc/nginx/sites-enabled/<your domain name here>
    ```
1. Paste the configuration contents into the file.
   1. to open the file
        ```shell
        sudo nano /etc/nginx/sites-available/<your domain here>
        ```
    :::note
       substitute &lt;your domain name here&gt; with your actual domain name
    :::
       
    :::note
       The root value in the first line within the server block refers to the directory
    where you will place your static files
    :::
    :::tip
        Once you are done, you can press ctl+X to close the file, enter yes, then press enter. Your file will be saved 
    :::
    ```
    server {
    
            root /var/www/<your domain name here>;
            listen 80;
            listen [::]:80;
            index index.html index.htm index.nginx-debian.html;
    
            server_name <your domain name here> www.<your domain name here>;
    
            location / {
                    try_files $uri $uri/ =404;
            }
    
            location ^~ /ui {
                    proxy_set_header X-Real-IP $remote_addr;
                    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                    proxy_set_header Host $http_host;
                    proxy_set_header X-NginX-Proxy true;
                    proxy_pass    http://127.0.0.1:8080/;
            }
    
            location ^~ /api/ {
                    proxy_set_header X-Real-IP $remote_addr;
                    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                    proxy_set_header Host $http_host;
                    proxy_set_header X-NginX-Proxy true;
                    proxy_pass    http://127.0.0.1:8080/api/;
            }
    }
    ```
1. Move to the parent directory of the static file directory
    ```shell
    cd /var/www
    ```
1. Fork this repository https://github.com/bcit-pollination/website_production_pollination
   
1. Clone the fork
   ```shell
    sudo git clone <fork cloning link from github>
    ```
1. Rename the repository 
   ```shell
    sudo mv website_production_pollination <your domain name here>
    ```
1. Change the user who owns the directory
    ```shell
    sudo chown <your username> <your domain name here>
    ```
1. Start NGINX
    ```shell
    sudo service nginx start
    ```
1. Navigate to your custom domain in a browser and check that the static files are being served
   
    At this point, you have configured NGINX to serve static files, and act as a reverse proxy to serve 
   the swagger server API calls
   
:::note
At this moment HTTPS is not enabled, so you must use plain http to see your static files
:::

### Get an SSL certificate for your website

To get the SSL certificate we will use Let's Encrypt. Please follow the instructions at:
https://certbot.eff.org/lets-encrypt/ubuntufocal-nginx

### Basic nginx commands
* start
  ```shell
    sudo service nginx start
    ```
* stop
  ```shell
    sudo service nginx stop
    ```
* reload
    ```shell
    sudo service nginx restart
    ```
  

You have now successfully installed and configured NGINX! 