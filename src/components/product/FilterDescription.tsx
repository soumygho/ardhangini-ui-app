import React, { useContext, useMemo, useState } from "react";
import { rootContext } from "../../context/root.context";
import { SareeFilterFilterTypeEnum } from "../../services/openapi";

function FilterDescription() {
  const context = useContext(rootContext);
  const [filterDescription, setFilterDescription] = useState("");
  const [filterDisplayName, setFilterDisplayName] = useState("");
  const resolveFilterData = useMemo(
    () => () => {
      let description = "";
      let displayName = "";
      let filterData = undefined;
      if (
        context?.selectedPrimarySareeFilter?.filterType ===
        SareeFilterFilterTypeEnum.Category
      ) {
        filterData = context?.categories?.find(
          (filter) =>
            filter.id === context?.selectedPrimarySareeFilter?.values![0]
        );
      } else if (
        context?.selectedPrimarySareeFilter?.filterType ===
        SareeFilterFilterTypeEnum.Subcategory
      ) {
        filterData = context?.subCategories?.find(
          (filter) =>
            filter.id === context?.selectedPrimarySareeFilter?.values![0]
        );
      } else if (
        context?.selectedPrimarySareeFilter?.filterType ===
        SareeFilterFilterTypeEnum.Fabric
      ) {
        filterData = context?.fabrics?.find(
          (filter) =>
            filter.id === context?.selectedPrimarySareeFilter?.values![0]
        );
      } else if (
        context?.selectedPrimarySareeFilter?.filterType ===
        SareeFilterFilterTypeEnum.Color
      ) {
        filterData = context?.colors?.find(
          (filter) =>
            filter.id === context?.selectedPrimarySareeFilter?.values![0]
        );
      } else if (
        context?.selectedPrimarySareeFilter?.filterType ===
        SareeFilterFilterTypeEnum.Style
      ) {
        filterData = context?.syles?.find(
          (filter) =>
            filter.id === context?.selectedPrimarySareeFilter?.values![0]
        );
      } else if (
        context?.selectedPrimarySareeFilter?.filterType ===
        SareeFilterFilterTypeEnum.Print
      ) {
        filterData = context?.prints?.find(
          (filter) =>
            filter.id === context?.selectedPrimarySareeFilter?.values![0]
        );
      } else if (
        context?.selectedPrimarySareeFilter?.filterType ===
        SareeFilterFilterTypeEnum.Occassion
      ) {
        filterData = context?.occassions?.find(
          (filter) =>
            filter.id === context?.selectedPrimarySareeFilter?.values![0]
        );
      } else if (
        context?.selectedPrimarySareeFilter?.filterType ===
        SareeFilterFilterTypeEnum.Exclusive
      ) {
        displayName = "Ardhangini Exclusives";
        description = "You are seeing our exclusive collections";
      }
      else if (
        context?.selectedPrimarySareeFilter?.filterType ===
        SareeFilterFilterTypeEnum.Bestseller
      ) {
        displayName = "Ardhangini Bestsellers";
        description = "You are seeing our best selling sarees";
      }
      else if (
        context?.selectedPrimarySareeFilter?.filterType ===
        SareeFilterFilterTypeEnum.Trending
      ) {
        displayName = "Ardhangini Trending";
        description = "You are seeing our best trending sarees";
      }
    },
    []
  );
  return (
    <div>
      <h3>{}</h3>
    </div>
  );
}

export default FilterDescription;
