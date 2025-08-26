import { auth } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // Get the raw body for webhook signature verification
    const body = await req.text();
    
    // Get the webhook signature from headers
    const signature = req.headers.get("webhook-signature") || 
                      req.headers.get("x-webhook-signature") ||
                      req.headers.get("polar-signature");

    // For now, just acknowledge the webhook
    // The Polar plugin in Better Auth will be configured separately
    console.log("Polar webhook received:", { 
      hasSignature: !!signature,
      contentLength: body.length 
    });

    // Return success to acknowledge webhook receipt
    return NextResponse.json({ success: true, message: "Webhook received successfully" });
    
  } catch (error) {
    console.error("Webhook error:", error);
    
    // Return success to prevent webhook retries even on error
    // This prevents Polar from retrying the webhook repeatedly
    return NextResponse.json({ 
      success: true, 
      message: "Webhook received (error logged)",
      error: error instanceof Error ? error.message : "Unknown error"
    });
  }
}

// Also handle GET requests for webhook verification
export async function GET(req: NextRequest) {
  // Some webhook providers send a GET request to verify the endpoint
  return NextResponse.json({ 
    status: "ok",
    message: "Polar webhook endpoint is active",
    timestamp: new Date().toISOString()
  });
}