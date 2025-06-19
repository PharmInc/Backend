CREATE TABLE "application" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now(),
	"job_id" uuid NOT NULL,
	"user_id" uuid NOT NULL,
	"cover_letter" text,
	"resume_url" text,
	"portfolio_url" text,
	"status" text DEFAULT 'pending' NOT NULL,
	"notes" text,
	"additional_info" jsonb,
	"applied_at" timestamp with time zone DEFAULT now(),
	"reviewed_at" timestamp with time zone,
	"responded_at" timestamp with time zone
);
--> statement-breakpoint
ALTER TABLE "application" ADD CONSTRAINT "application_job_id_job_id_fk" FOREIGN KEY ("job_id") REFERENCES "public"."job"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "application" ADD CONSTRAINT "application_user_id_auth_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."auth"("id") ON DELETE no action ON UPDATE no action;