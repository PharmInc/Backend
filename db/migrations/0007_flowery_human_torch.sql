CREATE TABLE "follow" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"user1_id" uuid NOT NULL,
	"user2_id" uuid NOT NULL
);
--> statement-breakpoint
ALTER TABLE "comment" RENAME COLUMN "user_id" TO "auth_id";--> statement-breakpoint
ALTER TABLE "post" RENAME COLUMN "user_id" TO "auth_id";--> statement-breakpoint
ALTER TABLE "comment" DROP CONSTRAINT "comment_user_id_user_id_fk";
--> statement-breakpoint
ALTER TABLE "post" DROP CONSTRAINT "post_user_id_user_id_fk";
--> statement-breakpoint
ALTER TABLE "follow" ADD CONSTRAINT "follow_user1_id_auth_id_fk" FOREIGN KEY ("user1_id") REFERENCES "public"."auth"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "follow" ADD CONSTRAINT "follow_user2_id_auth_id_fk" FOREIGN KEY ("user2_id") REFERENCES "public"."auth"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "comment" ADD CONSTRAINT "comment_auth_id_auth_id_fk" FOREIGN KEY ("auth_id") REFERENCES "public"."auth"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "post" ADD CONSTRAINT "post_auth_id_auth_id_fk" FOREIGN KEY ("auth_id") REFERENCES "public"."auth"("id") ON DELETE no action ON UPDATE no action;