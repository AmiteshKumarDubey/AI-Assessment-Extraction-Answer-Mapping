import { AssessmentData } from '@/types/assessment';

function svgToDataUrl(svg: string): string {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg.trim())}`;
}

// ----------------------------------------------------
// 1. PHYSICS MID-TERM ASSESMENT (Demo Dataset 1)
// ----------------------------------------------------
const questionPaperSvg = svgToDataUrl(`
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1100" viewBox="0 0 800 1100" fill="none">
  <rect width="800" height="1100" fill="#ffffff"/>
  <rect x="20" y="20" width="760" height="1060" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
  
  <!-- Header -->
  <text x="50" y="70" font-family="Plus Jakarta Sans, sans-serif" font-size="22" font-weight="800" fill="#1e1b4b">VEDA AI ASSESSMENT - MID-TERM PHYSICS</text>
  <text x="50" y="98" font-family="Plus Jakarta Sans, sans-serif" font-size="14" font-weight="600" fill="#64748b">Class 11 | Time: 2 Hours | Max Marks: 40</text>
  <line x1="50" y1="115" x2="750" y2="115" stroke="#cbd5e1" stroke-width="2"/>
  
  <!-- Q1 -->
  <text x="50" y="155" font-family="sans-serif" font-size="16" font-weight="700" fill="#4338ca">Q 1. [5 Marks]</text>
  <text x="50" y="182" font-family="sans-serif" font-size="14" font-weight="500" fill="#1e293b">State Newton's Second Law of Motion and derive the vector equation F = ma.</text>
  
  <!-- Q2 -->
  <text x="50" y="250" font-family="sans-serif" font-size="16" font-weight="700" fill="#4338ca">Q 2. [5 Marks]</text>
  <text x="50" y="277" font-family="sans-serif" font-size="14" font-weight="500" fill="#1e293b">Calculate the kinetic energy of a 4 kg object moving at a uniform velocity of 10 m/s.</text>
  
  <!-- Q11a -->
  <text x="50" y="345" font-family="sans-serif" font-size="16" font-weight="700" fill="#4338ca">Q 11 (a). [5 Marks]</text>
  <text x="50" y="372" font-family="sans-serif" font-size="14" font-weight="500" fill="#1e293b">State Ohm's Law and explain the factor of resistance in a conductive wire.</text>
  
  <!-- Q11b -->
  <text x="50" y="440" font-family="sans-serif" font-size="16" font-weight="700" fill="#4338ca">Q 11 (b). [5 Marks]</text>
  <text x="50" y="467" font-family="sans-serif" font-size="14" font-weight="500" fill="#1e293b">Derive the formula for equivalent resistance 1/Req = 1/R1 + 1/R2 when connected in parallel.</text>
  
  <!-- Q3 -->
  <text x="50" y="535" font-family="sans-serif" font-size="16" font-weight="700" fill="#4338ca">Q 3. [5 Marks]</text>
  <text x="50" y="562" font-family="sans-serif" font-size="14" font-weight="500" fill="#1e293b">Explain the Photoelectric Effect and write Einstein's photoelectric equation.</text>
  
  <!-- Q4 -->
  <text x="50" y="630" font-family="sans-serif" font-size="16" font-weight="700" fill="#4338ca">Q 4. [5 Marks]</text>
  <text x="50" y="657" font-family="sans-serif" font-size="14" font-weight="500" fill="#1e293b">Define Total Internal Reflection and state the critical angle condition with formula.</text>
  
  <!-- Q5 -->
  <text x="50" y="725" font-family="sans-serif" font-size="16" font-weight="700" fill="#4338ca">Q 5. [10 Marks]</text>
  <text x="50" y="752" font-family="sans-serif" font-size="14" font-weight="500" fill="#1e293b">Describe the working principle of a transformer, write the turns ratio relation Vs/Vp = Ns/Np,</text>
  <text x="50" y="777" font-family="sans-serif" font-size="14" font-weight="500" fill="#1e293b">and explain major energy losses (copper loss, eddy currents, hysteresis).</text>
</svg>
`);

const answerSheetPage1Svg = svgToDataUrl(`
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1100" viewBox="0 0 800 1100" fill="none">
  <rect width="800" height="1100" fill="#fffdfa"/>
  <line x1="75" y1="0" x2="75" y2="1100" stroke="#f87171" stroke-width="1.5" stroke-dasharray="6 3"/>
  <g stroke="#cbd5e1" stroke-width="1">
    <line x1="0" y1="50" x2="800" y2="50"/>
    <line x1="0" y1="100" x2="800" y2="100"/>
    <line x1="0" y1="150" x2="800" y2="150"/>
    <line x1="0" y1="200" x2="800" y2="200"/>
    <line x1="0" y1="250" x2="800" y2="250"/>
    <line x1="0" y1="300" x2="800" y2="300"/>
    <line x1="0" y1="350" x2="800" y2="350"/>
    <line x1="0" y1="400" x2="800" y2="400"/>
    <line x1="0" y1="450" x2="800" y2="450"/>
    <line x1="0" y1="500" x2="800" y2="500"/>
    <line x1="0" y1="550" x2="800" y2="550"/>
    <line x1="0" y1="600" x2="800" y2="600"/>
    <line x1="0" y1="650" x2="800" y2="650"/>
    <line x1="0" y1="700" x2="800" y2="700"/>
    <line x1="0" y1="750" x2="800" y2="750"/>
    <line x1="0" y1="800" x2="800" y2="800"/>
    <line x1="0" y1="850" x2="800" y2="850"/>
    <line x1="0" y1="900" x2="800" y2="900"/>
    <line x1="0" y1="950" x2="800" y2="950"/>
    <line x1="0" y1="1000" x2="800" y2="1000"/>
    <line x1="0" y1="1050" x2="800" y2="1050"/>
  </g>
  <text x="90" y="38" font-family="sans-serif" font-size="14" font-weight="700" fill="#334155">Student: Alex Rivera | Roll No: 1042</text>
  <text x="680" y="38" font-family="sans-serif" font-size="14" font-weight="700" fill="#64748b">Page 1 of 2</text>
  <text x="15" y="145" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="20" font-weight="700" fill="#1e3a8a">Ans 3.</text>
  <text x="90" y="145" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="18" fill="#1e3a8a">Photoelectric effect: Emission of e- from metal when light hits surface.</text>
  <text x="90" y="195" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="18" fill="#1e3a8a">Einstein Equation: E_photon = &#934; + KE_max  (where &#934; = work function)</text>
  <text x="90" y="245" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="18" fill="#1e3a8a">Light acts as quanta (photons) with energy E = h&#957;.</text>
  <text x="15" y="355" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="20" font-weight="700" fill="#1e3a8a">Ans 1.</text>
  <text x="90" y="355" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="18" fill="#1e3a8a">Newton 2nd Law: Net Force proportional to rate of change of momentum.</text>
  <text x="90" y="405" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="18" fill="#1e3a8a">F = dp/dt = d(mv)/dt = m(dv/dt) = ma (for constant mass m).</text>
  <text x="15" y="565" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="19" font-weight="700" fill="#1e3a8a">Ans 11(a)</text>
  <text x="90" y="565" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="18" fill="#1e3a8a">Ohm's Law: V &#8733; I at constant temperature =&gt; V = I*R.</text>
  <text x="90" y="615" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="18" fill="#1e3a8a">Resistance factor: R = &#961; * L / A  (Resistivity, Length &amp; Area).</text>
  <text x="15" y="765" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="19" font-weight="700" fill="#1e3a8a">Ans 11(b)</text>
  <text x="90" y="765" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="18" fill="#1e3a8a">Parallel Combination: V is constant. Total I = I1 + I2.</text>
  <text x="90" y="815" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="18" fill="#1e3a8a">V/Req = V/R1 + V/R2  =&gt;  1/Req = 1/R1 + 1/R2.</text>
  <text x="15" y="955" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="20" font-weight="700" fill="#1e3a8a">Ans 5.</text>
  <text x="90" y="955" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="18" fill="#1e3a8a">Transformer Working Principle: Mutual Induction between 2 coils.</text>
  <text x="90" y="1005" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="18" fill="#1e3a8a">Turns ratio relation: Vs / Vp = Ns / Np. [Continued on Page 2...]</text>
</svg>
`);

const answerSheetPage2Svg = svgToDataUrl(`
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1100" viewBox="0 0 800 1100" fill="none">
  <rect width="800" height="1100" fill="#fffdfa"/>
  <line x1="75" y1="0" x2="75" y2="1100" stroke="#f87171" stroke-width="1.5" stroke-dasharray="6 3"/>
  <g stroke="#cbd5e1" stroke-width="1">
    <line x1="0" y1="50" x2="800" y2="50"/>
    <line x1="0" y1="100" x2="800" y2="100"/>
    <line x1="0" y1="150" x2="800" y2="150"/>
    <line x1="0" y1="200" x2="800" y2="200"/>
    <line x1="0" y1="250" x2="800" y2="250"/>
    <line x1="0" y1="300" x2="800" y2="300"/>
    <line x1="0" y1="350" x2="800" y2="350"/>
    <line x1="0" y1="400" x2="800" y2="400"/>
    <line x1="0" y1="450" x2="800" y2="450"/>
    <line x1="0" y1="500" x2="800" y2="500"/>
    <line x1="0" y1="550" x2="800" y2="550"/>
    <line x1="0" y1="600" x2="800" y2="600"/>
    <line x1="0" y1="650" x2="800" y2="650"/>
    <line x1="0" y1="700" x2="800" y2="700"/>
    <line x1="0" y1="750" x2="800" y2="750"/>
    <line x1="0" y1="800" x2="800" y2="800"/>
    <line x1="0" y1="850" x2="800" y2="850"/>
    <line x1="0" y1="900" x2="800" y2="900"/>
    <line x1="0" y1="950" x2="800" y2="950"/>
    <line x1="0" y1="1000" x2="800" y2="1000"/>
    <line x1="0" y1="1050" x2="800" y2="1050"/>
  </g>
  <text x="90" y="38" font-family="sans-serif" font-size="14" font-weight="700" fill="#334155">Student: Alex Rivera | Roll No: 1042</text>
  <text x="680" y="38" font-family="sans-serif" font-size="14" font-weight="700" fill="#64748b">Page 2 of 2</text>
  <text x="15" y="125" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="19" font-weight="700" fill="#1e3a8a">Ans 5 (Cont.)</text>
  <text x="90" y="125" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="18" fill="#1e3a8a">Energy Losses in Transformer:</text>
  <text x="90" y="175" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="18" fill="#1e3a8a">1. Copper Loss: I^2 R heating in primary &amp; secondary turns.</text>
  <text x="90" y="225" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="18" fill="#1e3a8a">2. Eddy Current Loss: Induced circulating currents (laminated core mitigates).</text>
  <text x="90" y="275" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="18" fill="#1e3a8a">3. Hysteresis Loss: Reversal of magnetisation in magnetic iron core.</text>
  <text x="15" y="555" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="20" font-weight="700" fill="#1e3a8a">Ans 2.</text>
  <text x="90" y="555" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="18" fill="#1e3a8a">Calculation: m = 4 kg, v = 10 m/s.</text>
  <text x="90" y="605" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="18" fill="#1e3a8a">KE = 1/2 * m * v^2 = 0.5 * 4 * (10)^2 = 200 Joules.</text>
  <text x="15" y="815" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="18" font-weight="700" fill="#9333ea">Extra Note</text>
  <text x="90" y="815" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="18" fill="#9333ea">[Unmapped Student Response]</text>
  <text x="90" y="865" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="18" fill="#9333ea">Extra notes: Maxwell equations governing EM waves: &#8711;&#183;E = &#961;/&#949;0, &#8711;&#183;B = 0.</text>
</svg>
`);

export const DEMO_ASSESSMENT: AssessmentData = {
  summary: {
    assessmentTitle: "Physics Mid-Term Assessment - Grade 11",
    studentName: "Alex Rivera",
    subject: "Physics",
    totalMarksObtained: 32,
    totalMaxMarks: 40,
    percentage: 80,
    questionsCount: 7,
    answeredCount: 5,
    unansweredCount: 1,
    outOfOrderCount: 2,
    unmappedCount: 1,
    overallFeedback: "Strong conceptual understanding of mechanics, Ohm's law, and photoelectric theory. Demonstrates excellent mathematical derivations. Note that Question 4 (Total Internal Reflection) was left completely unanswered. Question 3 and Question 5 were answered out of printed sequence.",
    strengths: [
      "Precise formulation of Newton's second law and photoelectric equation",
      "Correct parallel resistor derivation for Question 11 (b)",
      "Clear diagrammatic representation for transformer principles"
    ],
    improvements: [
      "Time management: Q4 left blank (5 marks missed)",
      "Include explicit units in intermediate step for Q2",
      "Remember to state temperature assumptions for Ohm's Law"
    ]
  },
  questions: [
    {
      id: "q1",
      numberLabel: "1",
      orderIndex: 1,
      text: "State Newton's Second Law of Motion and derive the vector equation F = ma.",
      maxMarks: 5,
      sampleSolution: "Newton's 2nd Law: The rate of change of momentum of a body is directly proportional to the applied net force and takes place in the direction of the force. F = dp/dt = d(mv)/dt = m(dv/dt) = ma."
    },
    {
      id: "q2",
      numberLabel: "2",
      orderIndex: 2,
      text: "Calculate the kinetic energy of a 4 kg object moving at a uniform velocity of 10 m/s.",
      maxMarks: 5,
      sampleSolution: "KE = 1/2 * m * v^2 = 0.5 * 4 kg * (10 m/s)^2 = 0.5 * 4 * 100 = 200 Joules."
    },
    {
      id: "q11a",
      numberLabel: "11 (a)",
      parentNumber: "11",
      orderIndex: 3,
      text: "State Ohm's Law and explain the factor of resistance in a conductive wire.",
      maxMarks: 5,
      sampleSolution: "Ohm's Law: At constant temperature, current I is directly proportional to potential difference V (V = IR). Resistance depends on resistivity, length, and cross-sectional area (R = \u03c1 L / A)."
    },
    {
      id: "q11b",
      numberLabel: "11 (b)",
      parentNumber: "11",
      orderIndex: 4,
      text: "Derive the formula for equivalent resistance R_eq when two resistors R1 and R2 are connected in parallel.",
      maxMarks: 5,
      sampleSolution: "In parallel: Total current I = I1 + I2. Since V is same: V/Req = V/R1 + V/R2 => 1/Req = 1/R1 + 1/R2 => Req = (R1 * R2) / (R1 + R2)."
    },
    {
      id: "q3",
      numberLabel: "3",
      orderIndex: 5,
      text: "Explain the Photoelectric Effect and write Einstein's photoelectric equation.",
      maxMarks: 5,
      sampleSolution: "Photoelectric Effect is the emission of electrons from a metal surface when light of suitable frequency shines on it. Einstein equation: E = h\u03bd = W0 + K_max = h\u03bd0 + 1/2 m v_max^2."
    },
    {
      id: "q4",
      numberLabel: "4",
      orderIndex: 6,
      text: "Define Total Internal Reflection and state the critical angle condition with formula.",
      maxMarks: 5,
      sampleSolution: "Total Internal Reflection occurs when light traveling from a denser to a rarer medium strikes the boundary at an angle greater than the critical angle \u03b8c. Formula: sin(\u03b8c) = n2 / n1."
    },
    {
      id: "q5",
      numberLabel: "5",
      orderIndex: 7,
      text: "Describe the working principle of a transformer, write the turns ratio relation, and explain energy losses.",
      maxMarks: 10,
      sampleSolution: "Principle: Mutual induction. Voltage ratio Vs/Vp = Ns/Np = Ip/Is. Energy losses include copper loss (I^2 R), hysteresis loss, eddy current loss (mitigated by laminated iron core), and flux leakage."
    }
  ],
  answers: [
    {
      id: "ans_q3",
      questionId: "q3",
      detectedQuestionLabel: "Ans 3",
      pageIndex: 0,
      boundingBox: { x: 8, y: 11, width: 84, height: 16 },
      extractedText: "Ans 3: Photoelectric Effect occurs when light photons hit a metallic sheet, knocking out valence electrons. Einstein Photoelectric Equation: E_photon = \u03a6 + KE_max where \u03a6 is the work function of metal.",
      isOutOfOrder: true,
      status: "graded",
      score: 5,
      maxScore: 5,
      evaluation: "correct",
      feedback: "Flawless response! Clearly defines photon energy absorption and states Einstein's photoelectric equation accurately.",
      keyConceptsFound: ["Photon energy absorption", "Work function \u03a6", "Kinetic energy of photoelectron"],
      keyConceptsMissing: []
    },
    {
      id: "ans_q1",
      questionId: "q1",
      detectedQuestionLabel: "Ans 1",
      pageIndex: 0,
      boundingBox: { x: 8, y: 30, width: 84, height: 16 },
      extractedText: "Ans 1: Newton's 2nd Law states that net force is proportional to the rate of change of linear momentum. F = dp/dt = d(mv)/dt. For constant mass m, F = m(dv/dt) = ma.",
      isOutOfOrder: false,
      status: "graded",
      score: 4.5,
      maxScore: 5,
      evaluation: "correct",
      feedback: "Great derivation. Minor note: ensure to specify that force F and acceleration a are vector quantities.",
      keyConceptsFound: ["Rate of change of momentum", "F = dp/dt", "F = ma derivation"],
      keyConceptsMissing: ["Vector notation indication"]
    },
    {
      id: "ans_q11a",
      questionId: "q11a",
      detectedQuestionLabel: "Ans 11 (a)",
      pageIndex: 0,
      boundingBox: { x: 8, y: 49, width: 84, height: 15 },
      extractedText: "Ans 11(a): Ohm's Law: Potential difference V across conductor is directly proportional to current I flowing through it provided temp is constant. V = I*R. Resistance R = \u03c1 L / A.",
      isOutOfOrder: false,
      status: "graded",
      score: 5,
      maxScore: 5,
      evaluation: "correct",
      feedback: "Comprehensive answer. Mentioned both constant temperature condition and physical geometric dependency R = \u03c1L/A.",
      keyConceptsFound: ["V = IR proportionality", "Constant temperature condition", "R = \u03c1L/A formula"],
      keyConceptsMissing: []
    },
    {
      id: "ans_q11b",
      questionId: "q11b",
      detectedQuestionLabel: "Ans 11 (b)",
      pageIndex: 0,
      boundingBox: { x: 8, y: 67, width: 84, height: 15 },
      extractedText: "Ans 11(b): Parallel Resistors: Voltage V is identical across both R1 and R2. Total I = I1 + I2. Since I1 = V/R1 and I2 = V/R2, V/Req = V/R1 + V/R2 => 1/Req = 1/R1 + 1/R2.",
      isOutOfOrder: false,
      status: "graded",
      score: 4.5,
      maxScore: 5,
      evaluation: "correct",
      feedback: "Well derived from current conservation law. Could also write final explicit form Req = (R1*R2)/(R1+R2).",
      keyConceptsFound: ["Current conservation I = I1+I2", "Constant potential difference V", "Reciprocal sum formula"],
      keyConceptsMissing: ["Explicit Req product-over-sum form"]
    },
    {
      id: "ans_q5",
      questionId: "q5",
      detectedQuestionLabel: "Ans 5",
      pageIndex: 0,
      boundingBox: { x: 8, y: 84, width: 84, height: 14 },
      multiPageRegions: [
        { pageIndex: 0, boundingBox: { x: 8, y: 84, width: 84, height: 14 } },
        { pageIndex: 1, boundingBox: { x: 8, y: 9, width: 84, height: 26 } }
      ],
      extractedText: "Ans 5 (Continuation on Page 2): Working principle: Mutual Induction. A changing current in primary winding induces alternating magnetic flux in soft iron core, inducing voltage in secondary. Vs/Vp = Ns/Np. Energy losses: 1. Copper loss (I^2 R heat), 2. Eddy current losses (prevented by laminated sheets), 3. Hysteresis loss in core magnetisation.",
      isOutOfOrder: true,
      status: "graded",
      score: 8.5,
      maxScore: 10,
      evaluation: "partial",
      feedback: "Excellent multi-page answer! Spans Page 1 and Page 2 seamlessly. Accurately explains mutual induction, turns ratio, and 3 major energy loss mechanisms. Missed mentioning flux leakage.",
      keyConceptsFound: ["Mutual induction principle", "Vs/Vp = Ns/Np turns ratio", "Copper loss & Eddy current mitigation"],
      keyConceptsMissing: ["Magnetic flux leakage loss"]
    },
    {
      id: "ans_q2",
      questionId: "q2",
      detectedQuestionLabel: "Ans 2",
      pageIndex: 1,
      boundingBox: { x: 8, y: 48, width: 84, height: 18 },
      extractedText: "Ans 2: Mass m = 4 kg, Velocity v = 10 m/s. Kinetic energy KE = 1/2 * m * v^2 = 0.5 * 4 * (10)^2 = 0.5 * 4 * 100 = 200 Joules.",
      isOutOfOrder: true,
      status: "graded",
      score: 4.5,
      maxScore: 5,
      evaluation: "correct",
      feedback: "Correct numerical calculation and unit (Joules). Answered on Page 2 out of original sequence.",
      keyConceptsFound: ["KE formula 1/2 mv^2", "Correct substitution", "200 J final value"],
      keyConceptsMissing: []
    },
    {
      id: "ans_q4_unanswered",
      questionId: "q4",
      detectedQuestionLabel: "Ans 4 (Not Found)",
      pageIndex: 0,
      boundingBox: { x: 0, y: 0, width: 0, height: 0 },
      extractedText: "[No response detected for Question 4 on answer sheet]",
      isOutOfOrder: false,
      status: "unanswered",
      score: 0,
      maxScore: 5,
      evaluation: "unanswered",
      feedback: "Question 4 was left completely unanswered by the student. No handwritten text or diagram found for Total Internal Reflection.",
      keyConceptsFound: [],
      keyConceptsMissing: ["Definition of TIR", "Critical angle formula sin(\u03b8c) = n2/n1"]
    },
    {
      id: "ans_extra_unmapped",
      questionId: null,
      detectedQuestionLabel: "Unmapped Answer Note",
      pageIndex: 1,
      boundingBox: { x: 8, y: 72, width: 84, height: 18 },
      extractedText: "Student Rough Note at end: 'Extra attempt on Maxwell equations: \u2207\u22c5E = \u03c1/\u03b50, \u2207\u22c5B = 0. Electric flux integral equals enclosed charge.'",
      isOutOfOrder: false,
      status: "unmapped",
      score: 0,
      maxScore: 0,
      evaluation: "partial",
      feedback: "This response does not match any question on the printed Question Paper. Preserved for teacher review as an extra student submission.",
      keyConceptsFound: ["Maxwell equations", "Gauss Law"],
      keyConceptsMissing: []
    }
  ],
  questionPaperImages: [questionPaperSvg],
  answerSheetImages: [answerSheetPage1Svg, answerSheetPage2Svg]
};

// ----------------------------------------------------
// 2. CHEMISTRY UNIT TEST - GRADE 10 (Priya Sharma Upload)
// ----------------------------------------------------
const chemistryQuestionPaperSvg = svgToDataUrl(`
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1100" viewBox="0 0 800 1100" fill="none">
  <rect width="800" height="1100" fill="#ffffff"/>
  <rect x="20" y="20" width="760" height="1060" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
  
  <text x="180" y="65" font-family="Plus Jakarta Sans, sans-serif" font-size="20" font-weight="800" fill="#0f172a">DELHI PUBLIC SCHOOL, BOKARO STEEL CITY</text>
  <text x="300" y="92" font-family="Plus Jakarta Sans, sans-serif" font-size="14" font-weight="700" fill="#475569">Chemistry Unit Test — Grade 10</text>
  <text x="50" y="125" font-family="sans-serif" font-size="13" font-weight="600" fill="#64748b">Time: 1 Hour</text>
  <text x="640" y="125" font-family="sans-serif" font-size="13" font-weight="600" fill="#64748b">Max Marks: 40</text>
  <line x1="50" y1="135" x2="750" y2="135" stroke="#cbd5e1" stroke-width="2"/>
  
  <!-- Q1 -->
  <text x="50" y="170" font-family="sans-serif" font-size="15" font-weight="700" fill="#0f172a">1. Define an exothermic reaction and give one real-life example. [3 marks]</text>
  <!-- Q2 -->
  <text x="50" y="240" font-family="sans-serif" font-size="15" font-weight="700" fill="#0f172a">2. Balance the following chemical equation: Fe + H2O -&gt; Fe3O4 + H2. [3 marks]</text>
  <!-- Q3 -->
  <text x="50" y="310" font-family="sans-serif" font-size="15" font-weight="700" fill="#0f172a">3. What is the difference between a physical change and a chemical change? [4 marks]</text>
  <!-- Q4 -->
  <text x="50" y="380" font-family="sans-serif" font-size="15" font-weight="700" fill="#0f172a">4. Explain the process of rusting of iron. Write the chemical name and formula of rust. [5 marks]</text>
  <!-- Q5a -->
  <text x="50" y="450" font-family="sans-serif" font-size="15" font-weight="700" fill="#0f172a">5 (a). Define pH and state the pH range for acidic, neutral, and basic solutions. [3 marks]</text>
  <!-- Q5b -->
  <text x="50" y="520" font-family="sans-serif" font-size="15" font-weight="700" fill="#0f172a">5 (b). Why does an aqueous solution of an acid conduct electricity? [3 marks]</text>
  <!-- Q6 -->
  <text x="50" y="590" font-family="sans-serif" font-size="15" font-weight="700" fill="#0f172a">6. A student leaves iron sulphate exposed to air. Explain brown precipitate with balanced equation. [6 marks]</text>
  <!-- Q7 -->
  <text x="50" y="660" font-family="sans-serif" font-size="15" font-weight="700" fill="#0f172a">7. State two ways to speed up corrosion. How can corrosion be prevented? [4 marks]</text>
  <!-- Q8 -->
  <text x="50" y="730" font-family="sans-serif" font-size="15" font-weight="700" fill="#0f172a">8. Describe the working principle of a galvanic cell with labelled diagram. [8 marks]</text>
</svg>
`);

const chemistryAnswerPage1Svg = svgToDataUrl(`
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1100" viewBox="0 0 800 1100" fill="none">
  <rect width="800" height="1100" fill="#fffdfa"/>
  <line x1="75" y1="0" x2="75" y2="1100" stroke="#f87171" stroke-width="1.5" stroke-dasharray="6 3"/>
  <g stroke="#cbd5e1" stroke-width="1">
    <line x1="0" y1="50" x2="800" y2="50"/>
    <line x1="0" y1="100" x2="800" y2="100"/>
    <line x1="0" y1="150" x2="800" y2="150"/>
    <line x1="0" y1="200" x2="800" y2="200"/>
    <line x1="0" y1="250" x2="800" y2="250"/>
    <line x1="0" y1="300" x2="800" y2="300"/>
    <line x1="0" y1="350" x2="800" y2="350"/>
    <line x1="0" y1="400" x2="800" y2="400"/>
    <line x1="0" y1="450" x2="800" y2="450"/>
    <line x1="0" y1="500" x2="800" y2="500"/>
    <line x1="0" y1="550" x2="800" y2="550"/>
    <line x1="0" y1="600" x2="800" y2="600"/>
    <line x1="0" y1="650" x2="800" y2="650"/>
    <line x1="0" y1="700" x2="800" y2="700"/>
    <line x1="0" y1="750" x2="800" y2="750"/>
    <line x1="0" y1="800" x2="800" y2="800"/>
    <line x1="0" y1="850" x2="800" y2="850"/>
    <line x1="0" y1="900" x2="800" y2="900"/>
    <line x1="0" y1="950" x2="800" y2="950"/>
    <line x1="0" y1="1000" x2="800" y2="1000"/>
  </g>
  <text x="90" y="38" font-family="sans-serif" font-size="14" font-weight="700" fill="#334155">Student: Priya Sharma | Roll No: 2114</text>
  <text x="680" y="38" font-family="sans-serif" font-size="14" font-weight="700" fill="#64748b">Page 1 of 2</text>
  
  <!-- Ans 2 (Out of Order) -->
  <text x="15" y="140" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="20" font-weight="700" fill="#1e3a8a">Ans 2.</text>
  <text x="90" y="140" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="18" fill="#1e3a8a">Fe + 4H2O -&gt; Fe3O4 + 4H2</text>
  <text x="90" y="185" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="17" fill="#1e3a8a">(Balanced by adjusting coefficients on both sides)</text>
  
  <!-- Ans 1 -->
  <text x="15" y="270" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="20" font-weight="700" fill="#1e3a8a">Ans 1.</text>
  <text x="90" y="270" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="18" fill="#1e3a8a">Exothermic reaction: A reaction which releases heat energy to surroundings.</text>
  <text x="90" y="315" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="18" fill="#1e3a8a">Example: Burning of natural gas (combustion).</text>
  
  <!-- Ans 3 -->
  <text x="15" y="420" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="20" font-weight="700" fill="#1e3a8a">Ans 3.</text>
  <text x="90" y="420" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="18" fill="#1e3a8a">Physical change: No new substance formed, easily reversible (e.g. Melting ice).</text>
  <text x="90" y="465" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="18" fill="#1e3a8a">Chemical change: New substance formed, mostly irreversible (e.g. Burning paper).</text>
  
  <!-- Ans 5(a) -->
  <text x="15" y="570" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="19" font-weight="700" fill="#1e3a8a">Ans 5(a).</text>
  <text x="90" y="570" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="18" fill="#1e3a8a">pH is a scale (0-14) to measure H+ ion concentration.</text>
  <text x="90" y="615" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="18" fill="#1e3a8a">0-7: Acidic, 7: Neutral, 7-14: Basic.</text>
</svg>
`);

const chemistryAnswerPage2Svg = svgToDataUrl(`
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1100" viewBox="0 0 800 1100" fill="none">
  <rect width="800" height="1100" fill="#fffdfa"/>
  <line x1="75" y1="0" x2="75" y2="1100" stroke="#f87171" stroke-width="1.5" stroke-dasharray="6 3"/>
  <g stroke="#cbd5e1" stroke-width="1">
    <line x1="0" y1="50" x2="800" y2="50"/>
    <line x1="0" y1="100" x2="800" y2="100"/>
    <line x1="0" y1="150" x2="800" y2="150"/>
    <line x1="0" y1="200" x2="800" y2="200"/>
    <line x1="0" y1="250" x2="800" y2="250"/>
    <line x1="0" y1="300" x2="800" y2="300"/>
    <line x1="0" y1="350" x2="800" y2="350"/>
    <line x1="0" y1="400" x2="800" y2="400"/>
    <line x1="0" y1="450" x2="800" y2="450"/>
    <line x1="0" y1="500" x2="800" y2="500"/>
    <line x1="0" y1="550" x2="800" y2="550"/>
    <line x1="0" y1="600" x2="800" y2="600"/>
    <line x1="0" y1="650" x2="800" y2="650"/>
    <line x1="0" y1="700" x2="800" y2="700"/>
    <line x1="0" y1="750" x2="800" y2="750"/>
    <line x1="0" y1="800" x2="800" y2="800"/>
    <line x1="0" y1="850" x2="800" y2="850"/>
    <line x1="0" y1="900" x2="800" y2="900"/>
  </g>
  <text x="90" y="38" font-family="sans-serif" font-size="14" font-weight="700" fill="#334155">Student: Priya Sharma | Roll No: 2114</text>
  <text x="680" y="38" font-family="sans-serif" font-size="14" font-weight="700" fill="#64748b">Page 2 of 2</text>
  
  <!-- Ans 5(b) (Multi-page Page 2) -->
  <text x="15" y="125" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="19" font-weight="700" fill="#1e3a8a">Ans 5(b)</text>
  <text x="90" y="125" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="18" fill="#1e3a8a">[Continued from Page 1] Because acids dissociate in water to release free ions</text>
  <text x="90" y="170" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="18" fill="#1e3a8a">(H+ and anions) which carry electric charge.</text>
  
  <!-- Ans 6 -->
  <text x="15" y="275" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="20" font-weight="700" fill="#1e3a8a">Ans 6.</text>
  <text x="90" y="275" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="18" fill="#1e3a8a">Iron sulphate in air reacts with oxygen &amp; moisture forming brown rust precipitate.</text>
  <text x="90" y="320" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="18" fill="#1e3a8a">4Fe + 3O2 + xH2O -&gt; 2Fe2O3.xH2O (rust)</text>
  
  <!-- Ans 8 -->
  <text x="15" y="450" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="20" font-weight="700" fill="#1e3a8a">Ans 8.</text>
  <text x="90" y="450" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="18" fill="#1e3a8a">A galvanic cell converts chemical energy into electrical energy using spontaneous redox.</text>
  <text x="90" y="495" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="18" fill="#1e3a8a">Two electrodes (anode &amp; cathode) connected by salt bridge. Electrons flow Zn to Cu.</text>
  
  <!-- Unmapped Rough Note -->
  <text x="15" y="880" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="18" font-weight="700" fill="#9333ea">Rough</text>
  <text x="90" y="880" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="18" fill="#9333ea">Rough: Q9 practice - NaOH + HCl -&gt; NaCl + H2O (not part of paper)</text>
</svg>
`);

export const CHEMISTRY_ASSESSMENT: AssessmentData = {
  summary: {
    assessmentTitle: "Chemistry Unit Test — Grade 10",
    studentName: "Priya Sharma",
    subject: "Chemistry",
    totalMarksObtained: 31,
    totalMaxMarks: 40,
    percentage: 78,
    questionsCount: 9,
    answeredCount: 6,
    unansweredCount: 2,
    outOfOrderCount: 1,
    unmappedCount: 1,
    overallFeedback: "Excellent understanding of chemical balancing, exothermic reactions, pH scale, and galvanic cells! Question 2 was answered out of printed order. Note that Question 4 (Rusting explanation) and Question 7 (Corrosion prevention) were left completely unanswered.",
    strengths: [
      "Accurate balancing of Fe + 4H2O -> Fe3O4 + 4H2 equation",
      "Clear differentiation between physical and chemical changes with real-life examples",
      "Correct explanation of electrolytic dissociation for aqueous acid solution"
    ],
    improvements: [
      "Time management: Q4 (5 marks) and Q7 (4 marks) left unanswered",
      "Specify oxidation/reduction half-reactions explicitly for galvanic cell"
    ]
  },
  questions: [
    {
      id: "c1",
      numberLabel: "1",
      orderIndex: 1,
      text: "Define an exothermic reaction and give one real-life example.",
      maxMarks: 3,
      sampleSolution: "Exothermic reaction: A reaction in which heat energy is released to surroundings. Example: Burning of natural gas (combustion)."
    },
    {
      id: "c2",
      numberLabel: "2",
      orderIndex: 2,
      text: "Balance the following chemical equation: Fe + H2O -> Fe3O4 + H2.",
      maxMarks: 3,
      sampleSolution: "Balanced equation: 3Fe + 4H2O -> Fe3O4 + 4H2."
    },
    {
      id: "c3",
      numberLabel: "3",
      orderIndex: 3,
      text: "What is the difference between a physical change and a chemical change? Give one example of each.",
      maxMarks: 4,
      sampleSolution: "Physical change: No new substance formed, reversible (e.g. melting ice). Chemical change: New substance formed, irreversible (e.g. burning paper)."
    },
    {
      id: "c4",
      numberLabel: "4",
      orderIndex: 4,
      text: "Explain the process of rusting of iron. Write the chemical name and formula of rust.",
      maxMarks: 5,
      sampleSolution: "Rusting: Corrosion of iron in presence of moist air. Hydrated ferric oxide Fe2O3.xH2O."
    },
    {
      id: "c5a",
      numberLabel: "5 (a)",
      parentNumber: "5",
      orderIndex: 5,
      text: "Define pH and state the pH range for acidic, neutral, and basic solutions.",
      maxMarks: 3,
      sampleSolution: "pH is a scale (0-14) measuring H+ ion concentration. Acidic < 7, Neutral = 7, Basic > 7."
    },
    {
      id: "c5b",
      numberLabel: "5 (b)",
      parentNumber: "5",
      orderIndex: 6,
      text: "Why does an aqueous solution of an acid conduct electricity?",
      maxMarks: 3,
      sampleSolution: "Aqueous acid dissociates into H+ and anion free ions which move and carry electrical charge."
    },
    {
      id: "c6",
      numberLabel: "6",
      orderIndex: 7,
      text: "A student leaves a solution of iron sulphate exposed to air. Explain brown precipitate with balanced chemical equation.",
      maxMarks: 6,
      sampleSolution: "Iron sulphate reacts with atmospheric oxygen and moisture to form brown rust 2Fe2O3.xH2O precipitate."
    },
    {
      id: "c7",
      numberLabel: "7",
      orderIndex: 8,
      text: "State two ways to speed up the process of corrosion. How can corrosion be prevented?",
      maxMarks: 4,
      sampleSolution: "Speed up: Humidity, salinity. Prevention: Galvanisation, painting, oiling."
    },
    {
      id: "c8",
      numberLabel: "8",
      orderIndex: 9,
      text: "Describe the working principle of a galvanic cell with a labelled diagram.",
      maxMarks: 8,
      sampleSolution: "Galvanic cell converts chemical energy into electrical energy via spontaneous redox. Zn anode, Cu cathode, salt bridge."
    }
  ],
  answers: [
    {
      id: "c_ans_2",
      questionId: "c2",
      detectedQuestionLabel: "Ans 2",
      pageIndex: 0,
      boundingBox: { x: 8, y: 11, width: 84, height: 12 },
      extractedText: "Ans 2: 3Fe + 4H2O -> Fe3O4 + 4H2. (Balanced by adjusting coefficients on both sides)",
      isOutOfOrder: true,
      status: "graded",
      score: 3,
      maxScore: 3,
      evaluation: "correct",
      feedback: "Flawless chemical equation balancing! Correctly balanced Fe and H2O coefficients.",
      keyConceptsFound: ["Balanced stoichiometry 3Fe + 4H2O", "Fe3O4 + 4H2 products"],
      keyConceptsMissing: []
    },
    {
      id: "c_ans_1",
      questionId: "c1",
      detectedQuestionLabel: "Ans 1",
      pageIndex: 0,
      boundingBox: { x: 8, y: 24, width: 84, height: 12 },
      extractedText: "Ans 1: Exothermic reaction: A reaction which releases heat energy to the surroundings. Example: Burning of natural gas (combustion).",
      isOutOfOrder: false,
      status: "graded",
      score: 3,
      maxScore: 3,
      evaluation: "correct",
      feedback: "Clear definition of heat release and valid real-life combustion example.",
      keyConceptsFound: ["Heat energy release", "Combustion example"],
      keyConceptsMissing: []
    },
    {
      id: "c_ans_3",
      questionId: "c3",
      detectedQuestionLabel: "Ans 3",
      pageIndex: 0,
      boundingBox: { x: 8, y: 38, width: 84, height: 14 },
      extractedText: "Ans 3: Physical change: No new substance formed, easily reversible (e.g. Melting ice). Chemical change: New substance formed, mostly irreversible (e.g. Burning paper).",
      isOutOfOrder: false,
      status: "graded",
      score: 4,
      maxScore: 4,
      evaluation: "correct",
      feedback: "Complete comparison with appropriate real-world examples for both physical and chemical changes.",
      keyConceptsFound: ["Reversibility distinction", "Substance formation", "Melting ice & burning paper examples"],
      keyConceptsMissing: []
    },
    {
      id: "c_ans_5a",
      questionId: "c5a",
      detectedQuestionLabel: "Ans 5 (a)",
      pageIndex: 0,
      boundingBox: { x: 8, y: 54, width: 84, height: 13 },
      extractedText: "Ans 5(a): pH is a scale (0-14) to measure H+ ion concentration. 0-7: Acidic, 7: Neutral, 7-14: Basic.",
      isOutOfOrder: false,
      status: "graded",
      score: 3,
      maxScore: 3,
      evaluation: "correct",
      feedback: "Accurate definition of pH scale and clear breakdown of acidic, neutral, and basic ranges.",
      keyConceptsFound: ["H+ ion concentration scale", "Acidic/Neutral/Basic ranges"],
      keyConceptsMissing: []
    },
    {
      id: "c_ans_5b",
      questionId: "c5b",
      detectedQuestionLabel: "Ans 5 (b)",
      pageIndex: 1,
      boundingBox: { x: 8, y: 9, width: 84, height: 13 },
      multiPageRegions: [
        { pageIndex: 1, boundingBox: { x: 8, y: 9, width: 84, height: 13 } }
      ],
      extractedText: "Ans 5(b) [Continued on Page 2]: Because acids dissociate in water to release free ions (H+ and anions) which carry electric charge.",
      isOutOfOrder: false,
      status: "graded",
      score: 3,
      maxScore: 3,
      evaluation: "correct",
      feedback: "Excellent multi-page answer continuation. Correctly identifies free mobile ions carrying charge in solution.",
      keyConceptsFound: ["Acid dissociation into ions", "Charge transport by H+ and anions"],
      keyConceptsMissing: []
    },
    {
      id: "c_ans_6",
      questionId: "c6",
      detectedQuestionLabel: "Ans 6",
      pageIndex: 1,
      boundingBox: { x: 8, y: 24, width: 84, height: 16 },
      extractedText: "Ans 6: When iron sulphate solution is left in air, iron reacts with oxygen and moisture forming a brown precipitate of hydrated iron oxide (rust). 4Fe + 3O2 + xH2O -> 2Fe2O3.xH2O (rust).",
      isOutOfOrder: false,
      status: "graded",
      score: 6,
      maxScore: 6,
      evaluation: "correct",
      feedback: "Thorough explanation with correct chemical formula for hydrated ferric oxide rust precipitate.",
      keyConceptsFound: ["Atmospheric oxygen & moisture reaction", "Hydrated ferric oxide formula Fe2O3.xH2O"],
      keyConceptsMissing: []
    },
    {
      id: "c_ans_8",
      questionId: "c8",
      detectedQuestionLabel: "Ans 8",
      pageIndex: 1,
      boundingBox: { x: 8, y: 42, width: 84, height: 22 },
      extractedText: "Ans 8: A galvanic cell converts chemical energy into electrical energy using a spontaneous redox reaction. It has two electrodes (anode & cathode) dipped in electrolyte solutions connected by a salt bridge. [Diagram: Zn electrode -- salt bridge -- Cu electrode] Electrons flow from Zn (anode) to Cu (cathode) through external wire.",
      isOutOfOrder: false,
      status: "graded",
      score: 8,
      maxScore: 8,
      evaluation: "correct",
      feedback: "Exceptional answer! Covers spontaneous redox, anode/cathode setup, salt bridge, and electron flow direction.",
      keyConceptsFound: ["Spontaneous redox conversion", "Anode/cathode & salt bridge", "Electron flow direction"],
      keyConceptsMissing: []
    },
    {
      id: "c_ans_4_unanswered",
      questionId: "c4",
      detectedQuestionLabel: "Ans 4 (Not Found)",
      pageIndex: 0,
      boundingBox: { x: 0, y: 0, width: 0, height: 0 },
      extractedText: "[No response detected for Question 4 on answer sheet]",
      isOutOfOrder: false,
      status: "unanswered",
      score: 0,
      maxScore: 5,
      evaluation: "unanswered",
      feedback: "Question 4 was left unanswered by the student. No response detected for rusting process explanation.",
      keyConceptsFound: [],
      keyConceptsMissing: ["Rusting explanation", "Fe2O3.xH2O formula"]
    },
    {
      id: "c_ans_7_unanswered",
      questionId: "c7",
      detectedQuestionLabel: "Ans 7 (Not Found)",
      pageIndex: 0,
      boundingBox: { x: 0, y: 0, width: 0, height: 0 },
      extractedText: "[No response detected for Question 7 on answer sheet]",
      isOutOfOrder: false,
      status: "unanswered",
      score: 0,
      maxScore: 4,
      evaluation: "unanswered",
      feedback: "Question 7 was left unanswered by the student.",
      keyConceptsFound: [],
      keyConceptsMissing: ["Corrosion acceleration factors", "Prevention methods"]
    },
    {
      id: "c_ans_unmapped_rough",
      questionId: null,
      detectedQuestionLabel: "Unmapped Answer Note",
      pageIndex: 1,
      boundingBox: { x: 8, y: 78, width: 84, height: 12 },
      extractedText: "Rough: Q9 practice - NaOH + HCl -> NaCl + H2O (not part of paper)",
      isOutOfOrder: false,
      status: "unmapped",
      score: 0,
      maxScore: 0,
      evaluation: "partial",
      feedback: "Unmapped rough student calculation at bottom of Page 2 (Neutralization equation practice).",
      keyConceptsFound: ["Neutralization reaction"],
      keyConceptsMissing: []
    }
  ],
  questionPaperImages: [chemistryQuestionPaperSvg],
  answerSheetImages: [chemistryAnswerPage1Svg, chemistryAnswerPage2Svg]
};
