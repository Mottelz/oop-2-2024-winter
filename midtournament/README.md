# Midtournament
This is a basic tournament management software built for educational purposes. 

## Routes
| endpoint | method | body | return | description |
| --- | --- | --- | --- | --- |
| `/players/all` | `GET` | | `{"players": [ { ... }, { ... }]}` | Get all players |
| `/players/create` | `POST` | name, email, discord | `{"playerId": 1}` | Creates a new player |
| `/players/id/:playerId` | `GET` | | `{"player": {"name": "a", "email": "a@a.a", "discord": "a"}}`| Get player by Id |
| `/players/email/:playerEmail` | `GET` | | `{"player": {"name": "a", "email": "a@a.a", "discord": "a"}}`| Get player by email |