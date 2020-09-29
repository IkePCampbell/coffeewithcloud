<div class ="container" style="position:relative;text-align;">
    <img src = https://www.ultraboardgames.com/img/slideshow/othello.jpg style="opacity: .1;width:103%;height:40ch;position:relative;left:-1%;">
    <div class = "centered" style ="position: absolute;top:40%;left:30% transform: translate(-50%, -50%);"> One of the games Sam and I loved playing in college was Othello. I can't remember who actually owned the game, but we played a lot. We didn't have much strategy, but from what I can remember Sam usually won more often than I did. I would always get frustrated because I wanted to be inside of her brain as she made decisions or to see why she felt a certain pieced belonged where. I wanted to see if there was a way that I could simulate thousands of games and see if I could figure out what moves would be the best based on the available open spots. In college I took two classes on Intelligent Systems and Artificial Intelligence, so I wasn't going in totally blind. Confident and determined that I could knock this out I grabbed my favorite language, Python. I committed my first code September 12, 2019, and the overall project ended Setepmber 25, 2020.  Here is the journey that I took, all my source code is on <a href="Https://github.com/IkePCampbell/OthelloAI">IkePCampbell/OthellAI</a>, on Github, so please make sure to check it out the finished code there to follow along. 
 </div>
</div>

--- 

#### Phase 1: Understanding how the game is played
My first challenge and objective was to try and actually implement the Othello Game. For those who aren't familiar, Othello has an 8x8 board, with white and black pieces placed in the center as follows:

<img src = "https://www.flyordie.com/games/help/reversi/images/reversi-board.gif">

Every turn, players of their respective color will place piece in an open spot with that players color in the same row, column, or diagonal to that open spot. At least one of the other player's token must be present in order for you to place a piece there. For instance, a player could play a piece here in the open spot:

<img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRXhhk2utgubKGUfqoZcRYAbXreCeNjdf41Pw&usqp=CAU">

The result of your move will turn all of those white pieces in that row to black, and black will gain 4 more black pieces. Scoring happens when the game is over, so the objective is to have the most pieces of your color when the board is full. The other way a game ends is if there are no more available moves. This means we need to be able to check for available spots in 8 different directions of every piece. 

You can also flip pieces in multiple directionsby just simply placing one piece, as in the case of the following image.

<img src = "https://www.lite.games/wp-content/uploads/2017/10/TutorialImage2.png" style="width:300px">

This means that the white player will win, because black will have no available moves, because there are no more black pieces to connect to.  With these simple rules in mind, we can move onto the next phase: Programming the game.


#### Phase 2: File Structure so far

My starting file structure was pretty simple:
```
├── board.py
├── main.py
├── game.py
├── player.py
```

Main would the the primary file I would run. This would be responsible for instantiating the Game class, Board class, and eventually responsible for all aspects of utilizing the Neural Network. We can skip actually going into the main file for now, and go into creating the Board class. 


#### Phase 3: Create the Board class and Player Class

To start, I just create the board class in the board.py file. We can start by creating the easiest section. 

---
```
class Board:
    def __init__(self):
        self.board = [
        ['x','x','x','x','x','x','x','x'],
        ['x','x','x','x','x','x','x','x'],
        ['x','x','x','x','x','x','x','x'],
        ['x','x','x','B','W','x','x','x'],
        ['x','x','x','W','B','x','x','x'],
        ['x','x','x','x','x','x','x','x'],
        ['x','x','x','x','x','x','x','x'],   
        ['x','x','x','x','x','x','x','x'],     ]
```
---
An x represents an open spot, and B/W represents a players token. Simple enough. Now we get into the more complex part: how do we judge what is a valid move, and where that move is.
The beauty of this list setup is the coordinates are in the form of [[Y]][[X]], where Y is the specific ROW, and X is the specific column. **NOTE: I end up flipping some of the logic where the user has to input in the form of [[X]][[Y]], just for easier readability for the user.**

With the beginning of the board created we can quickly make the Player class in the player.py file

---
```
class Player:
    def __init__(self,name,color):
        self.playerName = name
        self.tokenColor = color

    def getMove(self, *args):
        print("What would you like to do:")
        aX = input("Enter a X coordinate for your "+self.tokenColor+": ")
        aY = input("Enter a Y coordinate for your "+self.tokenColor+": ")
        while aX.isdigit() == False or int(aX) >=8:
            aX = input("Your X Token is not valid, please enter a X coordinate for your "+self.tokenColor+": ")
        while aY.isdigit() == False or int(aY) >=8:
            aY = input("Your Y Token is not valid, please enter a Y coordinate for your "+self.tokenColor+": ")
        return int(aX), int(aY)

```
---

The player class takes in two parameters, a player name and a token color ("B" or "W").
The only method the player class has is the getMove(). This takes in *args, which takes in basically 0 -> N arguements (this will be used for later.) The getMove method will return the (X,Y) coordinate that the player desires to put a piece at. And thats it for the player class!

---

Let's get back to the board class. We can quickly create the scoring method AND the reset method for when the game ends.

---
```
    def score(self):
        blackScore = 0
        for rows in self.board:
            for piece in rows:
                if piece == 'B':
                    blackScore +=1
        whiteScore = 64 - blackScore
        if blackScore > whiteScore:
            winner = "Black"
        elif blackScore < whiteScore:
            winner = "White"
        else:
            winner = "Tie"

        return blackScore, whiteScore, winner 

    def reset(self):
        for rows in range(len(self.board)):
            for piece in range(len(self.board[rows])):
                self.board[rows][piece]= 'x'
        self.board[3][3]='B'
        self.board[3][4]='W'
        self.board[4][4]='B'
        self.board[4][3]='W'
```
---

Then, after all of this, we can create the printBoard function, to actually display the board state to the end user.

---
```
def printBoard(self):
        count = 0
        rowcount = 0
        print("  X",end="")
        for i in range(8):
            print("  "+str(i),end = " ")
        print()
        print(" Y "+"+---"*8+"+")
        for row in self.board:
            print(" "+str(count)+" |",end="")
            for tile in row:
                if rowcount < 7:
                    print(" "+tile,end="  ")
                else:
                    print(" "+tile,end=" ")
                rowcount +=1            
            print("|")
            rowcount = 0
            count +=1
        print("   "+"+---"*8+"+"+"\n")
```
---

We can now have methods that score, reset and print the board. We also have a player who can give (X,Y) inputs. How can we make sure that those moves are valid?

It's here that I must note that while I would love to show you every method, this post would have many lines of code that would be very hard to stay awake reading through. I will only go over 3 of the 8 directions at max, as most of the direction code is repetetive. 

We first need to create a method called canMove() in the board class.

---
```
def canMove(self,acolor):
        moveList = []
        for row in range(len(self.board)):
            for piece in range(len(self.board[row])):
                if self.board[row][piece] == acolor:
                    moveList+=self.moves(piece,row,acolor,'get')
        if len(moveList) != 0:
            moveList = self.cleanList(moveList)
            return moveList, True
        else:
            return moveList, False        
```
---

This simply takes "acolor" as a parameter, and for every piece on the board that matches that color (i.e every white token) call a moves method. The moves method will return a lit of ALL possible spots on the board that the player can place a piece at. For instance, when the game starts, this function would return (moveList =  [[[4,2]],[[2,4]],[[5,3]],[[3,5]]], True) because moves actually returned valid spots that black could place a token at.

moves() takes in an X,Y pair, a color, and then a mode. In our canMove function, it uses 'get' as the mode, because we want to see the moves. This is as opposed to the 'flip' mode, which actually flips the pieces. The color matches to the "enemy" that moves needs to count and look for. We use slicing to get specific spots in our list to actually reach target open spots that work. Again what I've shown is only 3 of the 8 methods in the actual board.py file, be sure to check it out for full implementation!

---
```
def moves(self,aX,aY,acolor,mode):
        enemy = ""
        if acolor == "B":
            enemy = "W"
        else:
            enemy = "B"
        '''
        Moves is going to be used in both FINDING the potential spots to flip 
        and the end pieces that we will flip
        aX,aY = X,Y Coordinate of the piece
        aColor = B or W
        additive: 
            When we look for an X we want to give a spot of an extra index to actually reach the spot
            when we look for a color piece we dont want to add anything to it
        '''
        
        possibleMoves = []
##################################################################################
        leftOf = self.board[aY][:aX]
        leftOf.reverse()
        if mode == 'get':
            keepGoing,spot = self.keepGoingMoves(leftOf,'x',enemy)
            if keepGoing:
                possibleMoves.append([aY,aX-(spot+1)])
        else:
            keepGoing,spot = self.keepGoingMoves(leftOf,acolor,enemy)
            if keepGoing:
                self.flip(aY,aX,aY,aX-(spot),acolor)

        aboveOf = []
        for i in range(0,aY): #get all possible spots above you
            aboveOf.append(self.board[i][aX])
        aboveOf.reverse()
        if mode == 'get':
            keepGoing,spot  = self.keepGoingMoves(aboveOf,'x',enemy)
            if keepGoing:
                possibleMoves.append([aY-(spot+1),aX])
        else:
            keepGoing,spot = self.keepGoingMoves(aboveOf,acolor,enemy)
            if keepGoing:
                self.flip(aY,aX,aY-(spot),aX,acolor)
#####################################################333
        diagnolUpRight = []
        tmpX = aX
        tmpY= aY
        while (8 > tmpY >=0) and (0 <= tmpX < 8): #get all possible spots above you
            try:
                diagnolUpRight.append(self.board[tmpY][tmpX])
            except IndexError:
                pass
            tmpX+=1 #because we keep subtracting we eventually run out of room for the list
            tmpY-=1
        if len(diagnolUpRight) > 0:
            diagnolUpRight.pop(0) #Get rid of the piece we started at
        if mode == 'get':
            keepGoing,spot = self.keepGoingMoves(diagnolUpRight,'x',enemy)
            if keepGoing:
                possibleMoves.append([aY-(spot+1),aX+(spot+1)])
               
        else:
            keepGoing,spot = self.keepGoingMoves(diagnolUpRight,acolor,enemy)
            if keepGoing:
                self.flip(aY,aX,aY-(spot),aX+(spot),acolor)

```
---

Here are the helper functions that ensure that moves() returns all open spots. The function getOpenSpot is used twice for two modes 'get' and 'flip'. For 'get', getOpenSpot will take in a list pieces and it will look for the first 'x' that it can. So for example in the list [['W','W','x']] the index it will return is 2. In getOwnPiece(), the code will look to see if your own color is in the list before the open spot. That would mean that the spot you would want to place is not a valid move. So [['W','W','x']]  would work, but [['W','B','x']] would not. The function KeepGoingMoves combines getOpenSpot and getOwnPiece to actually get a value for the valid spot. Then at the end moves() you see the possibleMoves.append(aY,aX) with some math. This means that the code is adjusting for where the actual open spot relative to the position of the player's piece. 

---
```
    def getOpenSpot(self,alist,piece):
        openS = 0
        try:
            openS = alist.index(piece)
        except ValueError:
            pass
        return openS
    
    def getOwnPiece(self,alist,spot,enemy):
        for i in alist[:spot]:
            if i != enemy:
                return False
        return True

    def keepGoingMoves(self,alist,token,enemy):
        spot = self.getOpenSpot(alist,token)
        keepGoing = self.getOwnPiece(alist,spot,enemy)
        if spot > 0 and keepGoing:
            return True, spot
        return False, 0
```
---
