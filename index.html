```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>先研实验室问答平台 · 一生一芯项目</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fontsource/noto-sans-sc@5.0.0/index.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fontsource/jetbrains-mono@5.0.0/index.css">
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }

:root {
  --bg-primary: #08090d;
  --bg-secondary: #11131c;
  --bg-tertiary: #1a1d2b;
  --bg-panel: #161926;
  --accent-primary: #e8b440;
  --accent-secondary: #f5cc60;
  --accent-dim: #8a6a20;
  --accent-cyan: #3fd4d4;
  --accent-cyan-dim: #1a5f5f;
  --text-primary: #e8e8e0;
  --text-secondary: #a0a098;
  --text-dim: #606058;
  --border-color: #2a2d3e;
  --border-light: #3a3d4e;
  --danger: #d04040;
  --success: #40b070;
  --warning: #e89040;
  --pending: #a070d0;
}

body {
  font-family: 'Noto Sans SC', sans-serif;
  background: var(--bg-primary);
  color: var(--text-primary);
  min-height: 100vh;
  overflow-x: hidden;
}

body::after {
  content: '';
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  pointer-events: none;
  background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.04) 2px, rgba(0,0,0,0.04) 4px);
  z-index: 9999;
}

body::before {
  content: '';
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  pointer-events: none;
  background-image: 
    linear-gradient(rgba(232,180,64,0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(232,180,64,0.025) 1px, transparent 1px);
  background-size: 40px 40px;
  z-index: 0;
}

/* ===== HEADER ===== */
.header {
  position: fixed;
  top: 0; left: 0; right: 0;
  height: 70px;
  background: linear-gradient(180deg, var(--bg-secondary) 0%, rgba(17,19,28,0.95) 100%);
  border-bottom: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  z-index: 1000;
  backdrop-filter: blur(10px);
}

.header::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--accent-primary), transparent);
}

.logo {
  display: flex;
  align-items: center;
  gap: 14px;
}

.logo-icon {
  height: 40px;
  width: auto;
  object-fit: contain;
  display: block;
}

.logo-text-wrap { display: flex; flex-direction: column; }

.logo-text {
  font-size: 17px;
  font-weight: 700;
  letter-spacing: 2px;
  color: var(--accent-primary);
  line-height: 1.2;
}

.logo-sub {
  font-size: 9px;
  color: var(--text-dim);
  font-family: 'JetBrains Mono', monospace;
  letter-spacing: 1px;
  margin-top: 2px;
}

.logo-badge {
  display: inline-block;
  padding: 2px 8px;
  background: rgba(63,212,212,0.1);
  border: 1px solid var(--accent-cyan-dim);
  color: var(--accent-cyan);
  font-size: 9px;
  font-family: 'JetBrains Mono', monospace;
  letter-spacing: 1px;
  margin-left: 8px;
  clip-path: polygon(4px 0%, 100% 0%, calc(100% - 4px) 100%, 0% 100%);
}

.nav {
  display: flex;
  gap: 4px;
}

.nav-btn {
  padding: 10px 22px;
  background: transparent;
  border: 1px solid transparent;
  color: var(--text-secondary);
  font-size: 13px;
  font-family: 'Noto Sans SC', sans-serif;
  cursor: pointer;
  transition: all 0.3s;
  clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
  letter-spacing: 1px;
  position: relative;
}

.nav-btn:hover {
  color: var(--accent-primary);
  background: rgba(232,180,64,0.05);
}

.nav-btn.active {
  color: var(--accent-primary);
  background: rgba(232,180,64,0.1);
  border-color: var(--accent-primary);
}

.nav-btn.active::before { content: '▸ '; }

.nav-badge {
  position: absolute;
  top: 4px; right: 4px;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  background: var(--danger);
  color: white;
  border-radius: 8px;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'JetBrains Mono', monospace;
}

.header-status {
  display: flex;
  align-items: center;
  gap: 16px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  color: var(--text-dim);
}

.status-dot {
  width: 8px; height: 8px;
  background: var(--success);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }

/* ===== MAIN ===== */
.main {
  margin-top: 70px;
  padding: 40px;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 1;
}

.page { display: none; animation: fadeIn 0.4s ease; }
.page.active { display: block; }

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Hero banner */
.hero {
  background: linear-gradient(135deg, var(--bg-secondary), var(--bg-tertiary));
  border: 1px solid var(--border-color);
  padding: 30px 36px;
  margin-bottom: 30px;
  position: relative;
  clip-path: polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px));
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0; right: 0;
  width: 300px; height: 100%;
  background: 
    linear-gradient(135deg, transparent 30%, rgba(232,180,64,0.05) 50%, transparent 70%),
    repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(63,212,212,0.03) 10px, rgba(63,212,212,0.03) 11px);
  pointer-events: none;
}

.hero-tag {
  display: inline-block;
  padding: 3px 12px;
  background: rgba(63,212,212,0.1);
  border: 1px solid var(--accent-cyan-dim);
  color: var(--accent-cyan);
  font-size: 10px;
  font-family: 'JetBrains Mono', monospace;
  letter-spacing: 2px;
  margin-bottom: 12px;
}

.hero-title {
  font-size: 26px;
  font-weight: 700;
  letter-spacing: 3px;
  margin-bottom: 8px;
  background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-desc {
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.8;
  max-width: 700px;
}

.hero-stats {
  display: flex;
  gap: 30px;
  margin-top: 18px;
  padding-top: 18px;
  border-top: 1px dashed var(--border-color);
}

.hero-stat {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.hero-stat-label {
  font-size: 10px;
  color: var(--text-dim);
  font-family: 'JetBrains Mono', monospace;
  letter-spacing: 1px;
}

.hero-stat-value {
  font-size: 20px;
  font-weight: 700;
  color: var(--accent-primary);
  font-family: 'JetBrains Mono', monospace;
}

/* Section headers */
.section-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
  padding-bottom: 14px;
  border-bottom: 1px solid var(--border-color);
}

.section-header::before {
  content: '';
  width: 4px;
  height: 24px;
  background: var(--accent-primary);
  clip-path: polygon(0 0, 100% 0, 100% 70%, 0 100%);
}

.section-title {
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 3px;
}

.section-meta {
  margin-left: auto;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  color: var(--text-dim);
}

/* Stats bar */
.stats-bar {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  margin-bottom: 24px;
}

.stat-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  padding: 18px 20px;
  position: relative;
  clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px));
  transition: all 0.3s;
}

.stat-card:hover { border-color: var(--accent-dim); }

.stat-label {
  font-size: 10px;
  color: var(--text-dim);
  letter-spacing: 2px;
  margin-bottom: 8px;
  font-family: 'JetBrains Mono', monospace;
}

.stat-value {
  font-size: 26px;
  font-weight: 700;
  color: var(--accent-primary);
  font-family: 'JetBrains Mono', monospace;
}

.stat-value.cyan { color: var(--accent-cyan); }
.stat-value.warn { color: var(--warning); }
.stat-value.ok { color: var(--success); }

.stat-card::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0;
  width: 100%; height: 2px;
  background: var(--accent-primary);
  opacity: 0.3;
}

.stat-card:nth-child(2)::after { background: var(--accent-cyan); }
.stat-card:nth-child(3)::after { background: var(--warning); }
.stat-card:nth-child(4)::after { background: var(--success); }

/* Filter bar */
.filter-bar {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  padding: 18px 20px;
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: 1fr 180px;
  gap: 12px;
  align-items: center;
  clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px));
}

.search-input {
  width: 100%;
  padding: 11px 16px;
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  font-size: 13px;
  font-family: 'Noto Sans SC', sans-serif;
  outline: none;
  transition: all 0.3s;
}

.search-input:focus { border-color: var(--accent-primary); }

.priority-select, .status-select {
  width: 100%;
  padding: 11px 16px;
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  font-size: 13px;
  font-family: 'Noto Sans SC', sans-serif;
  cursor: pointer;
  outline: none;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23e8b440' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 14px center;
  padding-right: 32px;
}

.priority-select:focus, .status-select:focus { border-color: var(--accent-primary); }

/* Tags */
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.tag {
  padding: 6px 14px;
  font-size: 12px;
  background: rgba(232,180,64,0.05);
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.2s;
  font-family: 'Noto Sans SC', sans-serif;
  letter-spacing: 0.5px;
}

.tag:hover {
  border-color: var(--accent-primary);
  color: var(--accent-primary);
}

.tag.active {
  background: rgba(232,180,64,0.15);
  border-color: var(--accent-primary);
  color: var(--accent-primary);
  box-shadow: 0 0 0 1px rgba(232,180,64,0.3);
}

.tag-count {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  color: var(--text-dim);
  margin-left: 4px;
}

.tag.active .tag-count { color: var(--accent-primary); }

/* Cards */
.card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  margin-bottom: 14px;
  position: relative;
  clip-path: polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px));
  transition: all 0.3s;
  overflow: hidden;
}

.card::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 2px;
  background: linear-gradient(90deg, var(--accent-primary), transparent);
  opacity: 0;
  transition: opacity 0.3s;
}

.card:hover::before { opacity: 1; }

.card:hover {
  border-color: var(--accent-dim);
  background: var(--bg-tertiary);
}

.card.pending-review {
  opacity: 0.6;
  border-color: var(--pending);
}

.card.rejected {
  opacity: 0.5;
  border-color: var(--danger);
}

.card-header {
  padding: 18px 22px 10px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}

.card-id {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  color: var(--text-dim);
  background: rgba(232,180,64,0.05);
  padding: 2px 8px;
  border: 1px solid var(--border-color);
}

.card-meta {
  display: flex;
  gap: 6px;
  align-items: center;
  flex-wrap: wrap;
}

.card-tag {
  font-size: 10px;
  padding: 3px 9px;
  background: rgba(232,180,64,0.1);
  color: var(--accent-primary);
  border: 1px solid var(--accent-dim);
  font-family: 'JetBrains Mono', monospace;
  letter-spacing: 0.5px;
}

.card-tag.progress {
  background: rgba(63,212,212,0.08);
  color: var(--accent-cyan);
  border-color: var(--accent-cyan-dim);
}

.card-status {
  font-size: 10px;
  padding: 3px 9px;
  font-family: 'JetBrains Mono', monospace;
  letter-spacing: 1px;
}

.card-status.approved { background: rgba(64,176,112,0.1); color: var(--success); border: 1px solid rgba(64,176,112,0.3); }
.card-status.pending { background: rgba(160,112,208,0.1); color: var(--pending); border: 1px solid rgba(160,112,208,0.3); }
.card-status.rejected { background: rgba(208,64,64,0.1); color: var(--danger); border: 1px solid rgba(208,64,64,0.3); }

.priority-badge {
  font-size: 10px;
  padding: 3px 9px;
  font-family: 'JetBrains Mono', monospace;
  letter-spacing: 1px;
  clip-path: polygon(4px 0%, 100% 0%, calc(100% - 4px) 100%, 0% 100%);
}

.priority-badge.high { background: var(--danger); color: white; }
.priority-badge.medium { background: var(--warning); color: var(--bg-primary); }
.priority-badge.low { background: var(--success); color: white; }

.card-body {
  padding: 0 22px 18px;
}

.card-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
  color: var(--text-primary);
  line-height: 1.6;
}

.card-content {
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.8;
}

.card-footer {
  padding: 10px 22px;
  border-top: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 11px;
  color: var(--text-dim);
  font-family: 'JetBrains Mono', monospace;
  flex-wrap: wrap;
  gap: 10px;
}

.card-actions {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.card-action-btn {
  padding: 5px 12px;
  background: transparent;
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
  font-size: 11px;
  cursor: pointer;
  transition: all 0.2s;
  font-family: 'Noto Sans SC', sans-serif;
}

.card-action-btn:hover {
  border-color: var(--accent-primary);
  color: var(--accent-primary);
  background: rgba(232,180,64,0.05);
}

.card-action-btn.danger:hover {
  border-color: var(--danger);
  color: var(--danger);
  background: rgba(208,64,64,0.05);
}

.card-action-btn.success:hover {
  border-color: var(--success);
  color: var(--success);
  background: rgba(64,176,112,0.05);
}

.card-action-btn.adopted {
  border-color: var(--success);
  color: var(--success);
  background: rgba(64,176,112,0.1);
}

/* Answers */
.answers-section {
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px dashed var(--border-color);
}

.answer-item {
  padding: 12px 16px;
  margin-bottom: 8px;
  background: rgba(232,180,64,0.03);
  border-left: 2px solid var(--accent-dim);
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.7;
  position: relative;
}

.answer-item.adopted {
  background: rgba(64,176,112,0.05);
  border-left-color: var(--success);
}

.adopted-badge {
  display: inline-block;
  padding: 2px 8px;
  background: var(--success);
  color: white;
  font-size: 10px;
  font-family: 'JetBrains Mono', monospace;
  margin-left: 8px;
  letter-spacing: 1px;
}

.answer-meta {
  font-size: 10px;
  color: var(--text-dim);
  margin-top: 6px;
  font-family: 'JetBrains Mono', monospace;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 6px;
}

/* Forms */
.form-group { margin-bottom: 22px; }

.form-label {
  display: block;
  font-size: 12px;
  color: var(--accent-primary);
  margin-bottom: 8px;
  letter-spacing: 2px;
  font-weight: 600;
  text-transform: uppercase;
}

.form-label::before { content: '◆ '; font-size: 8px; }
.form-label.required::after { content: ' *'; color: var(--danger); }

.form-input, .form-textarea, .form-select {
  width: 100%;
  padding: 13px 16px;
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  font-size: 14px;
  font-family: 'Noto Sans SC', sans-serif;
  transition: all 0.3s;
  outline: none;
}

.form-input:focus, .form-textarea:focus, .form-select:focus {
  border-color: var(--accent-primary);
  box-shadow: 0 0 0 1px rgba(232,180,64,0.2);
}

.form-textarea {
  min-height: 140px;
  resize: vertical;
  line-height: 1.8;
}

.form-select {
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23e8b440' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
  padding-right: 36px;
}

.form-hint {
  font-size: 11px;
  color: var(--text-dim);
  margin-top: 6px;
  font-family: 'JetBrains Mono', monospace;
}

/* Checkbox group for progress */
.progress-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 8px;
}

.progress-option {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  cursor: pointer;
  transition: all 0.2s;
  font-size: 13px;
  color: var(--text-secondary);
  user-select: none;
}

.progress-option:hover {
  border-color: var(--accent-primary);
  color: var(--text-primary);
}

.progress-option.selected {
  border-color: var(--accent-cyan);
  background: rgba(63,212,212,0.08);
  color: var(--accent-cyan);
}

.progress-option input { display: none; }

.check-mark {
  width: 14px; height: 14px;
  border: 1px solid var(--border-light);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 10px;
  transition: all 0.2s;
}

.progress-option.selected .check-mark {
  background: var(--accent-cyan);
  border-color: var(--accent-cyan);
  color: var(--bg-primary);
}

/* Buttons */
.btn {
  padding: 11px 26px;
  font-size: 13px;
  font-family: 'Noto Sans SC', sans-serif;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  letter-spacing: 2px;
  border: none;
  clip-path: polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%);
}

.btn-primary { background: var(--accent-primary); color: var(--bg-primary); }
.btn-primary:hover {
  background: var(--accent-secondary);
  transform: translateY(-1px);
  box-shadow: 0 4px 20px rgba(232,180,64,0.3);
}

.btn-cyan { background: var(--accent-cyan); color: var(--bg-primary); }
.btn-cyan:hover {
  background: #50e0e0;
  box-shadow: 0 4px 20px rgba(63,212,212,0.3);
}

.btn-secondary {
  background: transparent;
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
  clip-path: none;
}

.btn-secondary:hover {
  border-color: var(--accent-primary);
  color: var(--accent-primary);
}

.btn-danger {
  background: rgba(208,64,64,0.15);
  color: var(--danger);
  border: 1px solid var(--danger);
}

.btn-danger:hover {
  background: var(--danger);
  color: white;
}

.btn-success {
  background: rgba(64,176,112,0.15);
  color: var(--success);
  border: 1px solid var(--success);
}

.btn-success:hover {
  background: var(--success);
  color: white;
}

/* Modal */
.modal-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.85);
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  backdrop-filter: blur(4px);
  padding: 20px;
}

.modal-overlay.active { display: flex; }

.modal {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  width: 100%;
  max-width: 640px;
  max-height: 85vh;
  overflow-y: auto;
  clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px));
  animation: modalIn 0.3s ease;
}

@keyframes modalIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

.modal-header {
  padding: 22px 24px;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.modal-title {
  font-size: 15px;
  font-weight: 700;
  color: var(--accent-primary);
  letter-spacing: 2px;
}

.modal-close {
  width: 30px; height: 30px;
  background: transparent;
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  transition: all 0.2s;
}

.modal-close:hover {
  border-color: var(--danger);
  color: var(--danger);
}

.modal-body { padding: 24px; }

.modal-footer {
  padding: 14px 24px;
  border-top: 1px solid var(--border-color);
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  flex-wrap: wrap;
}

/* Notification */
.notification {
  position: fixed;
  top: 80px;
  right: 20px;
  padding: 14px 22px;
  background: var(--bg-secondary);
  border: 1px solid var(--accent-primary);
  border-left: 4px solid var(--accent-primary);
  color: var(--text-primary);
  font-size: 13px;
  z-index: 3000;
  animation: slideIn 0.3s ease;
  max-width: 340px;
  clip-path: polygon(0 0, 100% 0, calc(100% - 12px) 100%, 0 100%);
}

.notification.error { border-color: var(--danger); border-left-color: var(--danger); }
.notification.success { border-color: var(--success); border-left-color: var(--success); }

@keyframes slideIn {
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

/* Empty state */
.empty-state {
  text-align: center;
  padding: 60px 20px;
  color: var(--text-dim);
}

.empty-state-icon { font-size: 48px; margin-bottom: 16px; opacity: 0.5; }
.empty-state-text { font-size: 14px; letter-spacing: 1px; }

/* Footer */
.footer {
  margin-top: 60px;
  padding: 20px 40px;
  border-top: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 11px;
  color: var(--text-dim);
  font-family: 'JetBrains Mono', monospace;
  flex-wrap: wrap;
  gap: 10px;
}

/* Admin login */
.admin-login {
  max-width: 420px;
  margin: 60px auto;
  padding: 40px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px));
}

.admin-login-title {
  font-size: 15px;
  color: var(--accent-primary);
  margin-bottom: 24px;
  text-align: center;
  letter-spacing: 3px;
}

/* Admin tabs */
.admin-tabs {
  display: flex;
  gap: 0;
  margin-bottom: 24px;
  border-bottom: 1px solid var(--border-color);
  flex-wrap: wrap;
}

.admin-tab {
  padding: 12px 22px;
  background: transparent;
  border: none;
  color: var(--text-dim);
  font-size: 13px;
  font-family: 'Noto Sans SC', sans-serif;
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
  letter-spacing: 1px;
}

.admin-tab:hover { color: var(--text-primary); }
.admin-tab.active { color: var(--accent-primary); }

.admin-tab.active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0; right: 0;
  height: 2px;
  background: var(--accent-primary);
}

.tab-badge {
  display: inline-block;
  padding: 1px 6px;
  background: var(--danger);
  color: white;
  font-size: 10px;
  font-family: 'JetBrains Mono', monospace;
  border-radius: 8px;
  margin-left: 6px;
}

/* Stats dashboard */
.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}

.stats-panel {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  padding: 24px;
  clip-path: polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px));
}

.stats-panel-title {
  font-size: 13px;
  color: var(--accent-primary);
  letter-spacing: 2px;
  margin-bottom: 18px;
  padding-bottom: 10px;
  border-bottom: 1px dashed var(--border-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.stats-panel-title span {
  font-size: 10px;
  color: var(--text-dim);
  font-family: 'JetBrains Mono', monospace;
}

.bar-row {
  display: grid;
  grid-template-columns: 140px 1fr 60px;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;
  font-size: 12px;
}

.bar-label {
  color: var(--text-secondary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.bar-track {
  height: 8px;
  background: var(--bg-primary);
  position: relative;
  overflow: hidden;
}

.bar-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--accent-dim), var(--accent-primary));
  transition: width 0.8s ease;
  position: relative;
}

.bar-fill::after {
  content: '';
  position: absolute;
  top: 0; right: 0;
  width: 2px; height: 100%;
  background: var(--accent-secondary);
}

.bar-fill.cyan {
  background: linear-gradient(90deg, var(--accent-cyan-dim), var(--accent-cyan));
}

.bar-value {
  font-family: 'JetBrains Mono', monospace;
  color: var(--accent-primary);
  text-align: right;
}

.bar-value.cyan { color: var(--accent-cyan); }

/* Timeline chart */
.timeline-chart {
  display: flex;
  align-items: flex-end;
  gap: 4px;
  height: 120px;
  padding: 10px 0;
  border-bottom: 1px solid var(--border-color);
}

.timeline-bar {
  flex: 1;
  background: linear-gradient(180deg, var(--accent-primary), var(--accent-dim));
  min-height: 2px;
  position: relative;
  transition: all 0.3s;
  cursor: pointer;
}

.timeline-bar:hover {
  background: linear-gradient(180deg, var(--accent-secondary), var(--accent-primary));
}

/* Rank list */
.rank-list { list-style: none; }

.rank-item {
  display: grid;
  grid-template-columns: 30px 1fr 60px;
  gap: 12px;
  padding: 10px 0;
  border-bottom: 1px dashed var(--border-color);
  align-items: center;
  font-size: 13px;
}

.rank-item:last-child { border-bottom: none; }

.rank-pos {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 700;
  color: var(--text-dim);
  font-size: 12px;
}

.rank-item:nth-child(1) .rank-pos { color: var(--accent-primary); }
.rank-item:nth-child(2) .rank-pos { color: var(--accent-cyan); }
.rank-item:nth-child(3) .rank-pos { color: var(--success); }

.rank-name { color: var(--text-primary); }

.rank-count {
  font-family: 'JetBrains Mono', monospace;
  color: var(--accent-primary);
  text-align: right;
}

/* Donut chart */
.donut-chart {
  display: flex;
  align-items: center;
  gap: 24px;
}

.donut-svg { flex-shrink: 0; }

.donut-legend {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
}

.legend-dot { width: 10px; height: 10px; flex-shrink: 0; }
.legend-label { color: var(--text-secondary); flex: 1; }
.legend-value { font-family: 'JetBrains Mono', monospace; color: var(--accent-primary); }

/* Decor */
.decor-line {
  height: 1px;
  background: linear-gradient(90deg, var(--accent-primary), transparent);
  margin: 18px 0;
}

.corner-decor {
  position: fixed;
  width: 80px; height: 80px;
  pointer-events: none;
  z-index: 0;
}

.corner-decor.top-left {
  top: 70px; left: 0;
  border-top: 2px solid var(--accent-dim);
  border-left: 2px solid var(--accent-dim);
}

.corner-decor.bottom-right {
  bottom: 0; right: 0;
  border-bottom: 2px solid var(--accent-dim);
  border-right: 2px solid var(--accent-dim);
}

.copy-toast {
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%) translateY(20px);
  padding: 10px 24px;
  background: var(--accent-primary);
  color: var(--bg-primary);
  font-size: 12px;
  font-weight: 600;
  opacity: 0;
  transition: all 0.3s;
  z-index: 5000;
}

.copy-toast.show { opacity: 1; transform: translateX(-50%) translateY(0); }

/* Review reason */
.review-reason {
  padding: 10px 14px;
  background: rgba(208,64,64,0.08);
  border-left: 3px solid var(--danger);
  color: var(--text-secondary);
  font-size: 12px;
  margin-top: 10px;
}

/* Responsive */
@media (max-width: 900px) {
  .header { padding: 0 16px; }
  .main { padding: 20px 16px; }
  .stats-bar { grid-template-columns: repeat(2, 1fr); }
  .stats-grid { grid-template-columns: 1fr; }
  .nav-btn { padding: 8px 12px; font-size: 12px; }
  .header-status { display: none; }
  .logo-sub { display: none; }
  .filter-bar { grid-template-columns: 1fr; }
  .hero-title { font-size: 20px; }
  .hero-stats { gap: 16px; flex-wrap: wrap; }
}

::-webkit-scrollbar { width: 6px; height: 6px; }
::-webkit-scrollbar-track { background: var(--bg-primary); }
::-webkit-scrollbar-thumb { background: var(--accent-dim); }
::-webkit-scrollbar-thumb:hover { background: var(--accent-primary); }

/* Tab contents */
.tab-content { display: none; }
.tab-content.active { display: block; }

/* Review action area */
.review-actions {
  display: flex;
  gap: 8px;
  align-items: center;
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px dashed var(--border-color);
}

.review-input {
  flex: 1;
  padding: 8px 12px;
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  font-size: 12px;
  font-family: 'Noto Sans SC', sans-serif;
  outline: none;
}

.review-input:focus { border-color: var(--accent-primary); }
</style>
</head>
<body>

<div class="corner-decor top-left"></div>
<div class="corner-decor bottom-right"></div>

<header class="header">
  <div class="logo">
    <img class="logo-icon" src="https://ysyx.oscc.cc/res/images/logo/ysyx.png" alt="一生一芯">
    <div class="logo-text-wrap">
      <div class="logo-text">先研实验室<span class="logo-badge">一生一芯</span></div>
      <div class="logo-sub">XIANR_LAB · Q&A_SYSTEM v3.0</div>
    </div>
  </div>
  <nav class="nav">
    <button class="nav-btn active" onclick="switchPage('home')">首页</button>
    <button class="nav-btn" onclick="switchPage('ask')">我要提问</button>
    <button class="nav-btn" onclick="switchPage('stats')">数据统计</button>
    <button class="nav-btn" onclick="switchPage('admin')">
      管理
      <span class="nav-badge" id="pendingBadge" style="display:none;">0</span>
    </button>
  </nav>
  <div class="header-status">
    <div class="status-dot"></div>
    <span>SYS_ONLINE</span>
    <span id="currentTime">--:--:--</span>
  </div>
</header>

<main class="main">

  <!-- HOME PAGE -->
  <div class="page active" id="page-home">
    <div class="hero">
      <div class="hero-tag">// OPEN_SOURCE_CHIP_DESIGN</div>
      <div class="hero-title">一生一芯 · 技术互助社区</div>
      <div class="hero-desc">面向「一生一芯」项目参与者的匿名问答平台。分享 Chisel、RISC-V、流水线设计、SoC 集成、验证调试等方面的经验，所有问题经管理员审核后公开展示。</div>
      <div class="hero-stats">
        <div class="hero-stat">
          <div class="hero-stat-label">TOTAL_QUERIES</div>
          <div class="hero-stat-value" id="hero-total">0</div>
        </div>
        <div class="hero-stat">
          <div class="hero-stat-label">ADOPTED_RATE</div>
          <div class="hero-stat-value" id="hero-adopted">0%</div>
        </div>
        <div class="hero-stat">
          <div class="hero-stat-label">ACTIVE_HELPERS</div>
          <div class="hero-stat-value" id="hero-helpers">0</div>
        </div>
        <div class="hero-stat">
          <div class="hero-stat-label">AVG_RESP</div>
          <div class="hero-stat-value" id="hero-resp">--</div>
        </div>
      </div>
    </div>

    <div class="stats-bar">
      <div class="stat-card">
        <div class="stat-label">TOTAL_POSTS</div>
        <div class="stat-value" id="stat-total">0</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">ANSWERED</div>
        <div class="stat-value cyan" id="stat-answered">0</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">PENDING_REVIEW</div>
        <div class="stat-value warn" id="stat-pending">0</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">TODAY</div>
        <div class="stat-value ok" id="stat-today">0</div>
      </div>
    </div>

    <div class="section-header">
      <h2 class="section-title">问题列表</h2>
      <span class="section-meta">QUERY_LOG // LIVE_FEED</span>
    </div>

    <div class="filter-bar">
      <input type="text" class="search-input" placeholder="搜索问题关键词、ID..." id="searchInput" oninput="filterQuestions()">
      <select class="priority-select" id="priorityFilter" onchange="filterQuestions()">
        <option value="all"> 全部紧急度</option>
        <option value="high">🔴 高优先级</option>
        <option value="medium">🟠 中优先级</option>
        <option value="low">🟢 低优先级</option>
      </select>
    </div>

    <div class="filter-bar" style="grid-template-columns: 1fr 180px;">
      <div class="tags" id="filterTags" style="margin: 0;"></div>
      <select class="status-select" id="statusFilter" onchange="filterQuestions()">
        <option value="all">全部状态</option>
        <option value="answered">✅ 已回答</option>
        <option value="unanswered">⏳ 未回答</option>
        <option value="adopted">⭐ 已采纳</option>
      </select>
    </div>

    <div id="questionList" style="margin-top: 20px;"></div>
  </div>

  <!-- ASK PAGE -->
  <div class="page" id="page-ask">
    <div class="section-header">
      <h2 class="section-title">提交问题</h2>
      <span class="section-meta">NEW_QUERY // ANONYMOUS · REVIEW_REQUIRED</span>
    </div>

    <div class="card" style="padding: 30px;">
      <div class="form-group">
        <label class="form-label required">问题标题</label>
        <input type="text" class="form-input" id="askTitle" placeholder="例如：流水线 CPU 中数据冒险怎么解决？" maxlength="100">
        <div class="form-hint">// MAX 100 CHARS · 简明扼要描述核心问题</div>
      </div>

      <div class="form-group">
        <label class="form-label required">项目进度标签（可多选）</label>
        <div class="progress-grid" id="progressGrid"></div>
        <div class="form-hint">// 选择你当前所处的阶段，便于对应领域同学精准回答</div>
      </div>

      <div class="form-group">
        <label class="form-label required">问题详情</label>
        <textarea class="form-textarea" id="askContent" placeholder="详细描述：&#10;- 遇到的问题现象&#10;- 你已经尝试过的方案&#10;- 报错信息或卡点&#10;- 使用的工具链版本（如 ysyx 镜像版本、Vivado 版本等）"></textarea>
        <div class="form-hint">// 描述越详细，获得有效回答的概率越高</div>
      </div>

      <div class="form-group">
        <label class="form-label">紧急程度</label>
        <select class="form-select" id="askPriority">
          <option value="low">🟢 低 - 不急，有空再答</option>
          <option value="medium" selected>🟠 中 - 正常解答即可</option>
          <option value="high">🔴 高 - 急需帮助（如 deadline 将近）</option>
        </select>
      </div>

      <div class="decor-line"></div>
      <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
        <button class="btn btn-primary" onclick="submitQuestion()">提交审核</button>
        <button class="btn btn-secondary" onclick="clearForm()">清空表单</button>
        <span style="margin-left: auto; font-size: 11px; color: var(--text-dim); font-family: 'JetBrains Mono', monospace;">
          🔒 匿名提交 · 需管理员审核后公开
        </span>
      </div>
    </div>

    <div style="margin-top: 40px;">
      <div class="section-header">
        <h2 class="section-title">我的提问</h2>
        <span class="section-meta">MY_QUERIES // SESSION_TRACKED</span>
      </div>
      <div id="myQuestions"></div>
    </div>
  </div>

  <!-- STATS PAGE -->
  <div class="page" id="page-stats">
    <div class="section-header">
      <h2 class="section-title">数据统计</h2>
      <span class="section-meta">ANALYTICS // REAL_TIME</span>
    </div>

    <div class="stats-bar">
      <div class="stat-card">
        <div class="stat-label">TOTAL_QUESTIONS</div>
        <div class="stat-value" id="stats-total-q">0</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">TOTAL_ANSWERS</div>
        <div class="stat-value cyan" id="stats-total-a">0</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">ADOPTED</div>
        <div class="stat-value ok" id="stats-adopted">0</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">ADOPTION_RATE</div>
        <div class="stat-value warn" id="stats-rate">0%</div>
      </div>
    </div>

    <div class="stats-grid">
      <div class="stats-panel">
        <div class="stats-panel-title">进度分布 <span>BY_PROGRESS</span></div>
        <div id="progressStats"></div>
      </div>

      <div class="stats-panel">
        <div class="stats-panel-title">优先级分布 <span>BY_PRIORITY</span></div>
        <div id="priorityStats"></div>
      </div>

      <div class="stats-panel">
        <div class="stats-panel-title">审核状态 <span>REVIEW_STATUS</span></div>
        <div class="donut-chart" id="reviewDonut"></div>
      </div>

      <div class="stats-panel">
        <div class="stats-panel-title">回答者排行 <span>TOP_HELPERS</span></div>
        <ul class="rank-list" id="helperRank"></ul>
      </div>
    </div>

    <div class="stats-panel" style="margin-bottom: 20px;">
      <div class="stats-panel-title">近 14 天提问趋势 <span>14_DAY_TIMELINE</span></div>
      <div class="timeline-chart" id="timelineChart"></div>
      <div class="timeline-labels" id="timelineLabels"></div>
    </div>

    <div class="stats-grid">
      <div class="stats-panel">
        <div class="stats-panel-title">采纳统计 <span>ADOPTION_ANALYSIS</span></div>
        <div id="adoptionStats"></div>
      </div>

      <div class="stats-panel">
        <div class="stats-panel-title">回答统计 <span>ANSWER_ANALYSIS</span></div>
        <div id="answerAnalysis"></div>
      </div>
    </div>
  </div>

  <!-- ADMIN PAGE -->
  <div class="page" id="page-admin">
    <div id="adminLogin" class="admin-login">
      <div class="admin-login-title">🔐 管理员验证</div>
      <div class="form-group">
        <label class="form-label">访问密钥</label>
        <input type="password" class="form-input" id="adminPassword" placeholder="请输入管理员密码..." onkeydown="if(event.key==='Enter')adminLogin_fn()">
        <div class="form-hint">// DEFAULT: admin123</div>
      </div>
      <div style="display: flex; gap: 12px;">
        <button class="btn btn-primary" onclick="adminLogin_fn()">验证登录</button>
        <button class="btn btn-secondary" onclick="switchPage('home')">取消</button>
      </div>
    </div>

    <div id="adminPanel" style="display: none;">
      <div class="section-header">
        <h2 class="section-title">管理控制台</h2>
        <span class="section-meta">ADMIN // CONTROL_PANEL</span>
        <button class="btn btn-secondary" style="margin-left: 12px; padding: 6px 16px; font-size: 11px;" onclick="adminLogout()">退出</button>
      </div>

      <div class="admin-tabs">
        <button class="admin-tab active" onclick="switchAdminTab('review')">
          审核队列<span class="tab-badge" id="reviewBadge" style="display:none;">0</span>
        </button>
        <button class="admin-tab" onclick="switchAdminTab('questions')">全部问题</button>
        <button class="admin-tab" onclick="switchAdminTab('stats')">数据概览</button>
        <button class="admin-tab" onclick="switchAdminTab('settings')">系统设置</button>
      </div>

      <div class="tab-content active" id="admin-tab-review">
        <div class="section-header">
          <h2 class="section-title" style="font-size: 16px;">待审核问题</h2>
          <span class="section-meta">PENDING_REVIEW_QUEUE</span>
        </div>
        <div id="reviewQueue"></div>
      </div>

      <div class="tab-content" id="admin-tab-questions">
        <div class="filter-bar">
          <input type="text" class="search-input" placeholder="搜索问题..." id="adminSearchInput" oninput="renderAdminQuestions()">
          <select class="status-select" id="adminStatusFilter" onchange="renderAdminQuestions()">
            <option value="all">全部状态</option>
            <option value="pending">待审核</option>
            <option value="approved">已通过</option>
            <option value="rejected">已拒绝</option>
          </select>
        </div>
        <div id="adminQuestionList"></div>
      </div>

      <div class="tab-content" id="admin-tab-stats">
        <div class="stats-bar">
          <div class="stat-card">
            <div class="stat-label">TOTAL</div>
            <div class="stat-value" id="admin-stat-total">0</div>
          </div>
          <div class="stat-card">
            <div class="stat-label">APPROVED</div>
            <div class="stat-value ok" id="admin-stat-approved">0</div>
          </div>
          <div class="stat-card">
            <div class="stat-label">PENDING</div>
            <div class="stat-value warn" id="admin-stat-pending">0</div>
          </div>
          <div class="stat-card">
            <div class="stat-label">REJECTED</div>
            <div class="stat-value" id="admin-stat-rejected" style="color: var(--danger);">0</div>
          </div>
        </div>
        <div class="stats-panel">
          <div class="stats-panel-title">审核通过率趋势 <span>APPROVAL_OVERVIEW</span></div>
          <div id="adminOverview"></div>
        </div>
      </div>

      <div class="tab-content" id="admin-tab-settings">
        <div class="card" style="padding: 28px;">
          <div class="form-group">
            <label class="form-label">修改管理密码</label>
            <input type="password" class="form-input" id="newPassword" placeholder="输入新密码...">
          </div>
          <div class="form-group">
            <label class="form-label">确认新密码</label>
            <input type="password" class="form-input" id="confirmPassword" placeholder="再次输入新密码...">
          </div>
          <button class="btn btn-primary" onclick="changePassword()">更新密码</button>
          <div class="decor-line"></div>
          <div class="form-group" style="margin-top: 18px;">
            <label class="form-label">数据操作</label>
            <div style="display: flex; gap: 12px; flex-wrap: wrap;">
              <button class="btn btn-secondary" onclick="exportData()">导出数据</button>
              <button class="btn btn-secondary" onclick="importData()">导入数据</button>
              <input type="file" id="importFile" accept=".json" style="display:none;" onchange="handleImport(event)">
              <button class="btn btn-danger" onclick="clearAllData()">清空所有数据</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

<footer class="footer">
  <span>© 2026 先研实验室 · 一生一芯项目技术问答平台</span>
  <span>SESSION_ID: <span id="sessionId">---</span></span>
</footer>

<!-- Answer Modal -->
<div class="modal-overlay" id="answerModal">
  <div class="modal">
    <div class="modal-header">
      <span class="modal-title">回答问题</span>
      <button class="modal-close" onclick="closeModal('answerModal')">×</button>
    </div>
    <div class="modal-body">
      <div id="answerQuestionPreview" style="padding: 12px; background: var(--bg-primary); margin-bottom: 16px; border-left: 2px solid var(--accent-primary); font-size: 13px; color: var(--text-secondary);"></div>
      <div class="form-group">
        <label class="form-label">你的回答</label>
        <textarea class="form-textarea" id="answerContent" placeholder="写下你的回答..." style="min-height: 120px;"></textarea>
      </div>
      <div class="form-group">
        <label class="form-label">回答者昵称（可选）</label>
        <input type="text" class="form-input" id="answerNickname" placeholder="匿名">
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary" onclick="closeModal('answerModal')">取消</button>
      <button class="btn btn-primary" onclick="submitAnswer()">提交回答</button>
    </div>
  </div>
</div>

<!-- Detail Modal -->
<div class="modal-overlay" id="detailModal">
  <div class="modal" style="max-width: 720px;">
    <div class="modal-header">
      <span class="modal-title">问题详情</span>
      <button class="modal-close" onclick="closeModal('detailModal')">×</button>
    </div>
    <div class="modal-body" id="detailContent"></div>
    <div class="modal-footer">
      <button class="btn btn-secondary" onclick="closeModal('detailModal')">关闭</button>
      <button class="btn btn-primary" id="detailAnswerBtn" onclick="openAnswerFromDetail()">回答问题</button>
    </div>
  </div>
</div>

<div class="copy-toast" id="copyToast">已复制到剪贴板</div>

<script>
// ==================== CONSTANTS ====================
const DB_KEY = 'xianr_lab_qa_data_v3';
const ADMIN_KEY = 'xianr_admin_pwd';
const SESSION_KEY = 'xianr_session';

// Updated PROGRESS_TAGS based on the user's image
const PROGRESS_TAGS = [
  // F 阶段 (Stage F)
  { id: 'f1', label: 'F1 如何科学地提问', icon: 'F1', group: 'F阶段' },
  { id: 'f2', label: 'F2 Logisim安装和使用', icon: 'F2', group: 'F阶段' },
  { id: 'f3', label: 'F3 数字逻辑电路基础', icon: 'F3', group: 'F阶段' },
  { id: 'f4', label: 'F4 计算机系统的状态机模型', icon: 'F4', group: 'F阶段' },
  { id: 'f5', label: 'F5 支持数列求和的简单处理器', icon: 'F5', group: 'F阶段' },
  { id: 'f6', label: 'F6 功能完备的迷你RISC-V处理器', icon: 'F6', group: 'F阶段' },
  // E 阶段 (Stage E)
  { id: 'e1', label: 'E1 C语言程序设计', icon: 'E1', group: 'E阶段' },
  { id: 'e2', label: 'E2 硬件描述语言', icon: 'E2', group: 'E阶段' },
  { id: 'e3', label: 'E3 Linux系统安装和基本使用', icon: 'E3', group: 'E阶段' },
  { id: 'e4', label: 'E4 C程序的执行', icon: 'E4', group: 'E阶段' },
  { id: 'e4_1', label: 'E4 从C代码到二进制程序', icon: 'E4', group: 'E阶段' },
  { id: 'e4_2', label: 'E4 指令集模拟器', icon: 'E4', group: 'E阶段' },
  { id: 'e5_1', label: 'E5 RTL代码的仿真', icon: 'E5', group: 'E阶段' },
  { id: 'e5_2', label: 'E5 逻辑综合', icon: 'E5', group: 'E阶段' },
  { id: 'e5', label: 'E5 Verilog的RTL综合语义', icon: 'E5', group: 'E阶段' }
];

let currentFilter = 'all';
let currentSearch = '';
let currentPriority = 'all';
let currentStatus = 'all';
let currentAnswerQuestionId = null;
let currentDetailQuestionId = null;
let isAdminLoggedIn = false;
let selectedProgress = new Set();

// ==================== DATA LAYER ====================
function getDB() {
  const data = localStorage.getItem(DB_KEY);
  if (data) return JSON.parse(data);
  
  const sampleData = {
    questions: [
      {
        id: generateId(),
        title: '流水线 CPU 中 EX-MEM 和 ID-EX 数据冒险怎么解决？',
        content: '在实现五级流水线时遇到 lw 指令后紧跟使用该寄存器的指令，前递逻辑写得有问题，仿真时结果不对。请问标准的 forwarding unit 应该怎么写？是否需要加入 stall 逻辑？',
        progress: ['f6', 'e4'],
        priority: 'high',
        status: 'approved',
        answers: [
          { 
            id: 'a1',
            content: 'EX hazard 需要在 EX 阶段比较 rs1/rs2 和 EX-MEM/MEM-WB 的 rd，如果匹配且 rd != 0 就前递。lw 后紧跟使用属于 load-use hazard，必须 stall 一拍。建议参考 CS:APP 的 forwarding 图。',
            nickname: 'ChipHelper', 
            time: Date.now() - 3600000,
            adopted: true
          }
        ],
        time: Date.now() - 86400000,
        sessionId: 'sample'
      },
      {
        id: generateId(),
        title: 'Chisel 中 Bundle 和 Record 的区别？',
        content: '看文档感觉两者都能定义接口，但实际用起来好像有差别。什么时候应该用 Record？',
        progress: ['e2'],
        priority: 'medium',
        status: 'approved',
        answers: [],
        time: Date.now() - 43200000,
        sessionId: 'sample'
      },
      {
        id: generateId(),
        title: 'Vivado 综合时报 timing violation 怎么排查？',
        content: '单周期 CPU 跑 50MHz 没问题，但改成流水线后 100MHz 综合就 timing fail。setup time 违规，最长路径在 ALU 那一段。是加流水线寄存器还是优化 ALU？',
        progress: ['f6', 'e5_2'],
        priority: 'high',
        status: 'approved',
        answers: [
          {
            id: 'a2',
            content: '先看 timing report 的具体路径，如果是 ALU 内部组合逻辑太长，可以考虑把 ALU 拆成两段流水。另外检查是不是有 cross-clock-domain 信号没同步。',
            nickname: 'FPGA老手',
            time: Date.now() - 7200000,
            adopted: false
          }
        ],
        time: Date.now() - 172800000,
        sessionId: 'sample'
      },
      {
        id: generateId(),
        title: 'ysyx 开发环境安装 nix 报错',
        content: '按照官方文档装 nix，结果配置镜像源的时候一直 timeout，有人遇到过吗？',
        progress: ['e3'],
        priority: 'low',
        status: 'pending',
        answers: [],
        time: Date.now() - 1800000,
        sessionId: 'sample'
      }
    ]
  };
  saveDB(sampleData);
  return sampleData;
}

function saveDB(data) { localStorage.setItem(DB_KEY, JSON.stringify(data)); }
function getAdminPassword() { return localStorage.getItem(ADMIN_KEY) || 'admin123'; }
function setAdminPassword(pwd) { localStorage.setItem(ADMIN_KEY, pwd); }
function getSessionId() {
  let sid = sessionStorage.getItem(SESSION_KEY);
  if (!sid) { sid = 'USR-' + Math.random().toString(36).substr(2, 8).toUpperCase(); sessionStorage.setItem(SESSION_KEY, sid); }
  return sid;
}
function generateId() { return 'Q-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).substr(2, 4).toUpperCase(); }
function generateAnswerId() { return 'A-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).substr(2, 4).toUpperCase(); }

// ==================== UI UTILS ====================
function switchPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  const idx = ['home','ask','stats','admin'].indexOf(page);
  document.querySelectorAll('.nav-btn')[idx].classList.add('active');
  
  if (page === 'home') renderQuestions();
  if (page === 'ask') { renderProgressGrid(); renderMyQuestions(); }
  if (page === 'stats') renderStatsPage();
  if (page === 'admin') { renderAdminQuestions(); renderReviewQueue(); updateAdminOverview(); }
}

function showNotification(msg, type = 'success') {
  const el = document.createElement('div');
  el.className = 'notification ' + type;
  el.textContent = msg;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 3000);
}

function formatTime(t) {
  const diff = Date.now() - t;
  if (diff < 60000) return '刚刚';
  if (diff < 3600000) return Math.floor(diff/60000) + '分钟前';
  if (diff < 86400000) return Math.floor(diff/3600000) + '小时前';
  if (diff < 604800000) return Math.floor(diff/86400000) + '天前';
  return new Date(t).toLocaleDateString('zh-CN');
}

function formatFullTime(t) { return new Date(t).toLocaleString('zh-CN'); }

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function getProgressLabel(id) {
  const p = PROGRESS_TAGS.find(t => t.id === id);
  return p ? p.label : id;
}

function getProgressIcon(id) {
  const p = PROGRESS_TAGS.find(t => t.id === id);
  return p ? p.icon : '●';
}

// ==================== PROGRESS GRID ====================
function renderProgressGrid() {
  const grid = document.getElementById('progressGrid');
  grid.innerHTML = PROGRESS_TAGS.map(p => `
    <label class="progress-option ${selectedProgress.has(p.id) ? 'selected' : ''}" data-id="${p.id}">
      <input type="checkbox" value="${p.id}" ${selectedProgress.has(p.id) ? 'checked' : ''}>
      <span class="check-mark">${selectedProgress.has(p.id) ? '✓' : ''}</span>
      <span>${p.icon} ${p.label}</span>
    </label>
  `).join('');
  
  grid.querySelectorAll('.progress-option').forEach(opt => {
    opt.addEventListener('click', (e) => {
      e.preventDefault();
      const id = opt.dataset.id;
      if (selectedProgress.has(id)) selectedProgress.delete(id);
      else selectedProgress.add(id);
      renderProgressGrid();
    });
  });
}

// ==================== FILTER TAGS (HOME) ====================
function renderFilterTags() {
  const db = getDB();
  const approved = db.questions.filter(q => q.status === 'approved');
  const counts = {};
  PROGRESS_TAGS.forEach(t => counts[t.id] = 0);
  approved.forEach(q => (q.progress || []).forEach(p => { counts[p] = (counts[p] || 0) + 1; }));
  
  const container = document.getElementById('filterTags');
  container.innerHTML = `
    <span class="tag ${currentFilter === 'all' ? 'active' : ''}" onclick="filterByTag('all')">全部<span class="tag-count">${approved.length}</span></span>
    ${PROGRESS_TAGS.filter(t => counts[t.id] > 0).map(t => `
      <span class="tag ${currentFilter === t.id ? 'active' : ''}" onclick="filterByTag('${t.id}')">${t.icon} ${t.label.substring(3)}<span class="tag-count">${counts[t.id]}</span></span>
    `).join('')}
  `;
}

function filterByTag(tag) { currentFilter = tag; renderQuestions(); }

function filterQuestions() {
  currentSearch = document.getElementById('searchInput').value;
  currentPriority = document.getElementById('priorityFilter').value;
  currentStatus = document.getElementById('statusFilter').value;
  renderQuestions();
}

// ==================== QUESTION RENDERING ====================
function renderQuestions() {
  const db = getDB();
  let questions = db.questions.filter(q => q.status === 'approved');
  
  if (currentFilter !== 'all') {
    questions = questions.filter(q => (q.progress || []).includes(currentFilter));
  }
  
  if (currentPriority !== 'all') {
    questions = questions.filter(q => q.priority === currentPriority);
  }
  
  if (currentStatus === 'answered') questions = questions.filter(q => q.answers.length > 0);
  if (currentStatus === 'unanswered') questions = questions.filter(q => q.answers.length === 0);
  if (currentStatus === 'adopted') questions = questions.filter(q => q.answers.some(a => a.adopted));
  
  if (currentSearch) {
    const kw = currentSearch.toLowerCase();
    questions = questions.filter(q => 
      q.title.toLowerCase().includes(kw) || 
      q.content.toLowerCase().includes(kw) ||
      q.id.toLowerCase().includes(kw)
    );
  }
  
  questions.sort((a, b) => {
    const pOrder = { high: 0, medium: 1, low: 2 };
    if (pOrder[a.priority] !== pOrder[b.priority]) return pOrder[a.priority] - pOrder[b.priority];
    return b.time - a.time;
  });
  
  // Stats
  const allApproved = db.questions.filter(q => q.status === 'approved');
  document.getElementById('stat-total').textContent = allApproved.length;
  document.getElementById('stat-answered').textContent = allApproved.filter(q => q.answers.length > 0).length;
  document.getElementById('stat-pending').textContent = db.questions.filter(q => q.status === 'pending').length;
  const today = new Date().toDateString();
  document.getElementById('stat-today').textContent = allApproved.filter(q => new Date(q.time).toDateString() === today).length;
  
  // Hero stats
  const totalAnswers = allApproved.reduce((s, q) => s + q.answers.length, 0);
  const adoptedQ = allApproved.filter(q => q.answers.some(a => a.adopted)).length;
  const helpers = new Set();
  allApproved.forEach(q => q.answers.forEach(a => helpers.add(a.nickname || '匿名')));
  
  document.getElementById('hero-total').textContent = allApproved.length;
  document.getElementById('hero-adopted').textContent = allApproved.length ? Math.round(adoptedQ / allApproved.length * 100) + '%' : '0%';
  document.getElementById('hero-helpers').textContent = helpers.size;
  document.getElementById('hero-resp').textContent = allApproved.length ? '< 24h' : '--';
  
  renderFilterTags();
  updatePendingBadge();
  
  const container = document.getElementById('questionList');
  if (questions.length === 0) {
    container.innerHTML = '<div class="empty-state"><div class="empty-state-icon">📭</div><div class="empty-state-text">暂无符合条件的问题</div></div>';
    return;
  }
  
  container.innerHTML = questions.map(q => renderQuestionCard(q)).join('');
}

function renderQuestionCard(q) {
  const answered = q.answers.length > 0;
  const adopted = q.answers.some(a => a.adopted);
  const isOwner = q.sessionId === getSessionId();
  const progressTags = (q.progress || []).map(p => `<span class="card-tag progress">${getProgressIcon(p)} ${getProgressLabel(p)}</span>`).join('');
  
  const answersHtml = q.answers.map(a => `
    <div class="answer-item ${a.adopted ? 'adopted' : ''}">
      <div>${escapeHtml(a.content)}${a.adopted ? '<span class="adopted-badge">✓ 已采纳</span>' : ''}</div>
      <div class="answer-meta">
        <span>— ${a.nickname || '匿名'} · ${formatTime(a.time)}</span>
        ${isOwner && !adopted && q.status === 'approved' ? `<button class="card-action-btn success" onclick="adoptAnswer('${q.id}','${a.id}')">采纳</button>` : ''}
      </div>
    </div>
  `).join('');
  
  let statusBadge = '';
  if (q.status === 'pending') statusBadge = '<span class="card-status pending">PENDING</span>';
  if (q.status === 'rejected') statusBadge = '<span class="card-status rejected">REJECTED</span>';
  
  return `
    <div class="card ${q.status !== 'approved' ? q.status + '-review' : ''}">
      <div class="card-header">
        <span class="card-id">${q.id}</span>
        <div class="card-meta">
          ${statusBadge}
          <span class="priority-badge ${q.priority}">${q.priority === 'high' ? '● HIGH' : q.priority === 'medium' ? '● MED' : '● LOW'}</span>
          ${progressTags}
        </div>
      </div>
      <div class="card-body">
        <div class="card-title">${escapeHtml(q.title)}</div>
        <div class="card-content">${escapeHtml(q.content.substring(0, 180))}${q.content.length > 180 ? '...' : ''}</div>
        ${q.answers.length > 0 ? `
          <div class="answers-section">
            <div style="font-size: 11px; color: var(--accent-primary); margin-bottom: 8px; font-family: 'JetBrains Mono', monospace;">
              ▶ ${q.answers.length} 条回答 ${adopted ? '· ✅ 已采纳最佳答案' : ''}
            </div>
            ${answersHtml}
          </div>
        ` : ''}
        ${q.rejectReason ? `<div class="review-reason">📛 拒绝理由：${escapeHtml(q.rejectReason)}</div>` : ''}
      </div>
      <div class="card-footer">
        <span>${formatTime(q.time)} · ${adopted ? '✅ 已采纳' : answered ? ' 已回答' : '⏳ 等待回答'}</span>
        <div class="card-actions">
          <button class="card-action-btn" onclick="viewDetail('${q.id}')">查看详情</button>
          ${q.status === 'approved' ? `<button class="card-action-btn" onclick="openAnswer('${q.id}')">回答</button>` : ''}
          <button class="card-action-btn" onclick="copyId('${q.id}')">复制ID</button>
          ${isOwner && q.status !== 'approved' ? `<button class="card-action-btn danger" onclick="deleteOwnQuestion('${q.id}')">撤回</button>` : ''}
        </div>
      </div>
    </div>
  `;
}

// ==================== INTERACTIONS ====================
function submitQuestion() {
  const title = document.getElementById('askTitle').value.trim();
  const content = document.getElementById('askContent').value.trim();
  const priority = document.getElementById('askPriority').value;
  const progress = Array.from(selectedProgress);
  
  if (!title) { showNotification('请输入问题标题', 'error'); return; }
  if (!content) { showNotification('请输入问题详情', 'error'); return; }
  if (title.length > 100) { showNotification('标题不能超过100个字符', 'error'); return; }
  if (progress.length === 0) { showNotification('请至少选择一个进度标签', 'error'); return; }
  
  const db = getDB();
  const newQ = {
    id: generateId(),
    title, content,
    progress, priority,
    status: 'pending',
    answers: [],
    time: Date.now(),
    sessionId: getSessionId()
  };
  
  db.questions.push(newQ);
  saveDB(db);
  
  clearForm();
  showNotification('问题已提交，等待管理员审核。ID: ' + newQ.id);
  renderMyQuestions();
  updatePendingBadge();
}

function clearForm() {
  document.getElementById('askTitle').value = '';
  document.getElementById('askContent').value = '';
  document.getElementById('askPriority').value = 'medium';
  selectedProgress.clear();
  renderProgressGrid();
}

function renderMyQuestions() {
  const db = getDB();
  const myQ = db.questions.filter(q => q.sessionId === getSessionId());
  const container = document.getElementById('myQuestions');
  
  if (myQ.length === 0) {
    container.innerHTML = '<div class="empty-state"><div class="empty-state-icon"></div><div class="empty-state-text">你还没有提过问题</div></div>';
    return;
  }
  
  container.innerHTML = myQ.sort((a, b) => b.time - a.time).map(q => renderQuestionCard(q)).join('');
}

function deleteOwnQuestion(id) {
  if (!confirm('确定撤回这个问题吗？')) return;
  const db = getDB();
  const q = db.questions.find(q => q.id === id);
  if (q && q.sessionId === getSessionId()) {
    db.questions = db.questions.filter(q => q.id !== id);
    saveDB(db);
    showNotification('问题已撤回');
    renderMyQuestions();
    renderQuestions();
  }
}

function openAnswer(qid) {
  currentAnswerQuestionId = qid;
  const db = getDB();
  const q = db.questions.find(q => q.id === qid);
  if (!q) return;
  document.getElementById('answerQuestionPreview').innerHTML = `<strong>${escapeHtml(q.title)}</strong><br><span style="font-size: 12px; color: var(--text-dim);">${escapeHtml(q.content.substring(0, 200))}</span>`;
  document.getElementById('answerContent').value = '';
  document.getElementById('answerNickname').value = '';
  document.getElementById('answerModal').classList.add('active');
}

function submitAnswer() {
  const content = document.getElementById('answerContent').value.trim();
  const nickname = document.getElementById('answerNickname').value.trim();
  if (!content) { showNotification('请输入回答内容', 'error'); return; }
  
  const db = getDB();
  const q = db.questions.find(q => q.id === currentAnswerQuestionId);
  if (!q) return;
  
  q.answers.push({
    id: generateAnswerId(),
    content, nickname,
    time: Date.now(),
    adopted: false
  });
  
  saveDB(db);
  closeModal('answerModal');
  showNotification('回答提交成功！');
  renderQuestions();
  renderMyQuestions();
}

function adoptAnswer(qid, aid) {
  const db = getDB();
  const q = db.questions.find(q => q.id === qid);
  if (!q || q.sessionId !== getSessionId()) {
    showNotification('只有提问者可以采纳回答', 'error');
    return;
  }
  if (!confirm('确定采纳这条回答为最佳答案吗？采纳后不可更改。')) return;
  
  q.answers.forEach(a => a.adopted = (a.id === aid));
  saveDB(db);
  showNotification('已采纳该回答！');
  renderQuestions();
  renderMyQuestions();
  if (document.getElementById('detailModal').classList.contains('active')) viewDetail(qid);
}

function viewDetail(qid) {
  currentDetailQuestionId = qid;
  const db = getDB();
  const q = db.questions.find(q => q.id === qid);
  if (!q) return;
  
  const isOwner = q.sessionId === getSessionId();
  const adopted = q.answers.some(a => a.adopted);
  const progressHtml = (q.progress || []).map(p => `<span class="card-tag progress">${getProgressIcon(p)} ${getProgressLabel(p)}</span>`).join(' ');
  
  const answersHtml = q.answers.length > 0 ? q.answers.map(a => `
    <div class="answer-item ${a.adopted ? 'adopted' : ''}">
      <div>${escapeHtml(a.content)}${a.adopted ? '<span class="adopted-badge">✓ 已采纳</span>' : ''}</div>
      <div class="answer-meta">
        <span>— ${a.nickname || '匿名'} · ${formatFullTime(a.time)}</span>
        ${isOwner && !adopted && q.status === 'approved' ? `<button class="card-action-btn success" onclick="adoptAnswer('${q.id}','${a.id}')">采纳</button>` : ''}
      </div>
    </div>
  `).join('') : '<div style="color: var(--text-dim); font-size: 13px; padding: 12px;">暂无回答，成为第一个回答者吧！</div>';
  
  document.getElementById('detailContent').innerHTML = `
    <div style="margin-bottom: 12px; display: flex; gap: 6px; align-items: center; flex-wrap: wrap;">
      <span class="card-id">${q.id}</span>
      <span class="priority-badge ${q.priority}">${q.priority === 'high' ? '● HIGH' : q.priority === 'medium' ? '● MED' : '● LOW'}</span>
      ${progressHtml}
    </div>
    <h3 style="font-size: 18px; margin-bottom: 14px; line-height: 1.6;">${escapeHtml(q.title)}</h3>
    <p style="font-size: 14px; color: var(--text-secondary); line-height: 1.9; white-space: pre-wrap; margin-bottom: 18px;">${escapeHtml(q.content)}</p>
    <div style="font-size: 11px; color: var(--text-dim); font-family: 'JetBrains Mono', monospace;">📅 ${formatFullTime(q.time)}</div>
    <div class="decor-line"></div>
    <h4 style="font-size: 13px; color: var(--accent-primary); margin-bottom: 12px; letter-spacing: 2px;">回答 (${q.answers.length})</h4>
    ${answersHtml}
  `;
  
  const btn = document.getElementById('detailAnswerBtn');
  btn.style.display = q.status === 'approved' ? '' : 'none';
  document.getElementById('detailModal').classList.add('active');
}

function openAnswerFromDetail() {
  closeModal('detailModal');
  setTimeout(() => openAnswer(currentDetailQuestionId), 300);
}

function copyId(id) {
  navigator.clipboard.writeText(id).then(() => {
    const toast = document.getElementById('copyToast');
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2000);
  });
}

function closeModal(id) { document.getElementById(id).classList.remove('active'); }

// ==================== STATS PAGE ====================
function renderStatsPage() {
  const db = getDB();
  const approved = db.questions.filter(q => q.status === 'approved');
  const totalAnswers = approved.reduce((s, q) => s + q.answers.length, 0);
  const adoptedQ = approved.filter(q => q.answers.some(a => a.adopted)).length;
  const totalAdopted = approved.reduce((s, q) => s + q.answers.filter(a => a.adopted).length, 0);
  
  document.getElementById('stats-total-q').textContent = approved.length;
  document.getElementById('stats-total-a').textContent = totalAnswers;
  document.getElementById('stats-adopted').textContent = totalAdopted;
  document.getElementById('stats-rate').textContent = approved.length ? Math.round(adoptedQ / approved.length * 100) + '%' : '0%';
  
  // Progress distribution
  const progressCounts = {};
  PROGRESS_TAGS.forEach(t => progressCounts[t.id] = 0);
  approved.forEach(q => (q.progress || []).forEach(p => progressCounts[p] = (progressCounts[p] || 0) + 1));
  const maxProg = Math.max(...Object.values(progressCounts), 1);
  
  document.getElementById('progressStats').innerHTML = PROGRESS_TAGS.filter(t => progressCounts[t.id] > 0).map(t => `
    <div class="bar-row">
      <div class="bar-label">${t.icon} ${t.label}</div>
      <div class="bar-track"><div class="bar-fill cyan" style="width: ${progressCounts[t.id]/maxProg*100}%"></div></div>
      <div class="bar-value cyan">${progressCounts[t.id]}</div>
    </div>
  `).join('') || '<div style="color: var(--text-dim); font-size: 12px;">暂无数据</div>';
  
  // Priority distribution
  const priCounts = { high: 0, medium: 0, low: 0 };
  approved.forEach(q => priCounts[q.priority]++);
  const maxPri = Math.max(...Object.values(priCounts), 1);
  const priLabels = { high: '🔴 高优先级', medium: ' 中优先级', low: '🟢 低优先级' };
  
  document.getElementById('priorityStats').innerHTML = Object.entries(priCounts).map(([k, v]) => `
    <div class="bar-row">
      <div class="bar-label">${priLabels[k]}</div>
      <div class="bar-track"><div class="bar-fill" style="width: ${v/maxPri*100}%"></div></div>
      <div class="bar-value">${v}</div>
    </div>
  `).join('');
  
  // Review status donut
  const reviewCounts = { approved: 0, pending: 0, rejected: 0 };
  db.questions.forEach(q => reviewCounts[q.status]++);
  renderDonut(reviewCounts);
  
  // Helper ranking
  const helperStats = {};
  approved.forEach(q => q.answers.forEach(a => {
    const name = a.nickname || '匿名';
    if (!helperStats[name]) helperStats[name] = { count: 0, adopted: 0 };
    helperStats[name].count++;
    if (a.adopted) helperStats[name].adopted++;
  }));
  
  const topHelpers = Object.entries(helperStats).sort((a, b) => b[1].count - a[1].count).slice(0, 5);
  document.getElementById('helperRank').innerHTML = topHelpers.length ? topHelpers.map(([name, s], i) => `
    <li class="rank-item">
      <span class="rank-pos">#${i + 1}</span>
      <span class="rank-name">${escapeHtml(name)}${s.adopted > 0 ? ` <span style="color: var(--success); font-size: 11px;">✓${s.adopted}</span>` : ''}</span>
      <span class="rank-count">${s.count}条</span>
    </li>
  `).join('') : '<div style="color: var(--text-dim); font-size: 12px; padding: 12px 0;">暂无回答数据</div>';
  
  // Timeline chart
  renderTimeline();
  
  // Adoption analysis
  const adoptionByProgress = {};
  approved.forEach(q => {
    (q.progress || []).forEach(p => {
      if (!adoptionByProgress[p]) adoptionByProgress[p] = { total: 0, adopted: 0 };
      adoptionByProgress[p].total++;
      if (q.answers.some(a => a.adopted)) adoptionByProgress[p].adopted++;
    });
  });
  
  document.getElementById('adoptionStats').innerHTML = Object.keys(adoptionByProgress).length ? Object.entries(adoptionByProgress).map(([p, s]) => `
    <div class="bar-row">
      <div class="bar-label">${getProgressIcon(p)} ${getProgressLabel(p)}</div>
      <div class="bar-track"><div class="bar-fill" style="width: ${s.total ? s.adopted/s.total*100 : 0}%"></div></div>
      <div class="bar-value">${s.adopted}/${s.total}</div>
    </div>
  `).join('') : '<div style="color: var(--text-dim); font-size: 12px;">暂无采纳数据</div>';
  
  // Answer analysis
  const multiAnsQ = approved.filter(q => q.answers.length > 1).length;
  const oneAnsQ = approved.filter(q => q.answers.length === 1).length;
  const zeroAnsQ = approved.filter(q => q.answers.length === 0).length;
  const maxA = Math.max(multiAnsQ, oneAnsQ, zeroAnsQ, 1);
  
  document.getElementById('answerAnalysis').innerHTML = `
    <div class="bar-row">
      <div class="bar-label">多回答 (≥2)</div>
      <div class="bar-track"><div class="bar-fill" style="width: ${multiAnsQ/maxA*100}%"></div></div>
      <div class="bar-value">${multiAnsQ}</div>
    </div>
    <div class="bar-row">
      <div class="bar-label">单回答 (=1)</div>
      <div class="bar-track"><div class="bar-fill cyan" style="width: ${oneAnsQ/maxA*100}%"></div></div>
      <div class="bar-value cyan">${oneAnsQ}</div>
    </div>
    <div class="bar-row">
      <div class="bar-label">零回答 (=0)</div>
      <div class="bar-track"><div class="bar-fill" style="width: ${zeroAnsQ/maxA*100}%; background: linear-gradient(90deg, rgba(208,64,64,0.5), var(--danger));"></div></div>
      <div class="bar-value" style="color: var(--danger);">${zeroAnsQ}</div>
    </div>
    <div style="margin-top: 16px; padding-top: 12px; border-top: 1px dashed var(--border-color); font-size: 12px; color: var(--text-secondary); line-height: 1.7;">
      <div>📊 平均每问题回答数：<span style="color: var(--accent-primary); font-family: 'JetBrains Mono', monospace;">${approved.length ? (totalAnswers/approved.length).toFixed(2) : 0}</span></div>
      <div>⭐ 平均每条回答采纳率：<span style="color: var(--accent-primary); font-family: 'JetBrains Mono', monospace;">${totalAnswers ? (totalAdopted/totalAnswers*100).toFixed(1) + '%' : '0%'}</span></div>
    </div>
  `;
}

function renderDonut(counts) {
  const total = counts.approved + counts.pending + counts.rejected;
  if (total === 0) {
    document.getElementById('reviewDonut').innerHTML = '<div style="color: var(--text-dim); font-size: 12px;">暂无数据</div>';
    return;
  }
  
  const colors = { approved: '#40b070', pending: '#a070d0', rejected: '#d04040' };
  const labels = { approved: '已通过', pending: '待审核', rejected: '已拒绝' };
  
  let offset = 0;
  const radius = 40;
  const circ = 2 * Math.PI * radius;
  const segments = Object.entries(counts).filter(([k, v]) => v > 0).map(([k, v]) => {
    const len = (v / total) * circ;
    const seg = `<circle cx="60" cy="60" r="${radius}" fill="none" stroke="${colors[k]}" stroke-width="14" stroke-dasharray="${len} ${circ - len}" stroke-dashoffset="${-offset}" transform="rotate(-90 60 60)"/>`;
    offset += len;
    return seg;
  });
  
  document.getElementById('reviewDonut').innerHTML = `
    <svg class="donut-svg" width="120" height="120" viewBox="0 0 120 120">
      <circle cx="60" cy="60" r="${radius}" fill="none" stroke="${'var(--bg-primary)'}" stroke-width="14"/>
      ${segments.join('')}
      <text x="60" y="58" text-anchor="middle" fill="${'var(--accent-primary)'}" font-size="18" font-weight="700" font-family="JetBrains Mono">${total}</text>
      <text x="60" y="74" text-anchor="middle" fill="${'var(--text-dim)'}" font-size="8" font-family="JetBrains Mono">TOTAL</text>
    </svg>
    <div class="donut-legend">
      ${Object.entries(counts).map(([k, v]) => `
        <div class="legend-item">
          <div class="legend-dot" style="background: ${colors[k]};"></div>
          <div class="legend-label">${labels[k]}</div>
          <div class="legend-value">${v} <span style="color: var(--text-dim); font-size: 10px;">(${total ? Math.round(v/total*100) : 0}%)</span></div>
        </div>
      `).join('')}
    </div>
  `;
}

function renderTimeline() {
  const db = getDB();
  const days = [];
  const counts = [];
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  
  for (let i = 13; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(d.getDate() - i);
    days.push(d);
    const c = db.questions.filter(q => {
      const qd = new Date(q.time);
      return qd.toDateString() === d.toDateString() && q.status === 'approved';
    }).length;
    counts.push(c);
  }
  
  const max = Math.max(...counts, 1);
  
  document.getElementById('timelineChart').innerHTML = counts.map((c, i) => `
    <div class="timeline-bar" style="height: ${c ? (c/max*100) : 3}%;" title="${days[i].toLocaleDateString('zh-CN')}: ${c}条"></div>
  `).join('');
  
  document.getElementById('timelineLabels').innerHTML = days.map((d, i) => {
    if (i % 2 === 0 || i === days.length - 1) return `<span>${d.getMonth() + 1}/${d.getDate()}</span>`;
    return '<span></span>';
  }).join('');
}

// ==================== ADMIN ====================
function adminLogin_fn() {
  const pwd = document.getElementById('adminPassword').value;
  if (pwd === getAdminPassword()) {
    isAdminLoggedIn = true;
    document.getElementById('adminLogin').style.display = 'none';
    document.getElementById('adminPanel').style.display = 'block';
    renderReviewQueue();
    renderAdminQuestions();
    updateAdminOverview();
    showNotification('管理员登录成功');
  } else {
    showNotification('密码错误', 'error');
  }
  document.getElementById('adminPassword').value = '';
}

function adminLogout() {
  isAdminLoggedIn = false;
  document.getElementById('adminLogin').style.display = 'block';
  document.getElementById('adminPanel').style.display = 'none';
}

function switchAdminTab(tab) {
  document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  event.target.classList.add('active');
  document.getElementById('admin-tab-' + tab).classList.add('active');
  
  if (tab === 'review') renderReviewQueue();
  if (tab === 'questions') renderAdminQuestions();
  if (tab === 'stats') updateAdminOverview();
}

function updatePendingBadge() {
  const db = getDB();
  const pending = db.questions.filter(q => q.status === 'pending').length;
  const badge = document.getElementById('pendingBadge');
  const reviewBadge = document.getElementById('reviewBadge');
  if (pending > 0) {
    badge.textContent = pending;
    badge.style.display = 'flex';
    reviewBadge.textContent = pending;
    reviewBadge.style.display = 'inline-block';
  } else {
    badge.style.display = 'none';
    reviewBadge.style.display = 'none';
  }
}

function renderReviewQueue() {
  const db = getDB();
  const pending = db.questions.filter(q => q.status === 'pending').sort((a, b) => b.time - a.time);
  const container = document.getElementById('reviewQueue');
  
  if (pending.length === 0) {
    container.innerHTML = '<div class="empty-state"><div class="empty-state-icon">✅</div><div class="empty-state-text">审核队列为空，所有问题已处理</div></div>';
    updatePendingBadge();
    return;
  }
  
  container.innerHTML = pending.map(q => {
    const progressHtml = (q.progress || []).map(p => `<span class="card-tag progress">${getProgressIcon(p)} ${getProgressLabel(p)}</span>`).join(' ');
    return `
      <div class="card">
        <div class="card-header">
          <span class="card-id">${q.id}</span>
          <div class="card-meta">
            <span class="card-status pending">PENDING</span>
            <span class="priority-badge ${q.priority}">${q.priority === 'high' ? '● HIGH' : q.priority === 'medium' ? '● MED' : '● LOW'}</span>
            ${progressHtml}
          </div>
        </div>
        <div class="card-body">
          <div class="card-title">${escapeHtml(q.title)}</div>
          <div class="card-content">${escapeHtml(q.content)}</div>
        </div>
        <div class="card-footer" style="flex-direction: column; align-items: stretch;">
          <div style="display: flex; justify-content: space-between; width: 100%;">
            <span>${formatFullTime(q.time)}</span>
          </div>
          <div class="review-actions">
            <input type="text" class="review-input" id="reason-${q.id}" placeholder="拒绝理由（仅拒绝时必填）">
            <button class="btn btn-success" style="padding: 8px 16px; font-size: 12px; letter-spacing: 1px;" onclick="reviewApprove('${q.id}')">✓ 通过</button>
            <button class="btn btn-danger" style="padding: 8px 16px; font-size: 12px; letter-spacing: 1px;" onclick="reviewReject('${q.id}')">✗ 拒绝</button>
          </div>
        </div>
      </div>
    `;
  }).join('');
  
  updatePendingBadge();
}

function reviewApprove(id) {
  const db = getDB();
  const q = db.questions.find(q => q.id === id);
  if (!q) return;
  q.status = 'approved';
  q.reviewTime = Date.now();
  delete q.rejectReason;
  saveDB(db);
  showNotification('问题已通过审核并公开');
  renderReviewQueue();
  updateAdminOverview();
}

function reviewReject(id) {
  const reason = document.getElementById('reason-' + id).value.trim();
  if (!reason) { showNotification('请填写拒绝理由', 'error'); return; }
  const db = getDB();
  const q = db.questions.find(q => q.id === id);
  if (!q) return;
  q.status = 'rejected';
  q.rejectReason = reason;
  q.reviewTime = Date.now();
  saveDB(db);
  showNotification('问题已拒绝');
  renderReviewQueue();
  updateAdminOverview();
}

function renderAdminQuestions() {
  const db = getDB();
  const search = document.getElementById('adminSearchInput')?.value.toLowerCase() || '';
  const statusF = document.getElementById('adminStatusFilter')?.value || 'all';
  
  let questions = [...db.questions];
  if (statusF !== 'all') questions = questions.filter(q => q.status === statusF);
  if (search) questions = questions.filter(q => q.title.toLowerCase().includes(search) || q.content.toLowerCase().includes(search) || q.id.toLowerCase().includes(search));
  questions.sort((a, b) => b.time - a.time);
  
  const container = document.getElementById('adminQuestionList');
  if (!container) return;
  
  if (questions.length === 0) {
    container.innerHTML = '<div class="empty-state"><div class="empty-state-icon">📋</div><div class="empty-state-text">暂无问题</div></div>';
    return;
  }
  
  container.innerHTML = questions.map(q => {
    const progressHtml = (q.progress || []).map(p => `<span class="card-tag progress">${getProgressIcon(p)} ${getProgressLabel(p)}</span>`).join(' ');
    const statusCls = q.status;
    const statusLabel = { approved: 'APPROVED', pending: 'PENDING', rejected: 'REJECTED' }[q.status];
    
    return `
      <div class="card">
        <div class="card-header">
          <span class="card-id">${q.id}</span>
          <div class="card-meta">
            <span class="card-status ${statusCls}">${statusLabel}</span>
            <span class="priority-badge ${q.priority}">${q.priority === 'high' ? '● HIGH' : q.priority === 'medium' ? '● MED' : '● LOW'}</span>
            ${progressHtml}
          </div>
        </div>
        <div class="card-body">
          <div class="card-title">${escapeHtml(q.title)}</div>
          <div class="card-content">${escapeHtml(q.content.substring(0, 150))}${q.content.length > 150 ? '...' : ''}</div>
          ${q.rejectReason ? `<div class="review-reason">📛 拒绝理由：${escapeHtml(q.rejectReason)}</div>` : ''}
          <div style="margin-top: 8px; font-size: 11px; font-family: 'JetBrains Mono', monospace; color: ${q.answers.length > 0 ? 'var(--success)' : 'var(--warning)'};">
            ${q.answers.length > 0 ? `✓ ${q.answers.length} 条回答${q.answers.some(a => a.adopted) ? ' · ⭐ 已采纳' : ''}` : '⏳ 暂无回答'}
          </div>
        </div>
        <div class="card-footer">
          <span>${formatFullTime(q.time)}</span>
          <div class="card-actions">
            ${q.status === 'pending' ? `<button class="card-action-btn success" onclick="reviewApprove('${q.id}'); renderAdminQuestions();">通过</button>` : ''}
            ${q.status === 'approved' ? `<button class="card-action-btn" onclick="openAnswer('${q.id}')">回答</button>` : ''}
            ${q.status === 'rejected' ? `<button class="card-action-btn success" onclick="reviewApprove('${q.id}'); renderAdminQuestions();">重新通过</button>` : ''}
            <button class="card-action-btn danger" onclick="adminDeleteQuestion('${q.id}')">删除</button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function adminDeleteQuestion(id) {
  if (!confirm('确定要删除这个问题吗？此操作不可撤销。')) return;
  const db = getDB();
  db.questions = db.questions.filter(q => q.id !== id);
  saveDB(db);
  renderAdminQuestions();
  renderReviewQueue();
  updateAdminOverview();
  updatePendingBadge();
  showNotification('问题已删除');
}

function updateAdminOverview() {
  const db = getDB();
  const total = db.questions.length;
  const approved = db.questions.filter(q => q.status === 'approved').length;
  const pending = db.questions.filter(q => q.status === 'pending').length;
  const rejected = db.questions.filter(q => q.status === 'rejected').length;
  
  document.getElementById('admin-stat-total').textContent = total;
  document.getElementById('admin-stat-approved').textContent = approved;
  document.getElementById('admin-stat-pending').textContent = pending;
  document.getElementById('admin-stat-rejected').textContent = rejected;
  
  // Overview - answers distribution
  const approvedQ = db.questions.filter(q => q.status === 'approved');
  const totalAns = approvedQ.reduce((s, q) => s + q.answers.length, 0);
  const totalAdopt = approvedQ.reduce((s, q) => s + q.answers.filter(a => a.adopted).length, 0);
  
  document.getElementById('adminOverview').innerHTML = `
    <div class="bar-row">
      <div class="bar-label">审核通过率</div>
      <div class="bar-track"><div class="bar-fill" style="width: ${total ? approved/total*100 : 0}%"></div></div>
      <div class="bar-value">${total ? Math.round(approved/total*100) : 0}%</div>
    </div>
    <div class="bar-row">
      <div class="bar-label">问题回答率</div>
      <div class="bar-track"><div class="bar-fill cyan" style="width: ${approvedQ.length ? approvedQ.filter(q => q.answers.length > 0).length/approvedQ.length*100 : 0}%"></div></div>
      <div class="bar-value cyan">${approvedQ.length ? Math.round(approvedQ.filter(q => q.answers.length > 0).length/approvedQ.length*100) : 0}%</div>
    </div>
    <div class="bar-row">
      <div class="bar-label">答案采纳率</div>
      <div class="bar-track"><div class="bar-fill" style="width: ${totalAns ? totalAdopt/totalAns*100 : 0}%"></div></div>
      <div class="bar-value">${totalAns ? Math.round(totalAdopt/totalAns*100) : 0}%</div>
    </div>
    <div style="margin-top: 14px; padding: 12px; background: var(--bg-primary); font-size: 12px; color: var(--text-secondary); line-height: 1.8; font-family: 'JetBrains Mono', monospace;">
      <div>TOTAL QUESTIONS: <span style="color: var(--accent-primary);">${total}</span></div>
      <div>TOTAL ANSWERS: <span style="color: var(--accent-cyan);">${totalAns}</span></div>
      <div>ADOPTED ANSWERS: <span style="color: var(--success);">${totalAdopt}</span></div>
      <div>REJECTED QUESTIONS: <span style="color: var(--danger);">${rejected}</span></div>
    </div>
  `;
}

function changePassword() {
  const newPwd = document.getElementById('newPassword').value;
  const confirmPwd = document.getElementById('confirmPassword').value;
  if (!newPwd || newPwd.length < 4) { showNotification('密码至少4个字符', 'error'); return; }
  if (newPwd !== confirmPwd) { showNotification('两次密码不一致', 'error'); return; }
  setAdminPassword(newPwd);
  document.getElementById('newPassword').value = '';
  document.getElementById('confirmPassword').value = '';
  showNotification('密码已更新');
}

function exportData() {
  const db = getDB();
  const blob = new Blob([JSON.stringify(db, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'xianr_lab_backup_' + new Date().toISOString().slice(0,10) + '.json';
  a.click();
  URL.revokeObjectURL(url);
  showNotification('数据已导出');
}

function importData() { document.getElementById('importFile').click(); }

function handleImport(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      if (!data.questions || !Array.isArray(data.questions)) throw new Error('格式错误');
      if (!confirm('导入将覆盖当前数据，确定继续？')) return;
      saveDB(data);
      showNotification('数据已导入');
      renderQuestions();
      renderAdminQuestions();
    } catch (err) {
      showNotification('导入失败：' + err.message, 'error');
    }
  };
  reader.readAsText(file);
  event.target.value = '';
}

function clearAllData() {
  if (!confirm('⚠️ 确定要清空所有数据吗？此操作不可撤销！')) return;
  if (!confirm('再次确认：所有问题和回答将被永久删除！')) return;
  localStorage.removeItem(DB_KEY);
  renderQuestions();
  renderAdminQuestions();
  renderReviewQueue();
  updateAdminOverview();
  updatePendingBadge();
  showNotification('所有数据已清空');
}

// ==================== CLOCK ====================
function updateClock() {
  const now = new Date();
  document.getElementById('currentTime').textContent = now.toLocaleTimeString('zh-CN', { hour12: false });
}

// ==================== INIT ====================
function init() {
  document.getElementById('sessionId').textContent = getSessionId();
  updateClock();
  setInterval(updateClock, 1000);
  renderProgressGrid();
  renderQuestions();
  updatePendingBadge();
  
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.classList.remove('active');
    });
  });
}

init();
</script>
</body>
</html>
```
