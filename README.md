# 🎓 VedaAI - AI Assessment Extraction & Answer Mapping Workspace

A production-ready, full-stack web application built for teachers to automate **Question Paper Extraction**, **Handwritten Answer Script Mapping**, **Dynamic SVG Bounding Box Highlighting**, and **AI-Driven Grading**.

![VedaAI Assessment Workspace](https://ai-assessment-extraction-answer-map-eight.vercel.app)

---

## 🌟 Live Demo & Resources

- **🌐 Live Deployed Application:** [https://ai-assessment-extraction-answer-map-eight.vercel.app](https://ai-assessment-extraction-answer-map-eight.vercel.app)
- **🎨 Figma Reference Design Alignment:** [Figma Board](https://www.figma.com/design/GEjt1rt1s7AXvkcr4t8muE/VedaAI-Hiring-Assignment)
- **📦 Sample Test Files:** Pre-loaded in `/public/samples/` (`Question_Paper.pdf` & `Student_Answer_Sheet.pdf`)

---

## ✨ Key Features & Edge Case Coverage

### 1. 🔍 Automated Question & Sub-Part Parsing
- Extracts all printed questions in strict numerical order.
- **Sub-part Preservations:** Treats labelled sub-parts (e.g. `11 (a)` and `11 (b)`) as distinct, independent evaluation entries.

### 2. 🎯 Dynamic SVG Canvas Bounding Box Highlighting
- Maps extracted handwriting bounding boxes `[ymin, xmin, ymax, xmax]` directly onto responsive canvas page overlays.
- **Interactive Focus Jumps:** Clicking any question on the left navigator smoothly auto-scrolls the document viewer to bring the exact answer box into center view.
- Non-overlapping flex badges for question labels, marks, and status tags.

### 3. 🧠 Comprehensive Edge Case Handling
- **Out-of-Order Responses:** Tags answers written out of sequence (e.g. Q3 answered before Q1) with warm amber `OUT OF ORDER` indicators.
- **Unanswered Questions:** Flags unattempted questions with 0 marks and red alert badges.
- **Unmapped Student Notes:** Captures extra unlabelled student rough work in a dedicated teacher review drawer.
- **Multi-Page Spans:** Supports answers spanning across multiple pages (e.g. Q5 across Page 1 & Page 2) with quick page jump pills.

### 4. ⚡ Teacher Persona & Executive AI Insights
- **Radial Score Ring:** Real-time percentage counter (`80%`) and marks badge (`32 / 40 Marks`).
- **Interactive Filters:** Filter questions by `All`, `Graded`, `⚠️ Unanswered`, `🔄 Out of Order`, and `❓ Unmapped`.
- **Grade Report Exports:** 1-click JSON grade summary report export for school record-keeping.

---

## 🛠️ Tech Stack & Architecture

- **Framework:** Next.js 14 / 16 (App Router, TypeScript)
- **Styling & UI:** Tailwind CSS, Lucide React Icons
- **Vision Engine:** Google Gemini 1.5 / 2.0 Flash Vision API + Custom Layout Parser
- **PDF Ingestion:** `pdf-lib` & Data URI Canvas Renderers

---

## 🚀 Local Development Setup

```bash
# Clone repository
git clone https://github.com/AmiteshKumarDubey/AI-Assessment-Extraction-Answer-Mapping.git

# Navigate to project
cd AI-Assessment-Extraction-Answer-Mapping

# Install dependencies
npm install

# Run local development server
npm run dev
```

Open `http://localhost:3000` in your browser to test locally!
