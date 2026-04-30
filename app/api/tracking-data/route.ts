import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const password = body?.password || "";
    
    if (String(password).trim().toLowerCase() !== "samyjoe2026") {
      return NextResponse.json({ error: `Unauthorized. Received: '${password}'` }, { status: 401 });
    }

    const isNetlify = process.env.NETLIFY === "true" || process.env.NODE_ENV === "production";
    const baseDir = isNetlify ? "/tmp" : process.cwd();
    const trackingDir = path.join(baseDir, "tracking");

    let files: string[] = [];
    try {
      files = await fs.readdir(trackingDir);
    } catch (e) {
      return NextResponse.json({ records: [] });
    }

    const allData: Record<string, any> = {};

    for (const file of files) {
      if (file.endsWith(".json")) {
        const filePath = path.join(trackingDir, file);
        const content = await fs.readFile(filePath, "utf-8");
        if (content) {
          const data = JSON.parse(content);
          // Merge IPs across files
          for (const key of Object.keys(data)) {
            if (!allData[key]) {
              allData[key] = {
                ip: data[key].ip,
                country: data[key].country,
                userAgent: data[key].userAgent,
                downloads: 0,
                history: []
              };
            }
            allData[key].downloads += data[key].downloads;
            allData[key].history.push(...data[key].history);
            // In case userAgent or country updates, we can just keep the latest, but this is fine.
          }
        }
      }
    }

    // Sort history arrays for each IP and return as an array of objects
    const records = Object.values(allData).map((record: any) => {
      record.history.sort((a: string, b: string) => new Date(a).getTime() - new Date(b).getTime());
      return record;
    });

    return NextResponse.json({ records });
  } catch (error) {
    console.error("API tracking data error:", error);
    return NextResponse.json({ error: error instanceof Error ? error.message : "Internal Error" }, { status: 500 });
  }
}
