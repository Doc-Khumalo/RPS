export default function isRock(userSelection, aISelection){
  if(userSelection === 'rock' && aISelection === 'scissors') {
    console.log('user selected rock wins');
    return 'User';
  } else
  if(userSelection === 'scissors' && aISelection === 'rock') {
    console.log('AI selected rock wins');
    return 'AI';
  }
}