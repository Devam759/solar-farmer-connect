
import { HTMLAttributes } from 'react';

interface StatCardProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

const StatCard = ({ value, label, icon, className, ...props }: StatCardProps) => {
  return (
    <div
      className={`glass-card p-6 hover-scale ${className}`}
      {...props}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-3xl sm:text-4xl font-bold text-gradient">
            {value}
          </p>
          <p className="mt-2 text-sm font-medium text-muted-foreground">
            {label}
          </p>
        </div>
        {icon && <div className="text-primary/80">{icon}</div>}
      </div>
    </div>
  );
};

export default StatCard;
