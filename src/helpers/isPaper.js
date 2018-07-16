export default function isPaper(userSelection, aISelection){
  if(userSelection === 'paper' && aISelection === 'rock') {
    console.log('user selected paper wins');
    return 'User';
  } else
  if(userSelection === 'rock' && aISelection === 'paper') {
    console.log('AI selected paper wins');
    return 'AI';
  }
}