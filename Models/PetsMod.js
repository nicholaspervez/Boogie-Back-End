import query from "../../db/index.js"
// import pkg from '../../db/index.js';
// const {query} = pkg;

async function getPets () {
    const pets = await query (
        `SELECT * FROM pets`
    );
    return pets.rows
}

export {getPets}