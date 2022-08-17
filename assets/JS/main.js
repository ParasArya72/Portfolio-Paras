const scriptURL = 'https://script.google.com/macros/s/AKfycbx3VEk9KRfR6K8wgDBuIbqz8K7HdhjqiCBzzv1IlFfohudR7WvPxruE0yA8bi4dfpIkGQ/exec'
                        const form = document.forms['submit-to-google-sheet']
                        const msg = document.getElementsByClassName('msg')[0];


                        form.addEventListener('submit', e => {
                          e.preventDefault()
                          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                            .then(response => {
                                msg.innerHTML = "Thank You For Contacting!"
                                setTimeout(function(){
                                    msg.innerHTML = ""
                                },5000)
                                form.reset()
                            })
                            .catch(error => console.error('Error!', error.message))
                        })