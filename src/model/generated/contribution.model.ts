import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {Crowdloan} from "./crowdloan.model"
import {Account} from "./account.model"

@Entity_()
export class Contribution {
  constructor(props?: Partial<Contribution>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Index_()
  @ManyToOne_(() => Crowdloan, {nullable: true})
  crowdloan!: Crowdloan

  @Index_()
  @ManyToOne_(() => Account, {nullable: true})
  account!: Account

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  amount!: bigint
}
