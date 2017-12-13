
var app = new Vue({
  el: '#app',
  data: {
  },
  methods: {
    compileAndRun: function(){
      document.querySelector("#arduino").getSVGDocument().getElementById("LED_PIN_7").setAttribute("fill", "red");
    }
  },
  mounted: function(){
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/snapp");
    editor.getSession().setTabSize(2);
    editor.getSession().setUseSoftTabs(true);

    interact('.resize-drag').resizable({
      // resize from all edges and corners
      edges: { left: false, right: false, bottom: false, top: true },
  
      // keep the edges inside the parent
      restrictEdges: {
        outer: 'parent',
        endOnly: true,
      },
  
      // minimum size
      restrictSize: {
        min: {height: 56 },
        max: {height: window.innerHeight}
      },
  
      inertia: true,
    }).on('resizemove', function (event) {
      var target = event.target,
          //x = (parseFloat(target.getAttribute('data-x')) || 0),
          y = (parseFloat(target.getAttribute('data-y')) || 0);
  
      // update the element's style
      target.style.height = event.rect.height + 'px';

      //Resize the editor
      editor.resize();
    });
    this.codeEditor = editor;
  }
});