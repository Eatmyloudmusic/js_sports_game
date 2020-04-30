// 
// teamone-shoot-button
// teamtwo-shoot-button
// teamtwo-numshots
// teamtwo-numgoals
// teamone-numshots
// teamone-numgoals
// num-resets

// let t1sb = 0
// let t2sb = 0
// let t1ns = 0
// let t2ns = 0
// let t1ng = 0
// let t2ng = 0

let t1sb = document.querySelector("#teamone-shoot-button")
let t2sb = document.querySelector("#teamtwo-shoot-button")

t1ns = document.querySelector("#teamone-numshots")
t2ns = document.querySelector("#teamtwo-numshots")
t1ng = document.querySelector("#teamone-numgoals")
t2ng = document.querySelector("#teamtwo-numgoals")
num_resets = document.querySelector("#num-resets")

// let t1ns = 0
// let t2ns = 0
// let t1ng = 0
// let t2ng = 0

console.log(t1ns.innerHTML)

t1sb.addEventListener("click", function () {
    console.log("Team One Shoots!!")
    t1ns.innerHTML = Number(t1ns.innerHTML) + 1
})

t2sb.addEventListener("click", function () {
    console.log("Team Two Shoots!!")
    t2ns.innerHTML = Number(t2ns.innerHTML) + 1
})


// const even_or_odd_button = document.querySelector("#even_or_odd_button")
// even_or_odd_button.addEventListener("click", function () {
//         if(countspan.innerHTML % 2 == 0) {
//             alert('even')
//         } else {
//             alert('odd')
//         }
// })
//


// let shotsofteamone = Number(t1ns.innerHTML) + 1

    // t1ns.innerHTML = shotsofteamone


    // let newCounterValue = Number(countspan.innerHTML) + 1;
    // countspan.innerHTML = newCounterValue

    // t1ns = "gray";
