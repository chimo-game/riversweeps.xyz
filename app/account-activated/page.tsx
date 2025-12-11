import type { Metadata } from "next"
import AccountActivatedClient from "./client-page"

export const metadata: Metadata = {
  title: "Account Activated | RiverSweeps",
  description: "Your RiverSweeps account is now active. Start playing and claiming rewards.",
}

export default function AccountActivatedPage() {
  return <AccountActivatedClient />
}

