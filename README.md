## Purpose

-Moving files from a Google Pixel phone to a hard drive, all of the photos taken in "portrait mode" were automatically put in a subfolder with the original non-portrait-mode photo

-To move all of nested photos back into one folder is very repetitive and time consuming... In my case they were was 1900 folders!

-Running this script will move all of the nested images in the subfolders to one folder

## Using the Script

-Need to have Node installed on your computer

-Clone or download the contents of this project

-Move or copy all the folders containing the images into the "source-folders" folder

-In the terminal run

```
node script
```

## End Result

-A new folder will be created called "results"

-All of the image files inside of the directories inside of the "source-folders" folder will be automatically moved into the "results" folder and renamed (1.jpg, 2.jpg, 3.jpg, 4.jpg, etc.)

-The original subfolders will be left in the directory for you to spot-check if desired and delete

## Supported File Types

-Supported file types include: jpeg, jpg, png, gif, svg, pdf, and ico

-It is possible to search for files that do not end in these file extneions

-Do this by editing line 36 to include your desired file extensions

## Root Cause Has Been Fixed

-I believe Google stopped the "save to subfolder" strategy!
