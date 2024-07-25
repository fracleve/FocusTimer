
let darkMode = true
const buttonToggle = document.getElementById('toggle-mode')

buttonToggle.addEventListener('click', (event) => {

    document.documentElement.classList.toggle('ligth')
    
    const mode = darkMode ? 'ligth' : 'dark'
    
    event.currentTarget
    .queryselector('span').textContent = `${mode} modo ativado !`

    darkMode = !darkMode
})
