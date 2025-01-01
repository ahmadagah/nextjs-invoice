CREATE TYPE "public"."status" AS ENUM('open', 'paid', 'void', 'uncollectible', 'draft');--> statement-breakpoint
CREATE TABLE "customers" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"userId" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "invoices" (
	"id" serial PRIMARY KEY NOT NULL,
	"value" integer NOT NULL,
	"status" "status" NOT NULL,
	"description" text NOT NULL,
	"userId" text NOT NULL,
	"customerId" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "invoices" ADD CONSTRAINT "invoices_customerId_customers_id_fk" FOREIGN KEY ("customerId") REFERENCES "public"."customers"("id") ON DELETE no action ON UPDATE no action;