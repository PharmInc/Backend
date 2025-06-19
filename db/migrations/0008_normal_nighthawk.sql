CREATE TABLE "connect" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"user1_id" uuid NOT NULL,
	"user2_id" uuid NOT NULL,
	"accepted" boolean DEFAULT false
);
--> statement-breakpoint
ALTER TABLE "connect" ADD CONSTRAINT "connect_user1_id_auth_id_fk" FOREIGN KEY ("user1_id") REFERENCES "public"."auth"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "connect" ADD CONSTRAINT "connect_user2_id_auth_id_fk" FOREIGN KEY ("user2_id") REFERENCES "public"."auth"("id") ON DELETE no action ON UPDATE no action;