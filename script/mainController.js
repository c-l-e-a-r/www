function MainController () {
	
	var $body = $("body");
	
	return {
		
		init: function () {
			
			this.bindListeners();
			$("#command").focus();
		},
		
		bindListeners: function () {
		
			var thisController = this;

			$(document).on("blur", "input[type=text]#command", function (e) {
				$('input[type=text]#command').focus();
			});
			
			$(document).on("keyup", "input[type=text]#command", function (e) {
				
				var value = $(this).val();
				
				if(e.keyCode == 13 && value != "") {

					var $div = $('<div>## ' + $(this).val() + '<br/></div>');

					switch (value){
						case "about":
							$div.append("Clear is a record label based off of Chicago, IL<br/><br/>")
							break;
						
						case "releases":
							$div.append("CLEAR01: Primitive Sci-fi - Untitled<br/><br/>");
							break;
						
						case "contact":
							$div.append('mail@c-l-e-a-r.net<br/><a href="http://soundcloud.com/c-l-e-a-r">http://soundcloud.com/c-l-e-a-r</a><br/>');
							break;
							
						default:
							thisController.defaultCommand(value);
							break;
					}

					$div.appendTo($body);
					$(this).val("");

					$(window).scrollTop( $(document).height() );
				}
			});
		},

		contactCommand: function () {
			$("<div></div>")
				.html("mail@c-l-e-a-r.net<br/><br/>")
				.appendTo($body);
		},
		
		defaultCommand: function (_value) {
			
			$("<div></div>")
				.html("'" + _value + "' command not found<br/><br/>")
				.appendTo($body);
		}
	}
}
