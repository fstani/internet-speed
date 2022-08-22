import React from 'react';

export interface ChartContainerProps {
  children: React.ReactNode
}

export const ChartContainer: React.FC<ChartContainerProps> = ({
  children
}) => {
  return (
    <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 w-fit h-fit">
      {children}
    </div>
  )
}