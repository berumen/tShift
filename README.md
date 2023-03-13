## tShift, What is this?

tShift is a jquery plugin that allows you to use shift selection in your checkboxes. <br>
It was built using the jQuery library.

## Author

Copyright (c) 2023 Alfredo Berumen Saldivar <br>
<a href="http://berumen.xyz" target="_blank">http://berumen.xyz</a> <br>
<a href="https://twitter.com/berumen">@berumen</a><br>

## How to use

Include tShift plugin in your website directory then load files in the <head> section of your HTML document.
Don't forget to add the jQuery library version >= 1.12.4.

    <head>
    	<script src="https://code.jquery.com/jquery-3.6.3.min.js" type="text/javascript"></script>
        <script type="text/javascript" src="/jquery.tshift.min.js"></script>
    </head>

Just put your checkbox list inside a div with an id, use whatever name you wish for the id. You can use nested divs inside your main div.
For example:

<div id="my_id">
<fieldset style="width: 5%">
<legend>Select</legend>
<input type="checkbox" name="my_name[]" value="1" />1
<div>
<input type="checkbox" name="my_name[]" value="2" />2
</div>
<input type="checkbox" name="my_name[]" value="3" />3
<input type="checkbox" name="my_name[]" value="4" />4
<input type="checkbox" name="my_name[]" value="5" />5
</fieldset>
</div>

Trigger the plugin using the following code:

    <script>
        $(document).ready(function() {
        	$('#my_id').tshift();
        });
    </script>s

## Example

For a live demonstration visit:
<a href="https://codepen.io/berumen/pen/RwYQQRG" target="_blank">tShift demo</a>

Or visit the official web page:
<a href="http://berumen.github.io/tShift/" target="_blank">Official site</a>

## License

Licensed under MIT license

## Bug tracker

Have a bug? Please create an issue on GitHub at https://github.com/berumen/tShift/issues
