import { connectToDatabase } from './mongoUtil';

export default async function logPoints (request, response) {
    const {name, email, points} = await request.body
    const {db} = await connectToDatabase();
    const collection = db.collection('points');

    const data = {name, email, points}

    await collection.insertOne(data);

    return response.status(200).json({})
}