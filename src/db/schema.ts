import {
  pgTable,
  pgEnum,
  serial,
  timestamp,
  text,
  integer,
} from 'drizzle-orm/pg-core';

import { AVAILABLE_STATUSES } from '@/data/invoices';

export type Status =
  (typeof AVAILABLE_STATUSES)[number]['id'];

const status = AVAILABLE_STATUSES.map(
  ({ id }) => id
) as Array<Status>;

export const statusEnum = pgEnum(
  'status',
  status as [Status, ...Array<Status>]
);

export const Invoices = pgTable('invoices', {
  id: serial('id').primaryKey().notNull(),
  value: integer('value').notNull(),
  status: statusEnum('status').notNull(),
  description: text('description').notNull(),
  userId: text('userId').notNull(),
  OrganizationId: text('OrganizationId'),
  customerId: integer('customerId')
    .notNull()
    .references(() => Customers.id),
  createdAt: timestamp('created_at')
    .defaultNow()
    .notNull(),
});

export const Customers = pgTable('customers', {
  id: serial('id').primaryKey().notNull(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  userId: text('userId').notNull(),
  OrganizationId: text('OrganizationId'),
  createdAt: timestamp('created_at')
    .defaultNow()
    .notNull(),
});
