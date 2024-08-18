import React, { useContext, useEffect, useState } from "react";
import FilterSideBar from "./FilterSideBar";
import ProductListHolder from "./productListHolder";
import { useLocation, useNavigate } from "react-router-dom";
import {
  SareeFilter,
  SareeFilterDto,
  SareeFilterFilterTypeEnum,
} from "../../services/openapi";
import useSareeDetailsApi from "../../hooks/api/useSareeApi";
import { rootContext } from "../../context/root.context";
import {
  ProductListContext,
  productListContext,
} from "../../context/product-list.context";
import context from "react-bootstrap/esm/AccordionContext";

function ProductList() {
  const root = useContext(rootContext);
  const [appliedFilters, setAppliedFilters] = useState<SareeFilter[]>([]);
  const { sarees, getAllSarees } = useSareeDetailsApi();

  const buildFilter = () => {
    let sareeFilters = root?.selectedPrimarySareeFilter
      ? [root.selectedPrimarySareeFilter]
      : [{ filterType: SareeFilterFilterTypeEnum.None }];
    if (appliedFilters?.length > 0) {
      sareeFilters = [...sareeFilters, ...appliedFilters];
    }
    const filterDto: SareeFilterDto = {
      filters: sareeFilters,
      userId: root?.userId,
    };
    return filterDto;
  };

  useEffect(() => {
    console.trace(
      `root context primary filter : ${JSON.stringify(
        root?.selectedPrimarySareeFilter
      )}`
    );
    getAllSarees(buildFilter());
    //console.trace(primaryFilter);
  }, [root?.selectedPrimarySareeFilter]);

  const contextData: ProductListContext = {
    setFilterApplied: function (): void {
      throw new Error("Function not implemented.");
    },
    productList: sarees,
  };

  return (
    <productListContext.Provider value={contextData}>
      <div className="shop-main-wrapper section-space pb-0">
        <div className="container">
          <div className="row">
            <FilterSideBar />
            <ProductListHolder></ProductListHolder>
          </div>
        </div>
      </div>
    </productListContext.Provider>
  );
}

export default ProductList;
