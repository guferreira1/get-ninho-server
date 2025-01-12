import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { PaymentFormEnum } from '../common/enums/payment-forms.enum';
import { PaymentStatusEnum } from '../common/enums/payment-status.enum';
import { User } from 'src/users/entities/user.entity';
import { Job } from 'src/jobs/entities/job.entity';
import { Image } from './image.entity';
import { OrderStatusEnum } from '../common/enums/order-status.enum';

@Entity({ name: 'service_orders' })
export class ServiceOrder {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  total: number;

  @Column({ type: 'enum', enum: PaymentFormEnum, name: 'payment_form' })
  paymentForm: PaymentFormEnum;

  @Column({ type: 'enum', enum: PaymentStatusEnum, name: 'payment_status' })
  paymentStatus: PaymentStatusEnum;

  @Column({ type: 'enum', enum: OrderStatusEnum, name: 'order_status' })
  orderStatus: OrderStatusEnum;

  @Column({ type: 'datetime', name: 'finished_date', nullable: true })
  finishedDate: Date;

  @CreateDateColumn({ type: 'datetime', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'datetime', name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.serviceOrdersAsProfessional)
  professional: User;

  @ManyToOne(() => User, (user) => user.serviceOrdersAsCustomer)
  customer: User;

  @ManyToOne(() => Job, (job) => job.serviceOrders)
  job: Job;

  @OneToMany(() => Image, (images) => images.serviceOrder, { nullable: true })
  images?: Image[];
}
