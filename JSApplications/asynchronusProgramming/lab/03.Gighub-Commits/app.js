// function loadCommits() {
//     // Try it with Fetch API
//     const username = document.getElementById('username').value;
//     const repo = document.getElementById('repo').value;
//     const url = `https://api.github.com/repos/${username}/${repo}/commits`;
//     const commitsList = document.getElementById('commits');
   


//     fetch(url)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(`Error ${response.status} (Not found)`);
//         } else {
//             return response.json();
//         }
//     })
//     .then(commits => {
//         commits.forEach(commit => {
//             const li = document.createElement('li');
//             li.textContent = `${commit.author.name}: ${commit.commit.message}`;
//             commitsList.appendChild(li);
//         });
//     })
//     .catch(error => {
//         const li = document.createElement('li');
//         li.textContent = error.message;
//         commitsList.appendChild(li);
//     })

// }



async function loadCommits() {
    // Now with await
    const username = document.getElementById('username').value;
    const repo = document.getElementById('repo').value;
    const url = `https://api.github.com/repos/${username}/${repo}/commits`;
    const commitsList = document.getElementById('commits');
   
    try {   
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error ${response.status} ${response.text}`)
        }

        const data = await response.json();
        data.forEach(commit => {
            const li = document.createElement('li');
            li.textContent = `${commit.author.name}: ${commit.message}`;
            commitsList.appendChild(li);
        })

    } catch (error){
        const li = document.createElement('li');
        li.textContent = error.message;
        commitsList.appendChild(li);
    }   


}