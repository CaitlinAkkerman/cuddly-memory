function showTab(panelId, clickedBtn) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));

  document.getElementById(panelId).classList.add('active');
  clickedBtn.classList.add('active');
}