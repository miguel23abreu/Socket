const net = require('net');

// Cria um socket para se conectar ao servidor na porta 3000
const socket = net.createConnection({ port: 3000, host: '192.168.42.96'}, () => {
  console.log('Conectado ao servidor');

  // Envia uma mensagem para o servidor
  socket.write('Olá, servidor! Esta é uma mensagem.');

  // Evento de recebimento de dados do servidor
  socket.on('data', (data) => {
    console.log(`Resposta do servidor: ${data.toString()}`);
    
    // Encerra a conexão após receber a confirmação
    socket.end();
  });

  // Evento de encerramento da conexão
  socket.on('end', () => {
    console.log('Desconectado do servidor');
  });
});

// Evento de erro de conexão
socket.on('error', (err) => {
  console.error(`Erro de conexão: ${err.message}`);
});
