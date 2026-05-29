// Minimal entry — kept for compatibility.
// The previous loading-screen and chart logic has been removed
// in favor of a static, content-first layout.
(function () {
  var loading = document.querySelector('.loading');
  if (loading) loading.style.display = 'none';
  var content = document.querySelector('.content');
  if (content) content.style.display = 'block';
})();
