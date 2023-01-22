let ps=0;
let cs=0;

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
    let com="";
    if(x==0){com="rock";
    }
    if(x==1){com="paper";}
    if(x==2){com="scissors";}
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
    const div= document.querySelector('div.Results')
    if (s==0)
    {div.textContent="draw";
    
    }
    else if (s==1 || s==-2)
    {div.textContent=`You win!${player} beats ${com}`;
    const spanh=document.querySelector('.hscore')
    ps=ps+1;
    spanh.textContent=`${ps}`;
    }
    else if (s==2 || s==-1)
    {div.textContent=`you lose!${player} beats ${com}`;
    const spanc=document.querySelector('.cscore');
    cs=cs+1;
    spanc.textContent=`${cs}`;
    
}

}
// function play5(){
   
//     let hum=0;
//     for (i=5;i>0;i--)
//     {
//         hum+=play(GetComputerChoice(),PlayerSelection());
//     }
//     if (hum<0)
//     {
//         console.log("GAME OVER! YOU LOSE!");
//     }
//     else if(hum>0){
//         console.log("GAME OVER! YOU WIN!");
//     }
//     else if (hum=0)
//     {
//         console.log("GAME OVER! ITS A DRAW!");
//     }
    
// }

{
const buttons= document.querySelectorAll('button')
buttons.forEach((button)=>{
    button.addEventListener('click',function eventss(e){
        if(ps>4||cs>4)
        {
            
            const final=document.querySelector('.final')
            if (ps>4){

            final.textContent="you win";
            } else{
                final.textContent="you lose";   
            }
            return;
            button.removeEventListener('click',eventss())
        }
        play(GetComputerChoice(),button.textContent)
        
    });

});
}
