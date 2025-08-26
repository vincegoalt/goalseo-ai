"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { authClient } from "@/lib/auth-client";
import { Check } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type SubscriptionDetails = {
  id: string;
  productId: string;
  status: string;
  amount: number;
  currency: string;
  recurringInterval: string;
  currentPeriodStart: Date;
  currentPeriodEnd: Date;
  cancelAtPeriodEnd: boolean;
  canceledAt: Date | null;
  organizationId: string | null;
};

type SubscriptionDetailsResult = {
  hasSubscription: boolean;
  subscription?: SubscriptionDetails;
  error?: string;
  errorType?: "CANCELED" | "EXPIRED" | "GENERAL";
};

interface PricingTableProps {
  subscriptionDetails: SubscriptionDetailsResult;
}

export default function PricingTable({
  subscriptionDetails,
}: PricingTableProps) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const session = await authClient.getSession();
        setIsAuthenticated(!!session.data?.user);
      } catch {
        setIsAuthenticated(false);
      }
    };
    checkAuth();
  }, []);

  const handleCheckout = async (productId: string, slug: string) => {
    if (isAuthenticated === false) {
      router.push("/sign-in");
      return;
    }

    try {
      await authClient.checkout({
        products: [productId],
        slug: slug,
      });
    } catch (error) {
      console.error("Checkout failed:", error);
      toast.error("Oops, something went wrong");
    }
  };

  const handleManageSubscription = async () => {
    try {
      await authClient.customer.portal();
    } catch (error) {
      console.error("Failed to open customer portal:", error);
      toast.error("Failed to open subscription management");
    }
  };

  const STARTER_TIER = process.env.NEXT_PUBLIC_STARTER_TIER || "starter_product_id";
  const STARTER_SLUG = process.env.NEXT_PUBLIC_STARTER_SLUG || "starter";
  const GROWTH_TIER = process.env.NEXT_PUBLIC_GROWTH_TIER || "growth_product_id";
  const GROWTH_SLUG = process.env.NEXT_PUBLIC_GROWTH_SLUG || "growth";

  const isCurrentPlan = (tierProductId: string) => {
    return (
      subscriptionDetails.hasSubscription &&
      subscriptionDetails.subscription?.productId === tierProductId &&
      subscriptionDetails.subscription?.status === "active"
    );
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section className="flex flex-col items-center justify-center px-4 mb-24 w-full">
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">
          Choose Your <span className="bg-gradient-to-r from-primary-500 to-electric-500 bg-clip-text text-transparent">Growth Plan</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Start your 14-day free trial. No credit card required. Cancel anytime.
        </p>
      </div>

      {subscriptionDetails.error && (
        <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg max-w-md w-full">
          <p className="text-red-600 text-sm">{subscriptionDetails.error}</p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl w-full">
        {/* Starter Tier */}
        <Card className="relative h-fit">
          {isCurrentPlan(STARTER_TIER) && (
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Badge
                variant="secondary"
                className="bg-green-100 text-green-800"
              >
                Current Plan
              </Badge>
            </div>
          )}
          <CardHeader>
            <CardTitle className="text-2xl">Starter</CardTitle>
            <CardDescription>Perfect for small businesses</CardDescription>
            <div className="mt-4">
              <span className="text-gray-400 line-through text-xl">$299</span>
              <span className="text-4xl font-bold ml-2">$99</span>
              <span className="text-muted-foreground">/month</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Check className="h-5 w-5 text-green-500" />
              <span>Up to 100 pages optimized</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="h-5 w-5 text-green-500" />
              <span>Basic AI SEO automation</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="h-5 w-5 text-green-500" />
              <span>Weekly performance reports</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="h-5 w-5 text-green-500" />
              <span>100 keywords tracked</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="h-5 w-5 text-green-500" />
              <span>Technical SEO audit</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="h-5 w-5 text-green-500" />
              <span>Email support</span>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            {isCurrentPlan(STARTER_TIER) ? (
              <>
                <Button
                  onClick={handleManageSubscription}
                  variant="outline"
                  className="w-full"
                >
                  Manage Subscription
                </Button>
                {subscriptionDetails.subscription?.cancelAtPeriodEnd && (
                  <p className="text-sm text-muted-foreground text-center">
                    Cancels on {formatDate(subscriptionDetails.subscription.currentPeriodEnd)}
                  </p>
                )}
              </>
            ) : (
              <Button
                onClick={() => handleCheckout(STARTER_TIER, STARTER_SLUG)}
                className="w-full"
              >
                Get Started
              </Button>
            )}
          </CardFooter>
        </Card>

        {/* Growth Tier */}
        <Card className="relative h-fit border-primary-500 shadow-xl transform scale-105">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <Badge className="bg-gradient-to-r from-primary-500 to-electric-500 text-white">
              Most Popular
            </Badge>
          </div>
          {isCurrentPlan(GROWTH_TIER) && (
            <div className="absolute -top-3 right-4">
              <Badge
                variant="secondary"
                className="bg-green-100 text-green-800"
              >
                Current Plan
              </Badge>
            </div>
          )}
          <CardHeader>
            <CardTitle className="text-2xl">Growth Engine</CardTitle>
            <CardDescription>Complete SEO ecosystem for serious growth</CardDescription>
            <div className="mt-4">
              <span className="text-gray-400 line-through text-xl">$999</span>
              <span className="text-4xl font-bold ml-2">$499</span>
              <span className="text-muted-foreground">/month</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Check className="h-5 w-5 text-green-500" />
              <span>Unlimited pages optimized</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="h-5 w-5 text-green-500" />
              <span>Advanced AI SEO automation</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="h-5 w-5 text-green-500" />
              <span>Real-time performance tracking</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="h-5 w-5 text-green-500" />
              <span>Unlimited keyword tracking</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="h-5 w-5 text-green-500" />
              <span>AI content generation</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="h-5 w-5 text-green-500" />
              <span>Competitor intelligence</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="h-5 w-5 text-green-500" />
              <span>Priority support</span>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            {isCurrentPlan(GROWTH_TIER) ? (
              <>
                <Button
                  onClick={handleManageSubscription}
                  variant="outline"
                  className="w-full"
                >
                  Manage Subscription
                </Button>
                {subscriptionDetails.subscription?.cancelAtPeriodEnd && (
                  <p className="text-sm text-muted-foreground text-center">
                    Cancels on {formatDate(subscriptionDetails.subscription.currentPeriodEnd)}
                  </p>
                )}
              </>
            ) : (
              <Button
                onClick={() => handleCheckout(GROWTH_TIER, GROWTH_SLUG)}
                className="w-full bg-gradient-to-r from-primary-500 to-electric-500 hover:from-primary-600 hover:to-electric-600"
              >
                Start 14-Day Free Trial
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>

      <div className="mt-12 text-center max-w-2xl mx-auto space-y-4">
        <p className="text-muted-foreground">
          All plans include a 14-day free trial. No credit card required to start.
          Cancel anytime with no questions asked.
        </p>
        <div className="pt-4">
          <p className="text-sm text-gray-600 mb-2">Need a custom solution?</p>
          <Button
            onClick={() => router.push('/contact?type=enterprise')}
            variant="outline"
            className="inline-flex items-center gap-2"
          >
            Contact Sales for Enterprise Plans
          </Button>
        </div>
      </div>
    </section>
  );
}