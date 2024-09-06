'use strict';

/**
 * A set of functions called "actions" for `facture-propriete`
 */

module.exports = {
  async create(data) {
    try {
      return await strapi.entityService.create('api::facture-propriete.facture-propriete', { data });
    } catch (error) {
      throw new Error(`Failed to create record: ${error.message}`);
    }
  },
};