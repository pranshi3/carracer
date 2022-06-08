class Game {
  constructor() {
this.resetTitle=createElement('h2')
this.resetButton=createButton('')
/*
this.leaderBoardTitle=createElement('h2')
this.leader1=createElement('h2')
this.leader2=createElement('h2')*/
  }
  start() {
    form = new Form();
    form.display();
    player = new Player();
    playerCount=player.getCount()
    car1=createSprite(width/2-280,height-100)
    car1.addImage('car1', car1img)
    car1.scale=0.1
    car2=createSprite(width/2+180,height-100)
    car2.addImage('car2',car2img)
    car2.scale=0.1
    cars=[car1,car2]
  }

  handleResetButton(){
    this.resetButton.mousePressed(()=>{
      database.ref('/').set({
        playerCount:0,
        gameState:0,
        players:{}
      })
      window.location.reload()
    })
  }


  getState(){
    var reference= database.ref('gameState')
    reference.on('value', function(data){
      gameState=data.val()
    })
  }

  updateState(state){
database.ref('/').update({
  gameState: state
})
  }

  handleElements(){
    form.hide()
    form.titleImg.position(40,50)
    form.titleImg.class('gameTitleAfter')

    this.resetTitle.html('Reset Game')
    this.resetTitle.class('resetText')
    this.resetTitle.position(width/2+190, 40)

    this.resetButton.class('resetButton')
    this.resetButton.position(width/2+230, 100)
/*
    this.leaderBoardTitle.html('Leader Board')
    this.leaderBoardTitle.position(width/3-70,40)
    this.leaderBoardTitle.class('resetText')

  
    this.leader1.class('leaderText')
    this.leader1.position(width/3-60,90)
 
    this.leader2.class('leaderText')
    this.leader2.position(width/3-60,130)

*/

  }

handlePlayerControls(){
  if (keyIsDown(UP_ARROW)){
    player.positionY+=20
    player.update()
  }
  }

/*showLeaderBoard(){
  var leader1, leader2
  var players=Object.values(allPlayers)
  if ((players[0].rank==0 && players[1].rank==0) || players[0].rank==1){
// &emsp; This tag is used for displaying 4 consecutive spaces
leader1= players[0].rank+ '&emsp;'+ players[0].name+'&emsp;' +players[0].score
leader2= players[1].rank+ '&emsp;'+ players[1].name+'&emsp;' +players[1].score
  }
if (players[1].rank==1){
  leader1= players[1].rank+ '&emsp;'+ players[1].name+'&emsp;' +players[1].score
leader2= players[0].rank+ '&emsp;'+ players[0].name+'&emsp;' +players[0].score

}
this.leader1.html(leader1)
this.leader2.html(leader2)
}
*/

  play(){
    this.handleElements()
    this.handleResetButton()
    Player.getPlayersInfo()
    if (allPlayers!==undefined){
      image(track,0,-height *5,width,height*6)
      //this.showLeaderBoard()
      var index=0
      console.log(allPlayers)
      for (var i in allPlayers){
        index=index+1
        var x= allPlayers[i].positionX
        var y= height-allPlayers[i].positionY

        cars[index-1].position.x=x
        cars[index-1].position.y=y

        if (index==player.index){
          stroke(10)
          textSize(20)
          text(allPlayers[i].name,x,y-100)
          fill('blue')
          ellipse(x+3,y,80,80)

          //changing camera position in y direction for active car
          camera.position.x=cars[index-1].position.x
          camera.position.y=cars[index-1].position.y
        }
      }
      this.handlePlayerControls()
      drawSprites()
    }
   
  }
}
