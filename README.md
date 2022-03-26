<h1 align="center"> FuseList </h1>

<hr/>

<p>FuseList provides the ability to fuse an array of items into a readable string.</p>

<h3> Installation </h3>

```shell
$ npm i fuse-list
```

<h3> Usage </h3>

```node
const { fuseList } = require('fuse-list');

console.log(fuseList(["a", "b", "c"])); // prints "a, b and c"
console.log(fuseList(["a", "b", "c"], { separator: ":", finalSeparator: "-" })); // prints "a:b-c"
console.log(fuseList(["a", "b", "c"], { finalSeparator: " & " })); // prints "a, b & c"
console.log(fuseList(["a", "b", "c"], { finalSeparator: false })); // prints "a, b, c"
console.log(fuseList(["a", "b", "c"], { prefix: "<p>", suffix: "</p>", separator: false, finalSeparator: false })); // prints "<p>a</p><p>b</p><p>c</p>"
console.log(fuseList([1, 2, 3], { separator: "; " })); // prints "1; 2 and 3"
console.log(fuseList([1, 2, 3], { separator: "; ", finalSeparator: null })); // prints "1; 2; 3"
console.log(fuseList(["a", "b", "c"], { prefix: "<p>", suffix: "</p>", separatorPosition: "beforeSuffix" })); // prints "<p>a, </p><p>b and </p><p>c</p>"
console.log(fuseList(["a", "b", "c"], { prefix: "<p>", suffix: "</p>" })); // prints "<p>a</p>, <p>b</p> and <p>c</p>"
```

<h3> Options </h3>

Option | Default | Description
--- | --- | ---
separator | `", "` | The separator is used between each item (except between the 2nd last and last items unless `finalSeparator` is set to `false`.
prefix | `null` | The prefix is displayed prior to each item in the list and is only used when the value is not `null` or `false`.
suffix | `null` | The suffix is displayed after each item in the list and is only used when the value is not `null` or `false`.
separatorPosition | `"default"` | The separator position states the position of the separator used between the items.<br />`default` the separator is shown after the suffix.<br />`beforeSuffix` the separator is shown before the suffix.
finalSeparator | `" and "` | The final separator is the separator used between the 2nd last and last items in the list. If this is set to `false` or `null` the standard separator will be used.

<h3>Contributing</h3>
Keep it simple. Keep it minimal. Don't put every single feature just because you can.

<h3>Authors or Acknowledgments</h3>
<ul>
  <li>Travis Knight</li>
</ul>

<h3>License</h3>

This project is licensed under the MIT License
