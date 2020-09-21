// HOMEWORK 3.

const playerScoreTooHigh: number = 1400

export interface Player {
  name: string
  score: number
}

export function ratePlayersSkills(players: Player[]): string[] {
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

export function scoreRating(player: Player): string {
  return isScoreHigh(player) ? `High skill level - Avoid ${player.name}!` : `Low skill level - Play with ${player.name}!`
}


export function isScoreHigh(player: Player): boolean {
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

export function filterOutLowLevelPlayers(players: Player[]): Player[] {
  return players.filter(isScoreHigh)
};

export interface Player2 {
  name: string
  score: {
    current: number
    averageInLastWeek: number
  }
}

export function createMonthlyRankingOfPlayers(players: Player2[]): string {
  const [first, second, third] = top3Players(players)
  return `This month ${first.name} was number one. Second place belongs to ${second.name} and last but not least ${third.name}.`
};

export function top3Players(players: Player2[]): Player2[] {
  return sortPlayersDescendingPure(players).slice(0,3);
};

export function top5Players(players: Player2[]): Player2[] {
  return sortPlayersDescending(players).slice(0,5);
};

export function sortPlayersDescending(players: Player2[]): Player2[] {
  return players.sort((a: Player2, b: Player2): number => b.score.current - a.score.current);
};

export function sortPlayersDescendingPure(players: Player2[]): Player2[] {
  return sortPlayersDescending([...players])
};

export type PlayerScore = Pick<Player2 | Player3, 'score'>

export function sortPlayersAscending<P extends PlayerScore>(players: P[]): P[] {
  return players.sort((a: P, b: P): number => a.score.current - b.score.current);
};

export interface Player3 {
  player: {
    first: string;
    last: string;
  };
  score: {
    top: number;
    current: number;
  };
}

export function createMonthlyMessageOfPlayerThatWillDropOut(players: Player3[]): string {
  const [firstPlayer] = sortPlayersAscending(players)
  return `This month ${firstPlayer.player.first} ${firstPlayer.player.last} will drop out. With score of ${firstPlayer.score.current} was the last one in the league.`
};

export interface Player4 {
  title?: string;
  firstName: string;
  midName?: string;
  lastName: string;
  highScore: number;
}

export function createAlphabeticallyOrderedPlayerDetailsList(players: Player4[]): string {
  const sortedPlayers: Player4[] = players.sort((a: Player4, b: Player4) => a.firstName.localeCompare(b.firstName));
  const playersList: string = sortedPlayers
    .map(playerToString)
    .map(stringToListElement)
    .join('\n')
    
  return listElementsToOrderedList(playersList)
}

export function stringToListElement(string: string): string {
  return `<li>${string}</li>`
}

export function listElementsToOrderedList(string: string): string {
  return `<ol>\n${string}\n</ol>`
}

export function playerToString(player: Player4): string {
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
