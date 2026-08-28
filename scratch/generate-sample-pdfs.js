const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

async function generatePDFs() {
  const publicSamplesDir = path.join(__dirname, '..', 'public', 'samples');
  if (!fs.existsSync(publicSamplesDir)) {
    fs.mkdirSync(publicSamplesDir, { recursive: true });
  }

  // --- 1. Generate Question Paper PDF ---
  const qpDoc = await PDFDocument.create();
  const page1 = qpDoc.addPage([595.28, 841.89]); // A4 dimensions
  const fontBold = await qpDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await qpDoc.embedFont(StandardFonts.Helvetica);

  page1.drawText('VEDA AI ASSESSMENT - MID-TERM PHYSICS', { x: 50, y: 790, size: 18, font: fontBold, color: rgb(0.12, 0.11, 0.29) });
  page1.drawText('Class 11  |  Time: 2 Hours  |  Max Marks: 40', { x: 50, y: 770, size: 11, font: fontRegular, color: rgb(0.3, 0.35, 0.45) });
  page1.drawLine({ start: { x: 50, y: 755 }, end: { x: 545, y: 755 }, thickness: 1.5, color: rgb(0.8, 0.83, 0.88) });

  page1.drawText('Q 1. [5 Marks]', { x: 50, y: 725, size: 12, font: fontBold, color: rgb(0.26, 0.22, 0.79) });
  page1.drawText("State Newton's Second Law of Motion and derive the vector equation F = ma.", { x: 50, y: 705, size: 11, font: fontRegular });

  page1.drawText('Q 2. [5 Marks]', { x: 50, y: 660, size: 12, font: fontBold, color: rgb(0.26, 0.22, 0.79) });
  page1.drawText('Calculate the kinetic energy of a 4 kg object moving at a uniform velocity of 10 m/s.', { x: 50, y: 640, size: 11, font: fontRegular });

  page1.drawText('Q 11 (a). [5 Marks]', { x: 50, y: 595, size: 12, font: fontBold, color: rgb(0.26, 0.22, 0.79) });
  page1.drawText("State Ohm's Law and explain the factor of resistance in a conductive wire.", { x: 50, y: 575, size: 11, font: fontRegular });

  page1.drawText('Q 11 (b). [5 Marks]', { x: 50, y: 530, size: 12, font: fontBold, color: rgb(0.26, 0.22, 0.79) });
  page1.drawText('Derive the formula for equivalent resistance 1/Req = 1/R1 + 1/R2 in parallel.', { x: 50, y: 510, size: 11, font: fontRegular });

  page1.drawText('Q 3. [5 Marks]', { x: 50, y: 465, size: 12, font: fontBold, color: rgb(0.26, 0.22, 0.79) });
  page1.drawText("Explain the Photoelectric Effect and write Einstein's photoelectric equation.", { x: 50, y: 445, size: 11, font: fontRegular });

  page1.drawText('Q 4. [5 Marks]', { x: 50, y: 400, size: 12, font: fontBold, color: rgb(0.26, 0.22, 0.79) });
  page1.drawText('Define Total Internal Reflection and state the critical angle condition with formula.', { x: 50, y: 380, size: 11, font: fontRegular });

  page1.drawText('Q 5. [10 Marks]', { x: 50, y: 335, size: 12, font: fontBold, color: rgb(0.26, 0.22, 0.79) });
  page1.drawText('Describe the working principle of a transformer, write the turns ratio Vs/Vp = Ns/Np,', { x: 50, y: 315, size: 11, font: fontRegular });
  page1.drawText('and detail major energy losses (copper loss, eddy currents, hysteresis).', { x: 50, y: 298, size: 11, font: fontRegular });

  const qpPdfBytes = await qpDoc.save();
  fs.writeFileSync(path.join(publicSamplesDir, 'Question_Paper.pdf'), qpPdfBytes);

  // --- 2. Generate Student Answer Sheet PDF ---
  const ansDoc = await PDFDocument.create();
  
  // Page 1
  const ansP1 = ansDoc.addPage([595.28, 841.89]);
  ansP1.drawText('Student Answer Sheet  |  Name: Alex Rivera  |  Roll No: 1042  (Page 1 of 2)', { x: 40, y: 810, size: 10, font: fontBold, color: rgb(0.4, 0.4, 0.5) });
  ansP1.drawLine({ start: { x: 40, y: 800 }, end: { x: 555, y: 800 }, thickness: 1, color: rgb(0.8, 0.8, 0.8) });

  ansP1.drawText('Ans 3.', { x: 40, y: 770, size: 12, font: fontBold, color: rgb(0.1, 0.2, 0.6) });
  ansP1.drawText('Photoelectric Effect: Emission of electrons from metal surface when light of suitable frequency hits.', { x: 85, y: 770, size: 10, font: fontRegular });
  ansP1.drawText("Einstein Equation: E_photon = W0 + KE_max where W0 is work function of the metal.", { x: 85, y: 750, size: 10, font: fontRegular });

  ansP1.drawText('Ans 1.', { x: 40, y: 680, size: 12, font: fontBold, color: rgb(0.1, 0.2, 0.6) });
  ansP1.drawText("Newton 2nd Law states rate of change of momentum is directly proportional to applied force.", { x: 85, y: 680, size: 10, font: fontRegular });
  ansP1.drawText("F = dp/dt = d(mv)/dt = m(dv/dt) = ma.", { x: 85, y: 660, size: 10, font: fontRegular });

  ansP1.drawText('Ans 11(a)', { x: 40, y: 580, size: 12, font: fontBold, color: rgb(0.1, 0.2, 0.6) });
  ansP1.drawText("Ohm's Law: V = IR at constant temperature.", { x: 85, y: 580, size: 10, font: fontRegular });
  ansP1.drawText("Resistance factors: R = rho * L / A.", { x: 85, y: 560, size: 10, font: fontRegular });

  ansP1.drawText('Ans 11(b)', { x: 40, y: 480, size: 12, font: fontBold, color: rgb(0.1, 0.2, 0.6) });
  ansP1.drawText("Parallel resistors: Total current I = I1 + I2.", { x: 85, y: 480, size: 10, font: fontRegular });
  ansP1.drawText("V/Req = V/R1 + V/R2 => 1/Req = 1/R1 + 1/R2.", { x: 85, y: 460, size: 10, font: fontRegular });

  ansP1.drawText('Ans 5.', { x: 40, y: 380, size: 12, font: fontBold, color: rgb(0.1, 0.2, 0.6) });
  ansP1.drawText("Transformer working principle: Mutual Induction between primary and secondary coils.", { x: 85, y: 380, size: 10, font: fontRegular });
  ansP1.drawText("Turns ratio relation: Vs / Vp = Ns / Np. [Continued on Page 2]", { x: 85, y: 360, size: 10, font: fontRegular });

  // Page 2
  const ansP2 = ansDoc.addPage([595.28, 841.89]);
  ansP2.drawText('Student Answer Sheet  |  Name: Alex Rivera  |  Roll No: 1042  (Page 2 of 2)', { x: 40, y: 810, size: 10, font: fontBold, color: rgb(0.4, 0.4, 0.5) });
  ansP2.drawLine({ start: { x: 40, y: 800 }, end: { x: 555, y: 800 }, thickness: 1, color: rgb(0.8, 0.8, 0.8) });

  ansP2.drawText('Ans 5 (Cont.)', { x: 40, y: 770, size: 12, font: fontBold, color: rgb(0.1, 0.2, 0.6) });
  ansP2.drawText("1. Copper Loss: I^2 R heating in primary & secondary turns.", { x: 85, y: 770, size: 10, font: fontRegular });
  ansP2.drawText("2. Eddy Current Loss: Induced circulating currents (laminated core mitigates).", { x: 85, y: 750, size: 10, font: fontRegular });
  ansP2.drawText("3. Hysteresis Loss: Reversal of magnetisation in core.", { x: 85, y: 730, size: 10, font: fontRegular });

  ansP2.drawText('Ans 2.', { x: 40, y: 640, size: 12, font: fontBold, color: rgb(0.1, 0.2, 0.6) });
  ansP2.drawText("m = 4 kg, v = 10 m/s. Kinetic Energy KE = 1/2 m v^2 = 0.5 * 4 * 100 = 200 Joules.", { x: 85, y: 640, size: 10, font: fontRegular });

  ansP2.drawText('Extra Note', { x: 40, y: 520, size: 12, font: fontBold, color: rgb(0.5, 0.1, 0.6) });
  ansP2.drawText("Rough note on Maxwell equations: del.E = rho/epsilon0, del.B = 0.", { x: 85, y: 520, size: 10, font: fontRegular });

  const ansPdfBytes = await ansDoc.save();
  fs.writeFileSync(path.join(publicSamplesDir, 'Student_Answer_Sheet.pdf'), ansPdfBytes);

  console.log('Successfully generated sample PDFs in public/samples/');
}

generatePDFs().catch(console.error);
