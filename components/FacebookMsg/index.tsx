import { FacebookProvider, CustomChat } from "react-facebook";

const FacebookMsg = () => {
  return (
    <FacebookProvider appId="736210360859467" chatSupport>
      <CustomChat pageId="653321091205242" minimized={false} />
    </FacebookProvider>
  );
};

export default FacebookMsg;
