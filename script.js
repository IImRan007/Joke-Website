// GET https://icanhazdadjoke.com/

const jokes = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');


// Using Promises

// const generateJoke = () => {

//     const setHeader = {
//         headers: {
//             Accept: "application/json"
//         }
//     }

//     fetch("https://icanhazdadjoke.com", setHeader)
//         .then((res) => {
//             // console.log(res.json());
//             res.json()
//                 .then((data) => {
//                     jokes.innerHTML = data.joke;
//                 })
//         }).catch((error) => {
//             console.log(error)
//         });
// }

// jokeBtn.addEventListener('click', generateJoke);
// generateJoke();





// Using async await


const generateJoke = async () => {

    try {
        const setHeader = {
            headers: {
                Accept: "application/json"
            }
        }

        const res = await fetch("https://icanhazdadjoke.com", setHeader);
        const data = await res.json();

        jokes.innerHTML = data.joke;
    } catch (err) {
        console.log(`The error is ${err}`);
    }

}


jokeBtn.addEventListener('click', generateJoke);
generateJoke();