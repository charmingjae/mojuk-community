import { jsPDF } from "jspdf";

const testFunction = () => {
  // Default export is a4 paper, portrait, using millimeters for units
  const doc = new jsPDF();

  doc.text("Hello world!", 10, 10);
  doc.save("testpdf.pdf");
  alert("done");
};

export const PdfFunction = { testFunction };
