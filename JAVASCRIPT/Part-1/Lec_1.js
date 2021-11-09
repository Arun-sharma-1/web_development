x='arun';
if(x==='arun') alert('my first file in js')
10+25-5*3/2;
console.log( 10+25-5*3/2)

//ANOTHER WAY OF WRITING DATA 

country='india'
let fav='is my favorite country'

let print=`${country} ${fav} `
console.log(print)

console.log(this)
const arun = {
    firstname: 'arun',
    lastname: 'sharma',
    birthyear: 2001,
    job: 'developer',
    friend: ['kushal', 'tarun', 'jitu', 'dhanesh'],
    hasdrivinglicense: false,

    calage: function (  ) {
        console.log(this)
        return 2021 - this.birthyear
    }

};

console.log(arun.calage(12))
