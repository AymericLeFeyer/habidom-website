$(function() {

	// Get the form.
	var form = $('#contact-form');

	// Get the messages div.
	var formMessages = $('.form-message');

	// Set up an event listener for the contact form.
	$(form).on('submit', function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Serialize the form data.
		var formData = {
			name: form.find('input[name="name"]').val(),
			mail: form.find('input[name="email"]').val(),
			society: form.find('input[name="society"]').val(),
			phone: form.find('input[name="phone"]').val(),
			message: form.find('textarea[name="message"]').val(),
		}


		if (formData.name == "") {
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');
			$(formMessages).text('Veuillez renseigner un nom valide');
		} else if (formData.mail == "") {
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');
			$(formMessages).text('Veuillez renseigner un mail valide');
		} else if (formData.phone == "") {
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');
			$(formMessages).text('Veuillez renseigner un numéro de téléphone valide');
		} else if (formData.message == "") {
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');
			$(formMessages).text('Merci de bien vouloir nous expliquer votre projet, nous l\'étudierons avec soin');
		} else {
			// Send the mail to the client
			let msg = `	<h1>Nouveau projet depuis habidom.fr</h1>
						<p>Merci de ne pas répondre directement à ce mail</p>
						<p>Si vous avez le moindre soucis, adressez-vous à contact@habidom.fr</p>
						<h2>Informations du client</h2>
						<ul>
							<li>Nom : ${formData.name}</li>
							<li>Entreprise : ${formData.society}</li>
							<li>Email : ${formData.mail}</li>
							<li>Téléphone : ${formData.phone}</li>
						</ul>
						<hr>
            			<p>${formData.message}</p>
						</br>`;

			Email.send({
				SecureToken: "b2a86528-d4f8-42eb-981a-e69959da32aa",
				To : [formData.mail, "contact@habidom.fr"],
				From : "noreply@habidom.fr",
				Subject : "Message envoyé depuis Habidom.fr",
				Body : msg,
			}).then(
				message => {
					if (message === "OK") {
						$(this).trigger("reset");
						$(formMessages).removeClass('error');
						$(formMessages).addClass('success');
						$(formMessages).text('Le message a bien été envoyé, nous vous en avons envoyé une copie');
					} else {
						$(formMessages).removeClass('success');
						$(formMessages).addClass('error');
						$(formMessages).text('Un problème est survenu. Veuillez réessayer ultérieurement. Si le problème persiste, envoyer un mail directement à contact@habidom.fr ou par téléphone');
					}
					$('form button').html(btnContent);
				}
			);

		}
		
		
	
		
	});

});

