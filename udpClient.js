const dgram = require('dgram');

// Cria um socket para enviar mensagens ao servidor
const client = dgram.createSocket('udp4');

// Mensagem a ser enviada para o servidor
const message = 'Olá, servidor! Esta é uma mensagem.';

// Envia a mensagem para o servidor na porta 3001
client.send(message, 3001, '192.168.42.96', (err) => {
  if (err) {
    console.error(`Erro ao enviar mensagem: ${err.message}`);
    client.close();
  } else {
    console.log(`Mensagem enviada: ${message}`);
  }
});

// Evento de recebimento de resposta do servidor
client.on('message', (msg, rinfo) => {
  console.log(`Resposta do servidor: ${msg.toString()}`);

  // Encerra o cliente após receber a confirmação
  client.close();
});

// Evento de encerramento do cliente
client.on('close', () => {
  console.log('Cliente encerrado');
});
