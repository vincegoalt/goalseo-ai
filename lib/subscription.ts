import { auth } from "@/lib/auth";
import { db } from "@/db/drizzle";
import { subscription } from "@/db/schema";
import { eq, and, or } from "drizzle-orm";

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

export async function getSubscriptionDetails(): Promise<SubscriptionDetailsResult> {
  try {
    const session = await auth.api.getSession({
      headers: await import("next/headers").then((m) => m.headers()),
    });

    if (!session?.user?.id) {
      return { hasSubscription: false };
    }

    const userSubscription = await db
      .select()
      .from(subscription)
      .where(
        and(
          eq(subscription.userId, session.user.id),
          or(
            eq(subscription.status, "active"),
            eq(subscription.status, "trialing"),
            eq(subscription.status, "past_due")
          )
        )
      )
      .limit(1);

    if (!userSubscription || userSubscription.length === 0) {
      // Check if there's a canceled subscription
      const canceledSubscription = await db
        .select()
        .from(subscription)
        .where(
          and(
            eq(subscription.userId, session.user.id),
            eq(subscription.status, "canceled")
          )
        )
        .limit(1);

      if (canceledSubscription && canceledSubscription.length > 0) {
        return {
          hasSubscription: false,
          error: "Your subscription has been canceled",
          errorType: "CANCELED",
        };
      }

      return { hasSubscription: false };
    }

    const sub = userSubscription[0];

    return {
      hasSubscription: true,
      subscription: {
        id: sub.id,
        productId: sub.productId,
        status: sub.status,
        amount: sub.amount,
        currency: sub.currency,
        recurringInterval: sub.recurringInterval,
        currentPeriodStart: sub.currentPeriodStart,
        currentPeriodEnd: sub.currentPeriodEnd,
        cancelAtPeriodEnd: sub.cancelAtPeriodEnd,
        canceledAt: sub.canceledAt,
        organizationId: null,
      },
    };
  } catch (error) {
    console.error("Error fetching subscription details:", error);
    return {
      hasSubscription: false,
      error: "Failed to fetch subscription details",
      errorType: "GENERAL",
    };
  }
}