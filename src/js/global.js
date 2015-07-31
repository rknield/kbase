var kbase = kbase || {}


$(function(){
				$('.plain-view input').on('change',function(event){
					if(this.checked) {
						alert("changed");
					}
				});
				
				// Initialize library
				SE.init({
					// Parameters obtained by registering an app, these are specific to the SE
					// documentation site
					clientId: 5217, 
					key: 'y76OQ0Zb2dDMfWA)uhy)oQ((', 
					
					// Used for cross domain communication, it will be validated
					channelUrl: 'http://github.io/rknield/kbase/index.html',
					
					// Called when all initialization is finished
					complete: function(data) { 
						$('#login-button')
							.removeAttr('disabled')
							.text('Login'); 
					}
				});
				
				// Attach click handler to login button
				$('#login-button').click(function() {
		
					// Make the authentication call, note that being in an onclick handler
					//   is important; most browsers will hide windows opened without a
					//   'click blessing'
					SE.authenticate({
						success: function(data) { 
							alert(
								'User Authorized with account id = ' + 
								data.networkUsers[0].account_id + ', got access token = ' + 
								data.accessToken
							); 
						},
						error: function(data) { 
							alert('An error occurred:\n' + data.errorName + '\n' + data.errorMessage); 
						},
						networkUsers: true
					});
				});
			});