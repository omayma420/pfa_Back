module.exports = {
  'users-permissions': {
    config: {
      jwtSecret: process.env.JWT_SECRET || 'votre_cle_secrete', // Directement jwtSecret
      jwt: {
        expiresIn: '1h', // Vous pouvez ajouter des options comme `expiresIn` ici
      },
    },
  },
};
