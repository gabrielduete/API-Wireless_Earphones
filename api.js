const express = require('express')
const app = express()

const PORT = process.env.PORT || 8877

app.get('/', (req, res) => {
    res.json({
        msg: 'OK'
    })
})

app.get('/fones', (req, res) => {
    res.json([
        {
            "id": 1, 
            "marca": "Hyper", 
            "preco": 12.2, 
            "modelo": "Plus",
            "descricao": 'Conheça o Plus, fone sem fio de qualidade extremamente duvidosa.',
            "srcImg": 'https://cdn.pixabay.com/photo/2021/11/11/23/25/headphones-6787507_960_720.jpg'
        },
        {
            "id": 2, 
            "marca": "Styles", 
            "preco": 18.00, 
            "modelo": "Viber",
            "descricao": 'Esse é o Viber, apenas o melhor fone do mercado! Confia.',
            "srcImg": 'https://cdn.pixabay.com/photo/2018/09/17/14/27/headphones-3683983_960_720.jpg'
        },
        {
            "id": 3, 
            "marca": "Hider",
            "preco": 54.20, 
            "modelo": "Dires",
            "descricao": 'Dires, o fone de alta qualidade sonora, feito para gamers!',
            "srcImg": 'https://cdn.pixabay.com/photo/2021/06/26/10/44/airpods-6365870_960_720.jpg'
        },
        {
            "id": 4, 
            "marca": "Huffer", 
            "preco": 2.50, 
            "modelo": "Dotros",
            "descricao": 'Dotros é o fone mais barato do mercado com uma incrível duração!(Recorde de 15 horas de uso)',
            "srcImg": 'https://cdn.pixabay.com/photo/2017/07/12/19/41/headphones-2498117_960_720.jpg'
        },
        {
            "id": 5, 
            "marca": "Xesquedele", 
            "preco": 7.00, 
            "modelo": "Xesque",
            "descricao": 'Xesque do xesquedele! O melhor fone para praticar exercícios!',
            "srcImg": 'https://cdn.pixabay.com/photo/2018/10/26/08/48/earpieces-3774131_960_720.png'
        },
        {
            "id": 6, 
            "marca": "Duete", 
            "preco": 52.000, 
            "modelo": "Decius",
            "descricao": 'Decius é o melhor fone da marca Duete, tem excelência em todas as funcionalidades proposta por um fone de ouvido sem fio, além de ser refinado por material alienígena.',
            "srcImg": 'https://cdn.pixabay.com/photo/2020/06/10/13/22/headphones-5282687_960_720.jpg'
        },
        {
            "id": 7, 
            "marca": "Coros", 
            "preco": 23.12, 
            "modelo": "Totros",
            "descricao": 'Totros, o fone feito para quem deseja noites ouvindo musicas de qualidade.',
            "srcImg": 'https://cdn.pixabay.com/photo/2012/02/22/20/09/headphones-15600_960_720.jpg'
        },
        {
            "id": 8, "marca": "Blues", 
            "preco": 205.32, 
            "modelo": "Golos",
            "descricao": 'Golos é o melhor fone custo-benefício do mercado, trazendo um preço que compre com sua demanda.',
            "srcImg": 'https://cdn.pixabay.com/photo/2021/06/26/10/44/airpods-6365870_960_720.jpg'
        },
        {
            "id": 9, 
            "marca": "Bronts", 
            "preco": 32.000, 
            "modelo": "Imore",
            "descricao": 'Imore é o concorrente direto do Decius, desfrute do segundo melhor fone do mercado, fabricado pela Bronts.',
            "srcImg": 'https://cdn.pixabay.com/photo/2020/07/03/04/46/bluetooth-headset-5365161_960_720.jpg'
        },
        {
            "id": 10, 
            "marca": "Bleves", 
            "preco": 150.20, 
            "modelo": "Varus",
            "descricao": 'Varus é feito para quem deseja uma imersão maior na hora dos games.',
            "srcImg": 'https://cdn.pixabay.com/photo/2021/07/29/17/17/headphones-6507640_960_720.jpg'
        }
    ])
})

app.listen(PORT, () => {
    console.log('Executando na porta: ' + PORT)
})
