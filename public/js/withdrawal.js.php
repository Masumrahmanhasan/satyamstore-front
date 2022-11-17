	<?php
include("../../include/connection.php");?>
	
	$.validator.setDefaults({
		submitHandler: function() {
		}
	});

//===============================================login validation=======================================================
$().ready(function() {
		$("#paymentForm").validate({
			
			rules: {
			userammount: {
					required: true,
					number: true,
					min: <?php echo minamountsetting($con,'withdrawalamount');?>,
                    max: 100000
				},
				optionsname : {required :true},
				acid: {
					required: true
					
				},						
			},
			messages: {
				email: "Please enter a valid email address",
				remember: "Please accept our policy",
			}
			
		});

$("#paymentdetailForm").validate({
			
			rules: {
				
			name: {
					required: true,
				},
				
			mobile: {
					required: true,
					number: true,
					minlength: 10
				},
			email: {
					required: true,
				},				
			},
			messages: {
				
				password: {
					required: "Please provide a password",
					minlength: "Your password must be at least 5 characters long"
				},
				
				email: "Please enter a valid email address",
				remember: "Please accept our policy",
			}
			
		});			
	});

$(document).ready(function () { 

$("#paymentForm").on('submit',(function(e) {
e.preventDefault();

var userammount = $('input#userammount').val();
var acid = $('select#select_id').val();
	//alert(userammount);	
if((userammount)== "") {
   $("input#userammount").focus();
   $('#userammount').addClass('borderline');
            return false;
			}
if(userammount<<?php echo minamountsetting($con,'withdrawalamount');?>) {
   $("input#userammount").focus();
   $('#userammount').addClass('borderline');
            return false;
			}
if(userammount>100000) {
   $("input#userammount").focus();
   $('#userammount').addClass('borderline');
            return false;
			}
<!--if ($('input[name="optionsname"]:checked').length == 0) {-->
<!--         return false; -->
<!--		 }-->
if(acid=="") {
   $("select#select_id").focus();
   $('#select_id').addClass('borderline');
            return false;
			}	

$.ajax({
			type: "POST", 
			url: "withdrawalNow.php",              
			data: new FormData(this), 
			contentType: false,       
			cache: false,             
			processData:false,       

			success: function(html)   
			{ //alert(html);
			var arr = html.split('~');
			
			if (arr[0]== 1) {
				$('input#userammount').val('');
			$('#alert').modal({backdrop: 'static', keyboard: false})  
     $('#alert').modal('show');
	 document.getElementById('alertmessage').innerHTML = "<h4>Success !</h4><p>Withdrawal request send succesfully ! <p></>";
            return false;
			}
			else if(arr[0]==2)
			{ 
  $('#alert').modal({backdrop: 'static', keyboard: false})  
     $('#alert').modal('show');
	 document.getElementById('alertmessage').innerHTML = "<h4>Fail !</h4><p>Payout detail not found ! <br><a href='addbankdetail.php'><i class='fa fa-hand-o-right'></i> Add detail here</a><p></>";
            return false;

				}	
			else if(arr[0]==3)
			{ 
  $('#alert').modal({backdrop: 'static', keyboard: false})  
     $('#alert').modal('show');
	 document.getElementById('alertmessage').innerHTML = "<h4>Fail !</h4><p>Invalid amount, please try again !</p>";
            return false;

				}
				else if(arr[0]==5)
			{ 
  $('#alert').modal({backdrop: 'static', keyboard: false})  
     $('#alert').modal('show');
	 document.getElementById('alertmessage').innerHTML = "<h4>Fail !</h4><p>Please do 1st recharge to withdraw !</p>";
            return false;


				}
				else if(arr[0]==6)
			{ 
  $('#alert').modal({backdrop: 'static', keyboard: false})  
     $('#alert').modal('show');
	 document.getElementById('alertmessage').innerHTML = "<h4>Fail !</h4><p>Only 2 withrawals are allowed in 1 day !</p>";
            return false;


				}
				else if(arr[0]==7)
			{ 
  $('#alert').modal({backdrop: 'static', keyboard: false})  
     $('#alert').modal('show');
	 document.getElementById('alertmessage').innerHTML = "<h4>Fail !</h4><p>Maximum withrawal ammount is Rs.50,000 !</p>";
            return false;


				}
			
			}
		});
}));



});