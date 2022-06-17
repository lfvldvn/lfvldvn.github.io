const LinksSocialMedia = {
    linkedin: 'in/alef/',
    github: 'lfvldvn',
    facebook: 'alefvaldevinobarboza',
    twitter: 'lfvldvn',
    instagram: 'lfvldvn',
    //whatsapp: 'send?phone=5511941150397'

}

function changeSocialMediaLinks() {
    for (let li of socialLinks.children) {
        const social = li.getAttribute('class')

        li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
        //alert(li.children[0].href)
    }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
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


//header nav menu

function onScroll() {

}

if () {
    navigation.classList.add('scroll')
}

 var ancoras = document.querySelectorAll('a');
        Array.from(ancoras).forEach(function (a) {
            a.addEventListener('click', scroll);
        });

        function animarScroll(atual, destino) {
            if (atual >= destino) return;
            document.body.scrollTop = atual;
            setTimeout(function () {
                animarScroll(atual += 50, destino);
            }, 50);
        }

        function scroll(e) {
            e.preventDefault();
            var id = this.getAttribute('href');
            var el = document.querySelector(id);
            var posicao = el.getBoundingClientRect().top;
            animarScroll(this.scrollTop, posicao);
        }
