var user;

let facebookLogIn = () => {
	var provider = new firebase.auth.FacebookAuthProvider();

	firebase
		.auth()
		.signInWithPopup(provider)
		.then(function (result) {
			// This gives you a Facebook Access Token. You can use it to access the Facebook API.
			var token = result.credential.accessToken;
			// The signed-in user info.
			user = result.user;
			// ...
			console.log(user);

			switchToChat();
		})
		.catch(function (error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			// The email of the user's account used.
			var email = error.email;
			// The firebase.auth.AuthCredential type that was used.
			var credential = error.credential;
			// ...
			console.log(errorMessage);
		});
};

let switchToChat = () => {
	window.location.assign('chat.html');
};

let addMessage = () => {
	firebase.auth().onAuthStateChanged(function (user) {
		if (user) {
			// User is signed in.
			//console.log(user);
			let userId = user.uid;
			let imgUrl = user.photoURL;
			let time = new Date().toLocaleTimeString([], {
				hour: '2-digit',
				minute: '2-digit',
			});
			let chatBar = document.getElementById('chatBar');
			let msg = chatBar.value;
			chatBar.value = '';

			writeUserData(userId, imgUrl, time, msg);
		} else {
			// No user is signed in.
		}
	});
};

let writeUserData = (userId, imgUrl, time, msg) => {
	firebase.database().ref('messages/').push().set({
		userId: userId,
		message: msg,
		profile_picture: imgUrl,
		time: time,
	});
};

let logOut = () => {
	firebase
		.auth()
		.signOut()
		.then(function () {
			// Sign-out successful.
			console.log('Signing Out');
			window.location.assign('index.html');
		})
		.catch(function (error) {
			console.log(error);
		});
};

firebase
	.database()
	.ref('messages/')
	.on('child_added', (data) => {
		let dataChat = data.val();
		console.log(dataChat.userId);
		var userId = firebase.auth().currentUser.uid;
		console.log(userId);
		let colorClass = '';
		if (dataChat.userId === userId) {
			colorClass = 'currentUser';
			console.log(colorClass);
		}

		let chatItem = `<li class="${colorClass}">
	<img
		src="${dataChat.profile_picture}"
	/>
	<h5>${dataChat.message}</h5>
	<p>${dataChat.time}</p>
</li>`;

		let chatList = document.getElementById('chatList');
		console.log(chatList);
		chatList.innerHTML += chatItem;

		chatList.scrollTop = chatList.scrollHeight;
	});
