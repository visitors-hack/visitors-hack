import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1764340759477 implements MigrationInterface {
    name = ' $npmConfigName1764340759477'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cita" DROP CONSTRAINT "FK_a962b399e5a86adcda9fe91fcf1"`);
        await queryRunner.query(`ALTER TABLE "cita" DROP COLUMN "estadoId"`);
        await queryRunner.query(`ALTER TABLE "cita" ADD "nombre" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cita" ADD "horaIngreso" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cita" ADD "userId" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cita" ADD CONSTRAINT "FK_64fd69c6db878d923c6ad2a8e9c" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cita" DROP CONSTRAINT "FK_64fd69c6db878d923c6ad2a8e9c"`);
        await queryRunner.query(`ALTER TABLE "cita" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "cita" DROP COLUMN "horaIngreso"`);
        await queryRunner.query(`ALTER TABLE "cita" DROP COLUMN "nombre"`);
        await queryRunner.query(`ALTER TABLE "cita" ADD "estadoId" uuid`);
        await queryRunner.query(`ALTER TABLE "cita" ADD CONSTRAINT "FK_a962b399e5a86adcda9fe91fcf1" FOREIGN KEY ("estadoId") REFERENCES "estado"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
