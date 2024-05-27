const dgram = require('dgram');

const server = dgram.createSocket('udp4');

// Evento de recebimento de mensagem do cliente
server.on('message', (msg, rinfo) => {
  console.log(`Mensagem do cliente: ${msg.toString()}`);

  // Envia uma mensagem de confirmação de volta para o cliente
  server.send('Mensagem recebida com sucesso!', rinfo.port, rinfo.address);

  // Não é necessário encerrar a conexão em UDP, pois é sem estado
});

// Evento de inicialização do servidor
server.on('listening', () => {
  const address = server.address();
  console.log(`Servidor UDP está ouvindo em ${address.address}:${address.port}`);
});

// O servidor escuta na porta 3000
const PORT = 3001;
const IP = '192.168.42.57';
server.bind(PORT, IP);
