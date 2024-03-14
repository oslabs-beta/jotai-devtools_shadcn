import React from 'react';


type MetaInfoProps = {
  label: string;
  value: string;
  className?: string;
  color?: string;
};

export const MetaInfo = ({ label, value, className }: MetaInfoProps) => {
  return (
    <div className={`mb-4 ${className}`}>
      <p
        className="text-xs uppercase font-bold text-muted-foreground"
        data-testid={`meta-info-label-${label}`}
      >
        {label}
      </p>
      <code
        className="text-sm font-mono text-foreground bg-gray-100 dark:bg-slate-600 px-2 py-1 rounded"
        data-testid={`meta-info-value-${value}`}
      >
        {value}
      </code>
    </div>
  );
};
