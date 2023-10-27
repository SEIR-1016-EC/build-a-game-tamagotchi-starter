# Tamagotchi Scratch Notes

## Flow / Overview

1. Review
2. HTML + CSS
3. JS review + pseudcode
4. Variables
5. DOM capture
6. Init 
7. Render
8. Game loop
9. Lots of refinement...


### TODO
1. Review
    - highlighted setup steps - DONE
    - reviewed game state 
    - analyzing function -> read the rules of the game 
        -   start game (timer)
        -   game play (click)
        -   end (alert)
2. HTML + CSS
    - html structure - providing some class names & ids - DONE
        - ids elements that might be cached - DONE
        - classnames are going to descriptive + layout / appearance - DONE
    - basic styling for UI - "outside in" css for layout and styling - DONE 
    - make a commit for basic ui mock - DONE

3. JS review + pseudcode
4. Variables
    - initialized variables at global scope - DONE
    - stubbed our init - tested - DONE
    
5. DOM capture
    - tested all DOM cached variables - DONE
6. Init 
    - setting init values for global variables - DONE
    - refactor state from global variable to object - DONE
    - started interval - DONE
    - stubbed several functions
        runGame
        render()
7. Render
    - renderStats() - DONE
    - added icebox note about scaling render - DONE

8. Game loop
        - increment the state stats (helper function) 
            - called by runGame (game play loop) - DONE
            - updateStats -> updates each state key with a random amt - DONE
        - check if one or more state values exceeds a threshold 
            -continueGame() -> checks all state values -> if any of the values exceed threshold -> return false otherwise true - DONE
         - in runGame -check if we should continue if continueGame () -> true -> updateStats()   
        - else trigger a game over (alert -> clearInterval(timer))
9. Lots of refinement...