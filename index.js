
//prevent scrolling on main page
window.addEventListener("keydown", function(e) {
    if([32, 33, 34, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

$(document).ready(function() {
  var editor = ace.edit("editor");
  editor.setTheme("ace/theme/twilight");
  editor.session.setMode("ace/mode/javascript");

  $('#dragger').on('mousedown', function(e){
    var $drag = $(this), $top = $('#topsection'), startHeight = $top.height(), pY = e.pageY;

        $(document).on('mouseup', function(e){
          $(document).off('mouseup').off('mousemove');
          editor.resize()
        });

        $(document).on('mousemove', function(me){
          var my = (me.pageY - pY);
          $top.css({
            height: startHeight + my
          });
          editor.resize()
        });
  });
});
