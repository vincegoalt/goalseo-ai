import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { getSubscriptionDetails } from "@/lib/subscription";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/sign-in");
  }

  const subscriptionDetails = await getSubscriptionDetails();

  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back, {session.user.name || session.user.email}!</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* User Profile Card */}
          <Card>
            <CardHeader>
              <CardTitle>Profile</CardTitle>
              <CardDescription>Your account information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm">
                  <span className="font-medium">Email:</span> {session.user.email}
                </p>
                <p className="text-sm">
                  <span className="font-medium">Name:</span> {session.user.name || "Not set"}
                </p>
                <p className="text-sm">
                  <span className="font-medium">Member since:</span>{" "}
                  {new Date(session.user.createdAt).toLocaleDateString()}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Subscription Card */}
          <Card>
            <CardHeader>
              <CardTitle>Subscription</CardTitle>
              <CardDescription>Your current plan</CardDescription>
            </CardHeader>
            <CardContent>
              {subscriptionDetails.hasSubscription ? (
                <div className="space-y-2">
                  <p className="text-sm">
                    <span className="font-medium">Status:</span>{" "}
                    <span className="capitalize">{subscriptionDetails.subscription?.status}</span>
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Plan:</span> Starter
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Billing:</span> ${subscriptionDetails.subscription?.amount / 100}/
                    {subscriptionDetails.subscription?.recurringInterval}
                  </p>
                  <Button variant="outline" size="sm" className="mt-4" asChild>
                    <Link href="/subscription">Manage Subscription</Link>
                  </Button>
                </div>
              ) : (
                <div>
                  <p className="text-sm text-gray-600 mb-4">No active subscription</p>
                  <Button size="sm" asChild>
                    <Link href="/subscription">View Plans</Link>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Quick Actions Card */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="/account">Account Settings</Link>
                </Button>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="/subscription">Billing & Plans</Link>
                </Button>
                <form
                  action={async () => {
                    "use server";
                    await auth.api.signOut({
                      headers: await headers(),
                    });
                    redirect("/");
                  }}
                >
                  <Button variant="outline" size="sm" className="w-full" type="submit">
                    Sign Out
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Area */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>SEO Dashboard</CardTitle>
            <CardDescription>Your SEO metrics and insights</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Your SEO dashboard content will appear here. This is where you'll see your keyword rankings,
              site audits, and performance metrics.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}