"use client";

import { useEffect, useState, useMemo } from "react";
import { Lock, Eye, Download, Users, Globe, TrendingUp, Search, Calendar, ChevronRight } from "lucide-react";

type TrackingRecord = {
  ip: string;
  country: string;
  userAgent: string;
  downloads: number;
  history: string[];
};

type FilterType = "today" | "yesterday" | "this_week" | "this_month" | "this_year" | "all_time" | "custom";

export default function TrackingDashboard() {
  const [auth, setAuth] = useState(false);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [records, setRecords] = useState<TrackingRecord[]>([]);
  const [filter, setFilter] = useState<FilterType>("this_month");
  const [customStartStr, setCustomStartStr] = useState<string>("");
  const [customEndStr, setCustomEndStr] = useState<string>("");

  useEffect(() => {
    const token = localStorage.getItem("samyjoe_tracking_token");
    if (token) {
      fetchData(token);
    } else {
      setLoading(false);
    }
  }, []);

  const fetchData = async (pwd: string) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/tracking-data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: pwd }),
      });
      if (!res.ok) {
        let errText = "Invalid password";
        try {
          const errData = await res.json();
          if (errData.error) errText = `Error: ${errData.error} (${res.status})`;
        } catch(e) {
          errText = `Error ${res.status}: ${res.statusText}`;
        }
        localStorage.removeItem("samyjoe_tracking_token");
        setAuth(false);
        setError(errText);
        setLoading(false);
        return;
      }
      const data = await res.json();
      setRecords(data.records);
      localStorage.setItem("samyjoe_tracking_token", pwd);
      setAuth(true);
    } catch (e) {
      setError("Network error");
    }
    setLoading(false);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    fetchData(password);
  };

  const handleLogout = () => {
    localStorage.removeItem("samyjoe_tracking_token");
    setAuth(false);
    setRecords([]);
  };

  // --- Date filtering logic ---
  const filteredData = useMemo(() => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    
    let currentStart = new Date(0);
    let currentEnd = new Date();
    let prevStart = new Date(0);
    let prevEnd = new Date(0);

    if (filter === "custom" && customStartStr && customEndStr) {
      currentStart = new Date(customStartStr);
      currentEnd = new Date(customEndStr);
      currentEnd.setHours(23, 59, 59, 999);
      
      const duration = currentEnd.getTime() - currentStart.getTime();
      prevStart = new Date(currentStart.getTime() - duration);
      prevEnd = new Date(currentStart.getTime() - 1);
    } else if (filter === "today") {
      currentStart = today;
      currentEnd = new Date(today.getTime() + 86400000);
      prevStart = new Date(today.getTime() - 86400000);
      prevEnd = today;
    } else if (filter === "yesterday") {
      currentStart = new Date(today.getTime() - 86400000);
      currentEnd = today;
      prevStart = new Date(currentStart.getTime() - 86400000);
      prevEnd = currentStart;
    } else if (filter === "this_week") {
      const day = today.getDay();
      const diff = today.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is sunday
      currentStart = new Date(today.setDate(diff));
      prevStart = new Date(currentStart.getTime() - 7 * 86400000);
      prevEnd = currentStart;
    } else if (filter === "this_month") {
      currentStart = new Date(now.getFullYear(), now.getMonth(), 1);
      prevStart = new Date(now.getFullYear(), now.getMonth() - 1, 1);
      prevEnd = currentStart;
    } else if (filter === "this_year") {
      currentStart = new Date(now.getFullYear(), 0, 1);
      prevStart = new Date(now.getFullYear() - 1, 0, 1);
      prevEnd = currentStart;
    } else if (filter === "all_time") {
      currentStart = new Date(0);
      currentEnd = new Date(now.getTime() + 86400000); // Tomorrow
      prevStart = new Date(0);
      prevEnd = new Date(0);
    }

    // Processing metrics
    let totalDownloads = 0;
    let uniqueDownloads = 0;
    const countryMap: Record<string, number> = {};
    
    let currentNewVisits = 0;
    let prevNewVisits = 0;

    const allVisitsInPeriod: Array<{ip: string, country: string, time: string, agent: string}> = [];

    records.forEach(record => {
      // Find the first download date for this IP ever
      const firstEverDownload = new Date(record.history[0]);
      
      // Is it a new visit in current period?
      if (firstEverDownload >= currentStart && firstEverDownload < currentEnd) {
        currentNewVisits++;
      }
      // Is it a new visit in prev period?
      if (firstEverDownload >= prevStart && firstEverDownload < prevEnd) {
        prevNewVisits++;
      }

      // Filter history for current period metrics
      const visitsInPeriod = record.history.filter(d => {
        const dt = new Date(d);
        return dt >= currentStart && dt <= currentEnd;
      });

      if (visitsInPeriod.length > 0) {
        totalDownloads += visitsInPeriod.length;
        uniqueDownloads++;
        countryMap[record.country] = (countryMap[record.country] || 0) + visitsInPeriod.length;

        visitsInPeriod.forEach(time => {
          allVisitsInPeriod.push({
            ip: record.ip,
            country: record.country,
            time,
            agent: record.userAgent
          });
        });
      }
    });

    const topCountry = Object.keys(countryMap).reduce((a, b) => countryMap[a] > countryMap[b] ? a : b, "N/A");
    
    let growth = 0;
    if (prevNewVisits === 0 && currentNewVisits > 0) growth = 100;
    else if (prevNewVisits > 0) growth = ((currentNewVisits - prevNewVisits) / prevNewVisits) * 100;

    // Sort visits latest first
    allVisitsInPeriod.sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime());
    const topVisits = allVisitsInPeriod.slice(0, 10);

    return { totalDownloads, uniqueDownloads, topCountry, growth: growth.toFixed(1), topVisits, currentNewVisits, prevNewVisits };
  }, [records, filter]);


  if (loading) {
    return <div className="flex h-screen items-center justify-center bg-[#070c12] text-brand font-display text-2xl">Loading Access...</div>;
  }

  if (!auth) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#070c12]">
        <form onSubmit={handleLogin} className="w-full max-w-sm p-8 bg-[#111c28] border border-white/10 rounded-3xl shadow-brand">
          <div className="flex justify-center mb-6">
            <div className="h-16 w-16 bg-white/5 rounded-full flex items-center justify-center text-brand">
              <Lock className="w-8 h-8" />
            </div>
          </div>
          <h2 className="text-2xl text-white font-display uppercase text-center mb-6">Classified Hub</h2>
          {error && <p className="text-red-400 text-sm mb-4 text-center">{error}</p>}
          <input
            type="password"
            placeholder="Enter passphrase..."
            className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-brand mb-6"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
          />
          <button type="submit" className="w-full bg-brand-gradient py-3 rounded-xl text-white font-semibold hover:brightness-110 transition">
            Unlock Dashboard
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#070c12] text-white p-6 md:p-12 font-body">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h1 className="text-4xl font-display uppercase text-brand flex items-center gap-3">
              <Eye className="w-8 h-8" /> Intel Center
            </h1>
            <p className="text-white/50 mt-1">CV Download Telemetry & Tracking</p>
          </div>
          <div className="flex gap-4 items-center">
            <div className="relative">
              <select
                className="appearance-none bg-[#111c28] border border-white/10 rounded-lg px-4 py-2 pr-10 text-sm text-white focus:outline-none focus:border-brand cursor-pointer"
                value={filter}
                onChange={(e) => setFilter(e.target.value as FilterType)}
              >
                <option value="today">Today</option>
                <option value="yesterday">Yesterday</option>
                <option value="this_week">This Week</option>
                <option value="this_month">This Month</option>
                <option value="this_year">This Year</option>
                <option value="all_time">All Time</option>
              </select>
              <Calendar className="w-4 h-4 text-white/50 absolute right-3 top-2.5 pointer-events-none" />
            </div>
            {filter === "custom" && (
              <div className="flex items-center gap-2">
                <input
                  type="date"
                  className="bg-[#111c28] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:border-brand outline-none"
                  value={customStartStr}
                  onChange={e => setCustomStartStr(e.target.value)}
                />
                <span className="text-white/40">-</span>
                <input
                  type="date"
                  className="bg-[#111c28] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:border-brand outline-none"
                  value={customEndStr}
                  onChange={e => setCustomEndStr(e.target.value)}
                />
              </div>
            )}
            <button onClick={handleLogout} className="text-white/50 hover:text-white text-sm transition">
              Lock
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Card 1 */}
          <div className="bg-[#111c28] border border-white/10 rounded-3xl p-6 relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-brand/10 rounded-full blur-2xl group-hover:bg-brand/20 transition" />
            <div className="flex items-center gap-3 text-white/60 mb-4">
              <Download className="w-5 h-5 text-brand" /> Total Downloads
            </div>
            <div className="text-5xl font-display text-white">{filteredData.totalDownloads}</div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#111c28] border border-white/10 rounded-3xl p-6 relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-brand/10 rounded-full blur-2xl group-hover:bg-brand/20 transition" />
            <div className="flex items-center gap-3 text-white/60 mb-4">
              <Users className="w-5 h-5 text-brand" /> Unique Leads
            </div>
            <div className="text-5xl font-display text-white">{filteredData.uniqueDownloads}</div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#111c28] border border-white/10 rounded-3xl p-6 relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-brand/10 rounded-full blur-2xl group-hover:bg-brand/20 transition" />
            <div className="flex items-center gap-3 text-white/60 mb-4">
              <Globe className="w-5 h-5 text-brand" /> Top Region
            </div>
            <div className="text-3xl font-display text-white truncate">{filteredData.topCountry}</div>
          </div>

          {/* Card 4 */}
          <div className="bg-[#111c28] border border-white/10 rounded-3xl p-6 relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-brand/10 rounded-full blur-2xl group-hover:bg-brand/20 transition" />
            <div className="flex items-center gap-3 text-white/60 mb-4">
              <TrendingUp className="w-5 h-5 text-brand" /> New Visit Growth
            </div>
            <div className="flex items-end gap-3">
              <div className={`text-4xl font-display ${Number(filteredData.growth) >= 0 ? "text-green-400" : "text-red-400"}`}>
                {Number(filteredData.growth) >= 0 ? "+" : ""}{filteredData.growth}%
              </div>
              <div className="text-xs text-white/40 mb-1 tracking-wider uppercase">vs Prev Period</div>
            </div>
          </div>
        </div>

        <div className="bg-[#111c28] border border-white/10 rounded-3xl overflow-hidden">
          <div className="border-b border-white/10 p-6 flex items-center gap-3 bg-white/[0.02]">
            <Search className="w-5 h-5 text-brand" />
            <h2 className="text-xl font-display uppercase tracking-wide">Latest 10 Interceptions</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-white/70">
              <thead className="text-xs uppercase bg-black/20 text-white/50">
                <tr>
                  <th className="px-6 py-4 rounded-tl-lg">Timestamp</th>
                  <th className="px-6 py-4">IP Address</th>
                  <th className="px-6 py-4">Country</th>
                  <th className="px-6 py-4 rounded-tr-lg">User Agent</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredData.topVisits.map((visit, i) => (
                  <tr key={i} className="hover:bg-white/5 transition">
                    <td className="px-6 py-4 whitespace-nowrap text-brand font-mono">
                      {new Date(visit.time).toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-white font-mono flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-brand/50" />
                      {visit.ip}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="bg-white/10 text-white px-2.5 py-1 rounded-md text-xs border border-white/10">
                        {visit.country}
                      </span>
                    </td>
                    <td className="px-6 py-4 truncate max-w-xs" title={visit.agent}>
                      {visit.agent}
                    </td>
                  </tr>
                ))}
                {filteredData.topVisits.length === 0 && (
                  <tr>
                    <td colSpan={4} className="px-6 py-12 text-center text-white/40">
                      No data intercepted in this period.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
