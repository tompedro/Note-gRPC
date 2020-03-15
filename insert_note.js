const client = require('./client')
let newNote = {
    title: "noteTitle",
    content: "noteContent"
}
client.insert(newNote, (error, note) => {
    if (!error) {
       console.log('New Note created successfully', note)
    } else {
       console.error(error)
    }
})