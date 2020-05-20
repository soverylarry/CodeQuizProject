//save Initials and Score to local storage...not working yet...dammmit....

let scoreInitials = [];
        // example {score and initials}
        const results = (ev)=>{
            ev.preventDefault();  //to stop the form submitting
            let rank = {
                score: document.getElementById('score').value,
                initials: document.getElementById('initials').value
            }
            scoreInitials.push(rank);
            document.forms[0].reset(); // to clear the form for the next entries
            //document.querySelector('form').reset();

            //for display purposes only
            console.warn('added' , {scoreInitials} );
            let pre = document.querySelector('#msg pre');
            pre.textContent = JSON.stringify(scoreInitials);

            //saving to localStorage
            localStorage.setItem('results', JSON.stringify(scoreInitials) );
        }
        document.addEventListener('DOMContentLoaded', ()=>{
            document.getElementById('btn').addEventListener('click', results);
        });