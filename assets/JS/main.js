const scriptURL = 'https://script.google.com/macros/s/AKfycbxYSyuHcmSDHTDgUU6RzcKvbcw1cQbPgx_7HPSNNChAWHejlqR5M_QzGemNa3OMtIF96Q/exec'
                        const form = document.forms['submit-to-google-sheet']
                        const msg = document.getElementsByClassName('msg')[0];


                        form.addEventListener('submit', e => {
                          e.preventDefault()
                          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                            .then(response => {
                                msg.innerHTML = "Thank You For Contacting!"
                                setTimeout(function(){
                                    msg.innerHTML = ""
                                },10000)
                                form.reset()
                            })
                            .catch(error => msg.innerHTML = "Error Sending message. Please Try Again "
                                setTimeout(function(){
                                    msg.innerHTML = ""
                                },10000)
                                form.reset()
                            }))
                        })
