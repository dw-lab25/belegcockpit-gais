import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    width="160" 
    height="32" 
    viewBox="0 0 160 32"
    className={className} 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
    aria-label="BelegCockpit Logo"
  >
    <g>
      <path d="M25.414 0H5.5C4.94772 0 4.5 0.447715 4.5 1V7.5H1C0.447715 7.5 0 7.94772 0 8.5V27.5C0 28.0523 0.447715 28.5 1 28.5H4V30L5.5 31.5L7 30L8.5 31.5L10 30L11.5 31.5L13 30L14.5 31.5L16 30L17.5 31.5L19 30L20.5 31.5L22 30L23.5 31.5L25 30L26.5 28.5H27C27.5523 28.5 28 28.0523 28 27.5V1H25.414ZM26 26.5H2C1.72386 26.5 1.5 26.2761 1.5 26V9H6C6.27614 9 6.5 8.77614 6.5 8.5V1.5H24.5V7.91421L26 6.41421V26.5Z M25.0858 1.5L20.5 6.08579V1.5H25.0858Z" />
      <path d="M14 23C10.134 23 7 19.866 7 16C7 12.134 10.134 9 14 9C17.866 9 21 12.134 21 16C21 19.866 17.866 23 14 23ZM14 10.5C11.0325 10.5 8.5 13.0325 8.5 16C8.5 18.9675 11.0325 21.5 14 21.5C16.9675 21.5 19.5 18.9675 19.5 16C19.5 13.0325 16.9675 10.5 14 10.5Z" />
      <path d="M14 18.5C13.5858 18.5 13.25 18.1642 13.25 17.75V13.25C13.25 12.8358 13.5858 12.5 14 12.5C14.4142 12.5 14.75 12.8358 14.75 13.25V17.75C14.75 18.1642 14.4142 18.5 14 18.5Z" />
      <path d="M10.165 14.335C9.97 14.14 9.655 14.14 9.46 14.335L9.125 14.67C8.93 14.865 8.93 15.18 9.125 15.375L13.625 19.875C13.82 20.07 14.135 20.07 14.33 19.875L14.665 19.54C14.86 19.345 14.86 19.03 14.665 18.835L10.165 14.335Z" />
    </g>
    <text x="40" y="12" fontFamily="Inter, sans-serif" fontWeight="bold" fontSize="14" fill="currentColor">Beleg</text>
    <text x="40" y="29" fontFamily="Inter, sans-serif" fontWeight="bold" fontSize="14" fill="currentColor">Cockpit</text>
  </svg>
);

export const QuoteIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className || "w-12 h-12"} viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.5 10c-1.11 0-2 .9-2 2s.89 2 2 2 2-.9 2-2-.89-2-2-2zm6 0c-1.11 0-2 .9-2 2s.89 2 2 2 2-.9 2-2-.89-2-2-2zm-11-4v10h10V6H1.5zM19.5 6v10h3V6h-3zm-5-2c.83 0 1.5.67 1.5 1.5V17c0 .83-.67 1.5-1.5 1.5H1.5c-.83 0-1.5-.67-1.5-1.5V5.5c0-.83.67-1.5 1.5-1.5h13zm5 0c.83 0 1.5.67 1.5 1.5V17c0 .83-.67 1.5-1.5 1.5h-3c-.83 0-1.5-.67-1.5-1.5V5.5c0-.83.67-1.5 1.5-1.5h3z" transform="scale(-1, 1) translate(-24, 0)"></path>
    </svg>
);

export const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className || "h-6 w-6"}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5-7.5M21 12H3" />
  </svg>
);

export const PlusIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
);

export const MinusIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
    </svg>
);

export const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-5 h-5"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);

export const ExclamationTriangleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
    </svg>
);

export const EnvelopeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
);

export const DocumentTextIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
    </svg>
);

export const ClockIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);