import { useLocation } from "react-router-dom";

const useBreadCrumb = () => {
  const location = useLocation();
  const path = location.pathname.replace("/", "");
  let breadCrumbTitle = "";
  switch (path) {
    case "collections":
      breadCrumbTitle = "Collections";
      break;
    case "offers":
      breadCrumbTitle = "Offers";
      break;
    case "giftcards":
      breadCrumbTitle = "Giftcards";
      break;
    case "readytoship":
      breadCrumbTitle = "Readytoship";
      break;
    case "newarrivals":
      breadCrumbTitle = "Newarrivals";
      break;
    case "sarees":
      breadCrumbTitle = "Sarees";
      break;
    default:
      breadCrumbTitle = "";
  }
  console.log("BreadCrumb path : " + path);
  console.log("BreadCrumb title : " + breadCrumbTitle);
  return [breadCrumbTitle];
};
export default useBreadCrumb;
