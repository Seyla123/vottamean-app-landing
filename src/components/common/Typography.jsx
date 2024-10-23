// typography.tsx
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "font-sans scroll-m-20 text-5xl font-medium tracking-tight lg:text-6xl",
      h2: "font-sans mt-8 scroll-m-20 pb-2 text-5xl lg:text-6xl leading-tight lg:leading-tight tracking-tight transition-colors first:mt-0",
      h3: "font-sans mt-8 scroll-m-20 text-2xl tracking-tight",
      h4: "font-sans scroll-m-20 text-xl tracking-tight",
      p: "font-serif text-muted-foreground leading-8 ", //[&:not(:first-child)]:mt-6
      blockquote: "font-serif mt-6 border-l-2 pl-6 italic",
      list: "font-serif my-6 ml-6 list-disc [&>li]:mt-2",
      lead: "font-serif text-xl text-muted-foreground",
      large: "font-serif text-lg font-semibold",
      small: "font-serif text-sm font-medium leading-none",
      muted: "font-serif text-sm text-muted-foreground",
      link: "font-serif font-medium text-primary underline underline-offset-4 hover:text-primary/80",
    },
  },
  defaultVariants: {
    variant: "p",
  },
});

export function Typography({
  variant,
  as: Component = "p",
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
