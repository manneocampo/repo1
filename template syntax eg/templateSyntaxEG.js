//use for template syntax example 
var name = 'will';

var lastName = 'pike';


var html = `
	<div>
		<h1>Name: ${name}</h1>
		<h2>Last Name: ${lastName}</h2>
		<ul>...</ul>
		<p>I am here</p>
	</div>
`

$('body').html(html);