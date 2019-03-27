window.onload = function(){
			var p = '';
			for (var i = 1; i <= 200; i++) {
				p += '<p>';
				if (i === 3) {
					for (var ii = 1; ii <= 100; ii++) {
						//p += '| <strong>' + ii + '</strong>';
					}
				} else if (i === 4) {
					for (var iii = 1; iii <= 100; iii++) {
						//p += '<div style="float:left; width:150px;height:150px; margin:1em; border:#ddd 1px solid;">'+ iii +'</div>';
					}
				} else {
					p += i;
				}			

				p += '</p>';
			}
			document.getElementById('content').innerHTML = p;
			// docu
}