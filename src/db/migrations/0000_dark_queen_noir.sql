CREATE TYPE "public"."status" AS ENUM('draft', 'sent', 'paid', 'overdue', 'void', 'cancelled', 'uncollectible', 'refunded');--> statement-breakpoint
CREATE TABLE "invoices" (
	"id" serial PRIMARY KEY NOT NULL,
	"value" integer NOT NULL,
	"status" "status" NOT NULL,
	"description" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
