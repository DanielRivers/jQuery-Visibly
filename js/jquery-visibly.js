/**
 * Visibly jQuery Plugin v1.0
 *
 * @version 1.0 (20/08/2013)
 * @author Daniel Rivers <me@danielrivers.com>
 * @see https://github.com/DanielRivers/jQuery-Visibly/
 *
 * Dual licensed under the MIT and GPLv3 Licenses
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl-3.0.html
 *
 */

;(function($) {
	$.fn.Visibly = function(o) {

		//settings and defaults		 
		var s = $.extend({
			clearOnHide: false,  //Clear the value from the elements on hide
			attr: 'visibly', //attr attribute to use for the visibly attr
			vdelim: ',', //Delimeter used to split the values a control can hold
			edelim: ':', //Delimeter between the field ID and the values
			fdelim: ';' //Delimeter between the fields
		}, o );

		return this.each(function() {
			var c = $(this);
			//loop through all controls related to the field to create events
			$.each($(this).attr(s.attr).split(s.fdelim),function( k, v2 ) {
			  //Bind keyup and change events, keyup is used because if the next tab item is made visible it would not be tabbed to using change or blur
			  $('#'+v2.split(':')[0]).bind("keyup change",function() {
				//Parent field has changed! Check if should be made visible
				var visible = true;
				//loop through the controls related to the rules
				$.each(c.attr(s.attr).split(s.fdelim),function( k, v ) {
					//Does the element exist?
					if ($('#'+v.split(s.edelim)[0]).val() != undefined) {
					//If the rule doesn't match, hide control
						if ($.inArray($('#'+v.split(s.edelim)[0]).val(),v.split(s.edelim)[1].split(s.vdelim)) == -1) visible = false;
					}
					//Log warning that rule ignored because element not found
					else console.log('Visibly warning: ' + v.split(s.edelim)[0] + ' - Not found (Rule ignored)' )
				});
				//Set visibilty
				(visible) ? c.show() : c.hide();
				//Clear the element and child elements if ClearOnHide is set
				if ((visible == 'none') && (s.clearOnHide)) { c.val('');c.find('input, select').val('')}
			  })
			  //First load, set visibility on all fields based on rules
			  $('#'+v2.split(':')[0]).trigger('change');
			});
		});
	};
})(jQuery);