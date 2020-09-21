// HOMEWORK 3.

const playerScoreTooHigh: number = 1400

export function ratePlayersSkills(players: any): any {
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

export function scoreRating(player: any): any {
  return isScoreHigh(player) ? `High skill level - Avoid ${player.name}!` : `Low skill level - Play with ${player.name}!`
}


export function isScoreHigh(player: any): boolean {
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

export function filterOutLowLevelPlayers(players: any): any {
  return players.filter(isScoreHigh)
};


export function createMonthlyRankingOfPlayers(players: any): string {
  const [first, second, third] = top3Players(players)
  return `This month ${first.name} was number one. Second place belongs to ${second.name} and last but not least ${third.name}.`
};

export function top3Players(players: any): any {
  return sortPlayersDescendingPure(players).slice(0,3);
};

export function top5Players(players: any): any {
  return sortPlayersDescending(players).slice(0,5);
};

export function sortPlayersDescending(players: any): any {
  return players.sort((a: any, b: any) => b.score.current - a.score.current);
};

export function sortPlayersDescendingPure(players: any): any {
  return sortPlayersDescending([...players])
};

export function sortPlayersAscending(players: any): any {
  return players.sort((a: any, b: any) => a.score.current - b.score.current);
};

export function createMonthlyMessageOfPlayerThatWillDropOut(players: any): any {
  const [firstPlayer]: any = sortPlayersAscending(players)
  return `This month ${firstPlayer.player.first} ${firstPlayer.player.last} will drop out. With score of ${firstPlayer.score.current} was the last one in the league.`
};

export function createAlphabeticallyOrderedPlayerDetailsList(players: any): string {
  const sortedPlayers = players.sort((a: any, b: any) => a.firstName.localeCompare(b.firstName));
  const playersList = sortedPlayers
    .map(playerToString)
    .map(stringToListElement)
    .join('\n')
    
  return listElementsToOrderedList(playersList)
}

export function stringToListElement(string: any): string {
  return `<li>${string}</li>`
}

export function listElementsToOrderedList(string: any): string {
  return `<ol>\n${string}\n</ol>`
}




export function playerToString(player: any): string {
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

