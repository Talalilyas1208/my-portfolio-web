export interface CodeFile {
  id: string;
  name: string;
  language: string;
  tabLabel: string;
  description: string;
  code: string;
}

export const workbenchFiles: CodeFile[] = [
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
