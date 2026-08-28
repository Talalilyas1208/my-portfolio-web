'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Bot, 
  CheckCircle2, 
  ArrowRight, 
  Copy, 
  Check, 
  Terminal, 
  Code2, 
  Play, 
  Pause, 
  FileCode, 
  Boxes, 
  Layers 
} from 'lucide-react';

interface CodeFile {
  id: string;
  name: string;
  language: string;
  tabLabel: string;
  description: string;
  code: string;
}

const files: CodeFile[] = [
  {
    id: 'agent',
    name: 'self_healing_pipeline.py',
    language: 'python',
    tabLabel: 'python · Self-Healing Agent',
    description: 'Autonomous closed-loop diagnosis, structured Gemini patch generation, and shadow sandbox verification.',
    code: `async def run_autonomous_repair_cycle(failing_event: TestFailure) -> RepairResult:
    """Closed-loop AST context extraction, Gemini patch synthesis, and test gate."""
    context = assemble_execution_context(failing_event)
    
    for attempt in range(1, MAX_REPAIR_ATTEMPTS + 1):
        prompt = build_diagnostic_prompt(context, attempt=attempt)
        patch = await gemini_client.generate_structured_patch(
            prompt=prompt,
            response_schema=PatchSchema
        )
        
        # Test candidate patch in isolated shadow container
        with ShadowSandbox(context.workspace_root) as sandbox:
            sandbox.apply_patch(patch)
            test_run = sandbox.execute_tests(failing_event.target_file)
            
            if test_run.is_success:
                apply_patch_to_live_workspace(patch)
                logger.info(f"Auto-healed {context.target_file} in {attempt} attempt(s)")
                return RepairResult(status="HEALED", patch=patch, latency=3.8)
                
            # Feed subsequent traceback into next iteration
            context.update_with_new_traceback(test_run.stderr)
            
    return RepairResult(status="FAILED_VERIFICATION")`,
  },
  {
    id: 'redux',
    name: 'billing_state_machine.ts',
    language: 'typescript',
    tabLabel: 'typescript · Redux State Engine',
    description: 'Normalized entity adapters with memoized selectors and transactional IndexedDB persistence.',
    code: `import { createSlice, createEntityAdapter, createSelector } from '@reduxjs/toolkit';
import type { InvoiceItem, RootState } from '@/types/billing';

export const invoiceAdapter = createEntityAdapter<InvoiceItem>({
  selectId: (item) => item.id,
  sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});

export const billingSlice = createSlice({
  name: 'billing',
  initialState: invoiceAdapter.getInitialState({
    draftStatus: 'idle',
    activeTier: 'ENTERPRISE_ANNUAL',
  }),
  reducers: {
    upsertLineItem: invoiceAdapter.upsertOne,
    removeLineItem: invoiceAdapter.removeOne,
    reconcileTransactions: (state, action) => {
      invoiceAdapter.setAll(state, action.payload.invoices);
      state.draftStatus = 'synced';
    },
  },
});

export const selectTotalRevenue = createSelector(
  invoiceAdapter.getSelectors((state: RootState) => state.billing).selectAll,
  (invoices) => invoices.reduce((sum, inv) => sum + inv.totalAmount, 0)
);`,
  },
  {
    id: 'fastapi',
    name: 'gemini_router_api.py',
    language: 'python',
    tabLabel: 'python · FastAPI Gemini API',
    description: 'Asynchronous streaming microservice with Pydantic V2 schema validation and structured JSON patches.',
    code: `from fastapi import FastAPI, Depends, HTTPException
from pydantic import BaseModel, Field
from google.generativeai import GenerativeModel

app = FastAPI(title="Talal AI Microservice", version="2.0")
gemini_model = GenerativeModel("models/gemini-1.5-flash")

class ASTContextPayload(BaseModel):
    failing_trace: str = Field(..., description="Raw Python/TS stacktrace")
    ast_scope_code: str = Field(..., description="Surrounding function AST")
    file_path: str

@app.post("/api/v1/generate-repair")
async def generate_repair(payload: ASTContextPayload):
    prompt = f"""You are a Principal Software Engineer.
Fix this stacktrace: {payload.failing_trace}
Using AST context: {payload.ast_scope_code}
Return JSON strictly conforming to unified diff format."""

    response = await gemini_model.generate_content_async(
        prompt,
        generation_config={"response_mime_type": "application/json"}
    )
    return {"status": "SUCCESS", "diff": response.text}`,
  },
  {
    id: 'docker',
    name: 'shadow_sandbox.dockerfile',
    language: 'docker',
    tabLabel: 'docker · Shadow Sandbox',
    description: 'Hardened ephemeral container environment ensuring 0 regressions before committing live code.',
    code: `FROM node:20-alpine AS verification-runner
WORKDIR /sandbox/workspace

RUN apk add --no-cache git python3 py3-pip bash
RUN pip install pytest --break-system-packages

COPY package*.json ./
RUN npm ci --prefer-offline

# Read-only shadow mount with overlayFS
COPY . .
ENTRYPOINT ["/bin/bash", "-c", "npm test -- --runInBand --bail"]`,
  },
];

export default function LiveAgentTerminal() {
  const [activeTab, setActiveTab] = useState<string>('agent');
  const [copied, setCopied] = useState<boolean>(false);
  const [step, setStep] = useState<number>(3);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const currentFile = files.find((f) => f.id === activeTab) || files[0];

  // Auto-play cycling simulation
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setStep((prev) => (prev >= 4 ? 1 : prev + 1));
    }, 3200);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const copyCode = () => {
    navigator.clipboard.writeText(currentFile.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-3xl liquid-glass shadow-liquid-glass-lg overflow-hidden font-mono text-xs border border-white/[0.14] space-y-0">
      {/* Top Window Chrome Bar */}
      <div className="px-4 py-3.5 bg-white/[0.04] border-b border-white/[0.08] flex items-center justify-between backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80 shadow-[0_0_8px_rgba(244,63,94,0.6)]"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500/80 shadow-[0_0_8px_rgba(245,158,11,0.6)]"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></div>
          <span className="text-xs text-slate-200 ml-2 font-medium">
            ~/workspace/{currentFile.name}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-1.5 text-[11px] text-slate-300 hover:text-white px-2.5 py-1 rounded-xl liquid-glass-subtle transition-all"
            title={isPlaying ? 'Pause auto-simulation' : 'Resume auto-simulation'}
          >
            {isPlaying ? (
              <>
                <Pause className="w-3 h-3 text-cyan-400" />
                <span>Live Feed</span>
              </>
            ) : (
              <>
                <Play className="w-3 h-3 text-emerald-400" />
                <span>Paused</span>
              </>
            )}
          </button>

          <button
            onClick={copyCode}
            className="p-1.5 rounded-xl liquid-glass-subtle text-slate-300 hover:text-cyan-300 transition-all"
            title="Copy Code"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Multi-File Tab Header Bar */}
      <div className="flex flex-wrap gap-1 px-3 pt-2 bg-black/40 border-b border-white/[0.06] overflow-x-auto">
        {files.map((file) => {
          const isActive = activeTab === file.id;

          return (
            <button
              key={file.id}
              onClick={() => setActiveTab(file.id)}
              className={`px-3 py-1.5 rounded-t-xl text-[11px] font-mono transition-all flex items-center gap-1.5 shrink-0 ${
                isActive
                  ? 'liquid-glass border-b-0 text-cyan-300 font-semibold shadow-liquid-glow'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.02]'
              }`}
            >
              <FileCode className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-400' : 'text-slate-500'}`} />
              <span>{file.tabLabel}</span>
            </button>
          );
        })}
      </div>

      {/* Live Telemetry Step Indicator when on Agent tab */}
      {activeTab === 'agent' && (
        <div className="px-5 py-3 bg-cyan-950/20 border-b border-cyan-500/20 flex flex-wrap items-center justify-between gap-2 text-[11px]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-cyan-300 font-semibold">Live Daemon Status:</span>
            {step === 1 && <span className="text-rose-300">Intercepted Runtime Regression in test_invoice.py</span>}
            {step === 2 && <span className="text-cyan-200">Querying Gemini 1.5 with AST Context...</span>}
            {step === 3 && <span className="text-amber-300">Verifying Patch in Shadow Docker Sandbox...</span>}
            {step === 4 && <span className="text-emerald-300">100% Tests Passed &bull; Patch Committed (3.8s)</span>}
          </div>
          <span className="text-[10px] text-slate-400 font-mono">Loop #{step} / 4</span>
        </div>
      )}

      {/* Code Area with Syntax Display */}
      <div className="p-5 max-h-[340px] overflow-y-auto space-y-0.5 bg-[#070b14] text-slate-200">
        <pre className="font-mono text-xs leading-relaxed overflow-x-auto scrollbar-none">
          <code>{currentFile.code}</code>
        </pre>
      </div>

      {/* Terminal Footer Bar */}
      <div className="px-5 py-3 bg-white/[0.03] border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs backdrop-blur-md">
        <span className="text-slate-400 text-[11px] truncate">
          {currentFile.description}
        </span>
        <Link
          href="/projects/autonomous-gemini-code-fixer"
          className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1 text-[11px] transition-colors shrink-0"
        >
          <span>Explore Pipeline</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
