## easy-dropdown-react
# Installation

```js
use "npm install easy-dropdown-react"
```

# Import 
```js
const Dropdown = require("veizh-plugin-dropdown")
```
# Description

```js
Make Easy Dropdown With React using component
```
# CreateDropdown

```js
/**** Start by importing the module ****/


const Dropdown = require("veizh-plugin-dropdown")

/**** Define a useState hook ****/

let [selectState,setSelectState]=useState('Select a State')

/**** Create an array of strings  ****/

currentStatesArray  = ["South Carolina","South Dakota","Tennessee"]

return (<Dropdown initial={selectState} arrayOptions={currentStatesArray} mutateur={setSelectState} />)

/**** Use inspector to modify the style with css ****/

```