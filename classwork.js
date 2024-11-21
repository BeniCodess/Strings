// const FullName = "Benita Faith";
// const initials = FullName.charAt(0)+ FullName.charAt(FullName.indexOf(" ")+1)
// console.log("1.",initials)
const foodstuffs =[
    "Rice",
    "Beans",
    "Yam",
    "Garri",
    "Poundo",
    "Plaintain",
    "Semo",
    "Salad",
    "Seafood",
    "Indomie",
    "Beef",
    "Turkey",
    "Chicken",
    ["Potatoe","fish"]
];

const  ingredients =["curry","thyme","maggi"]

const brandNewCar = [
    { 
        make: "Mercedes Benz",
        model: "C-class",
        year: "2020",
        features: [
            "Air Conditioning",
            "Power Steering",
            "Cruise Control",
            "Adaptive Bracking",
            "Ambience Lighting",
        ],
        ownerNames: ["john","Doe"],
        carMph: ["30mph", "40mph", "60mph", "80mph", "100mph"],
    },
];

const checkingJoin3 = brandNewCar[0].features.join()
console.log(checkingJoin3)

// const checkingJoin2 = foodstuffs.join("/");
// console.log(checkingJoin2)

const checkingJoin = "i am a boy"
console.log(checkingJoin.split(" ").join(" "))

// let checkingConcat = foodstuffs.concat(ingredients)
// console.log(checkingConcat);

// const firstConcat = brandNewCar[0].features
// const secondConcat = brandNewCar[0].ownerNames
// const thirdConcat = brandNewCar[0].carMph
// console.log(firstConcat.concat(secondConcat).concat(thirdConcat))

// const firstConcat = brandNewCar[0].features
// const secondConcat = brandNewCar[0].ownerNames.concat(brandNewCar[0].carMph)
// console.log(firstConcat.concat(secondConcat))

// let checkingConcat2 = brandNewCar[0].ownerNames.concat(brandNewCar[0].carMph).co
// console.log(checkingConcat2);

// const Unshift = brandNewCar[0].ownerNames.unshift("Felix","Faith")
// console.log(Unshift);
// console.log(brandNewCar[0].ownerNames    


// const checkingshift = brandNewCar[0].features.shift()
// console.log(checkingshift);
// console.log(brandNewCar[0].features)

// const checkingPush = brandNewCar[0].ownerNames.push("Touch screen")
// console.log(checkingPush)
// console.log(brandNewCar[0].ownerNames)

