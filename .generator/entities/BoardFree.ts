import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("board_free", { schema: "roady" })
export class BoardFree {
  @PrimaryGeneratedColumn({ type: "int", name: "sno" })
  sno: number;

  @Column("varchar", { name: "subject", nullable: true, length: 100 })
  subject: string | null;

  @Column("longtext", { name: "contents", nullable: true })
  contents: string | null;

  @Column("int", { name: "user_no", nullable: true })
  userNo: number | null;

  @Column("varchar", { name: "name", nullable: true, length: 20 })
  name: string | null;

  @Column("json", { name: "param", nullable: true })
  param: object | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
