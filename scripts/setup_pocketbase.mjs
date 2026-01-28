import PocketBase from 'pocketbase'; // Assuming ESM, or we'll use dynamic import if needed. But let's try standard import first if package.json allows.
// Actually, to be safe for a standalone script without knowing module type, I'll use standard fetch and no dependency if possible? 
// No, PocketBase has an API. Using 'pocketbase' library is easier.
// I'll write it assuming the user can run `npm install pocketbase` if missing.

// Let's make a script that uses standard fetch so it has ZERO dependencies if possible?
// No, auth is annoying with raw fetch.
// I'll stick to 'pocketbase' library which is likely installed given the project context.

const PB_URL = 'https://poketrcb.raiarruda.com.br/';

console.log(`\n🤖 PocketBase Schema Automator`);
console.log(`Connecting to ${PB_URL}...\n`);

// Polyfill for Node environment if needed (PocketBase SDK requires fetch/FormData)
// Node 18+ has fetch properly.
// 'pocketbase' NPM package fits Node.

const pb = new PocketBase(PB_URL);

// --- CONFIGURATION ---
const ADMIN_EMAIL = 'rai.arruda@hotmail.com'; // CHANGE THIS
const ADMIN_PASS = 'GroovBass#20';       // CHANGE THIS

async function main() {
    try {
        console.log("1. Authenticating as Admin...");
        // You can also prompt using 'readline' but let's keep it simple for now or ask user to edit.
        // Or better: read from args
        const email = process.argv[2] || ADMIN_EMAIL;
        const pass = process.argv[3] || ADMIN_PASS;

        if (email === 'admin@email.com') {
            console.error("❌ ERROR: You must edit this script with your Admin Email/Pass or pass them as arguments!");
            console.error("Usage: node scripts/setup_pocketbase.js <email> <password>");
            process.exit(1);
        }

        await pb.admins.authWithPassword(email, pass);
        console.log("✅ Authenticated!");

        console.log("\n2. Checking 'posts' Collection...");

        let collection;
        try {
            collection = await pb.collections.getOne('posts');
            console.log("ℹ️ Collection 'posts' exists. Updating schema...");
        } catch (e) {
            if (e.status === 404) {
                console.log("ℹ️ Collection 'posts' not found. Creating...");
                collection = null;
            } else {
                throw e;
            }
        }

        // DEFINING THE SCHEMA
        const schema = [
            { name: 'title', type: 'text', required: true },
            { name: 'slug', type: 'text', required: true },
            { name: 'excerpt', type: 'text' },
            { name: 'category', type: 'text' },
            { name: 'content', type: 'text' }, // Changed to 'text' for compatibility (stores HTML)
            { name: 'published', type: 'bool' },
            { name: 'date', type: 'date' },
            { name: 'cover', type: 'file', options: { maxSelect: 1, mimeTypes: ['image/*'] } }
        ];

        // Construct data with Public Rules
        const data = {
            name: 'posts',
            type: 'base',
            fields: schema,   // VITAL FIX: 'fields' instead of 'schema'
            listRule: "",     // Public can list
            viewRule: "",     // Public can view
            createRule: null, // Admin only
            updateRule: null, // Admin only
            deleteRule: null  // Admin only
        };

        if (collection) {
            console.log("⚠️ Deleting conflicting/broken 'posts' collection...");
            try {
                // We use the collection ID to delete
                await pb.collections.delete(collection.id);
                console.log("✅ Old collection deleted.");
            } catch (err) {
                console.log("⚠️ Could not delete old collection (might be fine):", err.message);
            }
        }

        console.log("🔨 Creating fresh 'posts' collection...");
        await pb.collections.create(data);
        console.log("✅ Collection 'posts' created with correct Schema & Rules!");

        console.log("\n🎉 SUCCESS! Database Schema is ready.");

        // 3. CREATE TEST POST
        console.log("\n3. Verifying Content...");
        const records = await pb.collection('posts').getList(1, 1);
        if (records.items.length === 0) {
            console.log("ℹ️ No posts found. Creating 'Hello World' post...");
            await pb.collection('posts').create({
                title: 'Bem-vindo ao Novo Blog',
                slug: 'bem-vindo-ao-novo-blog',
                excerpt: 'Este é um post de teste criado automaticamente para validar a conexão.',
                content: '<p>Olá! Se você está lendo isso, o <strong>Backend PocketBase</strong> e o <strong>Frontend</strong> estão se comunicando perfeitamente.</p>',
                category: 'Novidades',
                published: true,
                date: new Date().toISOString()
            });
            console.log("✅ Test Post created! Check your Blog page.");
        } else {
            console.log("ℹ️ Posts already exist. Skipping test creation.");
        }

        console.log("\n🚀 JOB DONE. Refresh your website now.");

    } catch (err) {
        console.error("\n❌ FAILED:", err.message);
        if (err.data) console.error("Details:", JSON.stringify(err.data, null, 2));
    }
}

main();
