/////////----------function-----------////////

// function oldversion()
// {
//     console.log('hi, i am es6')
// }
// oldversion()

// function oldversion(no1)
// {
//     return no1+10
// }
// console.log(oldversion(30))


////////////-------class--------///////
class animal
{
    constructor()
    {
        this.legs=4
    }
    printleg()
    {
        console.log(this.legs)
    }
}
// var someanimal=new animal()
// someanimal.printleg()

class dog extends animal{
    constructor()
    {
        super()
        var breed="Rotwiler"
    }
    printdata(legs)
    {
        console.log("it is a dog & legs are",this.legs)
    }
}