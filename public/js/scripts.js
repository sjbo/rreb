
$(document).ready(function(){$.getScript('//cdn.datatables.net/1.10.1/js/jquery.dataTables.min.js',function(){
  $.getScript('//cdn.datatables.net/plug-ins/725b2a2115b/integration/bootstrap/3/dataTables.bootstrap.js',function(){
     $('#example').dataTable();
  });
});
});