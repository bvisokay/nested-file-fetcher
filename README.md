## Purpose

-Moving files from a Google Pixel phone to a hard drive, all of the photos taken in "portrait mode" were automatically put in a subfolder with the original non-portrait-mode photo

-To move all of nested photos back into one folder is very repetitive and time consuming... In my case they were was 1900 folders!

-Running this script will move all of the nested images in the subfolders to one folder

## Using the Script

-Need to have Node installed on your computer

-Clone or download the contents of this project into the directory with all the portraits folders.

-Move all the google-generated-portraits-folders into the "folders" folder

-In the terminal run

```
node app.js
```

## End Result

-A new folder will be created called "all_portraits"

-All of the image files inside of the "folder" folders will be automitically moved into the "all_portraits" folder and renamed (1.jpg, 2.jpg, 3.jpg, 4.jpg, etc.)

-The original subfolders will be left in the directory for you to spot-check if desired and delete

## Searching for Files Other Than .jpg

-It is possible to search for files that do not end in .jpg (.txt, .png, etc.) but you will need to make a simple update to the code

-Do this by updating line 36 and line 49 from ".jpg" to your desired file extension

## Root Cause Has Been Fixed

-I believe Google stopped the "save to subfolder" strategy!
