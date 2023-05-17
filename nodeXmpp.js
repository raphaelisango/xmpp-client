import {$} from 'execa';



const branch = await $`sudo prosodyctl register passy localhost 1234 `;
//const status = await $`sudo systemctl status prosody`;
console.log("user created"+branch);



/*

await Promise.all([
  $`sleep 1`,
  $`sleep 2`,
  $`sleep 3`,
]);

const dirName = 'foo bar';
await $`mkdir /tmp/${dirName}`;

*/

