var Chatty = (function(aug){
	var messages = [];

	// return {
		aug.addNewMessage = function(newItem){
			var msgOutput = document.getElementById("msgArea");
			for (var i = 0; i < return messages.length; i++) {
				messages.push(newItem[i]);
				msgOutput.innerHTML += "<p>" + newItem[i] + "<button type="button" class="delete">Delete</button></p>";
			};
		}

		aug.getMessages = function() {
			return messages;
		};

		// aug.addJson = function() {
		// 	var jsonMessages = Chatty.getJson();
		// 	for (var i = 0; i < jsonMessages.length; i++) {
		// 		messages.push(jsonMessages[i])
		// 	};

		// };



		// function deleteMsg(arr, ex) {
	 // 	   for(var i = arr.length; i--;) {
  //       if(arr[i] === ex) {
  //           arr.splice(i, 1);
  //       }
  //     }
		//  }
		}
	}
	return aug
}(Chatty || {}));

