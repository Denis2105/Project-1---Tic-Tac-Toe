# Project 1 - Tic-Tac-Toe

Try my Demo - https://denis2105.github.io/Project-1-Tic-Tac-Toe/

##A very simple , minimalistic designed Tic-Tac-Toe game##

1. I used Atom to prepare my HTML , JavaScript and CSS files.
2. I then forked my repository, and cloned it onto my computer but failed to constantly commit from time to time. Thankfully no crashes happened along the way.
3. I used index.html as my starting point for this project. Linked my CSS and JavaScript files to my index.html.
4. Made sure to test that my CSS and JavaScript files were linked to my index.html by adding a console log to ticTacToe.js on line 1 and opening index.html in the browser.
5. The next step was to create the tic-tac-toe game-play with JavaScript
6. But before i started on my JavaScript, i decided to make sure that i had a visual image of house i'd like my outcome to look like.   Hence i went back to my HTML and prepared divs for my container, header, main (where my table was going to be) and footer.
7. I understand this was the long JavaScript method but i prepared my 3x3 table using <div class="boxes" id="Box1"></div> for all 9 boxes
8. Then i had to locate my DOM elements before trying to use them in my app. I used document.getElementById to locate my target elements.
9. Tested this in my console to make sure my selection worked.
10. After finding these elements, i thought about how i wanted the winning combinations to be checked using a function. Initially i went with Arrays as such:

        var winningCombos =  [
                              [Box1, Box2, Box3],
                              [Box4, Box5, Box6],
                              [Box7, Box8, Box9],
                              [Box1, Box4, Box7],
                              [Box2, Box5, Box8],
                              [Box3, Box6, Box9],
                              [Box1, Box5, Box9],
                              [Box3, Box5, Box7],
                              ];

  *For Loop was planned but i got too confused with strategy:

        for(var i = 0; i < winningCombos.length; i++) {
         if (winningCombos[i][0] != '' &&
             winningCombos[i][1] != '' &&
             winningCombos[i][2] != '') {

           if (winningCombos[i][0] === winningCombos[i][1] && winningCombos[i][0] === winningCombos[i][2] && winningCombos[i][1] === winningCombos[i][2]) {
             console.log('fuck yeah');
           }
             if (winningCombos[i][0] === X && winningCombos[i][1] === X && winningCombos[i][2] === X) {
               console.log('X Wins!');
             }
         }

11. However, further down the road, i realised that it got too complex for me to select my winning boxes via my div ids so it was back to the drawing board for me.
12. I then made the decision to prepare my check winning combination function using 'if' statements, which took up almost 100 lines of code due to the fact that i had to check each row and column and diagonal if there were 3 X's or O's in sequence.
13. After that , i used the logic of addEventListener to set up click events for those elements. I also needed a variable (playerTurn) to keep track of moves made. This was used to indicate whether or not to draw an X or an O., and trying to stop the alternation btw X and O after a selection has already been made was even trickier. I used a 'return' function to stop further clicks if there was already an X or an O in each box.
14. The function checkForWinner would go back to step number 12 above to check for a win after each click. Once it hits 3 in a row of X or O, the gameOver function would be triggered. This function turns the backgroundColor to blank once game is completed and show's the winner or if it's a tie. Div id's were set up in the HTML for an X-win, O-win or a Tie.
15. Then i created a 'reset' button in the HTML, linked it to my JavaScript using an reset.addEventListener that reloads the page to clear all 9 boxes. I could've done a clear divs but since i wasn't recording scores for P1 and P2 i decided not to.
16. CSS is pretty self exlalantory as i didn't do much, kept it simple and minimalistic. I used fonts from Google Fonts and colour scheme i used Adboe Kuler to choose colours that match
17. Lastly i added in some pointless HTML/CSS functions that allows the user to click on a button to make Pikachu run up and down the screen =)

I would have loved to have completed this Project using JQuery and shorter functions. Maybe next time =)

Thank you, I hope you like my game and layout.

Denis
