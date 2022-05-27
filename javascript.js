window.addEventListener('DOMContentLoaded', () => {

    const aboutMe = document.getElementById('about-me')
    const myProjects = document.getElementById('project')
    aboutMe.style.display = 'none'
    myProjects.style.display = 'none'

    const aboutMeLink = document.getElementById('about-me-link')
    const projectLink = document.getElementById('project-link')
    aboutMeLink.addEventListener('click', e => {
        if (aboutMe.style.display === 'none') {
            aboutMe.style.display = 'block'
            myProjects.style.display = 'none'
        } else {
            aboutMe.style.display = 'none'
        }
    })

    projectLink.addEventListener('click', e => {
        if (myProjects.style.display === 'none') {
            myProjects.style.display = 'block'
            aboutMe.style.display = 'none'
        } else {
            myProjects.style.display = 'none'
        }
    })
})
