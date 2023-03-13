/**
 * https://github.com/berumen/tShift
 * Created by Alfredo Berumen Saldivar.
 * User: berumen
 * Date: 12/03/23
 * @berumen
 * http://berumen.xyz
 * Licensed under the MIT license
 */
(function ($) {
  $.fn.tshift = function () {
    let start = 0;
    const checkboxes = $('#' + this.attr('id') + ' :checkbox');
    checkboxes.on('click', function (event) {
      if (this.checked) {
        if (event.shiftKey) {
          let end = checkboxes.index(this);
          if (end < start) {
            end = start;
            start = checkboxes.index(this);
          }
          checkboxes.each(function (index) {
            if (index >= start && index < end) {
              this.checked = true;
            }
          });
        }
        start = checkboxes.index(this);
      }
    });
    return this;
  };
})(jQuery);
