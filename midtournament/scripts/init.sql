CREATE TABLE Players (
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    discord TEXT NOT NULL
);

CREATE TABLE Tournaments(
    rounds INTEGER NOT NULL,
    minPlayers INTEGER,
    maxPlayers INTEGER,
    regStart INTEGER NOT NULL,
    regEnd INTEGER NOT NULL,
    startDate INTEGER NOT NULL,
    endDate INTEGER NOT NULL,
    game TEXT NOT NULL
);

CREATE TABLE Rounds(
    format TEXT NOT NULL,
    tid INTEGER NOT NULL,
    FOREIGN KEY (tid) REFERENCES Tournaments (id)
);

CREATE TABLE Matches(
    player1 INTEGER NOT NULL,
    player2  INTEGER,
    result  INTEGER,
    round  INTEGER NOT NULL,
    FOREIGN KEY (player1) REFERENCES Players (id),
    FOREIGN KEY (player2) REFERENCES Players (id),
    FOREIGN KEY (round) REFERENCES Rounds (id)
);