# include_HTML
This is a small practice of a library update in javascript that I am "using", inspired by the library created by Jonathan Mircha using the XMLHttpRequest method used in JavaScript, I have decided to create a more modern version using Fetch with asynchronous functions. 
Simply include the include-html.min.js script in your <head> and add a data-include attribute on any valid HTML element.

include-html will fetch the value of that attribute, and replace the element with the fetched file.

If, include-me.html looked like this:

<h1>Hello, world!</h1>

Then, a document like this:

<head>
  <script src="include-html.min.js"></script>
</head>
<body>
  <div data-include="include-me.html"></div>
</body>

Would end up rendering like this:

<body>
  <h1>Hello, world!</h1>
</body>
