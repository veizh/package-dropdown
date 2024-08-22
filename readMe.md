## veizh-plugin-dropdown
# Description

```js
Package js for dropdowns
```
# CreateDropdown

```js
/**** Start by importing the module ****/


const dropdown = require("veizh-plugin-dropdown")
/**** Define a useState hook ****/

let [selectState,setSelectState]=useState('Select a State')
/**** create an array of strings  ****/

/**** tips ****/
/* Priority to element.name if u are using an array of objects. otherwise it will take the element */

currentStatesArray  = [
    "South Carolina",
    "South Dakota",
   "Tennessee"
]

return (<Dropdown initial={selectState} arrayOptions={currentStatesArray} mutateur={setSelectState} />)

/**** use inspector to modify the style with css ****/

```