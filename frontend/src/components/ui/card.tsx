import * as React from "react";
import { cn } from "../../lib/utils";

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("rounded-lg border bg-white p-4 shadow", className)} {...props} />
));

Card.displayName = "Card";

export { Card };
