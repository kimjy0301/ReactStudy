const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.port || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
    res.send({ message: 'Hello Express!!' });
});

app.get('/api/customers', (req, res) => {
    res.send(
        [{
            'id': 1,
            'image': 'https://placeimg.com/64/64/any',
            'name': '김지용',
            'birthday': '920301',
            'gender': '남자',
            'job': '프로그래머'
        },
        {
            'id': 2,
            'image': 'https://placeimg.com/64/64/1',
            'name': '홍길동',
            'birthday': '920301',
            'gender': '남자',
            'job': '학생'
        },
        {
            'id': 3,
            'image': 'https://placeimg.com/64/64/2',
            'name': '모르는애',
            'birthday': '920301',
            'gender': '여자',
            'job': '백수'
        }]
    )
});


app.listen(port, () => console.log(`Listening on port ${port}`));

