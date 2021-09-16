const fs = require("fs").promises
const path = require("path")

async function main() {
  const allPortraitFolders = path.join(__dirname, "folders")
  const outputDirectory = path.join(__dirname, "all_portraits")

  // create output directory if it doesn't exist
  try {
    await fs.mkdir(outputDirectory)
  } catch {
    console.log(`${outputDirectory} already exists.`)
  }

  // find paths to all files
  console.log(await findImageFiles(allPortraitFolders))

  const filesFound = await findImageFiles(allPortraitFolders)

  // rename the files found
  await renameFilesFound(filesFound)
}

main()

// recursive version of findSalesFiles function
async function findImageFiles(folderName) {
  let imageFiles = []

  const items = await fs.readdir(folderName, { withFileTypes: true })

  for (const item of items) {
    if (item.isDirectory()) {
      imageFiles = imageFiles.concat(await findImageFiles(path.join(folderName, item.name)))
    } else {
      try {
        if (path.extname(item.name).toUpperCase() === ".JPG") {
          imageFiles.push(path.join(folderName, item.name))
        }
        if (path.extname(item.name).toUpperCase() === ".JPEG") {
          imageFiles.push(path.join(folderName, item.name))
        }
        if (path.extname(item.name).toUpperCase() === ".PNG") {
          imageFiles.push(path.join(folderName, item.name))
        }
        if (path.extname(item.name).toUpperCase() === ".SVG") {
          imageFiles.push(path.join(folderName, item.name))
        }
        if (path.extname(item.name).toUpperCase() === ".PDF") {
          imageFiles.push(path.join(folderName, item.name))
        }
        if (path.extname(item.name).toUpperCase() === ".ICO") {
          imageFiles.push(path.join(folderName, item.name))
        }
      } catch {
        console.log("There was an error")
      }
    }
  }
  return imageFiles
}

// rename files found logic
async function renameFilesFound(filesFound) {
  filesFound.forEach((item, index) => {
    try {
      fs.rename(item, path.join("all_portraits", index + 1 + ".JPG"), err => {
        if (err) {
          console.log("There was an error " + err)
        } else {
          console.log("renamed?")
        }
      })
    } catch {
      console.log("catch block ran")
    }
    console.log(filesFound)
  })
}

//custom rename file to new directory
/* fs.rename(path.join(__dirname, "/testing", "hello.txt"), path.join(__dirname, "/output", "renamed.txt"), err => {
  if (err) throw err
  console.log("file renamed...")
}) */
