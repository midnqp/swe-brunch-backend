import { MigrationInterface, QueryRunner } from "typeorm";

export class M1766897694768 implements MigrationInterface {
    name = 'M1766897694768'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ADD "menu" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "menu"`);
    }

}
