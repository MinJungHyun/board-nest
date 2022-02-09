import { Column, Entity, Index } from "typeorm";

@Index("sno_UNIQUE", ["sno"], { unique: true })
@Entity("member", { schema: "roady" })
export class Member {
  @Column("int", { name: "sno" })
  sno: number;

  @Column("varchar", { name: "id", nullable: true, length: 45 })
  id: string | null;

  @Column("varchar", { name: "password", nullable: true, length: 255 })
  password: string | null;

  @Column("varchar", { name: "name", nullable: true, length: 20 })
  name: string | null;

  @Column("int", { name: "age", nullable: true })
  age: number | null;

  @Column("json", { name: "param", nullable: true })
  param: object | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;
}
