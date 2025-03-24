
import { HTMLAttributes } from 'react';

interface TimelineItemProps extends HTMLAttributes<HTMLDivElement> {
  date: string;
  title: string;
  description: string;
  isLast?: boolean;
}

const TimelineItem = ({ 
  date, 
  title, 
  description, 
  isLast = false,
  className,
  ...props 
}: TimelineItemProps) => {
  return (
    <div className={`relative pl-8 ${!isLast ? 'pb-10' : ''} ${className}`} {...props}>
      {/* Timeline connector */}
      {!isLast && (
        <div className="absolute left-2.5 top-3 h-full w-px bg-primary/20"></div>
      )}

      {/* Timeline dot */}
      <div className="absolute left-0 top-1 h-5 w-5 rounded-full border-2 border-primary bg-background"></div>

      {/* Content */}
      <div>
        <span className="block text-sm font-medium text-primary mb-1">{date}</span>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
