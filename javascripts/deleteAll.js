'use strict';
var Chatty = (function (aug) {

  aug.deleteMsg = function (clickEvent) {
    if (clickEvent.target.className === "delete") {
      console.log("delete",clickEvent.target.parentElement.id);
      Chatty.deleteData(clickEvent.target.parentElement.id);
    }
  };

  aug.deleteAll = function () {
    var messages = Chatty.getMessages();
    for (var i = 0; i < messages.length; i++) {
      var idDelete = messages[i].handle;
      Chatty.deleteData(idDelete);
    }
    buttonClearAll.attr("disabled", "true");
  };

  return aug;

}(Chatty || {}));
