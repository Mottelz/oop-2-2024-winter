const matches = [
    {p1: 'a', p2: 'b', tournament: 20, id: 1},
    {p1: 'c', p2: 'd', tournament: 20, id: 2},
    {p1: 'f', p2: 'e', tournament: 20, id: 3},
    {p1: 'b', p2: 'a', tournament: 10, id: 4},
    {p1: 'c', p2: 'd', tournament: 10, id: 5},
    {p1: 'f', p2: 'e', tournament: 10, id: 6}
];

function getMatchesByTournament(tid) {
    return matches.filter(match => match.tournament === +tid);
};

function getMatchesByPlayer(pid) {
    return matches.filter(match => match.p1 === pid || match.p2 === pid);
};

module.exports = {
    getMatchesByTournament,
    getMatchesByPlayer
};