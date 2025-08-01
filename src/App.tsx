import { useState } from 'react';
import './App.css';
import { EmailService } from './services/EmailService';

function App() {
  const [destinatario, setDestinatario] = useState('');
  const [assunto, setAssunto] = useState('');
  const [corpo, setCorpo] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleEnviar = () => {
    try {
      const email = new EmailService();
      email.enviar(destinatario, assunto, corpo);
      setMensagem('E-mail enviado com sucesso!');
    } catch (error) {
      setMensagem('Erro ao enviar o e-mail.');
    }
  };

  return (
    <div className="form-container">
      <h2>Envio de E-mail</h2>

      <label>
        Destinatário:
        <input
          type="email"
          value={destinatario}
          onChange={(e) => setDestinatario(e.target.value)}
        />
      </label>

      <label>
        Assunto:
        <input
          type="text"
          value={assunto}
          onChange={(e) => setAssunto(e.target.value)}
        />
      </label>

      <label>
        Corpo:
        <textarea
          value={corpo}
          onChange={(e) => setCorpo(e.target.value)}
        />
      </label>

      <button onClick={handleEnviar}>Enviar</button>

      {mensagem && <p>{mensagem}</p>}
    </div>
  );
}

export default App;
