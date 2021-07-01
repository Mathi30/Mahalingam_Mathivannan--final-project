// const { readFile, writeFile } = require('fs').promises
import { promises as fs } from 'fs'
import createFile from './createFile.js'


const readFileModule = async (filePath) => {
  try {
    createFile(filePath)
    const usersData = await fs.readFile(filePath)
    return JSON.parse(usersData)
  } catch (err) {
    console.error("module error", err)
    throw err
  }
}

const writeFileModule = async (filePath, usersData) => {
    try {
      await fs.writeFile(filePath, JSON.stringify(usersData))
    } catch (err) {
        console.error("module error", err)
        throw err
    }
  }

const addJosnData = async (filePath, usersData) => {
    try {
        let usersDataList = await readFileModule(filePath)
        usersDataList.push(usersData)
        await writeFileModule(filePath, usersDataList )
        console.log(`Data written to file: ${filePath}`)
    } catch (err) {
        console.error(err)
        throw err
    }
}

export {
    addJosnData,
    readFileModule,
    writeFileModule
}
// module.exports = {
//     addJosnData,
//     readFileModule,
//     writeFileModule
// }


