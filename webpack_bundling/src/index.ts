import * as averageService from './averageService';
import logoImg from './content/cat_ball.png';

const scores = [90, 75, 60, 99, 94, 30];
const averageScore = averageService.getAvg(scores);
const totalScore = averageService.getTotalScore(scores);

const messageToDisplayAvg = `average score ${averageScore}`;
const messageToDisplayTotal = `total score ${totalScore}`;

document.write(messageToDisplayAvg);
document.write(messageToDisplayTotal);

const img = document.createElement('img');
img.src = logoImg;
document.getElementById('imgContainer').appendChild(img);