const caseLibrary = [
  {
    section: 'JavaScript Basics',
    checked: 'html',
    title: 'Adding JavaScript to Your Web Pages',
    reference: '<h3>Adding JavaScript to Your Web Pages</h3><p>There are typically three ways to add JavaScript to a web page:</p><ul><li>Embedding the JavaScript code between a pair of <code>&lt;script&gt;</code> and <code>&lt;/script&gt;</code> tag.</li><li>Creating an external JavaScript file with the <code>.js</code> extension and then load it within the page through the <code>src</code> attribute of the <code>&lt;script&gt;</code> tag.</li><li>Placing the JavaScript code directly inside an HTML tag using the special tag attributes such as <code>onclick</code>, <code>onmouseover</code>, <code>onkeypress</code>, <code>onload</code>, etc.</li></ul>',
    html: `<h3>You can include a JavaScript in your HTML just adding special tags: </h3>
    <script>
      var greet = "Hello World!";document.write(greet); // Prints: Hello World!
      </script>
      <p>Any JavaScript code inside these tags will be executed by the client\'s browser</p>
      <h3>Placing the JavaScript code directly inside an HTML tag:</h3>
      <p>The special tag attributes such as onclick, onmouseover, onkeypress, onload allow to execute JavaScript included in HTML tags.</p>
      <button onclick="alert(\'Hello World!\')">Click Me</button>
      <h3>Loading an external JavaScript file:</h3>
      <p>You can also create an external JavaScript file with the .js extension and then load it within the page through the src attribute of the &lt;script&gt; tag.</p>
      <code>&lt;script src="/src/js/tutorial/hello.js"&gt;&lt;/script&gt;</code>`,
    css: '',
    js: ''
  },
  {
    section: 'JavaScript Basics',
    checked: 'js',
    title: 'JavaScript Variables',
    reference: `<h3>What is Variable?</h3><p>Variables are used to store data, like string of text, numbers, etc. The data or value stored in the variables can be set, updated, and retrieved whenever needed. In general, variables are symbolic names for values.</p><p>You can create a variable with the <code>var</code> keyword, whereas the assignment operator (<code>=</code>) is used to assign value to a variable, like this: <code>var varName = value;</code></p><h3>The let and const Keywords</h3><p>ES6 introduces two new keywords <code>let</code> and <code>const</code> for declaring variables.</p><p>The <code>const</code> keyword works exactly the same as <code>let</code>, except that variables declared using <code>const</code> keyword cannot be reassigned later in the code.</p><h3>Naming Conventions for JavaScript Variables</h3><p>These are the following rules for naming a JavaScript variable:</p><ul>
    <li>A variable name must start with a letter, underscore (<code>_</code>), or dollar sign (<code>$</code>).</li>
    <li>A variable name cannot start with a number.</li>
    <li>A variable name can only contain alpha-numeric characters (<code>A-z</code>, <code>0-9</code>) and underscores.</li>
    <li>A variable name cannot contain spaces.</li>
<li>A variable name cannot be a JavaScript keyword or a JavaScript reserved word.</li>
</ul>`,
    html: '',
    css: '',
    js: `// Declaring variables
    let name = "Harry Potter";
    document.write(name + "\\n");

    let age = 11;
    document.write(age + "\\n");
    
    let isStudent = true;
    document.write(isStudent + "\\n");
    
    // Declaring constant
    const PI = 3.14;
    document.write(PI + "\\n"); // 3.14
    
    // Trying to reassign
    PI = 10; // error`
  },
  {
    section: 'JavaScript Basics',
    checked: 'js',
    title: 'JavaScript Output Methods',
    reference: '<h3>Generating Output</h3><p>In JavaScript there are several different ways of generating output including writing output to the browser window or browser console, displaying output in dialog boxes, writing output into an HTML element, etc. Lets take a closer look at each of these techniques:</p><ul><li><span>Writing Output to Browser Console.</span> You can easily output a message or write data to the browser console using the <code>console.log()</code> method. This is a simple, but very powerful method for generating detailed output.</li><li><span>Displaying Output in Alert Dialog Boxes.</span> You can also use alert dialog boxes to display the message or output data to the user. An alert dialog box is created using the <code>alert()</code> method.</li><li><span>Writing Output to the Browser Window.</span> You can use the <code>document.write()</code> method to write the content to the current document only while that document is being parsed.</li><li><span>Inserting Output Inside an HTML Element.</span> You can also write or insert output inside an HTML element using the element\'s <code>innerHTML</code> property. However, before writing the output first we need to select the element using a method such as <code>getElementById()</code>, as demonstrated further.</p></li></ul>',
    html: '<p id="greet"></p><p id="result"></p>',
    css: '',
    js: ` // Prints: Hello World! Please, check the browser 	console pressing F12 button
    console.log("Hello World!");
   
    // Printing a variable value 
    let x = 10;
    let y = 20;
    let sum = x + y;
    console.log(sum); // Prints: 30
   
    // Displaying a simple text message
    alert("Hello World!"); // Outputs: Hello World!
    // Displaying a variable value 
    alert(sum); // Outputs: 30
   
    // Printing a variable value 
    document.write("Document write: " + sum); // Prints: 30
   
    // Writing text string inside an element
    document.getElementById("greet").innerHTML = "Greet Element";
   
    // Writing a variable value inside an element
    document.getElementById("result").innerHTML = "Result Element";`,
  },
  {
    section: 'JavaScript Basics',
    checked: 'js',
    title: 'Second point',
    html: "<p>Привет, Мир! </p><div class='box'></div>",
    css: '.box {border-style: solid; border-width: 1px; display: block; margin: 20px; width: 100px; height: 100px; background-color: #0000FF; -webkit-transition: width 2s, height 2s, background-color 2s, -webkit-transform 2s; transition: width 2s, height 2s, background-color 2s, transform 2s; } .box:hover {background-color: #FFCCCC; width: 200px; height: 200px; -webkit-transform: rotate(360deg); transform: rotate(360deg); }',
    js: 'const box = document.querySelector(".box"); box.onclick = () => { box.style.backgroundColor = "green"; box.innerHTML = "<span style=\'color:white; font-size: 1.7rem\'>Зеленый квадрат Залевского</span>\"; }',
  },
  {
    section: 'JavaScript Functions',
    checked: 'js',
    title: 'Functions',
    html: "Functions",
    css: '.box {border-style: solid; border-width: 1px; display: block; margin: 20px; width: 100px; height: 100px; background-color: #0000FF; -webkit-transition: width 2s, height 2s, background-color 2s, -webkit-transform 2s; transition: width 2s, height 2s, background-color 2s, transform 2s; } .box:hover {background-color: #FFCCCC; width: 200px; height: 200px; -webkit-transform: rotate(360deg); transform: rotate(360deg); }',
    js: 'Functions',
  }];
const [myJsArea, myTextArea, myCssArea] = document.querySelectorAll('.js, .html, .css');

htmlEditor = CodeMirror.fromTextArea(myTextArea, {
  mode: 'htmlmixed',
  theme: 'material-darker',
  lineNumbers: true,
  lineWrapping: true,
  styleActiveLine: true,
  autoCloseTags: true,
  autoCloseBrackets: true,
  matchTags: { bothTags: true },
  matchBrackets: true,
  gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
});
cssEditor = CodeMirror.fromTextArea(myCssArea, {
  mode: 'css',
  theme: 'material-darker',
  lineNumbers: true,
  lineWrapping: true,
  styleActiveLine: true,
  autoCloseTags: true,
  autoCloseBrackets: true,
  gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
});
jsEditor = CodeMirror.fromTextArea(myJsArea, {
  mode: 'javascript',
  theme: 'material-darker',
  lineNumbers: true,
  lineWrapping: true,
  styleActiveLine: true,
  autoCloseTags: true,
  autoCloseBrackets: true,
  matchBrackets: true,
  gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
});
const [button, iframe] = document.querySelectorAll('#run, iframe');
let title;
button.addEventListener('click', () => {
  const fullHTML = `
    <!doctype html><html>
      <head><meta charset="UTF-8"><style>${cssEditor.getValue()}</style><title>${title}</title></head>
      <body>${htmlEditor.getValue()}<script>${jsEditor.getValue()}</script></body>
    </html>`;
  iframe.src = 'data:text/html,' + encodeURIComponent(fullHTML);
});

const radioButtons = document.getElementsByName('radiotabs');
for (let i = 0; i < radioButtons.length; i++) {
  radioButtons[i].addEventListener('change', function () {
    const id = radioButtons[i].id;
    if (id === "jsEditor") {
      jsEditor.refresh();
    } else if (id === "htmlEditor") {
      htmlEditor.refresh();
    } else {
      cssEditor.refresh();
    }

  })
}

function listCases(cases) {
  const parentUl = document.querySelector('.linksList');
  let sectionName; //
  for (let key of cases) {
    if (sectionName !== key.section) {
      // we'll create a new section
      let jsSection = document.createElement('div');
      jsSection.classList.add('jsSection');
      parentUl.appendChild(jsSection);

      let sectionHeading = document.createElement('h3');
      sectionHeading.classList.add('accordion');
      sectionHeading.innerHTML = key.section;
      jsSection.appendChild(sectionHeading);

      sectionContent = document.createElement('ul');
      sectionContent.classList.add('accordion-panel');
      jsSection.appendChild(sectionContent);
      sectionName = key.section;

      let liCase = document.createElement('li');
      liCase.classList.add('instance');
      liCase.innerHTML = key.title;
      title = key.title;
      sectionContent.appendChild(liCase);
    } else {
      let liCase = document.createElement('li');
      liCase.classList.add('instance');
      liCase.innerHTML = key.title;
      title = key.title;
      sectionContent.appendChild(liCase);
    }
  }
}
function appendSandboxCase(jsonData, title) {
  for (let key of jsonData) {
    if (key.title === title) {
      let selectedRadio;
      selectedRadio = key.checked;

      document.querySelector(`#${selectedRadio}Editor`).checked = true;
      document.querySelector('.reference').innerHTML = key.reference;


      htmlEditor.setValue(html_beautify(key.html));
      htmlEditor.refresh();
      cssEditor.setValue(css_beautify(key.css));
      cssEditor.refresh();
      jsEditor.setValue(js_beautify(key.js));
      jsEditor.refresh();
    }
  }
}
listCases(caseLibrary);
const triggerCase = document.querySelectorAll('.instance');
triggerCase.forEach(element => {
  element.addEventListener('click', () => {
    const selectedInstances = document.querySelectorAll('.selected');
    appendSandboxCase(caseLibrary, element.textContent);
    selectedInstances.forEach(instance => {
      instance.classList.remove("selected");
    })
    element.classList.add("selected");
  })
});

// Accordion
const acc = document.getElementsByClassName("accordion");
const accPanel = document.getElementsByClassName("accordion-panel");
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {

    let setClasses = !this.classList.contains('accordion-active');
    setPanelStyle(acc, "accordion-active");
    setPanelStyle(accPanel, "hide");

    if (setClasses) {
      this.classList.toggle('accordion-active');
      this.nextElementSibling.style.maxHeight = accPanel[i].scrollHeight + "px";
    }
  });
}
function setPanelStyle(elm, state) {
  for (let i = 0; i < elm.length; i++) {
    if (state === "accordion-active") {
      elm[i].classList.remove("accordion-active");
    } else {
      elm[i].style.maxHeight = null;
    }
  }
}