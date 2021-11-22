const express = require('express')
const cors = require('cors')
const app = express()
const { fones } = require('./data');

app.use((req, res, next) =>{
    res.header("Access-Control-Allow-Origin", "*")
    app.use(cors())
    next()
})

const PORT = process.env.PORT || 8877

app.get('/', (req, res) => {
    res.json({
        msg: 'OK'
    })
})

app.get('/fones', (req, res) => {
    res.json(fones)
})

app.get('/fones/:id', (req, res) => {

    const foneId = req.params.id; 

    const fone = fones.find(fone => foneId == fone.id);

    res.json(fone);
})

app.listen(PORT, () => {
    console.log('Executando na porta: ' + PORT)
})

// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠛⠉⠱⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ 
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠺⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ 
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⣴⠆⢰⢄⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ 
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⠁⢡⠲⢺⠀⠛⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ 
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⡤⢼⣴⠾⣆⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ 
// ⠀⠀⠀⠀⠀⠀⠀⠀⢀⢤⢧⣄⣀⣀⣩⠝⠁⠀⠀⠀⠀-------- Esse Gabriel inventa cada código...⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ 
// ⠀⠀⠀⠀⠀⠀⠀⡠⢻⢸⣾⢱⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ 
// ⠀⠀⡠⢄⠀⢀⡔⠁⢠⠓⢶⠋⢣⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ 
// ⣔⡯⣭⣒⡷⠋⠀⣴⣢⢀⡞⢣⡀⢣⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀  
// ⠀⠋⠑⢲⠯⡵⣚⡏⠉⢫⣀⠀⢣⢾⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ 
// ⠀⠀⠀⡸⠀⢠⠛⠧⣤⡼⣮⣭⣽⢳⣶⣵⣄⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ 
// ⠀⢠⢶⣁⣠⠃⠀⢠⠫⠖⠉⠉⣫⠺⠧⠑⠒⠦⢭⣙⣒⡦⡤⣀⣀⠀⠀⠀⠀⠀⠀ 
// ⠀⠈⡆⠉⠨⡟⡆⠈⠉⠉⠉⣉⣵⣿⣿⣿⣿⠟⠛⠉⢹⡻⠃⠃⡟⣿⣶⣄⡀⠀⠀ 
// ⠀⠀⠙⠶⠶⠛⣥⣾⣿⣿⣿⣿⣿⡿⣛⡉⠀⠞⠛⠉⠉⠀⣀⣫⣴⣿⣿⣿⣿⣦⡀ 
// ⠀⠀⠀⠀⠀⠀⠈⠉⢿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣾⠛⢻⣿⣿⣿⣿⣿⣿⣿⠿⠿⠃ 
