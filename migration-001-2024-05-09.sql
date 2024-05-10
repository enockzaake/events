CREATE TABLE "profiles"(
    "id" UUID NOT NULL,
    "user_id" TEXT NOT NULL
);
ALTER TABLE
    "profiles" ADD PRIMARY KEY("id");
CREATE TABLE "transactions"(
    "id" UUID NOT NULL,
    "order_id" BIGINT NOT NULL,
    "payment_method" TEXT NOT NULL,
    "date" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL,
    "amount" BIGINT NOT NULL
);
ALTER TABLE
    "transactions" ADD PRIMARY KEY("id");
CREATE TABLE "orders"(
    "id" UUID NOT NULL,
    "profile_id" UUID NOT NULL,
    "status" TEXT NOT NULL
);
ALTER TABLE
    "orders" ADD PRIMARY KEY("id");
CREATE TABLE "comments"(
    "id" UUID NOT NULL,
    "event_id" UUID NOT NULL,
    "profile_id" UUID NOT NULL,
    "message" TEXT NOT NULL,
    "date" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL
);
ALTER TABLE
    "comments" ADD PRIMARY KEY("id");
CREATE TABLE "organisations"(
    "id" UUID NOT NULL,
    "owner_id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL
);
ALTER TABLE
    "organisations" ADD PRIMARY KEY("id");
CREATE TABLE "order_ticket"(
    "id" UUID NOT NULL,
    "ticket_id" UUID NOT NULL,
    "order_id" UUID NOT NULL,
    "quantity" INTEGER NOT NULL
);
ALTER TABLE
    "order_ticket" ADD PRIMARY KEY("id");
CREATE TABLE "payouts"(
    "id" UUID NOT NULL,
    "organisation_id" UUID NOT NULL,
    "amount" BIGINT NOT NULL
);
ALTER TABLE
    "payouts" ADD PRIMARY KEY("id");
CREATE TABLE "events"(
    "id" UUID NOT NULL,
    "organisation_id" UUID NOT NULL,
    "category" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "start_date_time" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL,
    "end_date_time" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL,
    "multi_day" BOOLEAN NOT NULL,
    "virtual" BOOLEAN NOT NULL,
    "details" TEXT NOT NULL,
    "cover_image" TEXT NOT NULL,
    "visibility" BIGINT NOT NULL,
    "status" TEXT NOT NULL
);
ALTER TABLE
    "events" ADD PRIMARY KEY("id");
CREATE TABLE "ticket"(
    "id" UUID NOT NULL,
    "event_id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "price" BIGINT NOT NULL,
    "type" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "start_sale" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL,
    "end_sale" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL,
    "created_at" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL
);
ALTER TABLE
    "ticket" ADD PRIMARY KEY("id");
ALTER TABLE
    "ticket" ADD CONSTRAINT "ticket_id_foreign" FOREIGN KEY("id") REFERENCES "events"("id");
ALTER TABLE
    "organisations" ADD CONSTRAINT "organisations_owner_id_foreign" FOREIGN KEY("owner_id") REFERENCES "profiles"("id");
ALTER TABLE
    "order_ticket" ADD CONSTRAINT "order_ticket_order_id_foreign" FOREIGN KEY("order_id") REFERENCES "orders"("id");
ALTER TABLE
    "transactions" ADD CONSTRAINT "transactions_id_foreign" FOREIGN KEY("id") REFERENCES "orders"("id");
ALTER TABLE
    "payouts" ADD CONSTRAINT "payouts_organisation_id_foreign" FOREIGN KEY("organisation_id") REFERENCES "organisations"("id");
ALTER TABLE
    "events" ADD CONSTRAINT "events_organisation_id_foreign" FOREIGN KEY("organisation_id") REFERENCES "organisations"("id");
ALTER TABLE
    "comments" ADD CONSTRAINT "comments_profile_id_foreign" FOREIGN KEY("profile_id") REFERENCES "profiles"("id");
ALTER TABLE
    "order_ticket" ADD CONSTRAINT "order_ticket_ticket_id_foreign" FOREIGN KEY("ticket_id") REFERENCES "ticket"("id");
ALTER TABLE
    "orders" ADD CONSTRAINT "orders_profile_id_foreign" FOREIGN KEY("profile_id") REFERENCES "profiles"("id");
ALTER TABLE
    "comments" ADD CONSTRAINT "comments_event_id_foreign" FOREIGN KEY("event_id") REFERENCES "events"("id");