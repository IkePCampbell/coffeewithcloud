<div class ="container" style="position:relative;text-align;">
    <img src = https://www.ultraboardgames.com/img/slideshow/othello.jpg style="opacity: .1;width:103%;height:40ch;position:relative;left:-1%;">
    <div class = "centered" style ="position: absolute;top:40%;left:30% transform: translate(-50%, -50%);"> One of the games Sam and I loved playing in college was Othello. I can't remember who owned it it but we played a lot. We didn't have much strategy, and we competeted with eachother a lot. From what I can remember Sam usually won more often than not. I would always get frustrated because I wanted to be inside of her brain as she made decisions or to see why she felt a certain pieced belonged where. I wanted to see if there was a way that I could simulate thousands of games and see if I could figure out what moves would be the best. In college I took two classes on Intelligent Systems and Artificial Intelligence, so I wasn't going in totally blind. Confident and determined that I could knock this out I grabbed my favorite language, Python. I committed my first code September 12, 2019, and the overall project ended Setepmber 25, 2020.  Here is the journey that I took, all my source code is on <a href="Https://github.com/IkePCampbell/OthelloAI">my GitHub</a>, so please make sure to check it out the finished code there to follow along. 
 </div>
</div>

--- 

### Phase 1: Game logic sucks
My first challenge and objective was to try and actually implement the Othello Game. For those who aren't familiar, Othello has an 8x8 board, that looks like this:

<img src = "https://www.flyordie.com/games/help/reversi/images/reversi-board.gif">

Every turn, players of their respective color will place piece in an open spot with that players color in the same row, column, or diagnol to that open spot. For instance, a player could play a piece here:

<img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRXhhk2utgubKGUfqoZcRYAbXreCeNjdf41Pw&usqp=CAU">

They will turn all of those white pieces in that column to black, and will gain 4 more black pieces. Scoring happens when the game is over, so the objective is to have th e most pieces of your color when the board is full. OR there are no more available moves.
