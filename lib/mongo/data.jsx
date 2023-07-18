import clientPromise from ".";

let client;
let db;
let experience;

// Initialize MongoDB connection
async function init() {
  if (db) return;
  try {
    client = await clientPromise;
    db = client.db("portfolio");
    experience = db.collection('experience');
  } catch (error) {
    throw new Error('Failed to establish connection to the database');
  }
};

// Call the init function to establish the connection when the server starts
(async () => {
    await init();
})()


// Experience Data

export async function getExperienceData() {
  try {
    if (!experience) await init();
    const result = await experience
      .find({})
      .limit(20)
      .sort({ metacritic: -1 })
      .map(user => ({ ...user, _id: user._id.toString() }))
      .toArray();

    return { experience: result };
  } catch {
    return { error: 'Failed to fetch experience data' };
  }
}
