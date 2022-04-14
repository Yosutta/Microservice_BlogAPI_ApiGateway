const axios = require('axios')

async function send(){
    for(let i=0;i<100000;i++){
        const payload = {
            "title": "Adding 1000 post title",
            "slug": "Adding 1000 post slug",
            "content": "Adding 1000 post content"
        }
        await axios.post('http://localhost:3000/posts', payload)
    }
}

send()