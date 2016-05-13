//copyright notice
//who the hell would add a copyright notice on a such piece of shit
//just have fun and share, I don't care
//<3
//ko_lo

var s={};
s["witness"]="These dudes I know";
s["allegedly"]="kinda probably";
s["new study"]="tumblr post";
s["rebuild"]="avenge";
s["space"]="spaaace";
s["google glass"]="virtual boy";
s["smartphone"]="pokédex";
s["electric"]="atomic";
s["senator"]="Elf-lord";
s["car"]="cat";
s["election"]="eating contest";
s["congressional leaders"]="river spirits";
s["homeland security"]="homestar runner";
s["could not be reached for comment"]="is guilty and everyone knows it";
s["debate"]="dance-off";
s["self driving"]="uncontrollably swerving";
s["poll"]="psychic reading";
s["candidate"]="airbender";
s["drone"]="dogs";
s["vows to"]="probably won't";
s["at large"]="at very large";
s["successfully"]="suddendly";
s["expands"]="physically expands";
s["first-degree"]="friggin' aweful";
s["second-degree"]="friggin' aweful";
s["third-degree"]="friggin' aweful";
s["an unknown number"]="like hunderds";
s["front runner"]="Blade runner";
s["global"]="spherical";
s["years"]="mînutes";
s["minutes"]="yêars";
s["no indication"]="lot of signs";
s["urged restraint by"]="drunkenly egged on";
s["horsepower"]="tons of horsemeat";
s["gaffe"]="magic spell";
s["ancient"]="Haunted";
s["star-studded"]="blood-soaked";
s["remains to be seen"]="will never be known";
s["silver buller"]="way to kill wherewolves";
s["subway system"]="tunnels I found";
s["surprising"]="surprising but not me";
s["war of words"]="interplanetary war";
s["tension"]="sexual tension";
s["cautiously optimistic"]="delusional";
s["Doctor Who"]="The Big Bang Theory";
s["win votes"]="find Pokémon";
s["behind the headlines"]="beyond the grave";
s["email"]="poem";
s["facebook message"]="poem";
s["tweet"]="poem";
s["facebook ceo"]="this guy";
s["latest"]="final";
s["disrupt"]="destroy";
s["meeting"]="ménage à trois";
s["scientists"]="Channing Tatum and his friends";
s["you won't believe"]="I'm really sad about";
rs=Array();
Object.keys(s).forEach(function(key){
  rs.push(new RegExp(key,"gmi"));
});

function casemagic(input,output){
  if (input[0]==input[0].toUpperCase() && output[0]==output[0].toLowerCase())
    output[0]=output[0].toUpperCase();
  if (input[1]==input[1].toUpperCase()){
    //I'm lazy, so I'm assuming the full word will be to upper case
    return output.toUpperCase();
  }
  return output;
  
}
function substitution3(text){
    m=Array();
    rs.forEach(function(key){
      var tmpMatch=text.match(key);
      if( tmpMatch!=null)
        m.push(tmpMatch);        
    });
    m.forEach(function(v){
       v.forEach(function(value){
       text=text.replace(value,casemagic(value,s[value.toLowerCase()]));
       });
    }
);
      return text;

}
function loopallovertheworld(element){
  for(var i =0; i <element.children.length;i++){
      if("noscriptiframe".indexOf(element.children[i].tagName)<0)
        loopallovertheworld(element.children[i]);
  }
  if (typeof(element.innerHTML)!="undefined")
  element.innerHTML=substitution3(element.innerHTML);
}
loopallovertheworld(document);

