function onPageReady() {
  // Documentation: http://tristen.ca/tablesort/demo/
  new Tablesort(document.getElementById('gigs_table'));
}

// Run the above function when the page is loaded & ready
document.addEventListener('DOMContentLoaded', onPageReady, false);