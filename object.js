const badmintonPlayer=
{
    name:'sampada',
    country :'spain',
    gender:'Female',
    lastfivematches:["w","w","w","w","l"],
    racketDetails:
    {
        company:"liing",
        balance:"head heavy",
        isflexile:false
    },
    smash: ()=>
    {
        console.log(`${this.name}`)
    },
    drop: function ()
    {
        console.log('the player from'+this.country+'has a wonderful')
    }
}
//access a property
console.log(badmintonPlayer.lastfivematches);// ['w', 'w', 'w', 'w', 'l']
console.log(badmintonPlayer.lastfivematches[2]);//w
console.log(badmintonPlayer.country);//spain
console.log(badmintonPlayer["country"]);//spain //key are in string 
const key='gender';//

console.log(badmintonPlayer[key]);//female 'gender'//accesing it like an variable 
badmintonPlayer.key;//undefined 'key' string is search in the badmintonPlayer object which is not present so it gives undefined
//modify a property
console.log(badmintonPlayer.lastfivematches=["l","l","l","l"]);
badmintonPlayer.sponsor="Nike";
console.log(badmintonPlayer.sponsor);
console.log(badmintonPlayer);
const newkey="string type";
badmintonPlayer[newkey]="hybrid";
console.log(badmintonPlayer);
//calling  methods
badmintonPlayer.smash;//references of the function
badmintonPlayer.smash();//invoving a function 
badmintonPlayer.drop();

//object class
//static method:we don't need to create object,to remove abiguity like using namespace std in c++
//static method:keys,hasOwnProperty
//keys=>return an array of key as elements
//Object.keys(badmintopnplayer)
//["name","country","gender"," ",....];
console.log(Object.keys(badmintonPlayer));
//hasOwnProperty=>check whether the key exists or not
//return boolean value
console.log(badmintonPlayer.hasOwnProperty('name'));
//destructuring

const computer={
    brand:"lenovo",
    processor:"13",
    ram:"16Gb",
}
//bad practice
// const brand=computer.brand; 
// const processor=computer["processor"];
// const ram=computer.ram;
//key name must match
const{ram,brand,processor}=computer;
console.log(computer);
const {ram:ramName}=computer;
const {ram:power,...processorAndBrand}=computer;
console.log(processorAndBrand);
console.log(power);//ram===power
//cloning 
const computerclone=computer;
console.log(computerclone)
//references is copied in compuetr clone 
//shallow clone

const compclone={...computer};
console.log(compclone);