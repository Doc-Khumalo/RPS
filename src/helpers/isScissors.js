export default function isScissors(userSelection, aISelection){
  if(userSelection === 'scissors' && aISelection === 'paper') {
    console.log('user selected scissors wins');
    return 'User';
  } else
  if(userSelection === 'paper' && aISelection === 'scissors') {
    console.log('AI selected scissors wins');
    return 'AI';
  }
}