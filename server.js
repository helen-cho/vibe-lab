const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  res.locals.currentPath = req.path;
  next();
});

const footer = {
  siteName: '바이브 코딩',
  description: '코딩을 즐겁게 배우는 학습 공간입니다.',
  email: 'contact@vibe-coding.example',
  year: new Date().getFullYear(),
};

const navItems = [
  { label: '홈페이지 제작', href: '/homepage', icon: 'layout-template' },
  { label: 'Agents', href: '/agents', icon: 'bot' },
  { label: '데이터베이스', href: '/database', icon: 'database' },
  { label: '산악회 커뮤니티', href: '/community', icon: 'mountain' },
];

const pageLocals = { navItems, footer };

app.get('/', (req, res) => {
  res.render('index', {
    ...pageLocals,
    title: '바이브 코딩',
  });
});

app.get('/homepage', (req, res) => {
  res.render('homepage', {
    ...pageLocals,
    title: '홈페이지 제작',
  });
});

app.get('/agents', (req, res) => {
  res.render('agents', {
    ...pageLocals,
    title: 'Agents와 Agent Skill',
  });
});

app.get('/database', (req, res) => {
  res.render('database', {
    ...pageLocals,
    title: '데이터베이스',
  });
});

app.get('/community', (req, res) => {
  res.render('community', {
    ...pageLocals,
    title: '산악회 커뮤니티',
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
