// HOMEWORK 3.

const playerScoreTooHigh = 1400

function ratePlayersSkills(players) {
  return players.map(scoreRating)

  // return players.map((player) => isScoreHigh(player) ? 'High skill level - Avoid!' : 'Low skill level - Play!')

  // const highSkilled = [];
  // for (const element of arr) {
  //   if (element < 1400) {
  //     highSkilled.push('Low skill level - Play!')
  //   } else {
  //     highSkilled.push('High skill level - Avoid!')
  //   }
  // }
  // return highSkilled
}

function scoreRating(player) {
  return isScoreHigh(player) ? `High skill level - Avoid ${player.name}!` : `Low skill level - Play with ${player.name}!`
}


function isScoreHigh(player) {
  return player.score > playerScoreTooHigh

  // return playerScore > 1400

  // return playerScore > 1400 ? true : false

  // if (playerScore > 1400) {
  //   return true
  // }
  // return false

  // if (playerScore > 1400) {
  //   return true
  // } else {
  //   return false
  // }
}

function filterOutLowLevelPlayers(players) {
  return players.filter(isScoreHigh)
};


function createMonthlyRankingOfPlayers(players) {
  const [first, second, third] = top3Players(players)
  return `This month ${first.name} was number one. Second place belongs to ${second.name} and last but not least ${third.name}.`
};

function top3Players(players) {
  return sortPlayersDescendingPure(players).slice(0,3);
};

function top5Players(players) {
  return sortPlayersDescending(players).slice(0,5);
};

function sortPlayersDescending(players) {
  return players.sort((a, b) => b.score.current - a.score.current);
};

function sortPlayersDescendingPure(players) {
  return sortPlayersDescending([...players])
};

function sortPlayersAscending(players) {
  return players.sort((a, b) => a.score.current - b.score.current);
};

function createMonthlyMessageOfPlayerThatWillDropOut(players) {
  const [firstPlayer] = sortPlayersAscending(players)
  return `This month ${firstPlayer.player.first} ${firstPlayer.player.last} will drop out. With score of ${firstPlayer.score.current} was the last one in the league.`
};

function createAlphabeticallyOrderedPlayerDetailsList(players) {
  const sortedPlayers = players.sort((a, b) => a.firstName.localeCompare(b.firstName));
  const playersList = sortedPlayers
    .map(playerToString)
    .map(stringToListElement)
    .join('\n')
    
  return listElementsToOrderedList(playersList)
}

function stringToListElement(string) {
  return `<li>${string}</li>`
}

function listElementsToOrderedList(string) {
  return `<ol>\n${string}\n</ol>`
}




function playerToString(player) {
  if (undefined === player.title && undefined === player.midName) {
    return `${player.firstName} ${player.lastName}: ${player.highScore}`
  }
  if (player.title === undefined) {
    return `${player.firstName} ${player.midName} ${player.lastName}: ${player.highScore}`
  }
  if (player.midName === undefined) {
    return `${player.title} ${player.firstName} ${player.lastName}: ${player.highScore}`
  }
  return `${player.title} ${player.firstName} ${player.midName} ${player.lastName}: ${player.highScore}`
}




module.exports = {
  ratePlayersSkills,
  isScoreHigh,
  filterOutLowLevelPlayers,
  sortPlayersDescending,
  sortPlayersAscending,
  top3Players,
  createMonthlyRankingOfPlayers,
  createMonthlyMessageOfPlayerThatWillDropOut,
  createAlphabeticallyOrderedPlayerDetailsList,
  playerToString,
  stringToListElement,
  listElementsToOrderedList
}

