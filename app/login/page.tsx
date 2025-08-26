"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Mail, Lock, Eye, EyeOff, ArrowRight,
  Chrome, Github, Apple, Zap, Shield
} from 'lucide-react'
import { useState, Suspense } from 'react'
import { authClient } from "@/lib/auth-client"
import { useRouter, useSearchParams } from 'next/navigation'
import { toast } from "sonner"

function LoginContent() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()
  const returnTo = searchParams.get("returnTo")

  const handleGoogleLogin = async () => {
    try {
      setLoading(true)
      await authClient.signIn.social(
        {
          provider: "google",
          callbackURL: returnTo || "/dashboard",
        },
        {
          onRequest: () => {
            setLoading(true)
          },
          onResponse: () => {
            setLoading(false)
          },
          onError: (ctx: any) => {
            setLoading(false)
            console.error("Sign-in failed:", ctx.error)
            toast.error("Authentication failed. Please try again.")
          },
        },
      )
    } catch (error) {
      setLoading(false)
      console.error("Authentication error:", error)
      toast.error("Something went wrong. Please try again.")
    }
  }

  const socialLogins = [
    { name: 'Google', icon: Chrome, color: 'bg-red-500 hover:bg-red-600', action: handleGoogleLogin },
    { name: 'GitHub', icon: Github, color: 'bg-gray-900 hover:bg-gray-800', action: () => toast.info("GitHub login coming soon!") },
    { name: 'Apple', icon: Apple, color: 'bg-gray-900 hover:bg-gray-800', action: () => toast.info("Apple login coming soon!") }
  ]

  const features = [
    {
      icon: Zap,
      title: "AI-Powered SEO",
      description: "Advanced algorithms that optimize your rankings automatically"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security to protect your data and campaigns"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-electric-50 flex">
      {/* Left Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-md"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 mb-8">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl blur opacity-20"></div>
              <div className="relative">
                <svg className="h-9 w-9" viewBox="0 0 40 40" fill="none">
                  <rect width="40" height="40" rx="10" fill="url(#logo-gradient)"></rect>
                  <path d="M20 8L12 20L20 32L28 20L20 8Z" fill="white" fillOpacity="0.9"></path>
                  <path d="M20 14L16 20L20 26L24 20L20 14Z" fill="url(#logo-inner)"></path>
                  <defs>
                    <linearGradient id="logo-gradient" x1="0" y1="0" x2="40" y2="40">
                      <stop stopColor="#10B981"></stop>
                      <stop offset="1" stopColor="#059669"></stop>
                    </linearGradient>
                    <linearGradient id="logo-inner" x1="16" y1="14" x2="24" y2="26">
                      <stop stopColor="#059669"></stop>
                      <stop offset="1" stopColor="#047857"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <span className="text-[26px] font-bold tracking-tight">
              <span className="text-gray-900">Goal</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">SEO</span>
            </span>
          </Link>

          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome back
            </h1>
            <p className="text-gray-600">
              Sign in to your GoalSEO account to continue optimizing your search rankings.
            </p>
          </div>

          {/* Social Login Buttons */}
          <div className="space-y-3 mb-6">
            {socialLogins.map((provider) => {
              const Icon = provider.icon
              return (
                <button
                  key={provider.name}
                  onClick={provider.action}
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium text-gray-700">
                    {loading && provider.name === 'Google' ? 'Connecting...' : `Continue with ${provider.name}`}
                  </span>
                </button>
              )
            })}
          </div>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with email</span>
            </div>
          </div>

          {/* Login Form */}
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>

              <Link
                href="/forgot-password"
                className="text-sm text-primary-600 hover:text-primary-500"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-primary-600 hover:to-primary-700 transition-all"
            >
              Sign in to your account
              <ArrowRight className="h-5 w-5" />
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <Link
                href="/signup"
                className="text-primary-600 hover:text-primary-500 font-semibold"
              >
                Sign up for free
              </Link>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Right Side - Features */}
      <div className="hidden lg:flex lg:flex-1 items-center justify-center p-12 bg-gradient-to-br from-primary-500 via-primary-600 to-electric-600">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-lg text-white"
        >
          <h2 className="text-4xl font-bold mb-6">
            AI-Powered SEO That Delivers Results
          </h2>
          
          <p className="text-xl text-white/90 mb-8">
            Join over 10,000 businesses using GoalSEO to dominate search rankings 
            with our advanced AI technology.
          </p>

          <div className="space-y-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-white/80">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <div className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-xl">
            <div className="text-3xl font-bold mb-2">387% Average ROI</div>
            <p className="text-white/80">
              Our clients see exceptional returns with AI-powered SEO strategies
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    }>
      <LoginContent />
    </Suspense>
  )
}