tShift, What is this?
---------------------
tShift is a jquery plugin that allows you to use shift selection in your checkboxes.
It was built using the jQuery library.

Author
------
Copyright (c) 2012 Alfredo Berumen Saldivar
http://alfredberumen.com
@berumen

How to use
----------
Include tShift plugin in your website directory then load files in the <head> section of your HTML document.
Don't forget to add the jQuery library.

	<head>
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
        <script type="text/javascript" src="/jquery.tshift.min.js"></script>
    </head>

Add the following HTML to your existing HTML code:
	
	<div id="required_id">
  		<fieldset style="width: 5%">
    	<legend>Select</legend>
    		<input type="checkbox" name="my_name[]" value="1" class="tshift_cb" />1
    		<input type="checkbox" name="my_name[]" value="2" class="tshift_cb" />2
    		<input type="checkbox" name="my_name[]" value="3" class="tshift_cb" />3
    		<input type="checkbox" name="my_name[]" value="4" class="tshift_cb" />4
    		<input type="checkbox" name="my_name[]" value="5" class="tshift_cb" />5
    	</fieldset>
	</div>

Fire plugin using the following code:

    <script>
        $(document).ready(function() {
        	$('.tshift_cb').tshift();
        });
    </script>

Example
-------
For a live demonstration visit:
<a href="http://jsfiddle.net/berumen/2nx2B/">tShift demo</a>

Or visit the official web page:
<a href="http://alfredberumen.com/b/seleccionar-multiples-checkboxes-con-tshift">Official site</a>

	
License
-------
Licensed under MIT license


Supported Browsers
------------------
Chrome
Safari 6.02+
Firefox 17+
IE 7+
Opera 12.11+


Bug tracker
-----------
Have a bug? Please create an issue on GitHub at https://github.com/berumen/tShift/issues