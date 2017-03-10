var array = process.argv[2].split('');

function obfuscate () {
  var newPasswordArray = [];

  for (var value of array) {
    if (value === 'a') {
      newPasswordArray.push('4');

    } else if (value === 'e') {
      newPasswordArray.push('3');
    } else if (value === 'o') {
      newPasswordArray.push('0');
    } else if (value === 'l') {
      newPasswordArray.push('1');
    } else {
      newPasswordArray.push(value);
    }
  }

  var obfuscatePassword = newPasswordArray.join('');
  return obfuscatePassword;
}

console.log(obfuscate());

//=========================================================



// function obfuscate (args) {
//   var array = args.split('');
//   var newPasswordArray = [];

//   for (var value of array) {
//     if (value === 'a') {
//       newPasswordArray.push('4');

//     } else if (value === 'e') {
//       newPasswordArray.push('3');
//     } else if (value === 'o') {
//       newPasswordArray.push('0');
//     } else if (value === 'l') {
//       newPasswordArray.push('1');
//     }
//     else {
//       newPasswordArray.push(value);
//     }
//   }

//   var obfuscatePassword = newPasswordArray.join('');
//   return obfuscatePassword;
// }

// console.log(obfuscate('password'));
// console.log(obfuscate('abracadabra'));
// console.log(obfuscate('audaciously'));

