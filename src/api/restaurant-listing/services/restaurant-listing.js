'use strict';

/**
 * restaurant-listing service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::restaurant-listing.restaurant-listing');
