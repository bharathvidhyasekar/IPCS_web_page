
function validate() {
	        var valid=true
	        var num = document.getElementById('mobile').value;
	        var a=document.getElementById("name").value;
	        if (a=="") {
	        	alert("Enter your Name")
	        	valid=false
	        }
			var x=document.getElementById('mail').value;
			var atposition=x.indexOf("@");
			var dotposition=x.indexOf(".");
			if(atposition<1||dotposition<atposition+2||dotposition+2>=x.length){
				alert("enter proper mail")
				valid=false
				
			}

			if (num==""){
				alert("Enter the number")
				valid=false
			}
			
			if(isNaN(num)) {
				document.getElementById("show").innerHTML=''
				alert("enter the number")
				valid=false
			}
			if (valid==true) {
				document.getElementById("pop-up").style.display = "none";
				document.getElementById("join").style.visibility=""
				document.getElementById("rela").style.overflow="visible"
				document.getElementById("hide").style.display="block"


			}

			
		}
		function joinnow(){
			var valid=true
			console.log("hello")
			var b=document.getElementById("option").value;
	        var num = document.getElementById('joinnumber').value;
	        var a=document.getElementById("joinname").value;
	        if (a=="") {
	        	alert("Enter your Name")
	        	valid=false
	        }
			var x=document.getElementById('joinemail').value;
			var atposition=x.indexOf("@");
			var dotposition=x.indexOf(".");
			if(atposition<1||dotposition<atposition+2||dotposition+2>=x.length){
				alert("enter proper mail")
				valid=false
				
			}

			if (num==""){
				alert("Enter the number")
				valid=false
			}
			
			if(isNaN(num)) {
				alert("enter the number")
				valid=false
			}
			console.log(b);
			if (b=="Choose Course"){
				valid=false
				alert("choose any course")
			}

			if (valid==true) {
				document.getElementById("joinbg").style.display = "none";
	
			}

			
		}
		function closex(){
			document.getElementById("joinbg").style.display="none"
		}
		

		function join(){
			document.getElementById("joinbg").style.display="block"
		}

		function message() {
			var x = document.getElementById('message');
            if (x.style.display === 'none') {
            	x.style.display = 'block';
            }else {
            	x.style.display = 'none';
            }
        }
        function message2() {
			var x = document.getElementById('message2');
            if (x.style.display === 'none') {
            	x.style.display = 'block';
            }else {
            	x.style.display = 'none';
            }
        }
        function message3() {
			var x = document.getElementById('message3');
            if (x.style.display === 'none') {
            	x.style.display = 'block';
            }else {
            	x.style.display = 'none';
            }
        }
        function message4() {
			var x = document.getElementById('message4');
            if (x.style.display === 'none') {
            	x.style.display = 'block';
            }else {
            	x.style.display = 'none';
            }
        }
        function message5() {
			var x = document.getElementById('message5');
            if (x.style.display === 'none') {
            	x.style.display = 'block';
            }else {
            	x.style.display = 'none';
            }
        }
        function message6() {
			var x = document.getElementById('message6');
            if (x.style.display === 'none') {
            	x.style.display = 'block';
            }else {
            	x.style.display = 'none';
            }
        }
        function message7() {
			var x = document.getElementById('message7');
            if (x.style.display === 'none') {
            	x.style.display = 'block';
            }else {
            	x.style.display = 'none';
            }
        }
        function message8() {
			var x = document.getElementById('message8');
            if (x.style.display === 'none') {
            	x.style.display = 'block';
            }else {
            	x.style.display = 'none';
            }
        }