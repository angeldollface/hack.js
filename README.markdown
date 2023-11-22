# HACK.JS :scroll: :woman_technologist:

![GitHub CI](https://github.com/angeldollface/hack.js/actions/workflows/node.yml/badge.svg)

***A tiny Javascript library for replacing letters with numbers. :scroll: :woman_technologist:***

## ABOUT :books:

I wrote a CLI application some days ago in C++, which you can find [here](https://github.com/angeldollface/hack), that replaces letters with digits, where possible, in any given string. This repository contains the source code for this same project written in Javascript as a library. Enjoy. :heart:

## USAGE :hammer:

### Use *Hack.js* in a Node.js project

To use *Hack.js* in a Node.js project, run this command in your project's root directory:

```bash
$ npm install --save-dev git+https://github.com/angeldollface/hack
```

### Use *Hack.js* in a Node.js project with Typescript :gear:

Add a file called `hack.d.ts` to your project and put the following code inside it:

```Typescript
declare module 'hack';
```

### APIs

*Hack* offers the following functions:

- `letter_db`: A function that returns an object with letter-digit mappings for letters that can be replaced with numbers.
- `get_char`: A function that returns the digit for a letter if said letter can be replaced with a digit.
- `hackify`: A function that replaces letters with digits if possible.

### Example

Here's a small example:

- 1.) Initialize a new Node.js project with the following command in a directory of your choosing:

```bash
$ npm init -y 
```

- 2.) Install *Hack.js*:

```bash
$ npm install --save-dev hack
```

- 3.) Be sure to add this line to your project's `package.json`:

```JSON
"type":"module",
```

- 4.) Create your `index.js` and put the following code inside it:

```js
import hack from 'hack';

function main(){
  var mixedMsg = 'Hello World!';
  console.log(hack.hackify(mixedMsg));
}

main();
```

- 5.) Run the project:

```bash
$ node .
```

- 6.) Optional: If you're not sure how to use this project, check out the example project.

## CHANGELOG :black_nib:

### Version 0.1.0

- Initial release.
- Upload to GitHub.
- Upload to NPM.

## NOTE :scroll:

- *Hack.js :scroll: :woman_technologist:* by Alexander Abraham :black_heart: a.k.a. *"Angel Dollface" :dolls: :ribbon:*
- Licensed under the MIT license.
