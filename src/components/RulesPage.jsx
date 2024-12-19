import React from 'react';

function RulesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 pt-20 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Hand Cricket Game Rules</h2>
          
          <section className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Toss</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>The game begins with a coin toss. Choose either Heads or Tails.</li>
              <li>The winner of the toss decides whether to bat or bowl first.</li>
            </ul>
          </section>
          
          <section className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Batting</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>As the batter, you choose a number between 1 and 10 for each turn.</li>
              <li>The computer (or opponent) also picks a number simultaneously.</li>
              <li>If the numbers match, the batter is out, and their total score becomes the target for the second innings.</li>
            </ul>
          </section>
          
          <section className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Bowling</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>As the bowler, your goal is to make the batter out by guessing the same number they choose.</li>
              <li>If the numbers don't match, the batter scores runs equal to their chosen number.</li>
            </ul>
          </section>
          
          <section className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Second Innings</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>After the first batter is out, the roles switch.</li>
              <li>The second batter must chase the target score set in the first innings.</li>
              <li>If the second batter matches the bowler's number, they are also out.</li>
            </ul>
          </section>
          
          <section className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Winning the Game</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>The second batter must score equal to or more than the target to win.</li>
              <li>If the second batter gets out before reaching the target, the first player (or computer) wins.</li>
            </ul>
          </section>
          
          <section className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Key Points to Remember</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>The game is played with numbers 1 to 10.</li>
              <li>A batter can keep batting until their number matches the bowler's number.</li>
              <li>Both innings end when the batter gets out.</li>
            </ul>
          </section>
          
          <p className="text-lg font-medium text-gray-900 mt-6">Enjoy the game and aim for the highest score!</p>
        </div>
      </div>
    </div>
  );
}

export default RulesPage;

