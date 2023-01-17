function GetComputerChoice(){
let x = Math.floor (Math.random() * 3) ;
console.log(x);
return x;

}
function PlayerSelection()
{ 
    let selection = prompt("choose");
    return selection;
}
function play(x,p)
{
    let player=p;
    let y=0;
    if(player.toUpperCase()=="ROCK")
    {y=0;
    ;}
    else if(player.toUpperCase()=="PAPER")
    {y=1;
        ;}
    else if(player.toUpperCase()=="SCISSORS")
    {y=2;
        ;}
        

    let s = y-x;
    
    if (s==0)
    {console.log(`draw`);
return 0;}
    else if (s==1 || s==-2)
    {console.log(`You win!${player} beats`);
return 1;}
    else if (s==2 || s==-1)
    {console.log(`you lose`);
return -1;}

}
function play5(){
   
    let hum=0;
    for (i=5;i>0;i--)
    {
        hum+=play(GetComputerChoice(),PlayerSelection());
    }
    if (hum<0)
    {
        console.log("GAME OVER! YOU LOSE!");
    }
    else if(hum>0){
        console.log("GAME OVER! YOU WIN!");
    }
    else if (hum=0)
    {
        console.log("GAME OVER! ITS A DRAW!");
    }
    
}