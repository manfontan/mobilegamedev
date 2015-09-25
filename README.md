# mobilegamedev

CoderDojo Mobile Game Development Course 

In this course we are going to create a game called Jumpy, it will should you now create a simple but awesome action game that will enable you create any mobile game you want.

In this course we will show you how to get your first game buid in hours, on IPhone or Android devices.  Then its up to you to start creating and dont stop.

Getting started with developing with mobile development is alot of fun is and in this project I will get up and running quickly so can start developing. 

## Install Node.js

Go to https://nodejs.org/en/ and Install Node on your laptop

## Install and Setup Cordova

Its time to open your terminal and we have got some installation and setup to do.

Firstly, lets install cordova by running

```bash
sudo npm install -g cordova
```

## Create your Cordova Project

You add the package name in our case org.coolestprojects.projects and we will call our project Jumpy

cordova create mobilegamedev org.coolestprojects.projects Jumpy
Now on the command prompt move into the directory

```bash
cd mobilegamedev
```

You now need to setup your projects for ios (IPhone dev) by running the following command.  

```bash
cordova platform add ios 
```

Or to setup for Android run

```bash
cordova platform add android 
```

## References

https://cordova.apache.org/docs/en/4.0.0/guide_cli_index.md.html
https://cordova.apache.org/docs/en/4.0.0/guide_platforms_ios_index.md.html
https://cordova.apache.org/docs/en/2.5.0/guide_getting-started_ios_index.md.html


