import {
  pgTable,
  pgEnum,
  serial,
  timestamp,
  text,
  integer,
} from 'drizzle-orm/pg-core';

export const statusEnum = pgEnum('status', [
  'draft',
  'sent',
  'paid',
  'overdue',
  'void',
  'cancelled',
  'uncollectible',
  'refunded',
]);

export const Invoices = pgTable('invoices', {
  id: serial('id').primaryKey().notNull(),
  value: integer('value').notNull(),
  status: statusEnum('status').notNull(),
  description: text('description').notNull(),
  createdAt: timestamp('created_at')
    .defaultNow()
    .notNull(),
});
