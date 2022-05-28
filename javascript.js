window.addEventListener('DOMContentLoaded', () => {

    const aboutMe = document.getElementById('about-me')
    const myProjects = document.getElementById('project')
    aboutMe.style.display = 'block'
    myProjects.style.display = 'none'

    const aboutMeLink = document.getElementById('about-me-link')
    aboutMeLink.style.color = 'rgb(107, 107, 255)'
    const projectLink = document.getElementById('project-link')
    aboutMeLink.addEventListener('click', e => {
        if (aboutMe.style.display === 'none') {
            aboutMe.style.display = 'block'
            aboutMeLink.style.color = 'rgb(107, 107, 255)'
            myProjects.style.display = 'none'
            projectLink.style.color = 'black'
        } else {
            aboutMe.style.display = 'none'
            aboutMeLink.style.color = 'black'
        }
    })

    projectLink.addEventListener('click', e => {
        if (myProjects.style.display === 'none') {
            myProjects.style.display = 'block'
            projectLink.style.color = 'rgb(107, 107, 255)'
            aboutMe.style.display = 'none'
            aboutMeLink.style.color = 'black'
        } else {
            myProjects.style.display = 'none'
            projectLink.style.color = 'black'
        }
    })
})
