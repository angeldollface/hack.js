export function letter_db(){
  let db = {
    'I': '1',
    'Z': '2',
    'E': '3',
    'A': '4',
    'S': '5',
    'G': '6',
    'T': '7',
    'B': '8',
    'P': '9',
    'O': '0',
    'i': '1',
    'z': '2',
    'e': '3',
    'a': '4',
    's': '5',
    'g': '6',
    't': '7',
    'b': '8',
    'p': '9',
    'o': '0'
  }
  return db;
}

export function get_char(char){
  let result = char;
  let db = letter_db();
  for (let [key, value] of Object.entries(db)){
    if (key === char){
      result = value;
    }
    else {}
  }
  return result;
}

export function hackify(phrase){
  let replaced = [];
  for (i = 0; i < phrase.length; i++){
    let new_char = get_char(phrase[i]);
    replaced.push(new_char);
  }
  let result = replaced.join('');
  return result;
}

function main(){
  console.log(hackify('HELLO WORLD!'));
}

main();
