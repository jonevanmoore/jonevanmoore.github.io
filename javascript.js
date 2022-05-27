window.addEventListener('DOMContentLoaded', () => {

    const aboutMe = document.getElementById('about-me')
    aboutMe.style.display = 'none'

    const aboutMeLink = document.getElementById('about-me-link')
    aboutMeLink.addEventListener('click', e => {
        if (aboutMe.style.display === 'none') {
            aboutMe.style.display = 'block'
        } else {
            aboutMe.style.display = 'none'
        }
    })
})
