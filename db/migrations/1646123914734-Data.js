module.exports = class Data1646123914734 {
  name = 'Data1646123914734'

  async up(db) {
    await db.query(`CREATE TABLE "transfer" ("id" character varying NOT NULL, "chain_name" text, "date" TIMESTAMP WITH TIME ZONE, "block_number" numeric, "extrinsic_hash" text, "amount" numeric, "success" boolean, "name" text, "to_id" character varying, "from_id" character varying, "account_id" character varying, CONSTRAINT "PK_fd9ddbdd49a17afcbe014401295" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_082fbbbbe6a84c865abaa72817" ON "transfer" ("chain_name") `)
    await db.query(`CREATE INDEX "IDX_070c555a86b0b41a534a55a659" ON "transfer" ("extrinsic_hash") `)
    await db.query(`CREATE INDEX "IDX_0751309c66e97eac9ef1149362" ON "transfer" ("to_id") `)
    await db.query(`CREATE INDEX "IDX_76bdfed1a7eb27c6d8ecbb7349" ON "transfer" ("from_id") `)
    await db.query(`CREATE INDEX "IDX_bc8d11fdb46573269220c45af5" ON "transfer" ("account_id") `)
    await db.query(`CREATE TABLE "parachain" ("id" character varying NOT NULL, "name" text, CONSTRAINT "PK_0f6ac85862a6ca7c8873f699b61" PRIMARY KEY ("id"))`)
    await db.query(`CREATE TABLE "crowdloan" ("id" character varying NOT NULL, "cap" numeric NOT NULL, "first_period" numeric NOT NULL, "last_period" numeric NOT NULL, "end" numeric NOT NULL, "contributors" jsonb, "raised" numeric NOT NULL, "chain_name" text NOT NULL, "block_number" numeric, "status" character varying(9), "parachain_id" character varying NOT NULL, CONSTRAINT "PK_19a05e349701577c8c1679ae84d" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_005883fcd4519fa5ae88706b3a" ON "crowdloan" ("parachain_id") `)
    await db.query(`CREATE INDEX "IDX_c7f626a4ebde04b5e0c5b829a6" ON "crowdloan" ("chain_name") `)
    await db.query(`CREATE TABLE "contribution" ("id" character varying NOT NULL, "chain_name" text NOT NULL, "date" TIMESTAMP WITH TIME ZONE, "block_number" numeric, "extrinsic_hash" text, "success" boolean, "amount" numeric, "crowdloan_id" character varying, "account_id" character varying, CONSTRAINT "PK_878330fa5bb34475732a5883d58" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_9b160aadef096ecfb822596aaf" ON "contribution" ("chain_name") `)
    await db.query(`CREATE INDEX "IDX_61377c288f7b49300c2c871032" ON "contribution" ("extrinsic_hash") `)
    await db.query(`CREATE INDEX "IDX_34a9b7747fbe547737724da5a3" ON "contribution" ("crowdloan_id") `)
    await db.query(`CREATE INDEX "IDX_1e238c006392e74f87e2db5bf9" ON "contribution" ("account_id") `)
    await db.query(`CREATE TABLE "reward" ("id" character varying NOT NULL, "chain_name" text, "date" TIMESTAMP WITH TIME ZONE, "block_number" numeric, "extrinsic_hash" text, "amount" numeric, "era" integer, "validator" text, "total" numeric, "name" text, "account_id" character varying, CONSTRAINT "PK_a90ea606c229e380fb341838036" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_a76ad44e5c4b11502f6116db54" ON "reward" ("chain_name") `)
    await db.query(`CREATE INDEX "IDX_51b4a3885904fbbc1296944ca4" ON "reward" ("extrinsic_hash") `)
    await db.query(`CREATE INDEX "IDX_4a8843fdb7840bfd00f8e4f7b3" ON "reward" ("account_id") `)
    await db.query(`CREATE TABLE "stake" ("id" character varying NOT NULL, "chain_name" text, "date" TIMESTAMP WITH TIME ZONE, "block_number" numeric, "extrinsic_hash" text, "amount" numeric, "total" numeric, "name" text, "account_id" character varying, CONSTRAINT "PK_8cfd82a65916af9d517d25a894e" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_b0c42436fed4fb44e9cfc4a5e2" ON "stake" ("chain_name") `)
    await db.query(`CREATE INDEX "IDX_7262328942fab72e89fd456189" ON "stake" ("extrinsic_hash") `)
    await db.query(`CREATE INDEX "IDX_48a0a4f6ef7ee7a7395cdce1a2" ON "stake" ("account_id") `)
    await db.query(`CREATE TABLE "account" ("id" character varying NOT NULL, "total_stake" numeric, "total_reward" numeric, CONSTRAINT "PK_54115ee388cdb6d86bb4bf5b2ea" PRIMARY KEY ("id"))`)
    await db.query(`ALTER TABLE "transfer" ADD CONSTRAINT "FK_0751309c66e97eac9ef11493623" FOREIGN KEY ("to_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "transfer" ADD CONSTRAINT "FK_76bdfed1a7eb27c6d8ecbb73496" FOREIGN KEY ("from_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "transfer" ADD CONSTRAINT "FK_bc8d11fdb46573269220c45af52" FOREIGN KEY ("account_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "crowdloan" ADD CONSTRAINT "FK_005883fcd4519fa5ae88706b3a5" FOREIGN KEY ("parachain_id") REFERENCES "parachain"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "contribution" ADD CONSTRAINT "FK_34a9b7747fbe547737724da5a3b" FOREIGN KEY ("crowdloan_id") REFERENCES "crowdloan"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "contribution" ADD CONSTRAINT "FK_1e238c006392e74f87e2db5bf9b" FOREIGN KEY ("account_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "reward" ADD CONSTRAINT "FK_4a8843fdb7840bfd00f8e4f7b36" FOREIGN KEY ("account_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "stake" ADD CONSTRAINT "FK_48a0a4f6ef7ee7a7395cdce1a2a" FOREIGN KEY ("account_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
  }

  async down(db) {
    await db.query(`DROP TABLE "transfer"`)
    await db.query(`DROP INDEX "public"."IDX_082fbbbbe6a84c865abaa72817"`)
    await db.query(`DROP INDEX "public"."IDX_070c555a86b0b41a534a55a659"`)
    await db.query(`DROP INDEX "public"."IDX_0751309c66e97eac9ef1149362"`)
    await db.query(`DROP INDEX "public"."IDX_76bdfed1a7eb27c6d8ecbb7349"`)
    await db.query(`DROP INDEX "public"."IDX_bc8d11fdb46573269220c45af5"`)
    await db.query(`DROP TABLE "parachain"`)
    await db.query(`DROP TABLE "crowdloan"`)
    await db.query(`DROP INDEX "public"."IDX_005883fcd4519fa5ae88706b3a"`)
    await db.query(`DROP INDEX "public"."IDX_c7f626a4ebde04b5e0c5b829a6"`)
    await db.query(`DROP TABLE "contribution"`)
    await db.query(`DROP INDEX "public"."IDX_9b160aadef096ecfb822596aaf"`)
    await db.query(`DROP INDEX "public"."IDX_61377c288f7b49300c2c871032"`)
    await db.query(`DROP INDEX "public"."IDX_34a9b7747fbe547737724da5a3"`)
    await db.query(`DROP INDEX "public"."IDX_1e238c006392e74f87e2db5bf9"`)
    await db.query(`DROP TABLE "reward"`)
    await db.query(`DROP INDEX "public"."IDX_a76ad44e5c4b11502f6116db54"`)
    await db.query(`DROP INDEX "public"."IDX_51b4a3885904fbbc1296944ca4"`)
    await db.query(`DROP INDEX "public"."IDX_4a8843fdb7840bfd00f8e4f7b3"`)
    await db.query(`DROP TABLE "stake"`)
    await db.query(`DROP INDEX "public"."IDX_b0c42436fed4fb44e9cfc4a5e2"`)
    await db.query(`DROP INDEX "public"."IDX_7262328942fab72e89fd456189"`)
    await db.query(`DROP INDEX "public"."IDX_48a0a4f6ef7ee7a7395cdce1a2"`)
    await db.query(`DROP TABLE "account"`)
    await db.query(`ALTER TABLE "transfer" DROP CONSTRAINT "FK_0751309c66e97eac9ef11493623"`)
    await db.query(`ALTER TABLE "transfer" DROP CONSTRAINT "FK_76bdfed1a7eb27c6d8ecbb73496"`)
    await db.query(`ALTER TABLE "transfer" DROP CONSTRAINT "FK_bc8d11fdb46573269220c45af52"`)
    await db.query(`ALTER TABLE "crowdloan" DROP CONSTRAINT "FK_005883fcd4519fa5ae88706b3a5"`)
    await db.query(`ALTER TABLE "contribution" DROP CONSTRAINT "FK_34a9b7747fbe547737724da5a3b"`)
    await db.query(`ALTER TABLE "contribution" DROP CONSTRAINT "FK_1e238c006392e74f87e2db5bf9b"`)
    await db.query(`ALTER TABLE "reward" DROP CONSTRAINT "FK_4a8843fdb7840bfd00f8e4f7b36"`)
    await db.query(`ALTER TABLE "stake" DROP CONSTRAINT "FK_48a0a4f6ef7ee7a7395cdce1a2a"`)
  }
}
