import { ImageResponse } from "next/og";

export async function GET(request: Request) {
  try {
    // ?title=<title>
    const { searchParams } = new URL(request.url);
    const hasTitle = searchParams.has("title");
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "My default title";

    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 60,
            letterSpacing: "-0.025em",
            color: "white",
            whiteSpace: "pre-wrap",
            lineHeight: 1.4,
          }}
        >
          <div>{title}</div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: unknown) {
    console.log(`${(e as Error).message}`);
    return new Response("Failed to generate the image", {
      status: 500,
    });
  }
}
