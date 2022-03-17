import db from '../../../utils/db';

export default async (req, res) => {
  const { id } = req.query;
  const search = db.collection('stigmatas').doc(id);

  try {
    if (req.method === 'PUT') {
      await search.update({
        ...req.body
      });
    } else if (req.method === 'GET') {
      const doc = await db.collection('stigmatas').doc(id).get();
      if (!doc.exists) {
        res.status(404).end();
      } else {
        res.status(200).json(doc.data());
      }
    } else if (req.method === 'DELETE') {
      await db.collection('stigmatas').doc(id).delete();
    }
    res.status(200).end();
  } catch (e) {
    res.status(400).end();
  }
}