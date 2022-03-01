import React from 'react';
import { CSVLink, CSVDownload } from "react-csv";


function ExportBOW(props) {
    var listForExport = props.handler([], 2)   
    return (
        <div className='export'>
            <CSVLink 
                filename={"bowFromDASHApp.csv"}
                headers={[
                    {label: "Word"},
                    {label: "Count"},
                ]}
                data={listForExport}>
                    Download BOW as CSV
            </CSVLink>
        </div>
    );
}
export default ExportBOW;

