import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "../components/ContactForm";
import PageHeader from "../components/PageHeader";
import { getSection } from "../content/sections";
import { desks, location } from "../content/site";

const contacts = getSection("contacts")!;

export const metadata: Metadata = {
  title: "Contacts",
  description: contacts.lead,
};

export default function ContactsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contacts"
        title="Talk to our Lusaka team"
        crumb="Contacts"
        lead={contacts.lead}
        icon={contacts.icon}
      />

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <div>
            <p className="text-xl leading-relaxed text-ink-soft">{contacts.body}</p>

            <ul className="mt-10 space-y-4">
              {desks.map((desk) => (
                <li key={desk.desk} className="rounded-2xl bg-white p-6 ring-1 ring-rule">
                  <p className="eyebrow text-copper-dark">{desk.desk}</p>
                  {desk.person && <p className="mt-2 font-display text-xl text-ink">{desk.person}</p>}
                  <p className="mt-1 text-sm text-ink-soft">{desk.purpose}</p>
                  <div className="mt-4 flex flex-col gap-2 text-sm sm:flex-row sm:gap-6">
                    <a
                      href={`mailto:${desk.email}`}
                      className="inline-flex items-center gap-2 text-ink transition-colors hover:text-copper-dark"
                    >
                      <Mail size={15} className="text-copper" />
                      {desk.email}
                    </a>
                    <span className="inline-flex items-center gap-2 text-ink-soft">
                      <Phone size={15} className="text-copper" />
                      {desk.phone ?? "Mobile to be confirmed"}
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            <p className="mt-8 flex items-center gap-2 text-sm text-ink-soft">
              <MapPin size={16} className="text-copper" />
              {location}
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
