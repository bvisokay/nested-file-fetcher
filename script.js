const fs = require("fs").promises
const path = require("path")

async function main() {
  const allSourceFolders = path.join(__dirname, "source-folders")
  const outputDirectory = path.join(__dirname, "results")

  // create output directory if it doesn't exist
  try {
    await fs.mkdir(outputDirectory)
  } catch {
    console.log(`${outputDirectory} already exists.`)
  }

  // find paths to all files
  // console.log(await findImageFiles(allPortraitFolders))
  const filesFound = await findImageFiles(allSourceFolders)

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
        if (path.extname(item.name).toUpperCase() === ".JPG" || ".JPEG" || ".PNG" || ".SVG" || ".PDF" || ".GIF" || ".ICO") {
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
      let fileExtension = path.extname(item)
      fs.rename(item, path.join("results", index + 1 + fileExtension), err => {
        if (err) {
          console.log("There was an error " + err)
        } else {
          console.log("renamed?")
        }
      })
    } catch {
      console.log("catch block ran")
    }
    // console.log(filesFound)
  })
}
