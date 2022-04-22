import React, { useEffect, useState } from "react";
import "./App.css";
import { useGetCountries } from "./api/hooks/country.hook";
import YoloTable from "./components/yolo-table";
import {
  TableCol,
  TableData,
  TableRow,
} from "./components/yolo-table/shared/interfaces";
import YoloFilter from "./components/yolo-filter";
import { Country } from "./api/interfaces/country.interface";

function App() {
  const [searchText, setSearchText] = useState("");
  const [countries, setCountries] = useState<Country[]>([]);
  const { data } = useGetCountries();

  useEffect(() => {
    if (searchText) {
      const countryData = data?.countries || [];
      const newCountryData = countryData.filter((country) =>
        country.code.includes(searchText.toUpperCase())
      );
      setCountries(newCountryData);
    } else if (data) {
      setCountries(data.countries);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText, data]);

  const config = (): TableData => {
    const tableRows: TableRow[] = countries;

    const tableCols: TableCol[] = [
      { field: "code", headerName: "Country Code" },
      { field: "name", headerName: "Country Name" },
    ];
    const tableData: TableData = { columns: tableCols, rows: tableRows };
    return tableData;
  };

  return (
    <div className="App">
      <YoloFilter
        id="filter"
        placeholder="Search with country code"
        text={searchText}
        onTextChange={setSearchText}
      />
      <YoloTable id="table" data={config()} />
    </div>
  );
}

export default App;
