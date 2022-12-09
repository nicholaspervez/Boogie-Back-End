import query from "../db/index.js"
// import pkg from '../../db/index.js';
// const {query} = pkg;

async function getOwners () {
    const owners = await query (
        `SELECT * FROM owners`
    );
    return owners.rows
}



export { getOwners} ;