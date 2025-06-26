// src/components/ui/toast.ts

export type ToastProps = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
};

export type ToastActionElement = React.ReactNode;
