CREATE TABLE "auth" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"last_login" timestamp with time zone DEFAULT now(),
	"email" text NOT NULL,
	"password" text NOT NULL,
	"type" text DEFAULT 'user' NOT NULL,
	CONSTRAINT "auth_email_unique" UNIQUE("email")
);
