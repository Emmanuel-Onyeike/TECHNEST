<script>
let currentContent = 1;

function changeContent(number) {
  if (currentContent === number) return; // If the same number, no change.

  // Hide current content
  document.getElementById(`content${currentContent}`).classList.remove('active');
  document.getElementById(`content${currentContent}`).classList.add('inactive');

  // Show next content
  document.getElementById(`content${number}`).classList.remove('inactive');
  document.getElementById(`content${number}`).classList.add('active');

  // Update current content
  currentContent = number;
}
</script>