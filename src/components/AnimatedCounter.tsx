import { useEffect, useState } from 'react';

interface AnimatedCounterProps {
  value: string;
  label: string;
  className?: string;
  style?: React.CSSProperties;
  icon?: React.ReactNode;
}

const AnimatedCounter = ({ value, label, className = '', style, icon }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  // Extract numeric value and unit/percentage
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
  const isPercentage = value.includes('%');
  const unit = value.includes('MW') ? ' MW' : 
                value.includes('Cr') ? ' Cr' : 
                value.includes('Tons') ? ' Tons' : 
                value.includes('+') ? '+' : 
                isPercentage ? '%' : '';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`counter-${label}`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [label]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = numericValue / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      setCount(Math.min(increment * currentStep, numericValue));
      
      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [isVisible, numericValue]);

  return (
    <div id={`counter-${label}`} className={`glass-card p-6 ${className}`} style={style}>
      <div className="flex items-center gap-4 mb-4">
        {icon && (
          <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
            {icon}
          </div>
        )}
        <div>
          <div className="text-3xl font-bold text-gradient">
            {isPercentage ? `${Math.round(count)}%` : 
             value.includes('+') ? `${Math.round(count).toLocaleString()}+` : 
             `${Math.round(count).toLocaleString()}${unit}`}
          </div>
          <div className="text-sm font-semibold text-muted-foreground mt-1">{label}</div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCounter; 