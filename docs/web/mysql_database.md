---
id: mysql_database
title: MySQL Database installation instructions
---

## Overview

This document will show you how to:
1. Install and starting MySQL server 8.0
1. Generate required MySQL tables and stored procedures
1. Set up MySQL database user

## Requirements

* Ubuntu/Debian based OS
* Installed git
* Port 3306 is open

## Procedures

### Install MySQL server
1. Download and save the MySQL release package from the APT repository https://dev.mysql.com/downloads/repo/apt/
:::note
This package only works for Ubuntu/Debian based operating systems. You will need to look online to see how to install on other operating systems such as MacOS.
:::

2. Open your terminal and navigate to the directory where it was downloaded. For example, if it is in your <em>Downloads</em> folder

```shell
cd ~/Downloads
```

3. Install the downloaded package by running the following, replacing <em>mysql-apt-config_w.x.y-z.deb</em> with the name of the file
```shell
sudo dpkg -i mysql-apt-config_w.x.y-z.deb
```
4. You will see a few configurations.
At the time of writing, they are:

> MySQL Server & Cluster (Currently selected: mysql-8.0)
>
> MySQL Tools & Connectors (Currently selected: Enabled)
>
> MySQL Preview Packages  (Currently selected: Disabled)

Leave everything as default and select <em>Ok</em>. 

5. Update the package information from the APT repository
```shell
sudo apt-get update
```

6. Install the server
```shell
sudo apt-get install mysql-server
```

7. Set a password for the root user

8. Choose 'Strong Password Encryption'

9. MySQL server is now running
:::note
You can start the server by running 
`systemctl start mysql`
and stop the server by running 
`systemctl stop mysql`.
:::

### Generate required MySQL tables and stored procedures

1. Clone this repo https://github.com/bcit-pollination/web_server_pollination.git if you haven't already
```shell
git clone https://github.com/bcit-pollination/web_server_pollination.git
```

2. Connect to the MySQL server (type in your root password after)
```shell
mysql -u root -p
```

3. Setup the database tables (replace <em>PATH</em> with the location where you cloned the repo)
```shell
source /PATH/web_server_pollination/sql-scripts/SetUpDatabase.sql
```

4. Setup the stored procedures (replace <em>PATH</em> with the location where you cloned the repo)
```shell
source /PATH/web_server_pollination/sql-scripts/CreateStoredProcedures.sql
```

5. Disconnect from the MySQL server
```shell
exit
```

### Set up MySQL database user

1. Connect to the MySQL server (type in your root password after)
```shell
mysql -u root -p
```

2. Create a new MySQL account user for the server. Replace <em>password</em> with a password of your choice.
```shell
CREATE USER 'server'@'localhost' IDENTIFIED BY 'password';
```

3. Grant the appropriate privileges
```shell
GRANT EXECUTE ON voting_system.* TO 'server'@'localhost';
```

4. Disconnect from the MySQL server
```shell
exit
```
