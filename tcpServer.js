const net = require('net');

const server = net.createServer((socket) => {
  console.log('Cliente conectado');

  // Evento de recebimento de dados do cliente
  socket.on('data', (data) => {
    console.log(`Mensagem do cliente: ${data.toString()}`);

    // Envia uma mensagem de confirmação de volta para o cliente
    socket.write('Mensagem recebida com sucesso!');

    // Encerra a conexão após a confirmação
    socket.end();
  });

  // Evento de encerramento da conexão
  socket.on('end', () => {
    console.log('Cliente desconectado');
  });
});

// O servidor escuta na porta 3000
const PORT = 3000;
const IP = '192.168.42.57';
server.listen(PORT, IP, () => {
  console.log(`Servidor TCP está ouvindo na porta ${PORT}`);
});
