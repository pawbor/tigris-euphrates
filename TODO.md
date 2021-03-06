# TigrisEuphrates progress
Current task: initialize game board with temples and treasures

## Additional tasks

- [x] Add BoardSpace slot
  - [x] empty
  - [x] civilization tile slot
    - [x] tile
    - [x] monument
    - [x] treasure
  - [x] catastrophe tile slot
  - [x] unification tile slot
  - [x] leader
- [ ] Refactor content slot
  - [x] move to seperate folder
  - [x] content slot factory
- [ ] content slot methods
  - [x] contains
  - [x] getContent
- [ ] Refactor tests to Gherkin style
  - [ ] Player screen
- [ ] Refactor - freez objects instead of using getters

## Play the game - engine

- [ ] components
  - [x] game board
  - [x] civilization tiles
  - [x] unification tiles
  - [x] catastrophe tiles
  - [x] player screen
  - [x] leaders
  - [x] monuments
  - [x] treasure tokens
  - [x] victory point tokens
  - [x] cloth bag
  - [ ] civilization buildings (*) 
  - [ ] wonder tile (*)
  - [ ] shedu idol (*)

- [ ] setup
  - [ ] prepare game board
  - [ ] prepare civilization tiles
  - [ ] place temples & treasures
  - [ ] prepare monuments
  - [ ] prepare dynasties
    - [ ] leaders
    - [ ] unification tile
    - [ ] catastrophe tiles
    - [ ] civilization tiles
  - [ ] choose starting player
 
- [ ] turns
  - [ ] resolve unification
    - [ ] place unification tile
    - [ ] resolve wars
  - [ ] resolve wars
    - [ ] choose war
    - [ ] resolve war
      - [ ] determine attacker
      - [ ] count supporters
      - [ ] commit tiles
      - [ ] determine winner
      - [ ] consequences
        - [ ] withdraw loser's leader 
        - [ ] discard supporters
        - [ ] gain VPs
    - [ ] resolve wars
  - [ ] resolve revolt
    - [ ] count temples
    - [ ] commit temples
    - [ ] determine winner
    - [ ] consequences  
      - [ ] withdraw loser's leader
      - [ ] gain VPs
  - [ ] treasure distribution
  - [ ] build monument
    - [ ] flip tiles
    - [ ] choose monument
  - [ ] actions
    - [ ] position a leader
      - [ ] restrictions
      - [ ] resolve revolt
      - [ ] treasure distribution
    - [ ] place a tile
      - [ ] restrictions
      - [ ] resolve unification
      - [ ] treasure distribution
      - [ ] build monument
      - [ ] gain VP
    - [ ] play a catastrophe tile
    - [ ] replace tiles
  - [ ] end turn
    - [ ] gain VPs from monuments
    - [ ] draw tiles
