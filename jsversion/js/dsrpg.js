m_hp = 0;
hp = 0;

atk = 12;
def = 10;
arm = 5;
wep = 2;
hp = 10;
xp = 0;
gp = 20;

m_atk = 0;
m_def = 0;
m_wep = 0;
m_arm = 0;
m_hp = 0;
m_xp = 0;
m_gp = 0;

monsterName = "";

newcharacterFlag = 1;

var element = document.getElementById("messageWindow");
element.scrollTop = element.scrollHeight;

function dungeon(){

    if (m_hp == 0) {

        newcharacterFlag = 2;
    }

    playerStatsUpdate();
    
    document.getElementById("winDisplay").style.display = "none";

    document.getElementById("townRow").style.display = "none";
    document.getElementById("combatRow").style.display = "inline";
    document.getElementById("monsterStats").style.display = "inline";
    document.getElementById("townDisplay").style.display = "none";
    document.getElementById("continueRow").style.display = "none";
    
    scrollMess();

    if (hp == 0){
        newcharacterFlag = 1;
        document.getElementById("messageWindow").innerHTML += "You are Dead.<br>"
        document.getElementById("rollCharDisplay").style.display = "inline";
        document.getElementById("townDisplay").style.display = "none";
        document.getElementById("townRow").style.display = "none";
        town();

    } else if (hp != 0){
        document.getElementById("messageWindow").innerHTML += "You are fighting in the Dungeon<br>";
        scrollMess();
    }
  
    if (m_hp == 0) {
        rollMonst()
    }

    monsterStatsUpdate();
}

function attack(){

    playeratt = atk * Math.floor((Math.random() * 6) + 1);
    monsterdef = m_def * Math.floor((Math.random() * 6) + 1);
    console.log("playeratt: "+playeratt+" monsterdeff: "+monsterdef);

    attSum = playeratt - monsterdef;

    if ( attSum > 10) {
        damage  = 3;
    } else {
        damage = 2;
    }

    if (playeratt>monsterdef){
        hit = 1
    } else {
        hit = 0;
    }





    if (hit === 0){

        document.getElementById("messageWindow").innerHTML += "You miss the monster %%%<br>";
        document.getElementById("continueRow").style.display = "inline";
        document.getElementById("combatRow").style.display = "none";
                  
    } else {

        document.getElementById("messageWindow").innerHTML += '<span class="green">You attack the monster and hit it for' + damage + ' hp!</span><br>';
        
        m_hp = m_hp - damage;
        monsterStatsUpdate();
        $("#m_hp").css("color", "red");
        $( "#m_hp" ).effect( "shake", {times: 2, distance: 2}, 500 );

        document.getElementById("continueRow").style.display = "inline";
        document.getElementById("combatRow").style.display = "none";  
        
        if (m_hp <= 0) {
            m_hp = 0;
            xp = xp + m_xp;
            gp = gp + m_gp;
            playerStatsUpdate();
            
            $("#xp").css("color", "yellow");
            $( "#xp" ).effect( "shake", {times: 3, distance: 3}, 700 );
            $("#gp").css("color", "yellow");
            $( "#gp" ).effect( "shake", {times: 3, distance: 3}, 700 );


            document.getElementById("continueRow").style.display = "inline";
            document.getElementById("messageWindow").innerHTML += "You Killed it!! it DEAD!<br>";
            scrollMess();
            win();
            
        }
    }

    if (m_hp > 0){
        monsterAttack();
    }
}

function monsterAttack(){

   

    monstatt = m_atk * Math.floor((Math.random() * 6) + 1);
    playerdef =def * Math.floor((Math.random() * 6) + 1);

    mattSum = monstatt - playerdef;

    if (mattSum > 10) {
        mdamage = 3;
    } else {
        mdamage = 2;
    }


    console.log("monstatt: "+monstatt+" playeratt: "+playeratt);

    if (monstatt > playerdef){
        mtest = 0;
    } else {
        mtest = 1;
    }

    if (mtest === 1){
        
        document.getElementById("messageWindow").innerHTML += "The Monster Misses You / matt:" + monstatt + " pdef: " + playerdef + "<br>";
        document.getElementById("continueRow").style.display = "inline";
        document.getElementById("combatRow").style.display = "none";
        scrollMess();
        mtest= 0;
              
    } else {

        document.getElementById("messageWindow").innerHTML += '<span class="red">You get hit by the monster for' + mdamage +'HP!!!</span><br>';

        scrollMess();
        hp = hp - mdamage;
        document.getElementById("hp").innerHTML = "HP : " + hp;
        

        playerStatsUpdate();
        $("#hp").css("color", "red");
        $( "#hp" ).effect( "shake", {times: 2, distance: 2}, 500 );

        document.getElementById("continueRow").style.display = "inline";
        document.getElementById("combatRow").style.display = "none";  
        
        if (hp <= 0) {
            hp = 0;
            document.getElementById("continueRow").style.display = "none";
            document.getElementById("messageWindow").innerHTML += "You are dead!!<br>";
            document.getElementById("townDisplay").style.display = "none";
            document.getElementById("rollCharDisplay").style.display = "inline";
            document.getElementById("townRow").style.display = "none";
            scrollMess();
            playerStatsUpdate();
            newcharacterFlag = 1;
            town();
        }
    }
}


function cont(){
    document.getElementById("continueRow").style.display = "none";
    document.getElementById("combatRow").style.display = "inline";
}






function town(){
    document.getElementById("combatRow").style.display = "none";
    document.getElementById("townRow").style.display = "inline";
    document.getElementById("townDisplay").style.display = "inline";
    document.getElementById("monsterStats").style.display = "none";
    document.getElementById("continueRow").style.display = "none";

    if (m_hp > 0 && hp >0){
        document.getElementById("messageWindow").innerHTML += "You ran away back to Town....<br>";
        document.getElementById("combatRow").style.display = "none";
        document.getElementById("townRow").style.display = "inline";
        scrollMess();
        m_hp = 0;

    if (newcharacterFlag == 1){
        document.getElementById("townDisplay").style.display = "none";
        document.getElementById("rollCharDisplay").style.display = "inline";
        document.getElementById("combatRow").style.display = "none";
        document.getElementById("townRow").style.display = "none";
        console.log("town function - new char flag set to 1");
        
    } else if (newcharacterFlag ==2 ){
        document.getElementById("messageWindow").innerHTML += "Enter Dungeon to fight another monster!<br>";
        document.getElementById("combatRow").style.display = "none";
        document.getElementById("townRow").style.display = "inline";
        scrollMess();
        newcharacterFlag = 0;
    } 
    
    
    }
}


function rollChar(){
    atk = 11;
    def = 10;
    arm = 5;
    wep = 2;
    hp = 10;
    xp = 0;
    gp = 20;
    playerStatsUpdate();
    document.getElementById("townDisplay").style.display = "inline";
    document.getElementById("rollCharDisplay").style.display = "none";
    document.getElementById("townRow").style.display = "inline";
    
}

function rollMonst(){

    monsterName = makeMonsterName();

    m_atk = Math.floor((Math.random() * 5) + 6);
    m_def = Math.floor((Math.random() * 5) + 6);
    m_wep = 1;
    m_arm = 1;
    m_hp = Math.floor((Math.random() * 10) + 5);
    m_xp = 5;
    m_gp = 5;
}

function playerStatsUpdate(){
    document.getElementById("atk").innerHTML = "ATK : " + atk;
    document.getElementById("def").innerHTML = "DEF : " + def;
    document.getElementById("arm").innerHTML = "ARM : " + arm;
    document.getElementById("wep").innerHTML = "WEP :+" + wep;
    document.getElementById("hp").innerHTML = "HP : " + hp;
    document.getElementById("gp").innerHTML = "GP : " + gp;
    document.getElementById("xp").innerHTML = "XP : " + xp;

    $("#hp").css("color", "white");
    $("#gp").css("color", "white");
    $("#xp").css("color", "white");

}

function monsterStatsUpdate(){
    document.getElementById("monsterName").innerHTML = "<p>Monster : " + monsterName + "</p>";
    document.getElementById("m_atk").innerHTML = "ATK : " + m_atk;
    document.getElementById("m_def").innerHTML = "DEF : " + m_def;
    document.getElementById("m_arm").innerHTML = "ARM : " + m_arm;
    document.getElementById("m_wep").innerHTML = "WEP :+" + m_wep;
    document.getElementById("m_hp").innerHTML = "HP : " + m_hp;  
    
    $("#m_hp").css("color", "white");
}

function heal(){

    document.getElementById("hp").innerHTML = "HP : " + hp;
    

    if (gp >= 15){

        gp = gp - 15;
        document.getElementById("messageWindow").innerHTML += "^^^^You heal yourself^^^^ --- It costs 15 GP<br>";
        hp = hp + 10;
        scrollMess();
        playerStatsUpdate();

        $("#hp").css("color", "green");
        $( "#hp" ).effect( "shake", {times: 2, distance: 2}, 500 );

        $("#gp").css("color", "red");
        $( "#gp" ).effect( "shake", {times: 2, distance: 2}, 500 );

    } else {
        document.getElementById("messageWindow").innerHTML += "No Healing! ---- Not enough Gold! ------ <br>";
        scrollMess();
        playerStatsUpdate();

    }
    
}




function makeMonsterName() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }

  function scrollMess(){
    var element = document.getElementById("messageWindow");
    element.scrollTop = element.scrollHeight;

  }

  function win(){
    document.getElementById("monsterStats").style.display = "none";
    document.getElementById("winDisplay").style.display = "inline";
    winHTML = "Monster :  " + monsterName + "<br>Gold : " + m_gp+ "<br>XP : " + m_xp;
    document.getElementById("winMessage").innerHTML = winHTML;

  }
