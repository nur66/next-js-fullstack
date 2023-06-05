import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const uri = 'mongodb+srv://nuriswanto66:OptimaMinds_0506@cluster0.fggseqx.mongodb.net/?retryWrites=true&w=majority'; // Ganti dengan URI MongoDB Anda
  const client = new MongoClient(uri);

  try {
    await client.connect(); // Terhubung ke server MongoDB

    const database = client.db('optima-minds-db'); // Ganti dengan nama database Anda
    const collection = database.collection('Users'); // Ganti dengan nama koleksi Anda

    if (req.method === 'GET') {
      // Logika untuk mengambil daftar pengguna dari database
      const users = await collection.find().toArray();
      res.status(200).json(users);
    } else if (req.method === 'POST') {
      // Logika untuk menambahkan pengguna baru ke database
      const { name } = req.body;
      await collection.insertOne({ name });
      res.status(201).json({ message: `Pengguna ${name} berhasil ditambahkan` });
    } else {
      res.status(405).end(); // Metode HTTP tidak diizinkan
    }
  } catch (error) {
    console.error('Terjadi kesalahan:', error);
    res.status(500).json({ message: 'Terjadi kesalahan server' });
  } finally {
    await client.close(); // Tutup koneksi dengan server MongoDB
  }
}