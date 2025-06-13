CREATE TABLE "user" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now(),
	"name" text NOT NULL,
	"location" text NOT NULL,
	"role" text NOT NULL,
	"email" text NOT NULL,
	"boolean" boolean DEFAULT false,
	"profile_picture" text,
	"banner_picture" text,
	"bio" text,
	"about" text,
	"followers" integer DEFAULT 0,
	"connections" integer DEFAULT 0,
	CONSTRAINT "user_email_unique" UNIQUE("email")
);
