import fs from 'fs';
import path from 'path';

const filePath = path.join(import.meta.dirname, 'homework.txt');
fs.writeFile(filePath, 'Homework 01 in Basic NodeJS', (err) => {
    if (err){
        console.log("Error", err);
    }
   
    fs.appendFile(filePath, ' FINISHED', (err) => {
      if (err){
        console.log("Error", err);
      }
      
  
      fs.readFile(filePath, {encoding: 'utf-8'}, (err, data) => {
        if (err){
            console.log("Error", err);

        }
        
        console.log(data);
      });
    })
});

// import fs from 'fs';
// import path from 'path';

// const filePath = path.join(import.meta.dirname, 'homework.txt');

// async function fileAsync() {
//   try {
//     await fs.promises.writeFile(filePath, 'Homework 01 in Basic NodeJS');
//     await fs.promises.appendFile(filePath, ' FINISHED');
//     const data = await fs.promises.readFile(filePath, { encoding: 'utf-8' });
//     console.log(data);
//   } catch (err) {
//     console.log("Error", err);
//   }
// }

// fileAsync();