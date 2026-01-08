const username = 'GALACTICMUVA';

// Fetch/display myProfile
async function fetchUserProfile() {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const userData = await response.json();

        document.getElementById('profile-card').innerHTML = `
            <img src="${userData.avatar_url}" class="rounded-circle mb-3" width="150">
            <h2>${userData.login}</h2>
            <p class="lead">Public Repos: ${userData.public_repos}</p>
        `;
    } catch (error) {
        console.error('Error fetching user profile:', error);
    }
}

// Fetch/display Repo list
async function fetchUserRepos() {
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        const repos = await response.json();

        const repoList = document.getElementById('repo-list');
        repoList.innerHTML = repos.map(repo => 
            `<li class="list-group-item d-flex justify-content-between align-items-center">
                ${repo.name}
                <a href="${repo.html_url}" target="_blank" class="btn btn-sm btn-primary">View Repo</a>
            </li>`
        ).join('');
    } catch (error) {
        console.error('Error fetching repositories:', error);
    }
}

// Run functions 
fetchUserProfile();
fetchUserRepos();