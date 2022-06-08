class Player {
  constructor() {
    this.name=null
    this.index=null
    this.positionX=0
    this.positionY=0
   // this.rank=0
    //this.score=0
  }

  getCount(){
var reference=database.ref('playerCount')
reference.on('value', function(data){
  playerCount=data.val()
})
  }

  update(){
    var playerIndex='players/player'+this.index
    database.ref(playerIndex).update({
      positionX: this.positionX,
      positionY: this.positionY,
     // rank:this.rank,
     // score:this.score
    })
  }

  getDistance(){
    var reference=database.ref('players/player'+this.index)
    reference.on('value',data =>{
      var data=data.val()
      this.positionX=data.positionX
      this.positionY=data.positionY
    })
  }

  updateCount(count){
database.ref('/').update({
  playerCount:count
})

  }

addPlayer(){
  var playerIndex='players/player'+this.index
  if (this.index==1){
this.positionX=width/2-320
  }
  else {
    this.positionX=width/2+280
  }
  database.ref(playerIndex).set({
    name: this.name,
    positionX:this.positionX,
    positionY:this.positionY,
    //rank:this.rank,
    //score:this.score
  })
}

static getPlayersInfo(){
  var reference= database.ref('players')
  reference.on('value', function(data){
    allPlayers=data.val()
  })
}
}
