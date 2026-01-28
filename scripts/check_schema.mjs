import PocketBase from 'pocketbase';

const pb = new PocketBase('https://poketrcb.raiarruda.com.br/');

async function check() {
    try {
        await pb.admins.authWithPassword('rai.arruda@hotmail.com', 'GroovBass#20');
        const col = await pb.collections.getOne('posts');
        console.log("Collection Name:", col.name);
        console.log("Schema (Old):", JSON.stringify(col.schema, null, 2));
        console.log("Fields (New):", JSON.stringify(col.fields, null, 2));
    } catch (e) {
        console.error("Error:", e.message);
    }
}

check();
