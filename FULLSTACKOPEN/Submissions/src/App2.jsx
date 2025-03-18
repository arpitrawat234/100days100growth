import { useState } from 'react';

const App2 = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time... The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
    'Talk is cheap. Show me the code. — Linus Torvalds',
    'Software is like sex: It’s better when it’s free. — Linus Torvalds',
    'Code is like humor. When you have to explain it, it’s bad. — Cory House',
    'Programs must be written for people to read, and only incidentally for machines to execute. — Harold Abelson',
    'Good code is its own best documentation. — Steve McConnell',
    'A good programmer is someone who always looks both ways before crossing a one-way street. — Doug Linder',
    'If debugging is the process of removing software bugs, then programming must be the process of putting them in. — Edsger Dijkstra',
    'There are only two hard things in computer science: cache invalidation, naming things, and off-by-one errors. — Martin Fowler',
    'First, solve the problem. Then, write the code. — John Johnson',
    'It’s not a bug – it’s an undocumented feature. — Anonymous',
    'It’s easier to ask for forgiveness than it is to get permission. — Grace Hopper',
    'The best way to predict the future is to invent it. — Alan Kay',
    'In order to understand recursion, one must first understand recursion. — Anonymous',
    'Don’t comment bad code – rewrite it. — Brian Kernighan',
    'Simplicity is the soul of efficiency. — Austin Freeman'
  ];

  const [selected, setSelected] = useState(0);
  
  const nextone = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  }

  // const Mostvoted=()=>{
  //     for(let i=0;i<votes.length;i++){
  //         if(votes[i]>votes[mostvoted]){
  //            mostvoted=i;
  //         }
  //         else if(votes[i]==votes[i+1]){mostvoted=-1;}
  //         // else{mostvoted=i;}
  //     }
  //     setmostvotes(anecdotes[mostvoted]);

  //     return(
  //         <div>
  //          {mostvoted== -1?'No votes yets':{mostvotes}}
  //         </div>
  //     )
  // }

  //instead use the maximum maths function

  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const mostvoted = votes.indexOf(Math.max(...votes));

  //to make a zero filled array use this
  const votedata = votes.reduce((acc, votecount, index) => {
    if (!acc[votecount]) {
      acc[votecount] = [];
    }
    acc[votecount].push(anecdotes[index]);
    return acc;
  }, {});

  const sorted = Object.keys(votedata).sort((a, b) => b - a);

  //!a - b: This compares two numbers a and b. If the result is negative, a is placed before b. If it's positive, b is placed before a. If it's 0, their order remains unchanged.

  // we cannot directly have mutability in React objects and should first change it then it shows using hooks

  const vote = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  }

  return (
    <>
      <div>
        <h3>{anecdotes[selected]}</h3>
        <h3> has {votes[selected]} votes</h3> 
        <button onClick={vote}>Vote</button>
        <button onClick={nextone}>Next Anecdotes</button>

        <h2>Most Voted Anecdote</h2>
        <h3>
          {votes[mostvoted] > 0 ? anecdotes[mostvoted] : 'No votes yet'}
        </h3>

        {sorted.map((votedCount) => (
          <div key={votedCount}>
            <h3>Votes: {votedCount}</h3>
            <ul>
              {votedata[votedCount].map((anecdote, index) => (
                <li key={index}>{anecdote}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

export default App2;
