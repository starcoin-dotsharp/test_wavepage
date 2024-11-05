function readData() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet1 = spreadsheet.getSheetByName('シート1');
  const data_range = sheet1.getRange('A2:C4');
  const data_values = data_range.getValues();
 
  const return_data = data_values.map(data_row => {
    //data_rangeで設定した範囲内の行数を回す
 
    return {
      url: data_row[0],
      title: data_row[1],
      detail: data_row[2],
    }
  });
 
  return return_data;
}
 
function doGet() {
    const data = readData();
    const response = ContentService.createTextOutput();
    response.setMimeType(MimeType.JSON);
    response.setContent(JSON.stringify(data));
    return response;  
}