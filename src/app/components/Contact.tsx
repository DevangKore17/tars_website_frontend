"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { NodeInput, NodeTextarea } from "./NodeInput";
import { NodeButton } from "./NodeButton";

interface FormStatus {
  type: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Record<string, string>;
}

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<FormStatus>({ type: "idle", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error when user starts typing
    if (status.fieldErrors?.[name]) {
      setStatus((prev) => ({
        ...prev,
        fieldErrors: { ...prev.fieldErrors, [name]: "" },
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      // In development, Vite proxy forwards /api/* to the backend.
      // In production, use the VITE_API_URL environment variable.
      const apiUrl = import.meta.env.VITE_API_URL || '';

      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Handle validation errors (422)
      if (response.status === 422) {
        const errorData = await response.json();
        const fieldErrors: Record<string, string> = {};
        if (errorData.errors) {
          for (const err of errorData.errors) {
            fieldErrors[err.field] = err.message;
          }
        }
        setStatus({
          type: "error",
          message: "Please fix the errors below.",
          fieldErrors,
        });
        return;
      }

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      console.log("Form submitted successfully!");
      setFormData({ name: "", email: "", message: "" });
      setStatus({
        type: "success",
        message: "Message sent successfully! We'll get back to you soon.",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-32 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center mb-12 lg:mb-16 border-b border-[#333] pb-4"
      >
        <div className="w-4 h-4 rounded-full bg-tars-green mr-4 animate-pulse shadow-[0_0_10px_rgba(0,255,65,0.8)]"></div>
        <h2 className="font-title text-3xl md:text-4xl lg:text-5xl uppercase text-white tracking-widest drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
          Contact Us
        </h2>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-stretch relative">
        {/* Background Network Connection */}
        <div className="absolute top-1/2 left-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#333] to-transparent -translate-x-1/2 -translate-y-1/2 -z-10 hidden lg:block"></div>

        {/* Contact Form Node */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full lg:w-1/2 border border-[#333] p-6 md:p-10 lg:p-12 relative bg-[#0A0A0A]/80 backdrop-blur-sm flex flex-col rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.8)] group hover:border-tars-green/50 active:border-tars-green/50 transition-colors duration-500"
        >

          {/* Animated Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-tars-green/5 to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

          {/* Node Connectors */}
          <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-[#333] group-hover:bg-tars-green group-active:bg-tars-green group-hover:shadow-[0_0_8px_rgba(0,255,65,0.8)] group-active:shadow-[0_0_8px_rgba(0,255,65,0.8)] transition-all"></div>
          <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#333] group-hover:bg-tars-green group-active:bg-tars-green group-hover:shadow-[0_0_8px_rgba(0,255,65,0.8)] group-active:shadow-[0_0_8px_rgba(0,255,65,0.8)] transition-all"></div>
          <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-[#333] group-hover:bg-tars-green group-active:bg-tars-green group-hover:shadow-[0_0_8px_rgba(0,255,65,0.8)] group-active:shadow-[0_0_8px_rgba(0,255,65,0.8)] transition-all"></div>
          <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-[#333] group-hover:bg-tars-green group-active:bg-tars-green group-hover:shadow-[0_0_8px_rgba(0,255,65,0.8)] group-active:shadow-[0_0_8px_rgba(0,255,65,0.8)] transition-all"></div>

          <div className="absolute top-0 right-8 bg-tars-green text-[#0A0A0A] font-body text-xs md:text-sm px-3 py-1 rounded-b-md shadow-[0_0_10px_rgba(0,255,65,0.5)] flex items-center font-bold tracking-widest">
            <div className="w-1.5 h-1.5 rounded-full bg-[#0A0A0A] mr-2 animate-pulse"></div>
            STATUS: SECURE
          </div>

          <form
            className="space-y-6 mt-8 flex-grow flex flex-col relative z-10"
            onSubmit={handleSubmit}
          >
            <div>
              <NodeInput
                label="Name"
                name="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              {status.fieldErrors?.name && (
                <p className="text-red-400 text-xs mt-1 font-body tracking-wide">{status.fieldErrors.name}</p>
              )}
            </div>

            <div>
              <NodeInput
                label="Email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {status.fieldErrors?.email && (
                <p className="text-red-400 text-xs mt-1 font-body tracking-wide">{status.fieldErrors.email}</p>
              )}
            </div>

            <div>
              <NodeTextarea
                label="Message"
                name="message"
                rows={5}
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                required
              />
              {status.fieldErrors?.message && (
                <p className="text-red-400 text-xs mt-1 font-body tracking-wide">{status.fieldErrors.message}</p>
              )}
            </div>

            {/* Status feedback banner */}
            {status.type !== "idle" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-3 rounded-lg border font-body text-sm tracking-wide ${
                  status.type === "success"
                    ? "border-tars-green/50 bg-tars-green/10 text-tars-green"
                    : "border-red-500/50 bg-red-500/10 text-red-400"
                }`}
              >
                {status.message}
              </motion.div>
            )}

            <div className="pt-4">
              <NodeButton type="submit" variant="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </NodeButton>
            </div>
          </form>
        </motion.div>

        {/* Map Node */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="w-full lg:w-1/2 border border-[#333] p-4 flex flex-col rounded-2xl bg-[#0A0A0A]/80 backdrop-blur-sm shadow-[0_0_20px_rgba(0,0,0,0.8)] group hover:border-tars-green/50 active:border-tars-green/50 transition-colors duration-500 relative"
        >

          {/* Animated Glow */}
          <div className="absolute inset-0 bg-gradient-to-tl from-tars-green/5 to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>

          {/* Node Connectors */}
          <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-[#333] group-hover:bg-tars-green group-active:bg-tars-green group-hover:shadow-[0_0_8px_rgba(0,255,65,0.8)] group-active:shadow-[0_0_8px_rgba(0,255,65,0.8)] transition-all z-10"></div>
          <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#333] group-hover:bg-tars-green group-active:bg-tars-green group-hover:shadow-[0_0_8px_rgba(0,255,65,0.8)] group-active:shadow-[0_0_8px_rgba(0,255,65,0.8)] transition-all z-10"></div>
          <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-[#333] group-hover:bg-tars-green group-active:bg-tars-green group-hover:shadow-[0_0_8px_rgba(0,255,65,0.8)] group-active:shadow-[0_0_8px_rgba(0,255,65,0.8)] transition-all z-10"></div>
          <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-[#333] group-hover:bg-tars-green group-active:bg-tars-green group-hover:shadow-[0_0_8px_rgba(0,255,65,0.8)] group-active:shadow-[0_0_8px_rgba(0,255,65,0.8)] transition-all z-10"></div>

          <div className="flex-grow min-h-[300px] md:min-h-[400px] xl:min-h-[500px] bg-[#050505] relative rounded-xl overflow-hidden border border-[#333]">
            <iframe
              title="HQ Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.0254109188513!2d72.83328527427116!3d19.064464682137764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c91130392c07%3A0x3c47bf391c8de931!2sThadomal%20Shahani%20Engineering%20College!5e1!3m2!1sen!2sus!4v1779524550392!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{
                border: 0,
              }}
              allowFullScreen={false}
              loading="lazy"
              className="absolute inset-0 transition-all duration-700"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
