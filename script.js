
//the following for loop, changes the DOM anytime a key is pressed in any of the input boxes
// document.querySelectAll('imput') selects every element with id of 'input'.
//The addEventListener() method attaches an event handler to the specified element, in this case all elements with id 'input', and a keyup event
//.textContent changes the textual content of an element. The element is arrived at by traversing the dom, First, the parent of the input element (which is a <p> element), then the next sibling to this <p>element, which is another <p> element, then the first child of this <p>element, which is a <button> element, and finally the first child of this <button> element, which is a <span> element, where the specified text content is produced. This traversal across the DOM is carried out by the following code: input.parentElement.nextElementSibling.children[0].children[0]

/*for (const input of document.querySelectorAll('input')) {
  input.addEventListener('keyup', () => {
    input.parentElement.nextElementSibling.children[0].children[0].textContent = input.value;
  });
}
*/


function toLowerCaseFunc() {
  
  var x = document.getElementById("toLowerCase").elements.namedItem("name").value;
   
  event.preventDefault();
  document.getElementById("resultToLowerCase").textContent = x.toLowerCase();
}

function toUpperCaseFunc() {
  
  var x = document.getElementById("toUpperCase").elements.namedItem("name").value;
  event.preventDefault();
  document.getElementById("demoToUpperCase").textContent = x.toUpperCase();
}

function trimFunc() {
  
  var x = document.getElementById("trim").elements.namedItem("name").value;
  event.preventDefault();
  document.getElementById("demoTrim").innerHTML = x.trim() + "<p>(...well, it may be difficult to see, but your string has been returned with all the white space at the beginning and/ or end removed) </p>";
}

function lengthFunc() {
  
  var x = document.getElementById("length").elements.namedItem("name").value;
  event.preventDefault();
  document.getElementById("demoLength").textContent = x.length;
}

function repeat() {
  
  var x = document.getElementById("repeat").elements.namedItem("name1").value;
  var y = document.getElementById("repeat").elements.namedItem("name2").value;
  event.preventDefault();
  document.getElementById("demoRepeat").textContent = x.repeat(y);

}


function charAt() {
  
  var x = document.getElementById("charAt").elements.namedItem("name1").value;
  var y = document.getElementById("charAt").elements.namedItem("name2").value;
  event.preventDefault();
  document.getElementById("resultCharAt").textContent = x.charAt(y);

}

function concat() {
  
  var x = document.getElementById("concat").elements.namedItem("name1").value;
  var y = document.getElementById("concat").elements.namedItem("name2").value;
  event.preventDefault();
  document.getElementById("resultConcat").textContent = x.concat(y);

}


function indexOf() {
  
  var x = document.getElementById("indexOf").elements.namedItem("name1").value;
  var y = document.getElementById("indexOf").elements.namedItem("name2").value;
  event.preventDefault();
  document.getElementById("resultIndexOf").textContent = x.indexOf(y);

}


function replace() {
  
  var x = document.getElementById("replace").elements.namedItem("name1").value;
  var y = document.getElementById("replace").elements.namedItem("name2").value;
  var z = document.getElementById("replace").elements.namedItem("name3").value;
  event.preventDefault();
  document.getElementById("resultReplace").textContent = x.replace(y, z);

}