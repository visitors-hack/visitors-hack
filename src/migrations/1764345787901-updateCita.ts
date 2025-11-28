import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateCita1764345787901 implements MigrationInterface {
    name = 'UpdateCita1764345787901'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cita" ADD "motivo" character varying`);
        await queryRunner.query(`ALTER TABLE "cita" ADD "empresa" character varying`);
        await queryRunner.query(`ALTER TABLE "cita" ALTER COLUMN "horaIngreso" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cita" ALTER COLUMN "horaFin" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cita" ALTER COLUMN "duracion" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cita" ALTER COLUMN "redirect_invite" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cita" ALTER COLUMN "redirect_invite" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cita" ALTER COLUMN "duracion" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cita" ALTER COLUMN "horaFin" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cita" ALTER COLUMN "horaIngreso" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cita" DROP COLUMN "empresa"`);
        await queryRunner.query(`ALTER TABLE "cita" DROP COLUMN "motivo"`);
    }

}
