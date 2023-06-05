"use client";

import { useState, ChangeEvent, FormEvent } from 'react';

const CreateUserForm: React.FC = () => {
  const [name, setName] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data); // Tampilkan respon dari server
        // Lakukan tindakan sesuai kebutuhan, seperti memperbarui daftar pengguna
      } else {
        console.error('Terjadi kesalahan:', response.status);
      }
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
    }

    setName('');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    // <form onSubmit={handleSubmit}>
    //   <input
    //     type="text"
    //     placeholder="Nama Pengguna"
    //     value={name}
    //     onChange={handleChange}
    //   />
    //   <button type="submit">Tambah Pengguna</button>
    // </form>
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="text-lg font-medium">
          Username
        </label>
        <input
          type="text"
          id="name"
          className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          value={name}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default CreateUserForm;
