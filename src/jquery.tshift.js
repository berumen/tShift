/**
 * https://github.com/berumen/tShift
 * Created by JAlfredo Berumen Saldivar.
 * User: berumen
 * Date: 12/04/12
 * @berumen
 * http://alfredberumen.com
 * Licensed under the MIT license 
 */
(function($) {
	$.fn.tshift = function() 
	{
		start = 0;
		$(this).click(function(event) 
		{
			name = $(this).closest('div').attr('id');
			if(this.checked)
			{
				if(!event.shiftKey)
				{
					start = Math.abs(this.value);
				}
				else
				{
  	 				end = Math.abs(this.value);
  	 				if( end < start )
  	 				{
 						end   = start;
 						start = Math.abs(this.value)
  	 				}
					doCheck();
				}
			}
		});
		return this;
	};
	function doCheck()
	{
		var div    = document.getElementById(name);
		var inputs = div.getElementsByTagName('input');
		$.each(inputs, function(i, val) 
		{
			if ( inputs[i].type == 'checkbox' )
			{
				if ( inputs[i].value >= start && inputs[i].value <= end )
				{
					inputs[i].checked = true;
				}
					
			}
		});
		return true;
	}
})(jQuery);