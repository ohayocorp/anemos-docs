import React from 'react';

export const Button = ({ children, href, className = '', ...props }) => {
  const Component = href ? 'a' : 'button';

  return (
    <Component
      {...props}
      {...(href ? { href } : { type: 'button' })}
      className={`relative z-10 pointer-events-auto cursor-pointer !no-underline h-12 text-sm overflow-hidden rounded flex items-center justify-center bg-white dark:bg-neutral-900 px-5 py-2.5 !text-black dark:!text-white !transition-all !duration-300 ring-1 ring-neutral-300 dark:ring-neutral-500 ring-offset-2 dark:ring-offset-neutral-900 hover:bg-slate-100 hover:dark:bg-neutral-700 hover:ring-3 hover:ring-neutral-200 hover:dark:ring-neutral-700 font-[Sora] hover:ring-offset-6 w-[10rem] ${className}`}
    >
      <span className="relative text-center">{children}</span>
    </Component>
  );
};

export const PrimaryButton = ({ children, href, className = '', ...props }) => {
  const Component = href ? 'a' : 'button';

  return (
    <Component
      {...props}
      {...(href ? { href } : { type: 'button' })}
      style={{
        backgroundColor: 'var(--ifm-color-primary)',
        borderColor: 'var(--ifm-color-primary)',
      }}
      className={`relative z-10 pointer-events-auto cursor-pointer !no-underline h-12 overflow-hidden text-sm rounded flex items-center justify-center font-[Sora] text-white px-5 py-2.5 !transition-all !duration-300 ring-neutral-300 ring-1 ring-offset-3 dark:ring-offset-neutral-900 hover:ring-3 hover:ring-offset-6 w-[10rem] ${className}`}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--ifm-color-primary-darker, var(--ifm-color-primary))';
        e.currentTarget.style.borderColor = 'var(--ifm-color-primary-darker, var(--ifm-color-primary))';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--ifm-color-primary)';
        e.currentTarget.style.borderColor = 'var(--ifm-color-primary)';
      }}
    >
      <span className="relative">{children}</span>
    </Component>
  );
};