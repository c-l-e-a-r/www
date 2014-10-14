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

					var $div = $('<div>CLEAR:www guest$ ' + $(this).val() + '  <br/></div>');

					switch (value){
						case "ls":
							$div.append("001<br/>")
							break;
						case "cd 001":
							$div.append("<a href='http://c-l-e-a-r.net/001'>readme.txt</a>")
							break;
						case "about":
							$div.append("> We are a record label from Chicago, IL focused on releasing electronic music.<br/>")
							break;
						
						case "contact":
							$div.append('> mail@c-l-e-a-r.net<br/><br/>');
							break;
							
						default:
							$div.append("-bash: '" + value + ": command not found<br/>");
							break;
					}

					$div.appendTo($body);
					$(this).val("");

					$(window).scrollTop( $(document).height() );
				}
			});
		}
	}
}
