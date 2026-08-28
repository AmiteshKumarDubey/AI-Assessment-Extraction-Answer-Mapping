import { AssessmentData } from '@/types/assessment';

function svgToDataUrl(svg: string): string {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg.trim())}`;
}

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
  <!-- Paper background -->
  <rect width="800" height="1100" fill="#fffdfa"/>
  
  <!-- Red margin line -->
  <line x1="75" y1="0" x2="75" y2="1100" stroke="#f87171" stroke-width="1.5" stroke-dasharray="6 3"/>
  
  <!-- Blue horizontal notebook lines -->
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

  <!-- Page Header -->
  <text x="90" y="38" font-family="sans-serif" font-size="14" font-weight="700" fill="#334155">Student: Alex Rivera | Roll No: 1042</text>
  <text x="680" y="38" font-family="sans-serif" font-size="14" font-weight="700" fill="#64748b">Page 1 of 2</text>

  <!-- Ans 3 (Out of Order - Top) -->
  <text x="15" y="145" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="20" font-weight="700" fill="#1e3a8a">Ans 3.</text>
  <text x="90" y="145" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="18" fill="#1e3a8a">Photoelectric effect: Emission of e- from metal when light hits surface.</text>
  <text x="90" y="195" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="18" fill="#1e3a8a">Einstein Equation: E_photon = &#934; + KE_max  (where &#934; = work function)</text>
  <text x="90" y="245" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="18" fill="#1e3a8a">Light acts as quanta (photons) with energy E = h&#957;.</text>

  <!-- Ans 1 (Middle) -->
  <text x="15" y="355" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="20" font-weight="700" fill="#1e3a8a">Ans 1.</text>
  <text x="90" y="355" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="18" fill="#1e3a8a">Newton 2nd Law: Net Force proportional to rate of change of momentum.</text>
  <text x="90" y="405" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="18" fill="#1e3a8a">F = dp/dt = d(mv)/dt = m(dv/dt) = ma (for constant mass m).</text>

  <!-- Ans 11(a) (Sub-part) -->
  <text x="15" y="565" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="19" font-weight="700" fill="#1e3a8a">Ans 11(a)</text>
  <text x="90" y="565" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="18" fill="#1e3a8a">Ohm's Law: V &#8733; I at constant temperature =&gt; V = I*R.</text>
  <text x="90" y="615" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="18" fill="#1e3a8a">Resistance factor: R = &#961; * L / A  (Resistivity, Length &amp; Area).</text>

  <!-- Ans 11(b) (Sub-part) -->
  <text x="15" y="765" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="19" font-weight="700" fill="#1e3a8a">Ans 11(b)</text>
  <text x="90" y="765" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="18" fill="#1e3a8a">Parallel Combination: V is constant. Total I = I1 + I2.</text>
  <text x="90" y="815" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="18" fill="#1e3a8a">V/Req = V/R1 + V/R2  =&gt;  1/Req = 1/R1 + 1/R2.</text>

  <!-- Ans 5 (Multi-page - Bottom) -->
  <text x="15" y="955" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="20" font-weight="700" fill="#1e3a8a">Ans 5.</text>
  <text x="90" y="955" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="18" fill="#1e3a8a">Transformer Working Principle: Mutual Induction between 2 coils.</text>
  <text x="90" y="1005" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="18" fill="#1e3a8a">Turns ratio relation: Vs / Vp = Ns / Np. [Continued on Page 2...]</text>
</svg>
`);

const answerSheetPage2Svg = svgToDataUrl(`
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1100" viewBox="0 0 800 1100" fill="none">
  <!-- Paper background -->
  <rect width="800" height="1100" fill="#fffdfa"/>
  
  <!-- Red margin line -->
  <line x1="75" y1="0" x2="75" y2="1100" stroke="#f87171" stroke-width="1.5" stroke-dasharray="6 3"/>
  
  <!-- Blue horizontal notebook lines -->
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

  <!-- Page Header -->
  <text x="90" y="38" font-family="sans-serif" font-size="14" font-weight="700" fill="#334155">Student: Alex Rivera | Roll No: 1042</text>
  <text x="680" y="38" font-family="sans-serif" font-size="14" font-weight="700" fill="#64748b">Page 2 of 2</text>

  <!-- Ans 5 Continuation (Top) -->
  <text x="15" y="125" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="19" font-weight="700" fill="#1e3a8a">Ans 5 (Cont.)</text>
  <text x="90" y="125" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="18" fill="#1e3a8a">Energy Losses in Transformer:</text>
  <text x="90" y="175" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="18" fill="#1e3a8a">1. Copper Loss: I^2 R heating in primary &amp; secondary turns.</text>
  <text x="90" y="225" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="18" fill="#1e3a8a">2. Eddy Current Loss: Induced circulating currents (laminated core mitigates).</text>
  <text x="90" y="275" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="18" fill="#1e3a8a">3. Hysteresis Loss: Reversal of magnetisation in magnetic iron core.</text>

  <!-- Ans 2 (Middle) -->
  <text x="15" y="555" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="20" font-weight="700" fill="#1e3a8a">Ans 2.</text>
  <text x="90" y="555" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="18" fill="#1e3a8a">Calculation: m = 4 kg, v = 10 m/s.</text>
  <text x="90" y="605" font-family="Dancing Script, Caveat, cursive, sans-serif" font-size="18" fill="#1e3a8a">KE = 1/2 * m * v^2 = 0.5 * 4 * (10)^2 = 200 Joules.</text>

  <!-- Unmapped Extra Note (Bottom) -->
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
        { pageIndex: 1, boundingBox: { x: 8, y: 9, width: 84, height: 36 } }
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
      boundingBox: { x: 8, y: 48, width: 84, height: 20 },
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
      boundingBox: { x: 8, y: 72, width: 84, height: 20 },
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
