// typography.tsx
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

const typographyVariants = cva('', {
  variants: {
    variant: {
      h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
      h2: 'mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0',
      h3: 'mt-8 scroll-m-20 text-2xl font-semibold tracking-tight',
      h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
      p: 'leading-7 [&:not(:first-child)]:mt-6',
      blockquote: 'mt-6 border-l-2 pl-6 italic',
      list: 'my-6 ml-6 list-disc [&>li]:mt-2',
      lead: 'text-xl text-muted-foreground',
      large: 'text-lg font-semibold',
      small: 'text-sm font-medium leading-none',
      muted: 'text-sm text-muted-foreground',
      link: 'font-medium text-primary underline underline-offset-4 hover:text-primary/80',
    },
  },
  defaultVariants: {
    variant: 'p',
  },
});

export function Typography({
  variant,
  as: Component = 'p',
  className,
  ...props
}) {
  return (
    <Component
      className={cn(typographyVariants({ variant, className }))}
      {...props}
    />
  );
}
