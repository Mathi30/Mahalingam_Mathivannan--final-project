// import appendFileSync from 'fs'
// import existsSync from 'fs'
import fs from 'fs'

// create josn file if file doesn't exist
const createFile = async (filePath) => {
// sync
  if (!fs.existsSync (filePath)) {
    fs.appendFileSync(filePath, '[]')
    console.log(` new file ${filePath} created `);
  }
}

// async
// if (!fs.existsSync (filePath)) {
//   console.log('file does not  exist');
//   fs.appendFile(filePath, '[]', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
// })
// }
export default createFile 