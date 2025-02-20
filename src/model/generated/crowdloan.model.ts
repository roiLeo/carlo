import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, OneToMany as OneToMany_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {Contribution} from "./contribution.model"
import {Parachain} from "./parachain.model"

@Entity_()
export class Crowdloan {
  constructor(props?: Partial<Crowdloan>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  cap!: bigint

  @Column_("int4", {nullable: false})
  firstPeriod!: number

  @Column_("int4", {nullable: false})
  lastPeriod!: number

  @Column_("int4", {nullable: false})
  end!: number

  @OneToMany_(() => Contribution, e => e.crowdloan)
  contributions!: Contribution[]

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  raised!: bigint

  @Column_("text", {nullable: false})
  parachainId!: string

  @Index_()
  @ManyToOne_(() => Parachain, {nullable: true})
  parachain!: Parachain

  @Index_()
  @Column_("int4", {nullable: true})
  start!: number | undefined | null

  @Column_("timestamp with time zone", {nullable: true})
  createdAt!: Date | undefined | null
}
