import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CategoryEnum } from '../common/enums/category.enum';
import { User } from 'src/users/entities/user.entity';

@Entity({ name: 'jobs' })
export class Job {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  description: string;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  total: number;

  @Column({ type: 'enum', enum: CategoryEnum })
  category: CategoryEnum;

  @ManyToOne(() => User, (user) => user.jobs)
  user: User;
}