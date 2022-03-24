import db from '../../../utils/db';

export default async (req, res) => {
  const { id, suitid } = req.query;
  const search = db.collection('valkyries').doc(id);

  try {
    if (req.method === 'PUT') {
      await search.update({
        ...req.body
      });
    } else if (req.method === 'GET') {
      const entries = await db.collection('valkyries').doc(id).collection(suitid).get();
      if (!entries.exists) {
        res.status(404).end();
      } else {
        const entriesData = entries.docs.map(entry => ({
            id: entry.id,
            ...entry.data()
          }));
          res.status(200).json({ entriesData });
      }
    } else if (req.method === 'DELETE') {
      await db.collection('valkyries').doc(id).delete();
    }
    res.status(200).end();
  } catch (e) {
    res.status(400).end();
  }
}