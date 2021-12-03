import playCarRacing from './playCarRacing.js';
import printRacingResult from './printRacingResult.js';
import addSelectedWinner from './addSelectedWinner.js';

function makeRacingResult(racingCount, $resultScreenDiv) {
  for (let i = 0; i < racingCount; i++) {
    playCarRacing();
    printRacingResult($resultScreenDiv);
  }
}

export default function startRacingGame(racingCount) {
  const $app = document.querySelector('#app');
  const $resultScreenDiv = document.createElement('div');
  $app.appendChild($resultScreenDiv);

  makeRacingResult(racingCount, $resultScreenDiv);
  addSelectedWinner($resultScreenDiv);
}
