const {MongoClient} = require("mongodb");
const url="mongodb+srv://namastenode:vaidya20080092@namastenode.ccvj8bv.mongodb.net/";
const client= new MongoClient(url);
const dbName="HelloWorld";

async function main() {
  await client.connect();
  //console.log('Connected successfully to server');

  const db = client.db(dbName);
  const collection = db.collection('User');

  const data={
        name:"Vishu",
        city:"Mahindra Park",
        phone:9999204808,
        hobbies:["Gaming", "Coding", "Reading"],
    }

    // const insertResult = await collection.insertOne(data);
    // console.log('Inserted documents =>', insertResult);

    const findResult = await collection.find({name:"Vishu"}).count();
    console.log('Found documents =>', findResult);

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());