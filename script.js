const btnEl = document.querySelector('.btn');
const btnDel = document.querySelector('.btn');
const newUser = {
    name : 'Jon2',
    job: "cappter"
};

const clickHandler = async () => {
    try {
        const res = await fetch('http://localhost:3000/data/4', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        });
        const data = await res.json();

        if (!res.ok) {
            console.log(data.description);
            return;
        }

        console.log(data);
    } catch (error) {
        console.log(error);
    }
};

const handleDel = async () => {
    try {
        const res = await fetch('http://localhost:3000/data/1', {
            method: 'DELETE'
        });

        if(!res.ok) {
            console.log(data.description);
            return;
        }

        console.log(data);

    } catch (error) {
        console.log(error);
    }
}

btnEl.addEventListener('click', clickHandler);
btnDel.addEventListener('click', handleDel);
