
const scriptURL = 'https://script.google.com/macros/s/AKfycbwxybec1aEXcLNYwrvsqhXr9lKPP59mLxE6fHbW2sT7rPRYGXz5RVUkzf-wWIEwPTVD/exec'
const form = document.forms['submit-to-google-sheet']
const submitButton = document.querySelector('#btn-submit')
const submitButtonText = document.querySelector('#btn-submit .button-text')

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})

    submitButton.classList.add('loading')
    setTimeout(()=> {
        submitButton.classList.remove('loading')
        submitButtonText.classList.add('success')


        submitButtonText.innerHTML = 'Message sent successfully'
        form.reset()
    }, 4000)

    .catch(error => console.error('Error!', error.message))
})





