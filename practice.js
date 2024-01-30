// const {EventEmitter} = require('events');

// const getLetter = (index) =>{
//     let cipher = "*12345K%^*^&*"
//     let cipher_split = cipher.split('')
//     return cipher_split[index];
// }

//     const emitterFn = () =>{
//     const emitter = new EventEmitter();
//     let counter = 0;
//     const interval = setInterval(()=>{
//         counter++;

//         if(counter === 7){
//             clearInterval(interval);
//             emitter.emit('end');
//         }

//         let letter = getLetter(counter)

//         if (isNaN(letter)) {
//             (counter<7) && emitter.emit(
//                 'error',
//                 new Error(`The index ${counter} needs to be a digit`)
//             );
//             return;
//         }
//         (counter<7) && emitter.emit('success',counter);

//     },1000);
//         return emitter;
// }

// const listener = emitterFn();

// listener.on('end',()=>{
//     console.info('All six indexes have been checked');
// });

// listener.on('success',(counter) => {
//     console.log(`${counter} index is an integer`);
// });

// listener.on('error',(err) => {
//     console.error(err.message);
// });

// const http = require('node:http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req,res)=>{
//     res.statusCode = 200;
//     res.setHeader('Content-Type','text/plain');
//     res.end('HEllo World\n');
// });
// server.listen(port,hostname,() => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });

// const express = require("express");
// const fs = require('fs');
// const app = express();

// app.use((req,res, next)=>{
//     console.log('Middleware1');

//     next();
// });

// app.use((req,res, next)=>{
//     console.log('Middleware2');

//     next();
// });

// app.use((req,res,next)=>{
//     console.log(Date.now()+'\n');
//     fs.appendFile('node.txt',Date.now()+'\n',(err,res)=>{
//         if (err) {
//             console.error(err);
//         }
//         console.log(res);
//         return;
//     });
//     next();
// })

// app.get("/", (_, response)=>{
//     response.send("<h1>API!</h1>");
// });

// app.listen(3001);

// function a() {
//     b();
// }

// function b() {
//     c();
// }

// function c() {
//     const {stackTraceLimit} = Error;
//     Error.stackTraceLimit = 0;
//     const error = new Error();
//     Error.stackTraceLimit = stackTraceLimit;

//     Error.captureStackTrace(error,b);
//     throw error;
// }
// a();

// const cause = new Error('The remote HTTP server responded with a 500 status');
// const symptom = new Error('The message failed to send',{cause});
// console.log(symptom);

// const err = new Error('msg');
// console.error(err);

/*USer Spec*/

// function square(num) {
//     if (typeof num !== 'number') {
//       throw new TypeError(`Expected number but got: ${typeof num}`);
//     }

//     return num * num;
//   }

//   try {
//     square('8');
//   } catch (err) {
//     console.log(err.message); // Expected number but got: string
//   }

// const fs = require('fs');

// fs.readFile('path',(err,res)=>{
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log(res);
// });

// function square(num, cb) {
//   if (typeof cb !== "function") {
//     cb(new TypeError(`Callback must be a function. Got: ${typeof cb}`));
//   }

//   setTimeout(() => {
//     if (typeof num !== "number") {
//       cb(new TypeError(`Exp num Got. ${typeof num}`));
//       return;
//     }
//     const res = num * num;
//     cb(null, res);
//   }, 100);
// }

// square("8", (err, res) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(res);
// });

// const fs = require('fs');
// const util = require('util');

// const readFile = util.promisify(fs.readFile);

// readFile('some path')
//     .then((res)=>console.log(res))
//     .catch((err)=>console.error(err))

// (async function callReadFile() {
//     try{
//         const res = await readFile('path');
//         console.log(res);
//     }catch(err){
//         console.error(err);
//     }
// })();

// const assert = require('node:assert');

// // Generate an AssertionError to compare the error message later:
// const { message } = new assert.AssertionError({
//   actual: 1,
//   expected: 2,
//   operator: 'strictEqual',
// });

// // Verify error output:
// try {
//   assert.strictEqual(1, 2);
// } catch (err) {
//   assert(err instanceof assert.AssertionError);
//   assert.strictEqual(err.message, message);
//   assert.strictEqual(err.name, 'AssertionError');
//   assert.strictEqual(err.actual, 1);
//   assert.strictEqual(err.expected, 2);
//   assert.strictEqual(err.code, 'ERR_ASSERTION');
//   assert.strictEqual(err.operator, 'strictEqual');
//   assert.strictEqual(err.generatedMessage, true);
// }

// setTimeout(async()=>{
//     console.log('HI');
//     console.log('HO');
// },3000);

// // setInterval(()=>{
// //     console.log('LO');
// // },3000);
// clearInterval();
// setImmediate(()=>{
//     console.log('JO');
// })

const fs = require("node:fs/promises");

//READ FILE
// async function rf (path){
// try{
//     const data = await fs.readFile(path);
//     console.log(data.toString());
// }catch(error){
//     console.error(`Some Err:${error.message}`);
// }
// }
// rf('node.tx');

//WRITE FILE
// async function wf() {
//   try {
//     const headers = "name,price";
//     await fs.writeFile("node.txt", headers);
//   } catch (error) {
//     console.error(`File write err:${err.message}`);
//   }
// }

// async function addToWf(name, price) {
//   try {
//     const line = `\n${name},${price}`;
//     await fs.writeFile("node.txt", line, { flag: "a" });
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// (async () => {
//   await wf();
//   await addToWf("shoes", 90.99);
//   await addToWf("hoodie", 20.96);
// })();

//DELETE FILE
// async function delFile(path){
//     try{
//         await fs.unlink(path);
//         console.log(`File Deleted${path}`);
//     } catch (error){
//         console.error(error.message);
//     }
// }
// delFile('node.txt');

//MOVE FILE
// async function moveFile(src,dest){
//     try{
//         await fs.rename(src,dest);
//         console.log(`Moved from ${src} to ${dest}`);
//     } catch (error){
//         console.error(error);
//     }
// }
// moveFile('node.txt','fileMove/node2.txt');

// (async (path)=>{
//     try{
//         await fs.unlink(path);
//     } catch(error){
//         console.error(error);
//     }
// })('/fileMove/node2.txt');

//PATH
const path = require('node:path');
// console.log(__filename);
// console.log(__dirname);

// console.log(path.basename(__filename));
// console.log(path.basename(__dirname));

// console.log(path.extname(__filename));
// console.log(path.extname(__dirname));

// console.log(process.cwd());

