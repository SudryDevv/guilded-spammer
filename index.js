const axios = require('axios').default;
const colors = require('colors')

const webhook = "WEBHOOK_LINK"

function spam() {
    axios.post(webhook, {
        content: "SudryDev",
    })
    .then(response => {
        console.log(colors.green("[+] Message sent!"))
    })
    .catch(error => {
        console.log(colors.red("[-] Rate limit exceeded, waiting..."))
        setTimeout(spam, 3000);
    });
}

setInterval(spam, 100);
