import dynamic from "next/dynamic";

//TODO: Add a loading spinner or something
const WebMentions = dynamic(() => import("@/components/Webmentions/Core"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

export default WebMentions;
