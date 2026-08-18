"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

/* Nisab thresholds are defined in weight of metal, not currency, so the
   monetary figure moves with the market. The user supplies the current
   price per gram; we do not hardcode a rate that would silently go stale
   and produce an incorrect obligation. */
const GOLD_NISAB_G = 87.48;
const SILVER_NISAB_G = 612.36;
const ZAKAT_RATE = 0.025;

/* Indicative starting values only — clearly surfaced in the UI as editable,
   because a wrong metal price produces a wrong Zakat figure. */
const DEFAULT_GOLD_PER_G = 85;
const DEFAULT_SILVER_PER_G = 1.05;

type Field = { key: string; label: string; hint?: string };

const ASSETS: Field[] = [
  { key: "cash", label: "Cash in hand and in bank accounts" },
  { key: "gold", label: "Value of gold you own" },
  { key: "silver", label: "Value of silver you own" },
  { key: "business", label: "Business stock and inventory", hint: "At current resale value" },
  { key: "receivables", label: "Money owed to you", hint: "That you reasonably expect to recover" },
  { key: "investments", label: "Shares, pensions and investments", hint: "Zakatable portion" },
];

const LIABILITIES: Field[] = [
  { key: "debts", label: "Debts you owe", hint: "Due within the coming year" },
  { key: "expenses", label: "Immediate outstanding bills" },
];

const CURRENCIES = [
  { code: "USD", symbol: "$" },
  { code: "GBP", symbol: "£" },
  { code: "EUR", symbol: "€" },
] as const;

export function ZakatCalculator() {
  const [values, setValues] = useState<Record<string, string>>({});
  const [currency, setCurrency] = useState<(typeof CURRENCIES)[number]>(CURRENCIES[0]);
  const [basis, setBasis] = useState<"silver" | "gold">("silver");
  const [goldPerG, setGoldPerG] = useState(String(DEFAULT_GOLD_PER_G));
  const [silverPerG, setSilverPerG] = useState(String(DEFAULT_SILVER_PER_G));

  const num = (v: string | undefined) => {
    const n = parseFloat((v ?? "").replace(/,/g, ""));
    return Number.isFinite(n) && n > 0 ? n : 0;
  };

  const { assets, liabilities, net, nisab, due, eligible } = useMemo(() => {
    const assets = ASSETS.reduce((s, f) => s + num(values[f.key]), 0);
    const liabilities = LIABILITIES.reduce((s, f) => s + num(values[f.key]), 0);
    const net = assets - liabilities;
    const nisab =
      basis === "silver"
        ? SILVER_NISAB_G * num(silverPerG)
        : GOLD_NISAB_G * num(goldPerG);
    const eligible = nisab > 0 && net >= nisab;
    return { assets, liabilities, net, nisab, due: eligible ? net * ZAKAT_RATE : 0, eligible };
  }, [values, basis, goldPerG, silverPerG]);

  const fmt = (n: number) =>
    `${currency.symbol}${n.toLocaleString("en-GB", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

  const field = (f: Field) => (
    <div key={f.key}>
      <label
        htmlFor={`z-${f.key}`}
        className="block text-sm font-medium text-sand-800"
      >
        {f.label}
      </label>
      {f.hint && <p className="mt-0.5 text-xs text-muted">{f.hint}</p>}
      <div className="mt-1.5 flex items-center rounded-md border border-border-strong bg-background focus-within:border-magenta-ink focus-within:ring-2 focus-within:ring-magenta-200">
        <span className="pl-3 text-sm text-muted" aria-hidden="true">
          {currency.symbol}
        </span>
        <input
          id={`z-${f.key}`}
          type="text"
          inputMode="decimal"
          placeholder="0.00"
          value={values[f.key] ?? ""}
          onChange={(e) =>
            setValues((v) => ({ ...v, [f.key]: e.target.value }))
          }
          className="tabular w-full bg-transparent px-2 py-3 text-base outline-none"
        />
      </div>
    </div>
  );

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_21rem] lg:gap-12">
      <div>
        {/* Currency + nisab basis */}
        <fieldset className="rounded-xl border border-border bg-surface p-5">
          <legend className="px-1 text-sm font-semibold text-foreground">
            Your settings
          </legend>

          <div className="mt-2 flex flex-wrap items-center gap-2">
            <span className="text-sm text-sand-700">Currency</span>
            {CURRENCIES.map((c) => (
              <button
                key={c.code}
                type="button"
                onClick={() => setCurrency(c)}
                aria-pressed={currency.code === c.code}
                className={`cursor-pointer rounded-md px-3.5 py-2 text-sm font-semibold transition-colors duration-200 ${
                  currency.code === c.code
                    ? "bg-magenta-ink text-white"
                    : "border border-border-strong bg-background text-sand-700 hover:bg-surface-sunken"
                }`}
              >
                {c.code}
              </button>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="text-sm text-sand-700">Nisab basis</span>
            {(["silver", "gold"] as const).map((b) => (
              <button
                key={b}
                type="button"
                onClick={() => setBasis(b)}
                aria-pressed={basis === b}
                className={`cursor-pointer rounded-md px-3.5 py-2 text-sm font-semibold capitalize transition-colors duration-200 ${
                  basis === b
                    ? "bg-magenta-ink text-white"
                    : "border border-border-strong bg-background text-sand-700 hover:bg-surface-sunken"
                }`}
              >
                {b}
              </button>
            ))}
          </div>
          <p className="mt-2 text-xs leading-relaxed text-muted">
            Most scholars recommend the silver nisab ({SILVER_NISAB_G}g), as the
            lower threshold means more people give and more of the poor benefit.
            The gold nisab is {GOLD_NISAB_G}g.
          </p>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div>
              <label
                htmlFor="z-silver-rate"
                className="block text-xs font-medium text-sand-800"
              >
                Silver price per gram ({currency.code})
              </label>
              <input
                id="z-silver-rate"
                type="text"
                inputMode="decimal"
                value={silverPerG}
                onChange={(e) => setSilverPerG(e.target.value)}
                className="tabular mt-1 w-full rounded-md border border-border-strong bg-background px-3 py-2 text-sm outline-none focus:border-magenta-ink focus:ring-2 focus:ring-magenta-200"
              />
            </div>
            <div>
              <label
                htmlFor="z-gold-rate"
                className="block text-xs font-medium text-sand-800"
              >
                Gold price per gram ({currency.code})
              </label>
              <input
                id="z-gold-rate"
                type="text"
                inputMode="decimal"
                value={goldPerG}
                onChange={(e) => setGoldPerG(e.target.value)}
                className="tabular mt-1 w-full rounded-md border border-border-strong bg-background px-3 py-2 text-sm outline-none focus:border-magenta-ink focus:ring-2 focus:ring-magenta-200"
              />
            </div>
          </div>
          <p className="mt-2 text-xs text-muted">
            Please check today&rsquo;s metal price — these starting figures are
            indicative and will drift out of date.
          </p>
        </fieldset>

        <h2 className="mt-10 font-display text-xl font-semibold text-foreground">
          What you own
        </h2>
        <div className="mt-4 grid gap-5 sm:grid-cols-2">{ASSETS.map(field)}</div>

        <h2 className="mt-10 font-display text-xl font-semibold text-foreground">
          What you owe
        </h2>
        <div className="mt-4 grid gap-5 sm:grid-cols-2">
          {LIABILITIES.map(field)}
        </div>
      </div>

      {/* Result */}
      <aside className="lg:sticky lg:top-24 lg:self-start">
        <div className="overflow-hidden rounded-xl border border-border shadow-md">
          <div className="bg-magenta-ink p-6 text-white">
            <p className="text-sm font-medium text-magenta-100">
              Your Zakat due
            </p>
            <p className="tabular mt-1 font-display text-4xl font-semibold">
              {fmt(due)}
            </p>
            <p className="mt-2 text-sm text-magenta-100">
              {eligible
                ? "2.5% of your zakatable wealth"
                : net > 0
                  ? "Your wealth is below the nisab threshold — no Zakat is due this year."
                  : "Enter your assets to calculate."}
            </p>
          </div>

          <dl className="divide-y divide-border bg-background text-sm">
            {[
              ["Total assets", fmt(assets)],
              ["Less liabilities", `− ${fmt(liabilities)}`],
              ["Zakatable wealth", fmt(net)],
              [`Nisab (${basis})`, fmt(nisab)],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 px-6 py-3">
                <dt className="text-sand-700">{k}</dt>
                <dd className="tabular font-semibold text-foreground">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="border-t border-border bg-background p-6">
            <Link
              href="/donate"
              className="block rounded-md bg-magenta-ink px-5 py-3.5 text-center font-semibold text-white transition-opacity duration-200 hover:opacity-90"
            >
              Give your Zakat
            </Link>
            <p className="mt-3 text-xs leading-relaxed text-muted">
              We distribute Zakat only to the eight categories specified in the
              Qur&rsquo;an. Nothing is taken for administration.
            </p>
          </div>
        </div>

        <p className="mt-4 text-xs leading-relaxed text-muted">
          This calculator is a guide, not a religious ruling. If your situation
          is complex — business assets, pensions, agricultural produce or
          livestock — please consult a qualified scholar.
        </p>
      </aside>
    </div>
  );
}
