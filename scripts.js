function showFrame(frameNumber) {
  const frames = document.querySelectorAll('iframe');
  const tabs = document.querySelectorAll('.tab');

  // Display the selected iframe and hide others
  frames.forEach((frame, index) => {
    frame.style.display = index === frameNumber - 1 ? 'block' : 'none';
  });

  // Update tab styles: only clicked tab gets the "active" class
  tabs.forEach((tab, index) => {
    if (index === frameNumber - 1) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });
}

function toggleChildButton() {
  const childBtn = document.getElementById('child-btn');
  const childBtnn = document.getElementById('child-btnn');
  childBtn.style.display = (childBtn.style.display === 'none' || childBtn.style.display === '') ? 'block' : 'none';
  childBtnn.style.display = (childBtnn.style.display === 'none' || childBtnn.style.display === '') ? 'block' : 'none';
}
