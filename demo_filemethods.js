var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Hello content!', function (err){
  if (err) throw err;
  console.log('Saved!');
});

//The fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing",
//the specified file is opened for writing. If the file does not exist, an empty file is created:

fs.open('mynewfile2.txt', 'w', function (err,file){
  if err throw err
  console.log('Saved!');
})

// The fs.writeFile() method replaces the specified file and content if it exists. If the file does not exist,
// a new file, containing the specified content, will be created:

fs.writeFile('mynewfile3.txt', 'Hello Content!', function (err){
  if (err) throw err;
  console.log('Saved!');
});

// updating files
// Append "This is my text." to the end of the file "mynewfile1.txt":

fs.appendFile('mynewfile1.txt', ' This is my text.', function (err){
  if (err) throw err;
  console.log('Updated!')
})

// replaces the specified file and content:

fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});
// method deletes the specified file:
fs.unlink('mynewfile2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});
