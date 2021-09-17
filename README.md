## Purpose

- :camera_flash: Moving files from a Google Pixel phone to a hard drive, all of the photos taken in "portrait mode" were automatically put in a subfolder with the original non-portrait-mode photo

- :file_folder: To move all of nested photos back into one folder is very repetitive and time consuming... In my case there was 3800 files in 1900 folders!

- Option #1: Use window file explorer to search for \*.jpg. it will bring up all the pictures

- Option #2: Use this script to programatically move all of the nested images in the subfolders to one results folder

- Supported file types include: jpeg, jpg, png, gif, svg, pdf, and ico

- The target file-types can be changed by updating one line of code

### Using the Script

- Requires Node installed on your computer

- Clone or download the contents of this project

- Move or copy all the folders containing the images or files you would like to "extract" into the "source-folders" folder

- In the terminal run

```
node app
```

- A new folder will be created called "results"

- All of the image files inside of the directories inside of the "source-folders" folder will be automatically moved into the "results" folder and renamed (1.jpg, 2.jpg, 3.jpg, 4.jpg, etc.)

- The original subfolders will be left in the directory for you to spot-check if desired and delete

### Supported File Types

- Supported file types include: jpeg, jpg, png, gif, svg, pdf, and ico

- It is possible to search for files that do not end in these file extneions

- Do this by editing line 36 to include your desired file extensions

### Root Cause Has Been Fixed

- :clap: As of late 2020 Google stopped the "automatic save to subfolder" strategy...
