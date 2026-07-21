"use client";

import { SnackbarProvider } from "notistack";
import { UserProvider } from "@/common/context/userContext";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <UserProvider>
      <SnackbarProvider maxSnack={3}>
        {children}
      </SnackbarProvider>
    </UserProvider>
  );
}