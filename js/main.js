const LinksSocialMedia = {
    linkedin: 'in/alef/',
    github: 'lfvldvn',
    facebook: 'alefvaldevinobarboza',
    twitter: 'lfvldvn',
    instagram: 'lfvldvn',
    //whatsapp: 'send?phone=11941150397'
    
}

function changeSocialMediaLinks() {
    for (let li of socialLinks.children) {
        const social = li.getAttribute('class')

        li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
        //alert(li.children[0].href)
    }
}

changeSocialMediaLinks()

function getGitHubProfileInfos(){
    const url = `https://api.github.com/users/${LinksSocialMedia.github}`

    fetch(url)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
        userLink.href = data.html_url
        //userPhoto.src = data.avatar_url
        userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()


