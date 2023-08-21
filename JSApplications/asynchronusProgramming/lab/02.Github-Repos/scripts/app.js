function loadRepos() {
	const user = document.getElementById('username').value;
	const url = `https://api.github.com/users/${user}/repos`;
	const repos = document.getElementById('repos');
	const liElement = document.createElement('li');
	fetch(url)
	.then(status => {
		if (status != 200) {
			liElement.textContent = 404;
			throw new Error('Error', 'Error 404');
		}	
	})
	.then(response => {
		console.log(response);
	})
	.then(data => {
		liElement.textContent = data;
	})
	.catch(error => {
		console.log(error);
	})
	repos.appendChild(liElement);
}