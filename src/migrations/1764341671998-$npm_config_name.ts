import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1764341671998 implements MigrationInterface {
    name = ' $npmConfigName1764341671998'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cita" ADD "nombre" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cita" ADD "horaIngreso" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cita" ADD "userId" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cita" ADD CONSTRAINT "FK_64fd69c6db878d923c6ad2a8e9c" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cita" DROP CONSTRAINT "FK_64fd69c6db878d923c6ad2a8e9c"`);
        await queryRunner.query(`ALTER TABLE "cita" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "cita" DROP COLUMN "horaIngreso"`);
        await queryRunner.query(`ALTER TABLE "cita" DROP COLUMN "nombre"`);
    }

}
