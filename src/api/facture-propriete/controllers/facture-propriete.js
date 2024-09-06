'use strict';

/**
 * facture-propriete controller
 */
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::facture-propriete.facture-propriete', {
  async create(ctx) {
    try {
      const newItem = await strapi.service('api::facture-propriete.facture-propriete').create(ctx.request.body);
      ctx.send(newItem);
    } catch (error) {
      ctx.throw(500, error);
    }
  },

  async update(ctx) {
    try {
      const { id } = ctx.params;  // Récupère l'ID de l'URL
      console.log(id)
      const {name,hight,width,top,left} = ctx.request.body.data;  // Récupère les nouvelles coordonnées
      console.log('coordinates', ctx.request.body)

      // Assurez-vous que les données sont correctement formatées
      const updatedElement = await strapi.db.query('api::facture-propriete.facture-propriete').update({
        data:{name:name,hight:hight,width:width,top:top,left:left},
        where:{id: id}
      });
      // Retourne la réponse
      return ctx.send({
        message: 'Coordonnées mises à jour avec succès',
        data: updatedElement,
      });
    } catch (error) {
      return ctx.badRequest('Erreur lors de la mise à jour des coordonnées', error);
    }
  }
});
