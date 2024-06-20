import React, { useState } from 'react';
import './App.css';

function App() {
  const [form, setForm] = useState({
    cliente: '',
    data: '',
    quantidade: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulário enviado:', form);
    // Aqui você pode adicionar lógica para enviar os dados do formulário para um servidor, etc.
  };

  return (
    <div className="App">
      <h1>Formulário de Cliente</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="cliente">Cliente:</label>
          <input
            type="text"
            id="cliente"
            name="cliente"
            value={form.cliente}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="data">Data:</label>
          <input
            type="date"
            id="data"
            name="data"
            value={form.data}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="quantidade">Quantidade:</label>
          <input
            type="number"
            id="quantidade"
            name="quantidade"
            value={form.quantidade}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
