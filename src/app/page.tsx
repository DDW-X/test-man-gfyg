import { LiquidGlassCanvas } from "@/components/canvas/LiquidGlassCanvas";
import { GlassCard } from "@/components/ui/glass-card";
import { Navbar } from "@/components/ui/navbar";
import { Activity, Cpu, Database, Shield, Zap } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-cyan-500/30">
      <LiquidGlassCanvas />
      <Navbar />

      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col gap-8">
        {/* Hero Section */}
        <section className="min-h-[40vh] flex flex-col justify-center gap-6 mt-12 md:mt-20">
          <GlassCard delay={0.1} className="max-w-3xl border-white/20 p-8 md:p-12">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-fuchsia-200">
              Nexus API Platform
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl font-light">
              An immersive research platform powered by multi-node integrations, fluid dynamics, and next-generation glassmorphic architecture.
            </p>
            <div className="mt-8 flex gap-4">
              <button className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.4)]">
                Initialize Sequence
              </button>
              <button className="px-8 py-3 rounded-full bg-black/20 border border-white/20 text-white font-semibold hover:bg-white/10 hover:scale-105 transition-transform backdrop-blur-md">
                View Documentation
              </button>
            </div>
          </GlassCard>
        </section>

        {/* Dashboard Architecture Layout */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
          {/* Main Chart/Data Area */}
          <GlassCard delay={0.2} className="md:col-span-2 md:row-span-2 group">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Activity className="w-5 h-5 text-cyan-400" />
                Network Traffic
              </h3>
              <span className="text-sm px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 border border-emerald-400/30">
                Live
              </span>
            </div>
            <div className="flex-1 w-full flex items-end gap-2 h-48 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
              {/* Fake chart bars */}
              {[40, 70, 45, 90, 65, 85, 120, 95, 60, 110, 80, 100].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-cyan-500/20 to-fuchsia-500/60 rounded-t-sm"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </GlassCard>

          {/* Side Nodes */}
          <GlassCard delay={0.3} className="group cursor-pointer">
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
              <Database className="w-5 h-5 text-fuchsia-400" />
              Main Cluster
            </h3>
            <p className="text-white/60 text-sm">3 nodes active. 99.9% uptime across all localized instances.</p>
            <div className="mt-auto pt-4 text-3xl font-bold tracking-tight">
              1.2 TB/s
            </div>
          </GlassCard>

          <GlassCard delay={0.4} className="group cursor-pointer">
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              Compute Power
            </h3>
            <p className="text-white/60 text-sm">GPU allocation optimal. Neural sub-processors active.</p>
            <div className="mt-auto pt-4 text-3xl font-bold tracking-tight">
              85 TFLOPS
            </div>
          </GlassCard>

          {/* Lower Span */}
          <GlassCard delay={0.5} className="md:col-span-1">
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-emerald-400" />
              Security Protocol
            </h3>
            <div className="space-y-3">
              {[
                { label: "Firewall", status: "Active" },
                { label: "Encryption", status: "AES-256" },
                { label: "Intrusion Det.", status: "Armed" },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center text-sm border-b border-white/10 pb-2 last:border-0">
                  <span className="text-white/70">{item.label}</span>
                  <span className="text-white font-medium">{item.status}</span>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard delay={0.6} className="md:col-span-2 relative overflow-hidden flex items-center">
            <div className="absolute -right-10 -top-10 opacity-20 pointer-events-none">
              <Cpu className="w-64 h-64 text-white" />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2">API Control Node</h3>
              <p className="text-white/70 max-w-md">
                Configure your endpoints, manage auth tokens, and route traffic through the global edge network.
              </p>
              <button className="mt-6 px-5 py-2 rounded-lg bg-white/10 border border-white/20 text-sm font-medium hover:bg-white/20 transition-colors">
                Configure Endpoints →
              </button>
            </div>
          </GlassCard>
        </section>
      </div>
    </main>
  );
}
