import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const animationId = searchParams.get("animation-id");

    if (!animationId) {
      return NextResponse.json(
        { error: "Animation ID is required" },
        { status: 400 }
      );
    }

    // Construct the path to the zip file
    const zipFileName = `${animationId}.zip`;
    const zipFilePath = path.join(
      process.cwd(),
      "public",
      "source-codes",
      zipFileName
    );

    // Check if the file exists
    try {
      await fs.access(zipFilePath);
    } catch (error) {
      return NextResponse.json(
        { error: "Source code not found for this animation" },
        { status: 404 }
      );
    }

    // Read the file
    const fileBuffer = await fs.readFile(zipFilePath);

    // Return the file as a download
    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": `attachment; filename="${zipFileName}"`,
        "Content-Length": fileBuffer.length.toString(),
      },
    });
  } catch (error) {
    console.error("Error downloading source code:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
