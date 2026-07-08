import React, { useMemo, useState } from 'react';
import { Search, X } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { useLanguage } from '../LanguageContext';
import ProductCard from './ProductCard';

const DUTIES = ['Light', 'Medium', 'Heavy'];

// Display order for the "Browse by type" filter (Butt Hinges first).
// Scoped to the homepage — leaves the global CATEGORIES order (and the
// /products range page) untouched. Any category not listed falls to the end.
const TYPE_ORDER = ['butt-hinges', 'rivet-hinges'];
const orderedCategories = [...CATEGORIES].sort((a, b) => {
  const ia = TYPE_ORDER.indexOf(a.id);
  const ib = TYPE_ORDER.indexOf(b.id);
  return (ia === -1 ? Infinity : ia) - (ib === -1 ? Infinity : ib);
});

/**
 * Homepage catalogue: live search + filter rail (type / size / duty) over the
 * full PRODUCTS list, rendering the shared <ProductCard>.
 *
 * SEO note: every filter defaults to empty, so on first paint ALL products are
 * in the DOM and every product link is crawlable. Filtering is client-side only
 * and never removes links from the initial server-prerendered markup.
 */
const HomeCatalogue: React.FC = () => {
  const { t, language } = useLanguage();
  const [query, setQuery] = useState('');
  const [types, setTypes] = useState<string[]>([]);
  const [sizes, setSizes] = useState<string[]>([]);
  const [duties, setDuties] = useState<string[]>([]);

  // Unique sizes across all variants, numeric-first.
  const allSizes = useMemo(() => {
    const set = new Set<string>();
    PRODUCTS.forEach((p) => p.variants.forEach((v) => v.size && set.add(v.size)));
    return Array.from(set).sort((a, b) => {
      const na = parseFloat(a);
      const nb = parseFloat(b);
      const aNum = !Number.isNaN(na);
      const bNum = !Number.isNaN(nb);
      if (aNum && bNum) return na - nb;
      if (aNum) return -1;
      if (bNum) return 1;
      return a.localeCompare(b);
    });
  }, []);

  const toggle =
    (setter: React.Dispatch<React.SetStateAction<string[]>>) => (val: string) =>
      setter((prev) => (prev.includes(val) ? prev.filter((x) => x !== val) : [...prev, val]));

  const toggleType = toggle(setTypes);
  const toggleSize = toggle(setSizes);
  const toggleDuty = toggle(setDuties);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      if (types.length && !types.includes(p.categoryId)) return false;
      if (sizes.length && !p.variants.some((v) => sizes.includes(v.size))) return false;
      if (
        duties.length &&
        !p.variants.some((v) =>
          duties.some((d) => (v.variantName || '').toLowerCase().includes(d.toLowerCase()))
        )
      )
        return false;
      if (q) {
        const hay = [
          p.name,
          p.name_hi || '',
          ...p.variants.map((v) => `${v.size} ${v.itemCode || ''}`),
        ]
          .join(' ')
          .toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [query, types, sizes, duties]);

  const hasFilters = Boolean(types.length || sizes.length || duties.length || query);
  const clearAll = () => {
    setQuery('');
    setTypes([]);
    setSizes([]);
    setDuties([]);
  };

  const checkbox = (checked: boolean) => (
    <span
      className={`w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 ${
        checked ? 'bg-brand-blue border-brand-blue' : 'border-slate-300'
      }`}
    >
      {checked && (
        <svg viewBox="0 0 12 12" className="w-2.5 h-2.5" fill="none" stroke="white" strokeWidth="2">
          <path d="M2 6l2.5 2.5L10 3" />
        </svg>
      )}
    </span>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      {/* search */}
      <div className="relative mb-6">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t('home.searchPlaceholder')}
          aria-label={t('home.searchPlaceholder')}
          className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-brand-charcoal placeholder:text-gray-400 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue"
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* filter rail */}
        <aside className="lg:w-60 lg:flex-shrink-0">
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-gray-400">
              {t('home.filterType')}
            </span>
            {hasFilters && (
              <button
                onClick={clearAll}
                className="flex items-center gap-1 text-[11px] font-semibold text-brand-blue hover:text-brand-yellow"
              >
                <X size={12} /> {t('home.clearFilters')}
              </button>
            )}
          </div>
          <div className="flex flex-col gap-3 mb-7">
            {orderedCategories.map((c) => {
              const label = language === 'hi' && c.title_hi ? c.title_hi : c.title;
              return (
                <label
                  key={c.id}
                  className="flex items-center gap-2.5 text-sm text-brand-charcoal cursor-pointer select-none"
                >
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={types.includes(c.id)}
                    onChange={() => toggleType(c.id)}
                  />
                  {checkbox(types.includes(c.id))}
                  {label.replace(' / Kabja', '')}
                </label>
              );
            })}
          </div>

          <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-gray-400 mb-3">
            {t('home.filterSize')}
          </div>
          <div className="flex flex-wrap gap-2 mb-7">
            {allSizes.map((s) => {
              const active = sizes.includes(s);
              return (
                <button
                  key={s}
                  onClick={() => toggleSize(s)}
                  className={`font-mono text-xs rounded-md px-2.5 py-1.5 border transition-colors ${
                    active
                      ? 'bg-brand-blue text-white border-brand-blue'
                      : 'bg-white text-brand-charcoal border-slate-300 hover:border-brand-blue'
                  }`}
                >
                  {s.replace(' Inch', '"')}
                </button>
              );
            })}
          </div>

          <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-gray-400 mb-3">
            {t('home.filterDuty')}
          </div>
          <div className="flex rounded-lg border border-slate-300 overflow-hidden">
            {DUTIES.map((d, i) => {
              const active = duties.includes(d);
              return (
                <button
                  key={d}
                  onClick={() => toggleDuty(d)}
                  className={`flex-1 text-xs py-2 transition-colors ${i > 0 ? 'border-l border-slate-300' : ''} ${
                    active ? 'bg-brand-blue text-white' : 'text-brand-charcoal hover:bg-slate-50'
                  }`}
                >
                  {t(`home.duty${d}`)}
                </button>
              );
            })}
          </div>
        </aside>

        {/* grid */}
        <div className="flex-1">
          <div className="text-sm text-gray-500 mb-4">
            {t('home.showing')} <b className="text-brand-blue">{filtered.length}</b> {t('home.ofProducts')}
          </div>
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-slate-50 rounded-xl border-2 border-dashed border-slate-200">
              <p className="text-gray-500 mb-3">{t('home.noMatch')}</p>
              <button onClick={clearAll} className="text-sm font-semibold text-brand-blue hover:text-brand-yellow">
                {t('home.clearFilters')}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeCatalogue;
