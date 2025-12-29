"use client";

import EarlyAccessForm from "@/components/EarlyAccessForm";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Upload,
  Video,
  BarChart3,
  FileText,
  Users,
  Heart,
  Trophy,
} from "lucide-react";

export default function Home() {

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-[#0a1628]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-semibold tracking-tight">
            GullyVision
          </div>
          <Button className="bg-[#3b82f6] hover:bg-[#2563eb] text-white">
            Request Early Access
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance leading-[1.1]">
            Turn a Bowling Video into Performance Intelligence
          </h1>
          <p className="text-xl md:text-2xl text-white/70 text-balance max-w-3xl mx-auto leading-relaxed">
            AI-driven feedback for aspiring cricket fast bowlers. Get objective
            performance insights from your smartphone—no elite coaching
            required.
          </p>
          <EarlyAccessForm />
        </div>
      </section>

      {/* Problem Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-[#141f35] border-white/10 p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              The Challenge
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              Talented fast bowlers in Tier 2 and Tier 3 regions face a critical
              gap: lack of objective, technical feedback. Without access to
              professional coaching or biomechanical analysis, raw talent often
              goes unrefined. GullyVision bridges this gap by bringing performance
              intelligence to every gully and ground.
            </p>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
              How It Works
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Four simple steps to unlock your bowling potential
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-[#141f35] border-white/10 p-8 text-center space-y-4 hover:bg-[#1a2844] transition-colors">
              <div className="w-14 h-14 rounded-full bg-[#3b82f6]/10 flex items-center justify-center mx-auto">
                <Video className="w-7 h-7 text-[#3b82f6]" />
              </div>
              <h3 className="text-xl font-semibold">Record</h3>
              <p className="text-white/70 leading-relaxed">
                Capture your bowling action with any smartphone camera
              </p>
            </Card>

            <Card className="bg-[#141f35] border-white/10 p-8 text-center space-y-4 hover:bg-[#1a2844] transition-colors">
              <div className="w-14 h-14 rounded-full bg-[#3b82f6]/10 flex items-center justify-center mx-auto">
                <Upload className="w-7 h-7 text-[#3b82f6]" />
              </div>
              <h3 className="text-xl font-semibold">Upload</h3>
              <p className="text-white/70 leading-relaxed">
                Submit your video through our simple platform
              </p>
            </Card>

            <Card className="bg-[#141f35] border-white/10 p-8 text-center space-y-4 hover:bg-[#1a2844] transition-colors">
              <div className="w-14 h-14 rounded-full bg-[#3b82f6]/10 flex items-center justify-center mx-auto">
                <BarChart3 className="w-7 h-7 text-[#3b82f6]" />
              </div>
              <h3 className="text-xl font-semibold">Analyze</h3>
              <p className="text-white/70 leading-relaxed">
                AI processes your action, tracking key biomechanical markers
              </p>
            </Card>

            <Card className="bg-[#141f35] border-white/10 p-8 text-center space-y-4 hover:bg-[#1a2844] transition-colors">
              <div className="w-14 h-14 rounded-full bg-[#3b82f6]/10 flex items-center justify-center mx-auto">
                <FileText className="w-7 h-7 text-[#3b82f6]" />
              </div>
              <h3 className="text-xl font-semibold">Scorecard</h3>
              <p className="text-white/70 leading-relaxed">
                Receive actionable insights and performance metrics
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
              Who Is This For?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-[#141f35] border-white/10 p-10 space-y-6 hover:bg-[#1a2844] transition-colors">
              <div className="w-14 h-14 rounded-full bg-[#3b82f6]/10 flex items-center justify-center">
                <Trophy className="w-7 h-7 text-[#3b82f6]" />
              </div>
              <h3 className="text-2xl font-semibold">
                Aspiring Fast Bowlers
              </h3>
              <p className="text-white/70 leading-relaxed">
                Get the technical feedback you need to refine your action and
                reach your potential—whether you're in a village or a city.
              </p>
            </Card>

            <Card className="bg-[#141f35] border-white/10 p-10 space-y-6 hover:bg-[#1a2844] transition-colors">
              <div className="w-14 h-14 rounded-full bg-[#3b82f6]/10 flex items-center justify-center">
                <Heart className="w-7 h-7 text-[#3b82f6]" />
              </div>
              <h3 className="text-2xl font-semibold">Parents</h3>
              <p className="text-white/70 leading-relaxed">
                Support your child's cricket journey with data-driven insights
                that help them improve safely and effectively.
              </p>
            </Card>

            <Card className="bg-[#141f35] border-white/10 p-10 space-y-6 hover:bg-[#1a2844] transition-colors">
              <div className="w-14 h-14 rounded-full bg-[#3b82f6]/10 flex items-center justify-center">
                <Users className="w-7 h-7 text-[#3b82f6]" />
              </div>
              <h3 className="text-2xl font-semibold">Coaches</h3>
              <p className="text-white/70 leading-relaxed">
                Enhance your coaching toolkit with objective biomechanical
                analysis to guide multiple players efficiently.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-[#141f35] to-[#1a2844] border-[#3b82f6]/20 p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              Our Vision
            </h2>
            <p className="text-xl text-white/80 leading-relaxed text-balance">
              To democratize performance intelligence for cricket. Every talented
              fast bowler, regardless of location or resources, deserves access
              to world-class feedback. GullyVision makes that possible.
            </p>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            Ready to Transform Your Bowling?
          </h2>
          <p className="text-xl text-white/70 text-balance">
            Join the waitlist and be among the first to experience AI-powered
            bowling analysis.
          </p>
          <Button
            size="lg"
            className="bg-[#3b82f6] hover:bg-[#2563eb] text-white text-lg px-8 py-6 h-auto"
          >
            Request Early Access
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-3">
            <div className="text-xl font-semibold">GullyVision</div>
            <p className="text-white/60">
              Democratizing performance intelligence for cricket
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
