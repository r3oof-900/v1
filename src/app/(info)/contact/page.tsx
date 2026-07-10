import type { Metadata } from "next";
import { company } from "@/config/company";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export const metadata: Metadata = { title: "تواصل معنا", description: "تواصل مع فريق أرجوان للإلكترونيات — نحن هنا لمساعدتك" };

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 lg:py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-main mb-3">تواصل معنا</h1>
        <p className="text-muted">نحن هنا لمساعدتك — تواصل معنا بالطريقة التي تناسبك</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        {[
          { icon: Phone, title: "الهاتف", value: company.contact.phone, href: `tel:${company.contact.phone}`, dir: "ltr" as const },
          { icon: MessageCircle, title: "واتساب", value: company.contact.phone, href: `https://wa.me/${company.contact.whatsapp}`, dir: "ltr" as const },
          { icon: Mail, title: "البريد الإلكتروني", value: company.contact.email, href: `mailto:${company.contact.email}` },
          { icon: Clock, title: "ساعات العمل", value: company.workingHours.ar },
        ].map((item, i) => (
          <div key={i} className="bg-surface rounded-2xl p-6 border border-base">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-gold-subtle flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-gold-dark" />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-main mb-1">{item.title}</h3>
                {item.href ? (
                  <a href={item.href} className="text-sm text-muted hover:text-gold-dark transition-colors" dir={item.dir} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}>{item.value}</a>
                ) : (
                  <p className="text-sm text-muted">{item.value}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-surface rounded-2xl p-6 border border-base flex items-start gap-3">
        <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
        <div>
          <h3 className="font-semibold text-sm text-main mb-1">العنوان</h3>
          <p className="text-sm text-muted">{company.contact.address.ar}</p>
        </div>
      </div>


    </div>
  );
}
