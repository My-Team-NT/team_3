import knex from './knex.js';
import { logger } from '../../utils/logger.js';

export const createTables = async () => {
  try {

    await knex.schema.createTable('users', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('email').unique().notNullable();
      table.string('password').notNullable();
      table.string('role').defaultTo('user');
      table.string('avatar');
      table.date('birth_of_date');
      table.string('phone_number').unique();
      table.boolean('is_active').defaultTo(false);
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    });

    await knex.schema.createTable('addresses', (table) => {
      table.increments('id').primary();
      table.integer('user_id').notNullable().references('id').inTable('users');
      table.string('title').unique().notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.string('address_line_1');
      table.string('address_line_2');
      table.string('country');
      table.string('city');
      table.string('postal_code');
      table.string('phone_number');
      table.string('landmark');
      table.bigInteger('field_12');
    });

    await knex.schema.createTable('socialprofiles', (table) => {
      table.increments('id').primary();
      table.integer('user_id').notNullable().references('id').inTable('users');
      table.string('platform');
      table.string('platform_user');
    });

    await knex.schema.createTable('otpcode', (table) => {
      table.increments('id').primary();
      table.string('otp_code');
      table.integer('user_id').notNullable().references('id').inTable('users');
      table.timestamp('expires_at').defaultTo(knex.fn.now().add(10, 'minute')); 
    });

    logger.info('All tables created successfully!');
  } catch (error) {
    logger.error('Error creating tables:', error);
  } finally {
    knex.destroy(); 
  }
};