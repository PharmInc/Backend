CREATE TABLE "job" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now(),
	"title" text NOT NULL,
	"description" text NOT NULL,
	"pay_range" text NOT NULL,
	"benefits" text NOT NULL,
	"category" text NOT NULL,
	"location" text NOT NULL,
	"role" text NOT NULL,
	"work_location" text NOT NULL,
	"experience_level" text NOT NULL,
	"active" boolean DEFAULT true,
	"institute_id" uuid NOT NULL
);
--> statement-breakpoint
ALTER TABLE "institution" RENAME TO "institute";--> statement-breakpoint
ALTER TABLE "user" RENAME COLUMN "boolean" TO "verified";--> statement-breakpoint
ALTER TABLE "institute" DROP CONSTRAINT "institution_name_unique";--> statement-breakpoint
ALTER TABLE "institute" DROP CONSTRAINT "institution_email_unique";--> statement-breakpoint
ALTER TABLE "job" ADD CONSTRAINT "job_institute_id_institute_id_fk" FOREIGN KEY ("institute_id") REFERENCES "public"."institute"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "institute" ADD CONSTRAINT "institute_name_unique" UNIQUE("name");--> statement-breakpoint
ALTER TABLE "institute" ADD CONSTRAINT "institute_email_unique" UNIQUE("email");