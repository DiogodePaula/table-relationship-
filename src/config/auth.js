export default {
  secret: process.env.PRIVATE_TOKEN,
  expiresIn: '1d', // tempo de vida do token
};

// o secret verifica a validade do token.
