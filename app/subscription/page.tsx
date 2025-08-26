import { getSubscriptionDetails } from "@/lib/subscription";
import PricingTable from "./_component/pricing-table";

export default async function SubscriptionPage() {
  const subscriptionDetails = await getSubscriptionDetails();

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen pt-20">
      <PricingTable subscriptionDetails={subscriptionDetails} />
    </div>
  );
}