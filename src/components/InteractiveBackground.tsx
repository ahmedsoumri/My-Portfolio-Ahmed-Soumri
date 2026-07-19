"use client";

import React, { useEffect, useRef, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
}

interface Ripple {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  color: string;
}

const COLORS = {
  primary: "#8B5CF6",    // Vibrant purple
  secondary: "#06B6D4",  // Cyan
  accent: "#F472B6",     // Pink
  highlight: "#34D399",  // Emerald
};

export function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const ripplesRef = useRef<Ripple[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000, isActive: false });
  const animationRef = useRef<number | null>(null);

  const initParticles = useCallback((width: number, height: number) => {
    const particles: Particle[] = [];
    const colorKeys = Object.values(COLORS);
    const particleCount = width < 768 ? 38 : 72;
    
    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      particles.push({
        x,
        y,
        baseX: x,
        baseY: y,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 4 + 2,
        opacity: Math.random() * 0.6 + 0.3,
        color: colorKeys[Math.floor(Math.random() * colorKeys.length)],
      });
    }
    particlesRef.current = particles;
  }, []);

  const createRipple = useCallback((x: number, y: number) => {
    const colorKeys = Object.values(COLORS);
    ripplesRef.current.push({
      x,
      y,
      radius: 0,
      opacity: 0.8,
      color: colorKeys[Math.floor(Math.random() * colorKeys.length)],
    });
    
    if (ripplesRef.current.length > 10) {
      ripplesRef.current.shift();
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      return;
    }

    const handleResize = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * pixelRatio;
      canvas.height = window.innerHeight * pixelRatio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      initParticles(window.innerWidth, window.innerHeight);
    };

    // Global mouse tracking on window level
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { 
        x: e.clientX, 
        y: e.clientY,
        isActive: true 
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.isActive = false;
    };

    const handleClick = (e: MouseEvent) => {
      createRipple(e.clientX, e.clientY);
      // Create burst of ripples on click
      for (let i = 0; i < 3; i++) {
        setTimeout(() => {
          createRipple(
            e.clientX + (Math.random() - 0.5) * 50,
            e.clientY + (Math.random() - 0.5) * 50
          );
        }, i * 100);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("click", handleClick);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const mouse = mouseRef.current;
      const interactionRadius = 150;

      // Update and draw particles with mouse interaction
      particlesRef.current.forEach((particle) => {
        // Calculate distance to mouse
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Push particles away from cursor (like touching water)
        if (distance < interactionRadius && mouse.isActive) {
          const force = (interactionRadius - distance) / interactionRadius;
          const angle = Math.atan2(dy, dx);
          const pushX = Math.cos(angle) * force * 8;
          const pushY = Math.sin(angle) * force * 8;
          
          particle.x -= pushX;
          particle.y -= pushY;
          
          // Increase size and opacity when near cursor
          particle.size = Math.min(particle.size * 1.02, 8);
          particle.opacity = Math.min(particle.opacity + 0.02, 1);
        } else {
          // Slowly return to base position
          particle.x += (particle.baseX - particle.x) * 0.02;
          particle.y += (particle.baseY - particle.y) * 0.02;
          
          // Normal floating movement
          particle.baseX += particle.vx;
          particle.baseY += particle.vy;
          
          // Reset size and opacity
          particle.size = Math.max(particle.size * 0.98, 2);
          particle.opacity = Math.max(particle.opacity - 0.01, 0.3);
        }

        // Wrap around edges
        if (particle.baseX < 0) particle.baseX = canvas.width;
        if (particle.baseX > canvas.width) particle.baseX = 0;
        if (particle.baseY < 0) particle.baseY = canvas.height;
        if (particle.baseY > canvas.height) particle.baseY = 0;

        // Draw particle with glow
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.shadowBlur = 20;
        ctx.shadowColor = particle.color;
        ctx.fill();
        ctx.shadowBlur = 0;
        
        // Draw connecting lines between nearby particles and to cursor
        if (distance < interactionRadius * 1.5 && mouse.isActive) {
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = particle.color;
          ctx.globalAlpha = (1 - distance / (interactionRadius * 1.5)) * 0.3;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      // Update and draw ripples
      ripplesRef.current = ripplesRef.current.filter((ripple) => {
        ripple.radius += 5;
        ripple.opacity -= 0.02;

        if (ripple.opacity <= 0) return false;

        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.strokeStyle = ripple.color;
        ctx.lineWidth = 3;
        ctx.globalAlpha = ripple.opacity;
        ctx.shadowBlur = 25;
        ctx.shadowColor = ripple.color;
        ctx.stroke();
        ctx.shadowBlur = 0;

        return true;
      });

      // Draw cursor glow/orb
      if (mouse.isActive) {
        // Inner glow
        const innerGradient = ctx.createRadialGradient(
          mouse.x, mouse.y, 0,
          mouse.x, mouse.y, 80
        );
        innerGradient.addColorStop(0, "rgba(139, 92, 246, 0.4)");
        innerGradient.addColorStop(0.4, "rgba(6, 182, 212, 0.2)");
        innerGradient.addColorStop(1, "transparent");

        ctx.globalAlpha = 1;
        ctx.fillStyle = innerGradient;
        ctx.fillRect(mouse.x - 80, mouse.y - 80, 160, 160);

        // Outer glow
        const outerGradient = ctx.createRadialGradient(
          mouse.x, mouse.y, 0,
          mouse.x, mouse.y, 200
        );
        outerGradient.addColorStop(0, "rgba(244, 114, 182, 0.15)");
        outerGradient.addColorStop(0.5, "rgba(52, 211, 153, 0.08)");
        outerGradient.addColorStop(1, "transparent");

        ctx.fillStyle = outerGradient;
        ctx.fillRect(mouse.x - 200, mouse.y - 200, 400, 400);
      }

      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("click", handleClick);
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [initParticles, createRipple]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0"
      style={{ zIndex: -1, pointerEvents: "none" }}
      aria-hidden="true"
    />
  );
}
