import React, { useState } from 'react';
import { Eye, Zap, Target, TrendingUp, Mail, Github, Twitter } from 'lucide-react';

export default function EyelineLanding() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // In production, connect to your backend/email service
    setStatus('Thanks! We\'ll be in touch soon.');
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <Eye className="w-20 h-20 text-blue-400" strokeWidth={1.5} />
              <div className="absolute inset-0 animate-ping opacity-20">
                <Eye className="w-20 h-20 text-blue-400" strokeWidth={1.5} />
              </div>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Eyeline
          </h1>
          <p className="text-3xl font-semibold mb-4 text-slate-200">
            Production Monitoring for Computer Vision Models
          </p>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Stop debugging model failures blindly. Eyeline shows you exactly why your CV models fail in production.
          </p>

          {/* Email Capture */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-4">
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-6 py-4 rounded-lg bg-slate-800/50 border border-slate-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white placeholder-slate-400"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105 shadow-lg"
              >
                Join Waitlist
              </button>
            </div>
            {status && (
              <p className="mt-4 text-green-400 font-medium">{status}</p>
            )}
          </form>

          <p className="text-slate-400 mb-16">
            Coming soon...
          </p>
        </div>

        {/* Problem Section */}
        <div className="max-w-5xl mx-auto mt-24 mb-24">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-200">
            The Problem
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-xl border border-slate-700">
              <div className="text-4xl mb-4">😤</div>
              <h3 className="text-xl font-semibold mb-3">Slow Debugging</h3>
              <p className="text-slate-300">
                Debugging CV failures takes days of manual investigation through logs and samples
              </p>
            </div>
            <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-xl border border-slate-700">
              <div className="text-4xl mb-4">📉</div>
              <h3 className="text-xl font-semibold mb-3">Silent Failures</h3>
              <p className="text-slate-300">
                Production accuracy drops without warning. You only notice when users complain
              </p>
            </div>
            <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-xl border border-slate-700">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-3">No Visibility</h3>
              <p className="text-slate-300">
                No insight into why models fail. Is it lighting? Camera angle? New edge cases?
              </p>
            </div>
          </div>
        </div>

        {/* Solution Section */}
        <div className="max-w-5xl mx-auto mb-24">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-200">
            The Solution
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm p-8 rounded-xl border border-blue-700/50">
              <Zap className="w-12 h-12 mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-3">Auto-Detection</h3>
              <p className="text-slate-300">
                Automatic failure detection & clustering. See that 47% of failures are low-light conditions
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm p-8 rounded-xl border border-blue-700/50">
              <TrendingUp className="w-12 h-12 mb-4 text-purple-400" />
              <h3 className="text-xl font-semibold mb-3">Real-time Drift</h3>
              <p className="text-slate-300">
                Monitor accuracy and data drift in real-time. Get alerts before users notice problems
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm p-8 rounded-xl border border-blue-700/50">
              <Target className="w-12 h-12 mb-4 text-green-400" />
              <h3 className="text-xl font-semibold mb-3">Export & Fix</h3>
              <p className="text-slate-300">
                Export failures as training data. Retrain your model on actual production edge cases
              </p>
            </div>
          </div>
        </div>

        {/* Use Case */}
        <div className="max-w-3xl mx-auto mb-24 text-center">
          <h2 className="text-2xl font-bold mb-6 text-slate-200">
            Built for ML Engineers
          </h2>
          <p className="text-lg text-slate-300 mb-4">
            Deploying computer vision models to production?
          </p>
          <p className="text-slate-400">
            Works with any framework: PyTorch, TensorFlow, YOLO, ONNX, and more.
          </p>
        </div>

        {/* Simple Code Example */}
        <div className="max-w-2xl mx-auto mb-24">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 font-mono text-sm">
            <div className="text-slate-500 mb-2"># 3 lines to start monitoring</div>
            <div className="text-blue-400">import <span className="text-white">eyeline</span></div>
            <div className="mt-2">
              <span className="text-purple-400">monitor</span> = eyeline.<span className="text-blue-400">Monitor</span>(<span className="text-green-400">"yolov8-prod"</span>)
            </div>
            <div className="mt-2">
              monitor.<span className="text-blue-400">log</span>(image, predictions)
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="max-w-4xl mx-auto text-center border-t border-slate-700 pt-12">
          <div className="flex justify-center gap-6 mb-6">
            <a href="https://github.com/eyeline" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://twitter.com/eyeline" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="mailto:contact@eyeline.dev" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <p className="text-slate-400 mb-2">
            Made with ❤️ in Mexico
          </p>
          <p className="text-slate-500 text-sm">
            © 2025 Eyeline. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}