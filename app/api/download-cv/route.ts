import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function GET(request: Request) {
  // Fire and forget tracking logic to keep performance fast
  const trackDownload = async () => {
    try {
      // 1. Gather device and location info
      // Fallback headers for standard proxies, Vercel, Cloudflare, etc.
      const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown";
      const country = request.headers.get("x-vercel-ip-country") || request.headers.get("cf-ipcountry") || "unknown";
      const userAgent = request.headers.get("user-agent") || "unknown";
      const timestamp = new Date().toISOString();
      
      // Get today's date in YYYY-MM-DD format
      const dateObj = new Date();
      const dateStr = dateObj.toISOString().split("T")[0];

      // 2. Define path for JSON storage (stored in root /tracking directory)
      const trackingDir = path.join(process.cwd(), "tracking");
      const filePath = path.join(trackingDir, `${dateStr}.json`);

      // Ensure directory exists
      await fs.mkdir(trackingDir, { recursive: true });

      // 3. Read existing data
      let data: Record<string, any> = {};
      try {
        const fileContent = await fs.readFile(filePath, "utf-8");
        if (fileContent) {
          data = JSON.parse(fileContent);
        }
      } catch (err: any) {
        // File doesn't exist or invalid JSON, start fresh
      }

      // 4. Update data grouped by IP/person
      const key = ip;
      if (!data[key]) {
        data[key] = {
          ip,
          country,
          userAgent,
          downloads: 0,
          history: []
        };
      }

      data[key].downloads += 1;
      data[key].history.push(timestamp);

      // 5. Write data back
      await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");

    } catch (error) {
      console.error("Error tracking CV download:", error);
    }
  };

  // Run the tracking logic without awaiting it to keep the redirect lightning fast
  trackDownload();

  // Redirect to the actual PDF
  return NextResponse.redirect(new URL("/assets/files/cv.pdf", request.url));
}
