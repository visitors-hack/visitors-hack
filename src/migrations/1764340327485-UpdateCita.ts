import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateCita1764340327485 implements MigrationInterface {
    name = 'UpdateCita1764340327485'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "estado" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "descripcion" character varying NOT NULL, CONSTRAINT "PK_be2ef64a21d36522aa1ecb24886" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "cita" ADD "estadoId" uuid`);
        await queryRunner.query(`ALTER TABLE "cita" ADD CONSTRAINT "FK_a962b399e5a86adcda9fe91fcf1" FOREIGN KEY ("estadoId") REFERENCES "estado"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cita" DROP CONSTRAINT "FK_a962b399e5a86adcda9fe91fcf1"`);
        await queryRunner.query(`ALTER TABLE "cita" DROP COLUMN "estadoId"`);
        await queryRunner.query(`DROP TABLE "estado"`);
    }

}
