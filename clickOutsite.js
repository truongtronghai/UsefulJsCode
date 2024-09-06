const dialog = document.querySelector('.custom-dialog');
function handleClickOutside(event) {
  if (!dialog.contains(event.target)) {
    console.log('Clicked outside the component!');
    // Your custom logic here
  }
}
document.addEventListener('click', handleClickOutside);
  
