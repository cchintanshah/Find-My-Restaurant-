<?php
  for ($i = 0; $i <= 10; $i++)
  {
    // Update progress state
    file_put_contents("progress.txt", $i);
    
	// Carry out some work
	sleep(1);
  }
?>