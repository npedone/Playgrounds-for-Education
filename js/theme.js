ace.define("ace/theme/snapp",["require","exports","module","ace/lib/dom"], function(require, exports, module) {
    
    exports.isDark = true;
    exports.cssClass = "ace-snapp";
    exports.cssText = ".ace-snapp .ace_gutter {\
    background: #353B46;\
    color: #858585\
    }\
    .ace-snapp .ace_print-margin {\
    width: 1px;\
    background: #353B46\
    }\
    .ace-snapp {\
    background-color: #353B46;\
    color: #E2E7ED;\
    }\
    .ace-snapp .ace_cursor {\
    color: #E2E7ED\
    }\
    .ace-snapp .ace_marker-layer .ace_selection {\
    background: #49483E\
    }\
    .ace-snapp.ace_multiselect .ace_selection.ace_start {\
    box-shadow: 0 0 3px 0px #272822;\
    }\
    .ace-snapp .ace_marker-layer .ace_step {\
    background: rgb(102, 82, 0)\
    }\
    .ace-snapp .ace_marker-layer .ace_bracket {\
    margin: -1px 0 0 -1px;\
    border: 1px solid #49483E\
    }\
    .ace-snapp .ace_marker-layer .ace_active-line {\
    background: #353B46;\
    }\
    .ace-snapp .ace_gutter-active-line {\
    background-color: #353B46;\
    }\
    .ace-snapp .ace_marker-layer .ace_selected-word {\
    border: 1px solid #49483E\
    }\
    .ace-snapp .ace_invisible {\
    color: #52524d\
    }\
    .ace-snapp .ace_entity.ace_name.ace_tag,\
    .ace-snapp .ace_keyword,\
    .ace-snapp .ace_meta.ace_tag,\
    .ace-snapp .ace_storage {\
    color: #F92672\
    }\
    .ace-snapp .ace_punctuation,\
    .ace-snapp .ace_punctuation.ace_tag {\
    color: #fff\
    }\
    .ace-snapp .ace_constant.ace_character,\
    .ace-snapp .ace_constant.ace_language,\
    .ace-snapp .ace_constant.ace_numeric,\
    .ace-snapp .ace_constant.ace_other {\
    color: #AE81FF\
    }\
    .ace-snapp .ace_invalid {\
    color: #F8F8F0;\
    background-color: #F92672\
    }\
    .ace-snapp .ace_invalid.ace_deprecated {\
    color: #F8F8F0;\
    background-color: #AE81FF\
    }\
    .ace-snapp .ace_support.ace_constant,\
    .ace-snapp .ace_support.ace_function {\
    color: #66D9EF\
    }\
    .ace-snapp .ace_fold {\
    background-color: #A6E22E;\
    border-color: #F8F8F2\
    }\
    .ace-snapp .ace_storage.ace_type,\
    .ace-snapp .ace_support.ace_class,\
    .ace-snapp .ace_support.ace_type {\
    font-style: italic;\
    color: #66D9EF\
    }\
    .ace-snapp .ace_entity.ace_name.ace_function,\
    .ace-snapp .ace_entity.ace_other,\
    .ace-snapp .ace_entity.ace_other.ace_attribute-name,\
    .ace-snapp .ace_variable {\
    color: #A6E22E\
    }\
    .ace-snapp .ace_variable.ace_parameter {\
    font-style: italic;\
    color: #FD971F\
    }\
    .ace-snapp .ace_string {\
    color: #E6DB74\
    }\
    .ace-snapp .ace_comment {\
    color: #75715E\
    }\
    .ace-snapp .ace_indent-guide {\
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ0FD0ZXBzd/wPAAjVAoxeSgNeAAAAAElFTkSuQmCC) right repeat-y\
    }";
    
    var dom = require("../lib/dom");
    dom.importCssString(exports.cssText, exports.cssClass);
    });