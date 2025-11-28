import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1764337684759 implements MigrationInterface {
    name = 'Init1764337684759'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cita" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "fecha" TIMESTAMP NOT NULL, "horaCita" character varying NOT NULL, "horaFin" character varying NOT NULL, "duracion" integer NOT NULL, "dni" character varying, "email" character varying, "redirect_invite" character varying NOT NULL, "salaId" uuid, "areaId" uuid, CONSTRAINT "PK_57e1373661f0c185987b03dc6c8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sala" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nombre" character varying NOT NULL, "areaId" uuid, CONSTRAINT "PK_4e5fe0d3e30b64508d2a59daa40" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "area" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nombre" character varying NOT NULL, CONSTRAINT "PK_39d5e4de490139d6535d75f42ff" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "username" character varying NOT NULL, "password" character varying NOT NULL, "roles" text array NOT NULL DEFAULT '{user}', "currentHashedRefreshToken" text, "areaId" uuid, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "cita" ADD CONSTRAINT "FK_b277a9d2a19672800a3f35f77ee" FOREIGN KEY ("salaId") REFERENCES "sala"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cita" ADD CONSTRAINT "FK_b30497cea00d09ea94efc02db96" FOREIGN KEY ("areaId") REFERENCES "area"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sala" ADD CONSTRAINT "FK_15103ee8ea56f7fd55e0c3fcf9b" FOREIGN KEY ("areaId") REFERENCES "area"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_6091d3897ce0fffab4bda473d5d" FOREIGN KEY ("areaId") REFERENCES "area"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_6091d3897ce0fffab4bda473d5d"`);
        await queryRunner.query(`ALTER TABLE "sala" DROP CONSTRAINT "FK_15103ee8ea56f7fd55e0c3fcf9b"`);
        await queryRunner.query(`ALTER TABLE "cita" DROP CONSTRAINT "FK_b30497cea00d09ea94efc02db96"`);
        await queryRunner.query(`ALTER TABLE "cita" DROP CONSTRAINT "FK_b277a9d2a19672800a3f35f77ee"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "area"`);
        await queryRunner.query(`DROP TABLE "sala"`);
        await queryRunner.query(`DROP TABLE "cita"`);
    }

}
