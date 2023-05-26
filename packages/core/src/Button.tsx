import type * as React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
}

export function Button(props: ButtonProps) {
  return <button>{props.children}aaaaa</button>;
}

Button.displayName = 'Button';
